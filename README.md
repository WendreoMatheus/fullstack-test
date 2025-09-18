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
- **Must use React with Context API** for state management
- **Must implement custom hooks** (e.g., `useTodos`)
- **Must use Axios** for HTTP requests to backend (pre-configured service provided)
- **Backend integration required** - connect to REST API
- Must use the provided React component structure
- Must implement all TODO comments in `src/App.tsx` and `src/services/api.ts`
- All features must work without console errors

## Evaluation Scoring (100 points total)

### Functionality (60 points)
- Fetch todos from backend: 12 points
- Add todo with backend: 12 points
- Toggle complete/incomplete with backend: 12 points
- Delete todo with backend: 12 points
- Error handling and loading states: 12 points

### Code Quality (25 points)
- Clean, readable React code: 8 points
- Proper use of Context API: 6 points
- Custom hooks implementation: 6 points
- No console errors: 5 points

### User Experience (15 points)
- Intuitive interface: 10 points
- Visual feedback for completed todos: 5 points

### Bonus Points (up to 10 points)
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
3. **Start development server** - `npm run dev`
4. **Verify server** - Should see "Server running on http://localhost:3001"
5. **Implement route handlers** - Complete TODOs in `src/routes/todos.ts`

### Frontend Setup
1. **Navigate to frontend folder** - `cd frontend/`
2. **Install dependencies** - `npm install` (Axios already included)
3. **Start development server** - `npm start` (runs on http://localhost:3000)
4. **Start your timer** ⏰
5. **Implement the TODO comments in order:**
   - Complete API service methods in `src/services/api.ts`
   - Uncomment and implement TodoContext interface in `src/App.tsx`
   - Implement useTodos custom hook in `src/App.tsx`
   - Implement TodoProvider state management and CRUD functions
   - Connect components to use context hooks for functionality
6. **Test frequently** - App runs at http://localhost:3000
7. **Stop at 60 minutes** regardless of completion

**Good luck! Focus on working functionality over perfect code.**