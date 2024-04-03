import { CategoryTytpe } from '../App';

type CategorySelectionProps = {
  categorieList?: CategoryTytpe[];
  currentCategory: CategoryTytpe;
  changeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function CategorySelection({
  categorieList,
  currentCategory,
  changeCategory,
}: CategorySelectionProps) {
  // console.log(categorieList);
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-center font-semibold underline">
        Category:
      </label>
      <select
        name="category"
        value={currentCategory.name}
        onChange={changeCategory}
        className="bg-foreground font-montserrat h-12 rounded-md border pl-2 text-base font-light transition-all focus-within:border hover:border-neutral-400 focus:border-neutral-600 focus:outline-none"
      >
        <option value="">Random</option>
        {categorieList?.map((el) => {
          return (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
