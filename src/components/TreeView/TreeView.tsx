import React, { HTMLAttributes } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { RiArrowRightSFill } from 'react-icons/ri';
import styled from 'styled-components';

import { _ } from '../../utils/_';
import { EUrl } from '../../static/url';
import { childData, viewData } from './data';
import { EThemes } from '../../Theme/theme';
import { getUrlParam } from '../../utils/misc';
import Selection from '../Selection/Selection';

interface Props {
	data: typeof viewData;
	onToggle?: (index: number, checked: boolean) => void;
}

const TreeView: React.FC<Props> = (props) => {
	const navigate = useNavigate();
	const location = useLocation();

	const { data, onToggle } = props;

	/**
	 * convert it to hook
	 */
	const attributes = getUrlParam(location, EUrl.Attributes)?.split(',');

	const urlPusher = (name: string) => {
		if (!attributes) {
			navigate(location.pathname + `?${EUrl.Attributes}=${name}`);
			return;
		}

		let ref = [...attributes];

		if (attributes.includes(name)) {
			ref = ref.filter((attr) => attr !== name);
		} else {
			ref.push(name);
		}

		if (_.isArrayEmpty(ref)) {
			navigate(location.pathname);
			return;
		}

		navigate(location.pathname + `?${EUrl.Attributes}=${ref.join(',')}`);
	};

	return (
		<div>
			{data.map((child, i) => {
				const { children, name, show } = child;
				const selected = !!attributes?.includes(name);

				return (
					<div key={name + i}>
						{_.isArrayEmpty(children) ? (
							<ChildComponent
								style={{ marginLeft: 0 }}
								key={child.name + i}
								selected={selected}
								urlPusher={urlPusher}
								child={child as any}
							/>
						) : (
							<ParentNode
								tabIndex={show ? -1 : 0}
								active={show}
								onClick={() => onToggle?.(i, !child.show)}>
								<ArrowIndicator active={show} />
								<span>{name}</span>
							</ParentNode>
						)}

						{show &&
							children.map((child, i) => {
								const selected = !!attributes?.includes(child.name);
								return (
									<ChildComponent
										key={child.name + i}
										selected={selected}
										urlPusher={urlPusher}
										child={child}
									/>
								);
							})}
					</div>
				);
			})}
		</div>
	);
};

export default TreeView;

interface ChildProps {
	child: typeof childData;
	selected: boolean;
	urlPusher: (name: string) => void;
}

const ChildComponent: React.FC<ChildProps & HTMLAttributes<any>> = (props) => {
	const { selected, urlPusher, child, ...rest } = props;

	return (
		<ChildNode {...rest} onClick={() => urlPusher(child.name)} index={0}>
			<Selection
				selected={!!selected}
				label={
					<Label>
						<p> {child.name}</p>
						<p>{child.value}</p>
					</Label>
				}
			/>
		</ChildNode>
	);
};

const ParentNode = styled.a<{ active: boolean }>`
	&::selection {
		color: transparent;
	}
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-weight: bold;
	letter-spacing: 0.1rem;
	font-size: large;
	margin: 0.45rem 0;
	cursor: pointer;
	padding: 0.5rem;
	border-radius: 6px;
	transition: 0.3s ease all;
	background-color: ${({ theme }) => theme[EThemes.BG_PRIMARY]};

	border: 1px solid ${({ active }) => (active ? 'limegreen' : 'transparent')};

	&:hover {
		filter: brightness(120%);
	}
`;

const ArrowIndicator = styled(RiArrowRightSFill)<{ active: boolean }>`
	margin-right: 0.25rem;
	transition: 0.3s ease all;
	transform: rotate(${({ active }) => (active ? '90deg' : '0deg')});
`;

const Label = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;

	p {
		&:last-child {
			background-color: ${({ theme }) => theme[EThemes.BG_SECONDARY]};
			border-radius: 4px;
			padding: 0.1rem;
			text-align: center;
		}
	}
`;

const ChildNode = styled.div<{ index: number }>`
	margin: 0.25rem 0;
	cursor: pointer;
	padding: 0.25rem 0.5rem;
	border-radius: 4px;
	margin-left: 1rem;
	filter: brightness(100%);
	background-color: ${({ theme }) => theme[EThemes.BG_PRIMARY]};
	animation: mount 0.3s ease-out forwards;

	&:hover {
		filter: brightness(120%);
	}

	@keyframes mount {
		0% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}
`;
