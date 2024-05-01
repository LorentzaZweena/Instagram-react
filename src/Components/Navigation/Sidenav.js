import React from 'react';
import "./Sidenav.css";
import home from '../images/home.png';

function Sidenav() {
  return (
    <div className='sidenav'>
        <img className='sidenav_logo' src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png'/>
        <div className='sidenav_button'>
            <div className='side_button'>
                {/* icons */}
                <span>Home</span>
            </div>
        </div>
    </div>
  )
}

export default Sidenav