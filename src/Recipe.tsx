import { IRecipe } from "./IRecipe";

interface IRecipeProps {
  recipeData: IRecipe;
}
export default function Recipe({ recipeData }: IRecipeProps) {
  return (
    <div>
      <h3>{recipeData.name}</h3>
      <p>Ingredients</p>
      {recipeData.ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient}</li>
      ))}
      <p>Instructions</p>
      <ol>
        {recipeData.instructions.map((instruction, i) => (
          <li key={i}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}
