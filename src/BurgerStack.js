import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const BurgerStacker = props => {

    const [ingredients, setIngredients] = useState([
        { name: 'Kaiser Bun', color: 'saddlebrown' },
        { name: 'Sesame Bun', color: 'sandybrown' },
        { name: 'Gluten Free Bun', color: 'peru' },
        { name: 'Lettuce Wrap', color: 'olivedrab' },
        { name: 'Beef Patty', color: '#3F250B' },
        { name: 'Soy Patty', color: '#3F250B' },
        { name: 'Black Bean Patty', color: '#3F250B' },
        { name: 'Chicken Patty', color: 'burlywood' },
        { name: 'Lettuce', color: 'lawngreen' },
        { name: 'Tomato', color: 'tomato' },
        { name: 'Black Bean Patty', color: '#3F250B' },
        { name: 'Onion', color: 'lightyellow' }
    ])
    const [burgerIngredients, setBurgerIngredients] = useState([])

    const addToStack = (e) => {
        console.log("This is what was clicked: ", e.target)
        let ingColor = e.target.style.backgroundColor
        let ingName = e.target.innerText
        setBurgerIngredients(() => {
            return [{ name: ingName, color: ingColor },
            ...burgerIngredients]
        })
    }

    const clearBurger = () => {
        setBurgerIngredients(() => {
            return []
        })
    }
    return (
        <div class="container">
            <h1>Burger Stacker</h1>
            <div>
                <p>child component goes here</p>
                <IngredientList ingredients={ingredients}
                    add={addToStack} />
                <BurgerPane ingredients={burgerIngredients}
                    clear={clearBurger} />
            </div>
        </div>
    )
}

export default BurgerStacker