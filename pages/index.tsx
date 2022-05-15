import type { NextPage } from 'next'
import Layout from './../components/Layout'
import HomePage from '../components/HomeSection/HomePage'
import Features from './../components/FeaturesSection/Features'
import Pricing from './../components/PriceSection/Pricing'

const style ={
  centered: ` flex min-h-screen flex-col items-center justify-center py-2 `

}
const Home: NextPage = () => {
  return (

    <Layout>
      <HomePage />
      <Features />
      <Pricing />
      
    </Layout>
  
  )
}

export default Home