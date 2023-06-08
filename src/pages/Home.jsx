import React from 'react';
import CardItems from '../components/cards/CardItems';

const Home = () => {

    return (
        <>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px"}}>
                <CardItems/>
            </div>
        </>
    );
};

export default Home;