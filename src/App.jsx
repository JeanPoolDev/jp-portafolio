import { Header } from "./components/Header"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <main className="flex flex-col w-screen min-h-screen max-w-6xl m-auto justify-center">

      <Header />
      

      <article className="flex flex-col items-center justify-center flex-grow">
        <span className="-translate-x-[9rem]">Yo soy</span>
        <h1 className="text-9xl text-[#e0e0e0] font-bold">JPOL</h1>
        <span className="translate-x-[9rem]">un desarrollador web</span>
      </article>

      <Footer />
    </main>

    
    </>
  )
}

export default App
