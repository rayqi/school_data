import React from 'react'
import Students from './Students'

const Home = function () {
    return (
        <div id="home container">
            <h1 id="home_title">MEMORIAL SLOAN</h1>
            <img id="home_image" src="https://images.adsttc.com/media/images/55e6/e47f/4d8d/5d0b/c000/111c/slideshow/urban-community.jpg?1441195130" />
            <Students />
        </div>
    )
}

export default Home;

