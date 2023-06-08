import {Content} from 'antd/es/layout/layout';
import React from 'react';
import CardItems from '../components/cards/CardItems';

const Home = () => {

    return (
        <>
            <Content style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", paddingTop:"30px"}}>
                <CardItems/>
            </Content>
        </>
    );
};

export default Home;