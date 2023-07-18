import React from 'react';
import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured.js';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties.js';
 import MailList from '../../components/mailList/MailList'
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className='Navbar'>
      <Navbar/>
      <Header/>
      <div className='HomeContainer'>
        <Featured/>
        <h1 className='hometitle'>Browse by property type</h1>
        <PropertyList/>
        <h1 className='hometitle'>Home guest love</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
      </div>
      </div>
  )
}

export default Home