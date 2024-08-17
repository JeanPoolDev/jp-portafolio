export function Contactame () {
  return (
    <section className="flex flex-grow text-[#e0e0e0]]">
          <div className="flex flex-col w-1/2 items-center justify-center px-[4rem] my-[7rem]">
            <div className="mb-10 space-y-5">
              <h1 className="text-4xl text-center font-semibold">CONTACTOS</h1>
              <p className="text-justify font-semibold opacity-80 ">
              Si tienes alguna consulta, deseas colaborar o simplemente quieres saludar, no dudes en contactarnos a través de los siguientes medios. Estamos aquí para ayudarte.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <label className="text-white text-xl font-bold">Dirección</label>
              <span className="font-semibold opacity-80">Perú - Huancayo  </span>
              <label className="text-white text-xl font-bold">Celular</label>
              <span className="font-semibold opacity-80">+51 973902225</span>
              <label className="text-white text-xl font-bold">Gmail</label>
              <span className="font-semibold opacity-80">yugihopromasna@gmail.com</span>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-center px-4 my-[7rem] rounded-lg shadow-xl shadow-black">
            <div className="w-full mx-10">
              <h1 className="text-4xl pb-12 text-center font-semibold">CONTACTAME</h1>

              <form className="flex flex-col space-y-10">
                <input 
                className="bg-transparent border-b-2 border-[#e0e0e0] outline-none" 
                type="text" 
                placeholder="Nombre Completo"/>
                <input 
                className="bg-transparent border-b-2 border-[#e0e0e0] outline-none"  
                type="email" 
                placeholder="Email"/>
                <textarea 
                className="bg-transparent border-b-2 border-[#e0e0e0] outline-none" placeholder="Mensaje"/>

                <button 
                className="p-5 shadow-[0_4px_10px_0_rgba(0,0,0,0.5)] shadow-black rounded-lg hover:opacity-80">
                  Enviar Mensaje
                </button>

              </form>

            </div>
          </div>
        </section>
  )
}