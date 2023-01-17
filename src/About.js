import React, { useEffect } from 'react';

const About = (props) => {
    useEffect(() => props.setActiveRouteButton("About"))
    return (
        <div className="aboutScreen">
            <div>This is a site dedicated to the great boardgame <a href ="https://stonemaiergames.com/games/wingspan/">Wingspan</a> by Stonemayer Games. It's a bit of a learning exercise, so bear with me.</div>
            <div>Card info was parsed from <a href="https://boardgamegeek.com/filepage/193164/wingspan-spreadsheet-bird-cards-bonus-cards-end-ro">TawnyFrogmouth's</a> spreadsheet, thanks for that.</div>
            <div>The source code is found under <a href="https://github.com/TaroEld/wingspan_card_site">https://github.com/TaroEld/wingspan_card_site</a>.</div>
            <div>Upcoming:
                <ul>
                    <li>Bird Image upload</li>
                    <li>Download card as image</li>
                    <li>Missing attributes (Expansion indicator) </li>
                </ul>
            </div>
        </div>
    );
};

export default About;