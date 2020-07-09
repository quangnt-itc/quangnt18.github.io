import React from 'react';
import logo from './logo.svg';
import './App.css';

// import Baitap1 from './baitap1';
import Baitap2 from './Baitap2';
import Baitap1_Review from './Baitap1_Review';
// import Baitap2_Review from './Baitap2_Review';

import RenderingElements from './rendering-elements';
import HandlingEvents from './HandlingEvents';
import ExampleHandlingEvent from './HandlingEvents/example';
import State from './state';
import ListKeys from './list-key';
import BaitapCar from './Baitap-car';
import BaitapList from './Baitap_list';

// App() - gọi là một compenent - chia nhỏ ra từng thành phần

function App() {
  return (
    <div className="App">
      {/* <Baitap1/> */}
      {/* <Baitap2/> */}
      {/* <Baitap2_Review/> */}
      {/* <Baitap1_Review/> */}

      <RenderingElements/>
      <hr/>
      <HandlingEvents/>
      <hr/>
      <ExampleHandlingEvent/>
      <hr/>
      <State/>
      <hr/>
      <ListKeys/>
      <hr/>
      <BaitapCar/>
      <hr/>
      <BaitapList/>

    </div>
  );
}

export default App;
