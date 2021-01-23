import React, { useEffect } from 'react';
import Flowers from '../../public/Flowers.jpg';
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
                <img src='https://clipart-best.com/img/bouquet-of-flowers/bouquet-of-flowers-clip-art-44.png' alt="flowers"></img>
                <h3>Learn More</h3>
            </div>
        </div>
    )
}

export default HomePage;