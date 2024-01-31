import Navbar from "./components/Navbar"
import Menu from "./components/Menu"
import Reservations from "./components/Reservations"
import Events from "./components/Events"
import Services from "./components/Services"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Reservations />
      <Events />
      <Services />
      <Footer />
    </>
  )
}

export default App