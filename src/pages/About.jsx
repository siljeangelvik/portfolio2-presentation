import {Content} from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import React from 'react';

const About = () => {
    return (
        <>
            <Title level={1}>About Me ... </Title>
            <Content style={{display: "flex", flexDirection:"column", flexWrap: "wrap", justifyContent: "start", gap: "20px", paddingTop: "30px"}}>

                <Title level={3}>Contact Information:</Title>
                <span><strong>Name:</strong> Silje Avena Angelvik</span>
                <span><strong>Email:</strong> angelviksilje@gmail.com</span>
                <span><strong>Phone:</strong> +47 957 30 677</span>
                <span><strong>Address:</strong> Bergen, Norway</span>

                <Title level={3}>Objective:</Title>

                <Title level={3}>Education:</Title>

                <Title level={3}>Skills:</Title>
 </Content>
        </>
    );
};

export default About;
