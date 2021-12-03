import React, { Component } from 'react'
// Build and import BurgerPane
// Build and import IngredientList
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'
export default class BurgerStack extends Component {
    state = {
        ingredients: [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Onion', color: 'lightyellow'}],

        burgerIngredients: []
    }

    addToStack = (e) => {
        console.log("This is what was clicked: ", e.target)
        let ingColor = e.target.style.backgroundColor
        let ingName = e.target.innerText
        this.setState({
            // spread operator makes it so it adds to array, not replaces
            burgerIngredients: [{name: ingName, color: ingColor},
            ...this.state.burgerIngredients]
        })
    }

    // removeFromStack = (e) => {
    //     console.log("Old stack: ", this.state.burgerIngredients)
    //     let newBurrIngArr = this.state.burgerIngredients.filter(ingrs => {
    //         ingrs.name != e.target.innerText
    //     })
    // }
    clearBurger = () => {
        this.setState({ 
            burgerIngredients: []
        })
    }
    render() {
        return (
            <main>
                <h1>Burger Stacker</h1>
                <div>
                    <p>child component goes here</p>
                    <IngredientList ingredients={this.state.ingredients}
                    add={this.addToStack} />
                    <BurgerPane ingredients={this.state.burgerIngredients} 
                    removeFromStack={this.removeFromStack}
                    clear={this.clearBurger} />
                </div>
            </main>
        )
    }
}