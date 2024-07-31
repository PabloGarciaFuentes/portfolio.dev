// BurgerMenu.jsx
import React, { useState } from 'react';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={toggleMenu} className="xl:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {isOpen && (
        <nav className="flex flex-col gap-y-4 opacity-80">
          <a href="#top">Inicio</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos" className="disabled">Proyectos</a>
          <a href="#sobre-mi" className="disabled">Sobre mí</a>
          <a href="mailto:pablogarciafuentes0@gmail.com">Contacto</a>
        </nav>
      )}
    </>
  );
}