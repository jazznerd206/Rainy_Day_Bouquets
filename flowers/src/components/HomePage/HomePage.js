import React, { useEffect } from 'react';
import Flowers from '../../public/bouquet.png';
import { start } from '../../utils/rain.js'
import './styles.css';

function HomePage() {
    
    useEffect(() => {
        start()
    }, [])

    return (
        <div className="homePage" id="content">
            <div>
                <h1>Rainy Day Bouquets</h1>
                <h3>By Isabella</h3>
            </div>
            <div>
                <img src={Flowers} alt="flowers"></img>
                <div className="row">
                    <h3>More Coming Soon</h3>
                </div>
            </div>
        </div>
    )
}

export default HomePage;