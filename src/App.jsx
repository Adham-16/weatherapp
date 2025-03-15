
import './App.css'
import { Home } from './Components/Home/Home'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'
import { Search } from './Components/Search/Search'
import { useState } from 'react'
function App() {

  const [city, setCity] = useState("Cairo");
  return (
    <>
      {/* <!----------------------Start Navbar---------------------> */}
      <Header></Header>
      {/* --------------------End Navbar------------------- */}
      {/* --------------------Start Search------------------- */}
      <Search setCity={setCity}></Search>
      {/* --------------------End Search------------------- */}
      {/* --------------------Start Temperature-display-------------------  */}
      <Home city={city}></Home>
      {/* <section className="Temperature">
        <div className="container">
          <div className="sup-temp">
            <div className="Temperature-container bor-left" id="Box1" />
            <div className="Temperature-container text-center" id="Box2" />
            <div className="Temperature-container text-center bor-right" id="Box3" />
          </div>
        </div>
      </section> */}
      {/* *--------------------End Temperature-display-------------------* */}
      {/* * --------------------Start Footer------------------- * */}
      <Footer></Footer>
      {/* <!----------------------End Footer---------------------> */}
    </>
  )
}

export default App
