import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Main from './components/Main';
import GameOver from './components/GameOver/GameOver';
import { useState } from 'react';
import { fetchQuestions } from './service/apiService';
import { filterData } from './helpers/shuffleDecodeData';
import {
  QueryOptionsType,
  DifficultyType,
  QuestionsAndAnswersType,
  GameStateType,
} from './types/applicationTypes';

export default function App() {
  const initialQueryOptions: QueryOptionsType = {
    amount: 5,
    category: { id: '', name: '' },
    difficulty: '',
  };

  const [queryOptions, setQueryOptions] =
    useState<QueryOptionsType>(initialQueryOptions);
  const [gameState, setGameState] = useState<GameStateType>('start');
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<
    QuestionsAndAnswersType[]
  >([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(0);

  const fetchData = (queryOptions: QueryOptionsType) => {
    const { amount, category, difficulty } = queryOptions;
    fetchQuestions(amount, category.id, difficulty).then((questions) =>
      setQuestionsAndAnswers(filterData(questions)),
    );
  };

  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryOptions({
      ...queryOptions,
      category: { id: Number(e.target.value), name: e.target.value },
    });
  };

  const changeDifficulty = (difficulty: DifficultyType) => {
    setQueryOptions({ ...queryOptions, difficulty });
  };

  const changeAmount = (change: 'increase' | 'decrease') => {
    setQueryOptions((prevOptions) => ({
      ...prevOptions,
      amount:
        change === 'increase'
          ? Math.min(prevOptions.amount + 1, 50)
          : Math.max(prevOptions.amount - 1, 1),
    }));
  };

  const totalNumberOfQuestions = questionsAndAnswers.length;

  const handleNextQuestion = () => {
    if (currentQuestion + 1 === totalNumberOfQuestions) {
      setGameState('end');
      setCurrentQuestion(0);
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleStartGame = () => {
    fetchData(queryOptions);
    setGameState('playing');
  };

  const resetGame = () => {
    setGameState('start');
    setQuestionsAndAnswers([]);
    setQueryOptions(initialQueryOptions);
    setResult(0);
    setCurrentQuestion(0);
  };

  return (
    <Main>
      {gameState === 'start' && (
        <Home
          amount={queryOptions.amount}
          currentCategory={queryOptions.category}
          difficulty={queryOptions.difficulty}
          changeCategory={changeCategory}
          changeDifficulty={changeDifficulty}
          changeAmount={changeAmount}
          handleStartGame={handleStartGame}
        />
      )}
      {gameState === 'playing' && (
        <Quiz
          questionsAndAnswers={questionsAndAnswers}
          currentQuestion={currentQuestion}
          totalNumberOfQuestions={totalNumberOfQuestions}
          handleNextQuestion={handleNextQuestion}
          result={result}
          setResult={setResult}
        />
      )}
      {gameState === 'end' && (
        <GameOver result={result} resetGame={resetGame} />
      )}
    </Main>
  );
}
