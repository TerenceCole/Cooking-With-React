import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ ingredients }) {
  const ingredientElements = ingredients.map((ingredient) => {
    return <Ingredient key={ingredient.id} {...ingredient} />;
  });
  console.log(ingredientElements, "ingredientElements");
  return <div>{ingredientElements}</div>;
}
