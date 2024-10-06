import { IRecipe } from "./IRecipe";
import Recipe from "./Recipe";

interface IRecipeListProps {
  recipes: IRecipe[];
  handleBackButton: () => void;
}

export default function RecipeList({
  recipes,
  handleBackButton,
}: IRecipeListProps) {
  return (
    <div>
      <button onClick={handleBackButton}>Back</button>
      {recipes.map((recipeData) => (
        <Recipe key={recipeData.id} recipeData={recipeData} />
      ))}
      {/* {console.log(recipes)} */}
    </div>
  );
}
