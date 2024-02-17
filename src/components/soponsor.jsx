import React from 'react';
import '../components/styles/Sponsor.css'

const Sponsor= () => {
  return (
    <div className="container bg-black py-4">
      <ul className="grid grid-cols-auto-fill grid-rows-logo-gap">
        <li className="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" className="logo-img" alt="Coca Cola" />
        </li>
        <li className="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" className="logo-img" alt="Google" />
        </li>
        <li className="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" className="logo-img" alt="AirBnB" />
        </li>
        <li className="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" className="logo-img" alt="Spotify" />
        </li>
        <li className="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/de/f/f9/Guinness_Logo.svg" className="logo-img" alt="Guinness" />
        </li>
        <li className="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg" className="logo-img" alt="Audi" />
        </li>
        <li className="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" className="logo-img" alt="Nike" />
        </li>
        <li className="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" className="logo-img" alt="Netflix" />
        </li>
      </ul>
    </div>
  );
};

export default Sponsor;
