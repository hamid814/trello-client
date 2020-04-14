import React from 'react';
import HomeSideList from './HomeSideList';
import HomeMain from './HomeMain';


const Home = () => {
  return (
    <div className='container grid-1-3 gap-half mt-3'>
      <HomeSideList />
      <HomeMain />
    </div>
  )
}

export default Home
