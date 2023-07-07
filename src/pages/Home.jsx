import React, { useState } from 'react';
import Carditem from '../component/carditem/Carditem';

export default function Home({ onData }) {
    const handleData = (data) => {
        onData(data);
    };

    return (
        <div>
            <Carditem onData={handleData} />

        </div>
    );
}