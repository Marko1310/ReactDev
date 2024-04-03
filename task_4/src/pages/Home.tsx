import NumberOfQuestions from '../components/Home/NumberOfQuestions';
import CategorySelection from '../components/Home/CategorySelection';
import DifficultySelection from '../components/Home/DifficultySelection';
import { useEffect, useState } from 'react';
import { CategoryType, DifficultyType } from '../types/applicationTypes';
import { fetchCategories } from '../service/apiService';

type HomeProps = {
  amount: number;
  currentCategory: CategoryType;
  difficulty: DifficultyType;
  changeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  changeDifficulty: (difficulty: DifficultyType) => void;
  changeAmount: (change: 'increase' | 'decrease') => void;
  handleStartGame: () => void;
};

export default function Home({
  amount,
  currentCategory,
  difficulty,
  changeCategory,
  changeDifficulty,
  changeAmount,
  handleStartGame,
}: HomeProps) {
  const [categorieList, setCategorieList] = useState<CategoryType[]>();

  const fetchData = () => {
    fetchCategories().then((categories) => setCategorieList(categories));
  };

  useEffect(fetchData, []);

  return (
    <div className="flex flex-col items-center">
      <p className="mb-3 text-center text-2xl font-bold text-blue-500 lg:text-3xl">
        Welcome to JUNIOR_DEV Trivia!
      </p>
      <p className="mb-6 text-sm lg:text-base">
        To start the game, please select your options below:
      </p>
      <div className="flex w-96 flex-col gap-8 lg:w-[400px]">
        <NumberOfQuestions amount={amount} changeAmount={changeAmount} />
        <CategorySelection
          categorieList={categorieList}
          currentCategory={currentCategory}
          changeCategory={changeCategory}
        />
        <DifficultySelection
          currentDifficulty={difficulty}
          changeDifficulty={changeDifficulty}
        />
        <button
          onClick={handleStartGame}
          className="mt-6 rounded-md bg-blue-400 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-500"
        >
          Start Quiz!
        </button>
      </div>
    </div>
  );
}
