import type { NextPage } from 'next'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Features from '@components/Features'
import CallToAction from '@components/CallToAction'
import TextImage from '@components/TextImage'
import Calendar from '@components/Calendar'
import Blog from '@components/Blog'
import Footer from '@components/Footer'
import Newsletter from '@components/Newsletter'

const Home: NextPage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Features />
      <CallToAction />
      <TextImage />
      <Calendar />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
