import React, { useEffect, useState } from 'react'
import { FaCode, FaWindowClose } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import {NAV_LINKS, PERSONAL_INFO} from '../../utilis/constant'
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav 
    className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-lg' : 'bg-transparent'}`} 
  style={{ transform: 'translate3d(0, 0, 0) '}}
    >

      <div className='max-w-330 mx-auto px-5'>
        
        <div className='flex items-center justify-between'>
          {/* Logo  */}

          <div className='flex items-center gap-4'>
            <FaCode className='w-6 h-6 text-primary'/>

            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className='text-2xl font-bold bg-linear-to-r from from-primary via-primary/50 to-primary/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity' aria-label='home'>

              {PERSONAL_INFO.name.split(' ')[1]}

            </button>

          </div>

          {/* Desktop Navigation */}

          <div className='hidden md:flex items-center gap-7'>
            {NAV_LINKS.map((link) => (
              <button key={link.id} onClick={() => handleNavClick(link.id)} className={`text-base font-bold transition-all duration-300 ${activeSection === link.id ? 'text-white' : 'text-white/70 hover:text-primary'}`}>
                {link.label}
              </button>
            ))}
          </div>


           {/* CTA BUTT0N */}

           <div className='hidden md:flex items-center gap-2'>

            <button onClick={() => handleNavClick('contact')} className='px-7 py-3.5 bg-white rounded-[17px] text-black font-bold text-base border border-white hover:bg-primary hover:border-none transition-all duration-300'>
              Hire Me
            </button>

           </div>


             {/* MOBILE BUTT0N RESPONSIVENESS */}

             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='' aria-label='menu' aria-expanded={isMenuOpen}>

              {isMenuOpen ? <MdOutlineClose  className='w-6 h-6 border-none'/> : <GiHamburgerMenu className='w-4 h-6'/>}

             </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div className={`md:hidden transition-all duration-300 overflow-hidden  ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='bg-black/95 backdrop-blur-lg border-t border-primary/90 px-5 py-6 space-y-3 mt-4'>
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)} className={`block w-full text-left px-4 py-3 rounded-lg  font-bold
             ${activeSection === link.id ? 'text-white bg-white/10 ' : 'text-white/70 hover:text-white hover:bg-white/'}`}>

              {link.label}
              
            </button>
          ))}

          <button onClick={() => handleNavClick('contact')} className='w-full bg-amber-700 text-black font-medium rounded-2xl px-7 py-3.5 '>
            Hire Me
          </button>

        </div>
      </div>

    </nav>
  )
}

export default Navbar
