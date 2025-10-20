import { useState } from "react";

export default function Counter({ initial = 0, step = 1 }) {
const [count, setCount] = useState(initial);
return (
<div style={{ display: "grid", gap: 8, placeItems: "center" }}>
<h1>Count: {count}</h1>
<div style={{ display: "flex", gap: 8 }}>
<button onClick={() => setCount(c => c - step)}>Decrement</button>
<button onClick={() => setCount(c => c + step)}>Increment</button>
</div>
</div>
);
}