import {Content} from 'antd/es/layout/layout';
import React from 'react';
import CardItems from '../components/cards/CardItems';

const Home = () => {

    return (
        <Content style={{padding: '0 50px'}}>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px"}}>
                <CardItems/>
            </div>
        </Content>
    );
};

export default Home;