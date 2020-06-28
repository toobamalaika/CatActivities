import React from 'react'

export function Main (props) {
    return(
        <main>
            <h1>First App Using Multiple Component , Props And States</h1>
            <p>
            Catiee wants to eat {props.dishName[0]} food , play with {props.playMaterial[0]} and take some {props.drinkName[1]}
            </p>
            <p>
            Smokey wants to take {props.drinkName[0]} , wants to eat {props.dishName[2]} food and play with {props.playMaterial[3]}
            </p>
            <p>
            Snow Bella wants to play with {props.playMaterial[2]} , wants to eat {props.dishName[3]} food and wants to take {props.drinkName[3]}
            </p>
            <p>
            Flurry wants to eat {props.dishName[1]} food wants to play with {props.playMaterial[1]} and wants to take {props.drinkName[2]}
            </p>
        </main>
    )
}