import { CategoryType } from '../../types/applicationTypes';

type CategorySelectionProps = {
  categorieList?: CategoryType[];
  currentCategory: CategoryType;
  changeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function CategorySelection({
  categorieList,
  changeCategory,
}: CategorySelectionProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-center font-semibold underline">
        Category:
      </label>
      <select
        name="category"
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
