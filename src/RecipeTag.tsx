interface IRecipeTagProps {
  tagName: string;
  onSelectTag: (tagName: string) => void;
}

export default function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps) {
  return (
    <div>
      <li onClick={() => onSelectTag(tagName)}>{tagName}</li>
    </div>
  );
}
