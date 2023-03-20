const initialState = {
  todos: [],
  completedTodos: []
};

const TodoReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, text: action.payload.text, isCompleted: action.payload.isCompleted } : todo
        )
      };
      case 'COMPLETE_TODO':
        const completedTodo = state.todos.find(todo => todo.id === action.payload.id);
        if (!completedTodo) {
          return state;
        }
        const newTodos = state.todos.filter(todo => todo.id !== action.payload.id);
        completedTodo.isCompleted = true;
        return {
          ...state,
          todos: newTodos,
          completedTodos: [...state.completedTodos, completedTodo]
        };

        case 'DELETE_COMPLETED_TODOS':
          return {
            ...state,
            completedTodos: state.completedTodos.filter(todo => todo.id !== action.payload)
          };
        
    default:
      return state;
  }
};


export default TodoReducers;

