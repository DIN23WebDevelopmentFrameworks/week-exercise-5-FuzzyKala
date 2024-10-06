import { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import RecipeTagList from "./RecipeTagList";
import { IRecipe } from "./IRecipe";
const App = () => {
  const [tagList, setTagList] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((res) => res.json())
      .then((tagsArr: string[]) => {
        setTagList(tagsArr);
      });
  }, []);

  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data.recipes);
        });
    }
  }, [selectedTag]);

  const onSelectTag = (tag: string) => {
    setSelectedTag(tag);
    console.log(tag);
  };
  const handleBackButton = () => {
    setSelectedTag("");
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag ? (
        <h3>Recipes for {selectedTag}</h3>
      ) : (
        <h3>Choose a tag below</h3>
      )}
      {selectedTag ? (
        <RecipeList recipes={recipes} handleBackButton={handleBackButton} />
      ) : (
        <RecipeTagList tagList={tagList} onSelectTag={onSelectTag} />
      )}
    </div>
  );
};

export default App;
