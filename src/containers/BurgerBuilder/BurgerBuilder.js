import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1.0,
  bacon: 1.5,
  meat: 2.0,
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  }

  updatePurchaseState = (ingredients) => {
    //console.log(Object.values(ingredients))
    const sum = Object.values(ingredients).reduce((sum, el) => {
      return sum + el
    }, 0)
    //console.log(sum)
    this.setState({ purchasable: sum > 0 })
    //console.log(this.state.purchasable)
  }

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1
    const updatedIngredients = {
      ...this.state.ingredients,
    }
    updatedIngredients[type] = updatedCount

    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
    this.updatePurchaseState(updatedIngredients)
  }

  removeIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] - 1
    if (updatedCount >= 0) {
      const updatedIngredients = {
        ...this.state.ingredients,
      }
      updatedIngredients[type] = updatedCount

      const priceDeduction = INGREDIENT_PRICES[type]
      const oldPrice = this.state.totalPrice
      const newPrice = oldPrice - priceDeduction

      this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
      this.updatePurchaseState(updatedIngredients)
    }
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    alert('Order Received')
    this.setState({ purchasing: false })
  }

  render() {
    let disabledInfo = {
      ...this.state.ingredients,
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
      //console.log(disabledInfo[key])
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCanceled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
          price={this.state.totalPrice}
        />
      </>
    )
  }
}

export default BurgerBuilder
