import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput'
import { TodoFilter } from './components/TodoFilter'
import { TodoList } from './components/TodoList'
import './index.css'

function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    activeCount,
    completedCount,
  } = useTodos()

  return (
    <div className="app">
      <h1 className="app-title">TODO</h1>
      <TodoInput onAdd={addTodo} />
      <TodoFilter
        filter={filter}
        onFilterChange={setFilter}
        activeCount={activeCount}
        completedCount={completedCount}
        onClearCompleted={clearCompleted}
      />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}

export default App
