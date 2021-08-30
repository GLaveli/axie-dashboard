import React from 'react'
import Chart from '../../components/Chart'
import FeaturedInfo from '../../components/FeaturedInfo'
import { slpData } from '../../assets/JsonData/dummyData'
import { UserWidget } from '../../components/widgets/UserWidget'

const Home = () => {
 return (
  <div className="menuPages">
   <FeaturedInfo />
   <Chart data={slpData} title="SLP Analitycs" grid />
   <UserWidget />
  </div>
 )
}

export default Home
