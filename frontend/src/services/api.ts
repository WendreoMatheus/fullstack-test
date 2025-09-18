import axios from 'axios';
import { Todo } from '../types/todo';

// Pre-configured Axios instance pointing to backend
const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// TODO: Implement the todoAPI service methods
// Each method should make HTTP requests using the 'api' instance above
// Return the response data, not the full axios response object

export const todoAPI = {
  // TODO: GET /todos - Fetch all todos from backend
  // Hint: Use api.get('/todos') and return response.data
  getAllTodos: async (): Promise<Todo[]> => {
    // TODO: Implement this method
    // Should return array of todos from backend
    throw new Error('Not implemented');
  },

  // TODO: POST /todos - Create a new todo
  // Hint: Use api.post('/todos', { text }) and return response.data
  createTodo: async (text: string): Promise<Todo> => {
    // TODO: Implement this method
    // Should send { text } in request body
    // Should return the created todo object
    throw new Error('Not implemented');
  },

  // TODO: PUT /todos/:id - Toggle todo completion status
  // Hint: Use api.put(`/todos/${id}`) and return response.data
  updateTodo: async (id: string): Promise<Todo> => {
    // TODO: Implement this method
    // Should make PUT request to toggle completion
    // Should return the updated todo object
    throw new Error('Not implemented');
  },

  // TODO: DELETE /todos/:id - Delete a todo
  // Hint: Use api.delete(`/todos/${id}`) and return response.data
  deleteTodo: async (id: string): Promise<Todo> => {
    // TODO: Implement this method
    // Should delete todo by id
    // Should return the deleted todo object
    throw new Error('Not implemented');
  }
};

export default todoAPI;