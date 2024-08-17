
export const Header = () => {
  return (
    <header className="fixed top-0 w-[1180px] flex items-center justify-between pt-10 pb-2">
      <div className="text-4xl text-center font-bold opacity-80">
        JP <p>OL</p>
      </div>
      <div className="flex items-center justify-center list-none gap-12 text-md">
        <li className="hover:scale-110" ><a href="#">Projectos</a></li>
        <li className="hover:scale-110" ><a href="#">Contactame</a></li>
      </div>
    </header>
  )
}
