// Ingreditn is a child of IngredientList
// gets the props of individual ingredient, color, and name

// import React, { Component } from 'react'
import React, { useState } from 'react'

const Ingredient = props => {
    
        return (
            <p style={{backgroundColor: props.ingredient.color}} onClick={props.clicky}>
                { props.ingredient.name }
            </p>
        )
}

export default Ingredient