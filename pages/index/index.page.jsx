import React from 'react'
import { Counter } from './Counter'

export { Page }

function Page() {
  return (
    <>
      <h1 className="mt-4 mb-4 text-3xl font-bold">Welcome</h1>
      <p>This page is:</p>
      <ul class="list-disc ml-8 mt-2 mb-4">
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
        <li>Uses WindiCSS.</li>
      </ul>
    </>
  )
}
