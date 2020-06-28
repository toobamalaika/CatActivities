import React from 'react'
import {Main} from './Main'
import {Nav} from './Nav'

export function Helloworld () {
    return(
        <div>
            <Nav />
            <Main drinkName={["Cold Milk ", "Chicken Soup ", "Water ", "Luke Milk ", "Cold Water" ]} playMaterial={["Ball ", "Rat toy " ,"Fiber Roll ", "Other Friend" ]} dishName={['Ocean ', 'Tuna ', 'Chicken ', 'Vegetables ' , 'Beef ']}/>
        </div>
    )
}