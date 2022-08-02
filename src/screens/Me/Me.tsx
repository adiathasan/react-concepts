import * as React from 'react'
import styled from "styled-components";
import {BiLinkExternal} from "react-icons/bi";
import {IoLogoStackoverflow} from "react-icons/io5";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

import ScreenLayout from "../../components/Layout/ScreenLayout";
import {EThemes} from "../../Theme/theme";

const Me = () => {
    return (
        <ScreenLayout title='Frontend Engineer'>
            <Main>
                <Sides colSpan='span 8'>
                    <Each>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Title>
                                About Me
                            </Title>
                            <ChipContainer style={{gap: 20}}>
                                <a rel="noreferrer"
                                   target='_blank'
                                   href="https://stackoverflow.com/users/13089572/adiat-hasan">
                                    <IoLogoStackoverflow color='orange' size={26}/>
                                </a>
                                <a rel="noreferrer"
                                   target='_blank'
                                   href="https://www.linkedin.com/in/adiat-hasan-1924681b0">
                                    <AiFillLinkedin size={26}/>
                                </a>
                                <a rel="noreferrer"
                                   target='_blank'
                                   href="https://github.com/adiathasan">
                                    <AiFillGithub color='white' size={26}/>
                                </a>
                            </ChipContainer>
                        </div>
                        <Text>
                            Hi, I'v started my journey as a frontend engineer on 2020 and currently working remotely at <a rel="noreferrer"
                                                                                                                           target='_blank'
                                                                                                                           href="https://xen.works">xen.works</a>.

                            <br/>
                            <br/>
                            Most of the time I work with Typescript, React & architecting the UI layer. Firstly, I was more into building
                            UIs. But over the time I got interested in writing clean, reusable and scalable code that can easily be scaled
                            in the future. Supporting use-cases is more fun to me while writing reusable code. Recently, I got interested in
                            open source projects and contributed to a few.
                            <br/>
                            <br/>
                            I'm currently living with my wife, mother and my younger sister. Work life balance is the most significant way
                            to keep me productive. Hence, I do so. Besides coding, I love to swim and play basketball, football.
                        </Text>
                    </Each>
                    <Each>
                        <Title>
                            Work Experience
                        </Title>

                        <Subtitle>
                            Software Engineer | Part Time - <a target='_blank' rel="noreferrer" href="https://bluetechbd.com">Blue
                            Tech</a> (October 2021 -
                            present)
                        </Subtitle>
                        <Text>
                            Blue Tech is a software company providing solutions to the clients and has its own product called <a
                            target='_blank' rel="noreferrer" href="https://bdtickets.com">BD tickets</a> which is an online ticket platform.
                            Previously there Bd tickets app was in plain react. Which was lagging in performance, SEO and UX as well. I was
                            assigned to lead & architect the frontend of new BD tickets app which we rewrote in Next.js.
                            <br/>
                        </Text>
                        <ChipContainer>
                            <Chip>Typescript</Chip>
                            <Chip>React</Chip>
                            <Chip>Next</Chip>
                            <Chip>SSR</Chip>
                            <Chip>SSG</Chip>
                            <Chip>React-query</Chip>
                        </ChipContainer>

                        <Subtitle>
                            Frontend Engineer | Full Time - <a target='_blank' rel="noreferrer" href="https://xen.works">Xen
                            Works</a> (August 2021 -
                            present)
                        </Subtitle>
                        <Text>
                            Xen works is a startup providing software solutions to the clients and will be soon launching it's own
                            e-commerce product in Bangladesh and later globally. We are a small team of developers and it surely has a great
                            environment for learning various technologies and leadership.
                            <br/>
                        </Text>
                        <ChipContainer>
                            <Chip>Typescript</Chip>
                            <Chip>React</Chip>
                            <Chip>Redux</Chip>
                            <Chip>Redux-logics</Chip>
                            <Chip>React-query</Chip>
                        </ChipContainer>

                        <Subtitle>
                            Frontend Engineer | Full Time - <a target='_blank' rel="noreferrer" href="https://now.com.bd">Now</a> (January
                            2021
                            -
                            July - 2021)
                        </Subtitle>
                        <Text>
                            Now in a logistics based company which mainly focused on delivery. I was appointed for building the entire UI of
                            the Now client app. Having involvement in this project and completing it within the deadline was a challenging
                            task to
                            do. With the help of our Tech Lead we were able to deliver the product on time.
                            <br/>
                        </Text>
                        <ChipContainer>
                            <Chip>Typescript</Chip>
                            <Chip>React</Chip>
                            <Chip>Next</Chip>
                            <Chip>SSG</Chip>
                            <Chip>React-query</Chip>
                            <Chip>Graphql</Chip>
                            <Chip>Parse Server</Chip>
                        </ChipContainer>


                    </Each>
                    <Each>
                        <Title>
                            Open Source Contributions
                        </Title>
                        <Title>
                            <a target='_blank' rel="noreferrer" href="https://github.com/adiathasan/react-store-maker">React Store
                                Maker <ExternalIcon/></a>
                        </Title>
                        <Text>
                            It is a utility function for creating stores for global / local state management with the Context API approach
                            in React.js applications. This simplifies contexts and reduces boiler plate code and has some built in
                            optimization.
                            <br/>
                            <br/>
                            While architecting BD tickets app I didn't want to use redux or other heavy state management library. I was
                            using Contexts for small things and react-query for data fetching. Then I felt the necessity of writing a
                            function that would just give the context instead of writing a lot of boiler plate code.
                        </Text>
                        <br/>
                        <br/>
                        <Title>
                            <a target='_blank' rel="noreferrer" href="https://github.com/adiathasan/react-step-machine">React Step
                                Machine <ExternalIcon/></a>
                        </Title>
                        <Text>
                            A hook-based multistep wizard library made for React.js apps with vast control over the logic of the user as per
                            use-case. It's API is much simpler than other step wizards out there.
                            <br/>
                            <br/>
                            The inspiration came form <a target='_blank' rel="noreferrer"
                                                         href="https://github.com/jcmcneal/react-step-wizard">react-step-wizard</a>. It
                            didn't support my use-cases that I needed for my project. Hence, I built my own step wizard with recent react
                            concepts. It has
                            more simpler API and is performant with no hacks.
                        </Text>

                        <br/>
                        <br/>
                        <Title>
                            <a target='_blank' rel="noreferrer" href="https://adiathasan.vercel.app">React Concepts <ExternalIcon/></a>
                        </Title>
                        <Text>
                            Advanced concepts of react such as hooks, contexts, reusable components, custom hooks, prop getters, theme with
                            styled-components, animations and more.
                            <br/>
                            <br/>
                            When I learn a new concept in react I tend to practice it and share my work so that other developers can grasp
                            the concepts and remain upto date with the industry standard.
                        </Text>

                    </Each>
                </Sides>
                <Sides colSpan='span 4'>
                    <Each>
                        <Subtitle>
                            General Information's
                        </Subtitle>
                        <Text>
                            Dhaka, Bangladesh
                        </Text>
                        <Text style={{margin: '16px 0'}}>
                            <a href="mailto:adiathasan.me@gmail.com">adiathasan.me@gmail.com</a>
                        </Text>
                        <Text>
                            <a href="tel:+8801729143339">+8801729143339</a>
                        </Text>
                    </Each>
                    <Each>
                        <Subtitle>
                            Skills
                        </Subtitle>
                        <ChipContainer>
                            <Chip>Javascript</Chip>
                            <Chip>Typescript</Chip>
                            <Chip>Css</Chip>
                            <Chip>Node</Chip>
                            <Chip>Express</Chip>
                            <Chip>Parse Server</Chip>
                            <Chip>React</Chip>
                            <Chip>Next</Chip>
                            <Chip>Svelte</Chip>
                            <Chip>Solid.js</Chip>
                            <Chip>React-query</Chip>
                            <Chip>Redux</Chip>
                            <Chip>Graphql</Chip>
                        </ChipContainer>
                    </Each>
                    <Each>
                        <Subtitle>
                            Education
                        </Subtitle>
                        BSc in Computer Science & Engineering
                        <br/>
                        <br/>
                        University of The People (2020 - present)
                    </Each>
                    <Each>
                        <Subtitle>
                            Certificates
                        </Subtitle>
                        <br/>
                        <Subtitle>
                            Epic React by kent C. Dodds (01/2022 - Present) <a target='_blank' rel="noreferrer"
                                                                               href="https://epicreact.dev"><ExternalIcon
                            style={{transform: 'translateY(3px)'}}/></a>
                        </Subtitle>
                        <br/>
                        <Subtitle>
                            HTML, CSS, and Javascriptfor Web
                            Developers(coursera) (08/2020 - 08/2020) <a target='_blank' rel="noreferrer"
                                                                        href="https://epicreact.dev"><ExternalIcon
                            style={{transform: 'translateY(3px)'}}/></a>
                        </Subtitle>
                        <br/>
                        <Subtitle>
                            Machine-learning(coursera) (05/2020 - 06/2020) <a target='_blank' rel="noreferrer" href="https://epicreact.dev"><ExternalIcon
                            style={{transform: 'translateY(3px)'}}/></a>
                        </Subtitle>

                    </Each>
                    <Each hide/>
                    <Each hide/>
                    <Each hide/>
                    <Each hide/>
                    <Each hide/>
                    <Each hide/>
                    <Each hide/>
                    <Each hide/>
                </Sides>
            </Main>
        </ScreenLayout>
    )
}

