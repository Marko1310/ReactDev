import NumberOfQuestions from '../components/NumberOfQuestions';
import CategorySelection from '../components/CategorySelection';
import DifficultySelection from '../components/DifficultySelection';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CategoryTytpe, difficultyType } from '../App';

type HomeProps = {
  amount: number;
  currentCategory: CategoryTytpe;
  difficulty: difficultyType;
  changeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  changeDifficulty: (difficulty: difficultyType) => void;
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
  const [categorieList, setCategorieList] = useState<CategoryTytpe[]>();

  const fetchCategories = () => {
    axios
      .get('https://opentdb.com/api_category.php')
      .then((res) => setCategorieList(res.data.trivia_categories));
  };

  useEffect(fetchCategories, []);

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
