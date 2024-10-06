import RecipeTag from "./RecipeTag";

interface IRecipeTaglistProps {
  tagList: string[];
  onSelectTag: (tagName: string) => void;
}
export default function RecipeTagList({
  tagList,
  onSelectTag,
}: IRecipeTaglistProps) {
  //   console.log("tagList:", tagList);
  return (
    <div>
      <div>
        {tagList.map((tagName, i) => (
          <RecipeTag key={i} tagName={tagName} onSelectTag={onSelectTag} />
        ))}
      </div>
    </div>
  );
}
