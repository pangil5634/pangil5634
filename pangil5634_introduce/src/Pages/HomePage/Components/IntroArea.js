import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';

function IntroArea() {
    const [showHello, setShowHello] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHello(true);
        }, 5000); // Typewriter 애니메이션이 완료된 후 5초 후에 Hello 컴포넌트를 표시합니다.
        
        return () => clearTimeout(timer);
    }, []); // 컴포넌트가 마운트될 때만 실행됩니다.

    return (
        <ContainerIntroArea>
            <Title>
                <Typewriter
                    options={{
                        strings: 'Why is a day only 24 hours?',
                        autoStart: true,
                    }}
                />
            </Title>
            {showHello && (
                <Hello>
                    <Typewriter
                        options={{
                            strings: 'Hello and Welcome!',
                            autoStart: true,
                        }}
                    />
                </Hello>
            )}
        </ContainerIntroArea>
    );
}

const ContainerIntroArea = styled.div`
    width: 100%;
`;

const initTitle = styled.div`
    font-size: ${({ theme }) => theme.fonts.intro.fontSize};
    font-weight: ${({ theme }) => theme.fonts.intro.fontWeight};
    line-height: ${({ theme }) => theme.fonts.intro.lineHeight};
`;

const Title = styled(initTitle)``;

const Hello = styled(initTitle)`
    color : orange;
    font-weight: bold;
`;

export default IntroArea;
