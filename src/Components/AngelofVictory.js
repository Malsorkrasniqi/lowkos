import React from 'react';
import './AngelofVictory.scss'
import statueImage from '../Images/AngelofVictory.png'


function AngelofVictory() {

    return (<>
        <div className="AngelofVictory-image">
            <img src={statueImage}></img>
            <div className="AngelofVictory-text">
                <h3 >From family law to personal injury, we treat your case with the care it deserves. Let's protect what matters most to you.
                </h3>
            </div>
        </div>

    </>);
}

export default AngelofVictory;