import React from 'react'
import useState from 'react'

const main = () => {
  const [count, setCount] = useState(0)


  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

export default main
