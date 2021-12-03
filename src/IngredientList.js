import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        // Ingredient is a child of IngredientList
        let allIngredients = this.props.ingredients.map(mapIng => (
            <li onClick={this.props.add}>
                <Ingredient ingredient={mapIng} />
            </li>
        ))
        return (
            <section className="container">
                <h3>Ingredient List</h3>
                <ul className="ingredientList">
                    { allIngredients }
                </ul>
            </section>
        )
    }
}