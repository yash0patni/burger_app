import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const Burger = (props) => {
  let trasnformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  //console.log(typeof trasnformedIngredients)
  //console.log(trasnformedIngredients)

  if (trasnformedIngredients.length === 0) {
    trasnformedIngredients = <p>Please start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {trasnformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default Burger
