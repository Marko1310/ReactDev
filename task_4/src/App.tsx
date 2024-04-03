import axios from 'axios';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import { useState } from 'react';
import Main from './components/Main';
import he from 'he';
import GameOver from './components/GameOver';

export const Difficulty = {
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
  Random: '',
} as const;

export type QuestionDataType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type difficultyType = (typeof Difficulty)[keyof typeof Difficulty];

export type CategoryTytpe = {
  id?: number;
  name?: string;
};

type QueryOptionsType = {
  amount: number;
  category: CategoryTytpe;
  difficulty: difficultyType;
};

export default function App() {
  const [queryOptions, setQueryOptions] = useState<QueryOptionsType>({
    amount: 5,
    category: {},
    difficulty: '',
  });

  const [startGame, setStartGame] = useState(false);

  const [questionData, setQuestionData] = useState<QuestionDataType[]>([]);

  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryOptions({
      ...queryOptions,
      category: { id: Number(e.target.value), name: e.target.value },
    });
  };

  const changeDifficulty = (difficulty: difficultyType) => {
    setQueryOptions({ ...queryOptions, difficulty: difficulty });
  };

  const changeAmount = (change: 'increase' | 'decrease') => {
    if (change === 'increase') {
      if (queryOptions.amount === 50) return;
      setQueryOptions((prevOptions) => ({
        ...prevOptions,
        amount: prevOptions.amount++,
      }));
    } else {
      if (queryOptions.amount === 0) return;
      setQueryOptions((prevOptions) => ({
        ...prevOptions,
        amount: prevOptions.amount--,
      }));
    }
  };

  const fetchData = (queryOptions: QueryOptionsType) => {
    const { amount, category, difficulty } = queryOptions;
    axios
      .get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category.id ? category.id : ''}&difficulty=${difficulty}`,
      )
      .then((res) => setQuestionData(res.data.results));
  };

  const handleStartGame = () => {
    try {
      fetchData(queryOptions);
      setStartGame(true);
    } catch (error) {
      console.log('error fetching');
    }
  };

  //////////////
  function shuffle(array: { answer: string; isCorrect: boolean }[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffleAnswers = (
    correctAnswer: string,
    incorrectAnswers: string[],
  ): { answer: string; isCorrect: boolean }[] => {
    if (!incorrectAnswers || !correctAnswer) return [];

    const allAnswers = [
      ...incorrectAnswers.map((answer) => ({
        answer: he.decode(answer),
        isCorrect: false,
      })),
      { answer: he.decode(correctAnswer), isCorrect: true },
    ];

    const shuffledArray = shuffle(allAnswers);

    return shuffledArray;
  };

  const fixedData = questionData.map((data) => {
    return {
      question: he.decode(data.question),
      shuffledAnswers: shuffleAnswers(
        data.correct_answer,
        data.incorrect_answers,
      ),
    };
  });
  ///////////////\

  const [gameEnd, setGameEnd] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    if (currentQuestion + 1 === questionData.length) {
      setStartGame(false);
      setGameEnd(true);
      setCurrentQuestion(0);
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  const [result, setResult] = useState(0);

  const resetGame = () => {
    setStartGame(false);
    setQuestionData([]);
    setGameEnd(false);
  };

  return (
    <Main>
      {!startGame && !gameEnd && (
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
          questionData={fixedData}
          currentQuestion={currentQuestion}
          handleNext={handleNext}
          result={result}
          setResult={setResult}
        />
      )}
      {gameEnd && <GameOver result={result} resetGame={resetGame} />}
    </Main>
  );
}