export default Me

export const Main = styled.main`
  width: 1400px;
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1.4rem;
  min-height: 90vh;
  margin-top: 20px;
  margin-bottom: 60px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const Each = styled.section<{ colSpan?: string; rowSpan?: string; hide?: boolean }>`
  background-color: ${({theme}) => theme[EThemes.BG_SECONDARY]};
  color: ${({theme}) => theme[EThemes.TEXT_PRIMARY]};
  padding: 1rem 1.5rem;
  grid-column: ${({colSpan}) => colSpan};
  grid-row: ${({rowSpan}) => rowSpan};
  opacity: ${({hide}) => hide ? 0 : 1};

  @media (max-width: 780px) {
    grid-column: span 12;
  }
`;

export const Sides = styled.section<{ colSpan?: string; rowSpan?: string; }>`
  grid-column: ${({colSpan}) => colSpan};
  grid-row: ${({rowSpan}) => rowSpan};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.4rem;

  @media (max-width: 780px) {
    grid-column: span 12;
    grid-gap: 1rem;

  }

`;

export const Title = styled.h2`
  font-weight: bold;
  margin-bottom: 20px;
  
  @media (max-width: 780px) {
    font-size: 1.2rem;

  }
`;

export const ExternalIcon = styled(BiLinkExternal)`
  transform: translateY(5px);
`;

export const Chip = styled.span`
  border-radius: 4px;
  padding: .3rem .5rem;
  background-color: ${({theme}) => theme[EThemes.BG_PRIMARY]};
  font-size: smaller;
`;

export const ChipContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

export const Subtitle = styled.h4`
  font-weight: 600;
  margin-bottom: 14px;
  letter-spacing: .03rem;
  line-height: 25px;
  
  @media (max-width: 780px) {
    font-size: .9rem;
  }

`;


export const Text = styled.p`
  font-weight: 380;
  line-height: 25px;
  letter-spacing: .03rem;
  margin-bottom: .2rem;

  @media (max-width: 780px) {
    font-size: .9rem;
  }
`;