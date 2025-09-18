import React, { useState, createContext, ReactNode } from 'react';
import { Todo } from './types/todo';

// TODO: Import todoAPI from './services/api' when implementing

// TODO: Define TodoContext interface
// interface TodoContextType {
//   todos: Todo[];
//   addTodo: (text: string) => Promise<void>;
//   toggleTodo: (id: string) => Promise<void>;
//   deleteTodo: (id: string) => Promise<void>;
//   loading: boolean;
//   error: string | null;
// }

// TODO: Create TodoContext
const TodoContext = createContext(undefined);

// TODO: Implement useTodos custom hook
// const useTodos = () => {
//   // TODO: Implement hook logic to get context and validate it exists
//   // const context = useContext(TodoContext);
//   // if (!context) {
//     // throw new Error('useTodos must be used within a TodoProvider');
//   // }
//   // return context;
// };

// TodoProvider component
interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  // TODO: Implement state management
  // - todos state
  // - loading state
  // - error state

  // TODO: Implement CRUD functions
  // - addTodo function
  // - toggleTodo function
  // - deleteTodo function

  // TODO: Implement useEffect to fetch todos on mount

  // TODO: Create context value object and provide it
  return (
    <TodoContext.Provider value={undefined}>
      {children}
    </TodoContext.Provider>
  );
};

// TodoInput component
const TodoInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  // TODO: Get addTodo from useTodos hook

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    // - Validate input is not empty
    // - Call addTodo with the input value
    // - Clear input after adding
    console.log('Adding todo:', inputValue);
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new todo..."
            />
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">
              <span className="icon">
                <i className="fas fa-plus"></i>
              </span>
              <span>Add</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// TodoItem component
interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  // TODO: Get toggleTodo and deleteTodo from useTodos hook

  return (
    <div className={`box todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  // TODO: Implement toggle logic
                  console.log('Toggling todo:', todo.id);
                }}
              />
              <span className="todo-text">{todo.text}</span>
            </label>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button
              className="button is-small is-danger delete-btn"
              onClick={() => {
                // TODO: Implement delete logic
                console.log('Deleting todo:', todo.id);
              }}
            >
              <span className="icon">
                <i className="fas fa-trash"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// TodoList component
const TodoList: React.FC = () => {
  // TODO: Get todos, loading, error from useTodos hook
  const todos: Todo[] = [];
  const loading = false;
  const error = null;

  if (loading) {
    return (
      <div className="box">
        <div className="has-text-centered">
          <i className="fas fa-spinner fa-spin"></i> Loading todos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="box">
        <div className="notification is-danger">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="box">
      <h2 className="subtitle">Your Todos</h2>
      {todos.length === 0 ? (
        <p className="has-text-grey">No todos yet. Add one above!</p>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  );
};

// Main App component
const App: React.FC = () => {
  return (
    <TodoProvider>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered">Todo App</h1>
          <TodoInput />
          <TodoList />
        </div>
      </section>
    </TodoProvider>
  );
};

export default App;