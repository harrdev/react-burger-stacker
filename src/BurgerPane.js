// import React, { Component } from 'react'
import React, { useState } from 'react'
import Ingredient from './Ingredient'

const BurgerPane = props => {
        let burgerBits = props.ingredients.map(mapIngredient => (
            <Ingredient ingredient={mapIngredient} clicky={props.remove}/>
        ))
        return (
            <section className="container">
                <h3>The Burger</h3>
                { burgerBits }
                <button onClick={props.clear}>Clear Burger</button>
            </section>
        )
}

export default BurgerPane