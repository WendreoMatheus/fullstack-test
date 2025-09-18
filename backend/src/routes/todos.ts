import { Router, Request, Response } from 'express';
import { Todo, CreateTodoRequest } from '../types';

const router = Router();

// TODO: Implement in-memory storage for todos
// Hint: Create an array to store todos: Todo[]

// TODO: GET /api/todos - Get all todos
// Implementation hints:
// - Return all todos from storage
// - Should return JSON array of todos
router.get('/', (req: Request, res: Response) => {
  // TODO: Implement this endpoint
  // Return all todos from your storage
});

// TODO: POST /api/todos - Create a new todo
// Implementation hints:
// - Validate that 'text' is provided in request body
// - Generate unique ID (use uuid)
// - Set completed to false
// - Set createdAt to current ISO string
// - Add to storage and return the created todo
router.post('/', (req: Request<{}, {}, CreateTodoRequest>, res: Response) => {
  // TODO: Implement this endpoint
  // 1. Extract text from req.body
  // 2. Validate text is not empty
  // 3. Create new todo with id, text, completed: false, createdAt
  // 4. Add to storage
  // 5. Return created todo with status 201
});

// TODO: PUT /api/todos/:id - Toggle todo completion
// Implementation hints:
// - Find todo by ID from URL params
// - Return 404 if not found
// - Toggle the 'completed' status
// - Return updated todo
router.put('/:id', (req: Request, res: Response) => {
  // TODO: Implement this endpoint
  // 1. Get id from req.params.id
  // 2. Find todo in storage
  // 3. Return 404 if not found
  // 4. Toggle completed status
  // 5. Return updated todo
});

// TODO: DELETE /api/todos/:id - Delete a todo
// Implementation hints:
// - Find todo by ID from URL params
// - Return 404 if not found
// - Remove from storage
// - Return the deleted todo
router.delete('/:id', (req: Request, res: Response) => {
  // TODO: Implement this endpoint
  // 1. Get id from req.params.id
  // 2. Find todo index in storage
  // 3. Return 404 if not found
  // 4. Remove from storage (use splice)
  // 5. Return deleted todo
});

export default router;