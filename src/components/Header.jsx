import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <>
    <header className='header-content'>
      <Link to='/' className='option'>
        SOBRE MÍ
      </Link>

      <Link to='/projects' className='option'>
        PROYECTOS
      </Link>

      <Link to='/skills' className='option'>
        HABILIDADES
      </Link>

      <Link to='/contact' className='option'>
        CONTACTO
      </Link>
    </header>
  </>
);

export default Header;
