import React, { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(false)
  const initialTitleRef = useRef(document.title)

  useEffect(() => {
    document.title = checked ? `Total number of clicks: ${count}` : initialTitleRef.current
  }, [checked, count])

  return (
    <div>
      <span data-testid="count">
        Clicked {count} time{count === 1 ? "" : "s"}
      </span>
      <br />
      <button data-testid="button" onClick={() => setCount(count + 1)} disabled={!checked}>
        Increment
      </button>
      <div>
        <input
          type="checkbox"
          id="checkbox-title"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          data-testid="checkbox"
        />
        <label htmlFor="checkbox-title">Check to enable or disable button</label>
      </div>
    </div>
  )
}

export default Counter