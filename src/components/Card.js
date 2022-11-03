import React from 'react'
import './cards.css'


function Card({title, imageSource}) {
  return (
    <div className="card text-center bg-dark">
        <div className='overflow'>
        <img src={imageSource} alt='' className='card-img-top'></img>
        </div>
        
        <div className='card-body text-light'>
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-secondary'>Tempor do irure magna occaecat exercitation exercitation. Ipsum labore ullamco ea qui culpa nisi tempor id esse ipsum eiusmod officia. Sit occaecat exercitation ullamco et occaecat exercitation cupidatat id nostrud consequat nisi.</p>
            <a href='#!' className='btn btn-outline-secondary rounded-0' >Ir a esta página web</a>
        </div>
    </div>
  )
}


export default Card 