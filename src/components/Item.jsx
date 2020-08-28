import React from 'react';
import '../assets/styles/components/Item.scss';

const Item = ({ img, title, description, buttonleft, buttonright, code, deploy }) => (
  <>
    <div className='containerItem'>
      <section className='image-content'>
        <img src={img} alt='' />
      </section>
      <section className='description-content'>
        <div className='general-description'>
          <p className='title'>{title}</p>
          <p className='description'>{description}</p>
        </div>
        <div className='routes'>
          <a href={code} target='_blank' rel='noreferrer'><button type='button' className='button-left'>{buttonleft}</button></a>
          <a href={deploy} target='_blank' rel='noreferrer'><button type='button' className='button-right'>{buttonright}</button></a>
        </div>
      </section>
    </div>
  </>
);

export default Item;
