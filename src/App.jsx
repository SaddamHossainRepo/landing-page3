import './App.css'
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
    </div>
  )
}

export default App
