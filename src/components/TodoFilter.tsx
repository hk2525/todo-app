import type { FilterType } from '../types'

interface Props {
  filter: FilterType
  onFilterChange: (filter: FilterType) => void
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
}

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了済み' },
]

export function TodoFilter({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: Props) {
  return (
    <div className="todo-filter">
      <div className="filter-buttons">
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`filter-btn${filter === f.value ? ' active' : ''}`}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <span className="count-text">{activeCount}件未完了</span>
      {completedCount > 0 && (
        <button className="clear-btn" onClick={onClearCompleted}>
          完了済みを削除
        </button>
      )}
    </div>
  )
}
