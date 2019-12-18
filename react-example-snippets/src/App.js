import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar/nav-bar';
import CompOne from './components/comp-one/comp-one';
import CompTwo from './components/comp-two/comp-two';
import CompThree from './components/comp-three/comp-three';
import Button from './components/button/button';
import ImageDisplay from './components/image-display/image-display';
import MapComp from './components/map-comp/map-comp';
import FilterComp from './components/filter-comp/filter-comp';

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <CompOne></CompOne>
      <CompTwo></CompTwo>
      <CompThree></CompThree> */}
      {/* <CompOne></CompOne>
      <ImageDisplay imageUrl={"https://placedog.net/500"}></ImageDisplay> */}
      <MapComp></MapComp>
      <FilterComp></FilterComp>
    </>
  );
}

export default App;
