import React from 'react';

import styled from 'styled-components';
import {Helmet} from 'react-helmet';

interface Props {
    title?: string;
}

const ScreenLayout: React.FC<Props> = ({title = '', children}) => {
    return (
        <ScreenLayoutStyled>
            <Helmet>
                <title>ADIAT HASAN {'| ' + title}</title>
            </Helmet>
            {children}
        </ScreenLayoutStyled>
    );
};

export default ScreenLayout;

const ScreenLayoutStyled = styled.div`
  min-height: 400px;
  min-width: 340px;
`;
