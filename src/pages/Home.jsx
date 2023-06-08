import {Content} from 'antd/es/layout/layout';
import React from 'react';
import CardItems from '../components/cards/CardItems';

const Home = ({isDarkMode}) => {

    return (
        <>
            <h1>Collection</h1>
            <Content
                style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", paddingTop: "30px"}}>
                <CardItems isDarkMode={isDarkMode}/>
            </Content>
        </>
    );
};

export default Home;