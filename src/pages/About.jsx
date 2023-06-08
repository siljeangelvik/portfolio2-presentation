import {Content} from 'antd/es/layout/layout';
import React from 'react';

const About = () => {
    return (
        <>
            <h1>About Me ... </h1>
            <Content
                style={{display: "flex", flexWrap: "wrap", justifyContent: "start", gap: "20px", paddingTop: "30px"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, placeat.
            </Content>
        </>
    );
};

export default About;
