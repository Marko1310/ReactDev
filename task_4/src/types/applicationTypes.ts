export const Difficulty = {
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
  Random: '',
} as const;
export type DifficultyType = (typeof Difficulty)[keyof typeof Difficulty];

export const GameState = {
  Start: 'start',
  Playing: 'playing',
  End: 'end',
} as const;
export type GameStateType = (typeof GameState)[keyof typeof GameState];

export type QuestionDataType = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type CategoryType = {
  id: number | string;
  name: string;
};

export type QueryOptionsType = {
  amount: number;
  category: CategoryType;
  difficulty: DifficultyType;
};

export type QuestionsAndAnswersType = {
  question: string;
  shuffledAnswers: {
    answer: string;
    isCorrect: boolean;
  }[];
};
