# Todo App Coding Challenge

## Challenge Rules (STRICTLY ENFORCED)

### ❌ Prohibited Tools
- **No ChatGPT, Claude, or any AI assistants**
- **No GitHub Copilot or AI code completion**
- **No AI-powered extensions** (Tabnine, CodeWhisperer, etc.)
- **No copying code from AI-generated sources**

### ✅ Allowed Tools
- **Basic IDE autocompletion** (built-in language features only)
- **Standard documentation** (MDN, W3Schools, official framework docs)
- **Manual coding only** - type everything yourself

## Time Limit

⏰ **EXACTLY 1 HOUR** - Start timer when you begin coding. Stop at 60 minutes regardless of completion status.

## Project Structure

```
todo-app/
├── backend/
│   ├── src/
│   │   ├── server.ts       - Express server setup
│   │   ├── routes/
│   │   │   └── todos.ts    - TODO route handlers (implement these!)
│   │   └── types/
│   │       └── todo.ts     - TypeScript interfaces
│   ├── package.json        - Backend dependencies
│   └── tsconfig.json       - TypeScript configuration
├── frontend/
│   ├── public/
│   │   └── index.html      - HTML template with Bulma CSS
│   ├── src/
│   │   ├── App.tsx         - React components with TODO comments to implement
│   │   ├── services/
│   │   │   └── api.ts      - Axios service with TODO methods to implement
│   │   └── types/
│   │       └── todo.ts     - TypeScript interfaces
│   ├── package.json        - Frontend dependencies
│   └── tsconfig.json       - TypeScript configuration
└── README.md               - This file
```

**Frontend**: Implement React functionality in `frontend/src/App.tsx` and API service in `frontend/src/services/api.ts`.
**Backend**: Implement the TODO route handlers in `backend/src/routes/todos.ts`.

## Required Features (Must Complete ALL)

### Core Functionality
1. **Add Todo** - User can type in input field and add new todos (POST to backend)
2. **Toggle Complete** - Click checkbox to mark todos as complete/incomplete (PUT to backend)
3. **Delete Todo** - Click delete button to remove todos (DELETE to backend)
4. **Fetch Todos** - Load todos from backend on app startup (GET from backend)
5. **Error Handling** - Display loading states and error messages

### Technical Requirements
- **Must use React** for frontend development
- **Must implement custom hooks** (e.g., `useTodos`)
- **Must use Axios** for HTTP requests to backend (pre-configured service provided)
- **Backend integration required** - connect to REST API
- Must use the provided React component structure
- Must implement all TODO comments in `src/App.tsx` and `src/services/api.ts`
- All features must work without console errors
- Context API is optional but recommended for state management

## Evaluation Criteria

### Required Functionality
- Fetch todos from backend
- Add todo with backend integration
- Toggle complete/incomplete with backend
- Delete todo with backend
- Error handling and loading states

### Code Quality Expectations
- Clean, readable React code
- Proper state management (Context API optional)
- Custom hooks implementation
- No console errors

### User Experience
- Intuitive interface
- Visual feedback for completed todos

### Optional Enhancements
- Optimistic UI updates
- Request debouncing
- Retry failed requests
- Loading spinners/skeletons
- Toast notifications for success/error

## Submission Requirements

- All functionality working within 1 hour
- Code runs without errors
- Open `frontend/index.html` in browser to demonstrate
- No AI assistance used (honor system)

## Backend Implementation Required

### Data Storage
**IMPORTANT**: Store todos in a simple **in-memory array** at the top of your route file:
```typescript
const todos: Todo[] = [];
```
- This array will hold all todos during server runtime
- Use this array for all CRUD operations
- No database required - just manipulate this array

### API Endpoints to Implement

Your backend should provide these REST endpoints in `backend/src/routes/todos.ts`:

```
GET    /api/todos           - Return all todos from the array
POST   /api/todos           - Add new todo to the array
PUT    /api/todos/:id       - Find todo in array and toggle completed status
DELETE /api/todos/:id       - Remove todo from array
```

**Todo object structure:**
```json
{
  "id": "uuid",
  "text": "string",
  "completed": boolean,
  "createdAt": "ISO date string"
}
```

## Getting Started

### Backend Setup
1. **Navigate to backend** - `cd backend/`
2. **Install dependencies** - `npm install`
3. **Start development server** - `npm run dev` (or `npm run dev:watch` for auto-restart)
4. **Verify server** - Should see "Server running on http://localhost:3001"
5. **Implement route handlers** - Complete TODOs in `src/routes/todos.ts`

**Note:** Use `npm run dev:watch` to automatically restart the server when you make changes to the code.

### Frontend Setup
1. **Navigate to frontend folder** - `cd frontend/`
2. **Install dependencies** - `npm install` (Axios already included)
3. **Start development server** - `npm start` (runs on http://localhost:3000)
4. **Start your timer** ⏰
5. **Implement the TODO comments in order:**
   - Complete API service methods in `src/services/api.ts`
   - Implement useTodos custom hook in `src/App.tsx`
   - Implement state management and CRUD functions (Context API optional)
   - Connect components to use hooks for functionality
6. **Test frequently** - App runs at http://localhost:3000
7. **Stop at 60 minutes** regardless of completion

**Good luck! Focus on working functionality over perfect code.**

## Testing the Backend API

A Postman collection is provided (`Todo_API_Collection.postman_collection.json`) for easy API testing:

1. **Import the collection** - Open Postman and import the collection file
2. **Start the backend server** - Make sure your backend is running on `http://localhost:3001`
3. **Test the endpoints** in this order:
   - **Health Check** - Verify the server is running
   - **Get All Todos** - Should return an empty array initially
   - **Create New Todo** - Add a todo item
   - **Create Another Todo** - Add another todo item
   - **Get All Todos** - Should now return your created todos
   - **Toggle Todo Completion** - Copy an ID from previous response and update the `todoId` variable
   - **Delete Todo** - Copy an ID and update the `todoId` variable

**Note:** For PUT and DELETE requests, you'll need to replace `:todoId` with actual UUIDs from the created todos.