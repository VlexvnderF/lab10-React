import React from 'react'
import Card from "./Card"
import nyork from "../assets/nyork.jpg"
import nighthawks from "../assets/nighthawks.jpg"
import sunset from "../assets/sunset.jpg"

const cards = [
    {
        id: 1,
        title: 'Estudios',
        image: nyork
    },
    {
        id: 2,
        title: 'Habilidades',
        image: nighthawks
    },
    {
        id: 3,
        title: 'Experiencia',
        image: sunset
    },
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            { cards.map(card =>(
                <div className='col-md-4' key={card.id}>
                    <Card title={card.title} imageSource={card.image}/>
                </div>
            )
                )}
            
        </div>
        
    </div>
  )
}

export default Cards