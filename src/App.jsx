import './App.css'
import ServiceType from './components/ServiceType'
import Services from './components/Services'
import TopBanner from './components/TopBanner'

function App() {

  return (
    <div className='m-0'>
      <TopBanner></TopBanner>
      <Services></Services>
      <ServiceType></ServiceType>
    </div>
  )
}

export default App
