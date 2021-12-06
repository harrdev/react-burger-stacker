// import React, { Component } from 'react'
import React, { useState } from 'react'
import Ingredient from './Ingredient'

const IngredientList = props => {
        // Ingredient is a child of IngredientList
        let allIngredients = props.ingredients.map(mapIng => (
            <li onClick={props.add}>
                <Ingredient ingredient={mapIng} />
            </li>
        ))
        return (
            <div className="container">
                <h3>Ingredient List</h3>
                <ul className="ingredientList">
                    { allIngredients }
                </ul>
            </div>
        )
}

export default IngredientList