import { Header } from "./components/Header"
import Footer from "./components/Footer"
import { Contactame } from './components/Contactame'
import { Principal } from './components/Principal'


function App() {

  return (
    <>
      <main className="flex flex-col w-screen min-h-screen max-w-6xl m-auto justify-center">

        <Header />

        <Principal />

        <Footer />

      </main>

      <main className="flex flex-col w-screen min-h-screen max-w-6xl m-auto justify-center">

        <Contactame />

      </main>

    
    </>
  )
}

export default App
