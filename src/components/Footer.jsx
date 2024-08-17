import { IconGithub, IconTwitter, IconLinkedin } from './icons'

export default function Footer() {
  return (
    <footer className='fixed bottom-0 flex item-center justify-between w-[1180px] py-6'>

      <article className="flex gap-5 flex-col ">
        <a href="#" className='hover:scale-150 opacity-70 hover:opacity-100'>
          <IconGithub />
        </a>
        <a href="#" className='hover:scale-125 opacity-80'>
          <IconLinkedin />
        </a>
        <a href="#" className='hover:scale-125 opacity-80'>
          <IconTwitter />
        </a>
      </article>

      <article className="flex items-end justify-center rotate-[270deg]">
        <div className="inline-flex items-center space-x-2">
          <span className="block w-[2rem] h-[1px] bg-white"></span> 
          <a href="#" className="whitespace-nowrap hover:scale-110">Inicio</a>
        </div>
      </article>

    </footer>
  )
}
