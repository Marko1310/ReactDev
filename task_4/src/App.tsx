import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Main from './components/Main';
import GameOver from './components/Home/GameOver';
import { useMemo, useState } from 'react';
import { fetchQuestions } from './service/apiService';
import { filterData } from './helpers/shuffleDecodeData';
import {
  QueryOptionsType,
  QuestionDataType,
  DifficultyType,
} from './types/applicationTypes';

export default function App() {
  const [queryOptions, setQueryOptions] = useState<QueryOptionsType>({
    amount: 5,
    category: {
      id: '',
      name: '',
    },
    difficulty: '',
  });

  const [startGame, setStartGame] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [questionData, setQuestionData] = useState<QuestionDataType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(0);

  const questionsAndAnswers = useMemo(
    () => filterData(questionData),
    [questionData],
  );

  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryOptions({
      ...queryOptions,
      category: { id: Number(e.target.value), name: e.target.value },
    });
  };

  const changeDifficulty = (difficulty: DifficultyType) => {
    setQueryOptions({ ...queryOptions, difficulty: difficulty });
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

  const fetchData = (queryOptions: QueryOptionsType) => {
    const { amount, category, difficulty } = queryOptions;
    fetchQuestions(amount, category.id, difficulty).then((questions) =>
      setQuestionData(questions),
    );
  };

  const totalNumberOfQuestions = questionsAndAnswers.length;

  const handleNextQuestion = () => {
    if (currentQuestion + 1 === totalNumberOfQuestions) {
      setStartGame(false);
      setEndGame(true);
      setCurrentQuestion(0);
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleStartGame = () => {
    try {
      fetchData(queryOptions);
      setStartGame(true);
    } catch (error) {
      console.error('error fetching', error);
    }
  };

  const resetGame = () => {
    setStartGame(false);
    setQuestionData([]);
    setEndGame(false);
    setQueryOptions({
      amount: 5,
      category: {
        id: '',
        name: '',
      },
      difficulty: '',
    });
    setResult(0);
    setCurrentQuestion(0);
  };

  return (
    <Main>
      {!startGame && !endGame && (
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
      {startGame && (
        <Quiz
          questionsAndAnswers={questionsAndAnswers}
          currentQuestion={currentQuestion}
          totalNumberOfQuestions={totalNumberOfQuestions}
          handleNextQuestion={handleNextQuestion}
          result={result}
          setResult={setResult}
        />
      )}
      {endGame && <GameOver result={result} resetGame={resetGame} />}
    </Main>
  );
}
