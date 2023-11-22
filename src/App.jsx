import './App.css'
import HireUs from './components/HireUs'
import OurClient from './components/OurClient'
import OurTeam from './components/OurTeam'
import OurWork from './components/OurWork'
import ServiceType from './components/ServiceType'
import Services from './components/Services'
import TopBanner from './components/TopBanner'

function App() {

  return (
    <div className='m-0'>
      <TopBanner></TopBanner>
      <Services></Services>
      <ServiceType></ServiceType>
      <OurWork></OurWork>
      <OurClient></OurClient>
      <OurTeam></OurTeam>
      <HireUs></HireUs>
    </div>
  )
}

export default App
