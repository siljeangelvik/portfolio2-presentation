import React from 'react';
import Holidaze from '../components/cards/Holidaze';
import AuctionHouse from '../components/cards/AuctionHouse';
import OnlineShop from '../components/cards/OnlineShop';

const Home = () => {

    return (
        <>
            <div style={{display: "flex", flexWrap:"wrap", justifyContent: "center", gap:"20px"}}>
                <OnlineShop />
                <AuctionHouse />
                <Holidaze />
            </div>
        </>
    );
};

export default Home;
