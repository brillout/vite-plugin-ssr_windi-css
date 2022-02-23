import React, { useState } from 'react'

export { Counter }

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button
      type="button"
      onClick={() => setCount((count) => count + 1)}
      className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:(text-white bg-purple-600 border-transparent)"
    >
      Counter {count}
    </button>
  )
}
