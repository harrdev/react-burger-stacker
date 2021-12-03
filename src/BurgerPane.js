import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class BurgerPane extends Component {
    render() {
        let burgerBits = this.props.ingredients.map(mapIngredient => (
            <Ingredient ingredient={mapIngredient} clicky={this.props.remove}/>
        ))
        return (
            <section className="container">
                <h3>The Burger</h3>
                { burgerBits }
                <button onClick={this.props.clear}>Clear Burger</button>
            </section>
        )
    }
}