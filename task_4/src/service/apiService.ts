import axios from 'axios';
import { DifficultyType } from '../types/applicationTypes';

const API_BASE_URL = 'https://opentdb.com';

export const fetchQuestions = async (
  amount: number,
  category: number | string,
  difficulty: DifficultyType,
) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api.php`, {
      params: {
        amount,
        category,
        difficulty,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching questions', error);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api_category.php`);
    return response.data.trivia_categories;
  } catch (error) {
    console.error('Error fetching categories', error);
  }
};
