import {Content} from 'antd/es/layout/layout';
import Title from 'antd/es/typography/Title';
import React from 'react';
import CardItems from '../components/CardItems';

const Home = ({isDarkMode}) => {

    return (
        <>
            <Title level={1}>Collection</Title>
            <Content
                style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", paddingTop: "30px"}}>
                <CardItems isDarkMode={isDarkMode}/>
            </Content>
        </>
    );
};

export default Home;