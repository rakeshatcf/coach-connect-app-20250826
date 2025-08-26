import { useCounter } from '../hooks/useCounter'

interface CounterProps {
  initialValue?: number
}

export default function Counter({ initialValue = 0 }: CounterProps) {
  const { count, increment, decrement, reset } = useCounter(initialValue)

  return (
    <div className="counter">
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}