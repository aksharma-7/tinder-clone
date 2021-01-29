import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
        },
        {
            name: 'Jeff Bezos',
            url: 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg'
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log(`removing ${nameToDelete}`)
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(`${name} left the screen`)
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up','down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ background: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
