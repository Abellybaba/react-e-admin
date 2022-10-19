import React from 'react';
import FeaturedInfo from '../../components/FeaturedInfo';
import UserChart from '../../components/userchart/UserChart';
import { Widgets } from '../../components/widget/Widgets';


import './home.css';


const Home = () => {
   
  return (
    <div className="">
        <FeaturedInfo />
        <UserChart />
        <Widgets />
        
        </div>
  )
}

export default Home