import React, { useState } from 'react';
import HomepageHeader from './Header';
import Fridge from '../App/Fridge';
// import '../../Style/door.css'

const Homepage = () => {
  const [isDoorOpen,setIsDoorOpen] = useState(false);

  const onClick = () => {
      setIsDoorOpen(!isDoorOpen);
  }

  return (
    <div className="homepage">
      <HomepageHeader />
      <Fridge />

      <div class="door" onClick={onClick}>

          <div class={`door-front ${isDoorOpen ? 'open' : null}`}></div>
          <div class="door-back"></div>
      </div>
    </div>
  );
}

export default Homepage;
