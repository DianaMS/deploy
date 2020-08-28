import React from 'react';
import '../assets/styles/App.scss';
import '../assets/styles/components/Home.scss';

const Home = () => (
  <>
    <section className='home-content'>
      <section className='container-home'>
        <div className='texts'>
          <h1 className='title'> Diana Martinez</h1>
          <h2 className='subtitle'>FrontEnd Developer</h2>
        </div>
        <div className='sesgo-down' />
      </section>
      <section className='background'>
        <img src='https://user-images.githubusercontent.com/60928490/91259120-79bd0300-e733-11ea-987b-7c82cd4af37b.png' alt='' />
      </section>
      <section className='container-description'>
        <section className='aboutme'>
          <div className='content'>
            <h2 className='hello'>Hola Soy Diana!</h2>
            <h3 className='slogan'>"Las personas vibran diferente cuando hacen lo que aman"</h3>
            <p className='works'>
              FrontEnd Developer Junior, me apasionan las aplicaciones digitales y disfruto creando interfaces gráficas. Tengo un background
              en Ingeniería Electrónica y Automatización de procesos, una carrera que ayudó a desafiar mi mente, de hecho no me he limitado
              a seguir aprendiendo y explorar otros campos relacionados a la tecnología, comencé como desarrolladora trabajando en proyectos
              del lado del cliente y servidor, potenciando cada aprendizaje para próximos desafíos que se presenten y obtener nuevas habilidades
              y conocimientos. Aspiro a seguir aportando y apostando por la transformación digital.
            </p>
            <p className='my-nick'>¡ Hacerlo con pasión o nada !</p>
          </div>
        </section>
        <section className='gallery' />
      </section>

    </section>

  </>

);

export default Home;
