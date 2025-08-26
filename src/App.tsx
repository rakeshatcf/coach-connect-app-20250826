import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>React SPA</h1>
        <p>Built with Vite and TypeScript</p>
        
        <Counter />
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            App count is {count}
          </button>
        </div>
      </header>
    </div>
  )
}

export default App