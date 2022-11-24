import { useState } from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

import brand from '../assets/brands/1578496245414 1.png'



function Header() {
  const [hamburger, setHamburger] = useState(false)

  // handler
  const _toggleHamburger = () => setHamburger(!hamburger)
  

  return (
    <>
      <header className='fixed w-full bg-white'>
        <div className='relative flex justify-between items-center md:mx-20 py-2'>
          <div>
            <div><img className='' src={brand} alt="Organization_Brand" /></div>
          </div>
          
          <nav className={'md:basis-4/5 lg:basis-3/5  sm:block' + (hamburger && ' hidden')}>
            <ul className='md:static absolute top-14 right-9 flex flex-col border-2 px-3 py-2 rounded-lg md:rounded-0 md:p-0 md:border-0  md:flex-row  items-center text-fc_dark gap-3 md:gap-0 justify-between bg-fc_sct md:bg-transparent'>
              <li className='text-fc_txt1 hover:text-fc_sc1'><Link to='/'>Home</Link></li>
              <li className='hover:text-fc_sc1'><Link to='fem_reach/about-us'>About Us</Link></li>
              <li className='hover:text-fc_sc1'><Link to='fem_academy'>FemAcademy</Link></li>
              <li className='hover:text-fc_sc1'><Link to='fem_reach'>FemReach</Link></li>
              <li className='hover:text-fc_sc1'><Link to='fem_reach/faq'>FAQs</Link></li>
              <li className='bg-fc_sc1 px-5 py-2 rounded-full rounded-br-none '><Link to='fem_academy/contact-us'>Contact Us</Link></li>
              {location.pathname == '/fem-academy/' 
              ? <li className='bg-fc_cardbg px-5 border-2 border-fc_sc1 py-2 rounded-full rounded-br-none '><Link to='fem_academy/enroll'>Enroll</Link></li>
              : null }              
            </ul>
          </nav>
          <GiHamburgerMenu className='basis-1/6 sm:hidden mr-5 text-3xl active:border-2' onClick={_toggleHamburger} />

        </div>
      </header>
    </>
  )
}

export default Header