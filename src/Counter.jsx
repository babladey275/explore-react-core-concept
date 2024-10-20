import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count+1);
    }

    return (
        <div style={{border: '2px solid yellow'}}>
            <h2>Counter: {count}</h2>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}