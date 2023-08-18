import React from "react";
import Card from "../component/Card";
import Carousel from "../component/Carousel";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel/></div>
      <div style={{    padding: '18px',display: 'flex',margin: '52px' ,}}>
      <div className="" style={{margin:'20px'}} >
        <Card></Card>
      </div>
      <div style={{margin:'20px'}}>
        <Card></Card>
      </div>
      <div className="" style={{margin:'20px'}} >
        <Card></Card>
      </div>
      <div style={{margin:'20px'}}>
        <Card></Card>
      </div>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default Home;
