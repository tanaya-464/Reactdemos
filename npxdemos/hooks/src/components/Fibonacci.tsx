import React, { useState, useMemo } from 'react';
const Fibonacci: React.FC = () => {
const [count, setCount] = useState(0);
const fibonacci = (n: number): number => {
if (n <= 1) return n;
return fibonacci(n - 1) + fibonacci(n - 2);
};
const memoizedFib = useMemo(() => fibonacci(count), [count]);
return (
<div>
<p>Fibonacci of {count}: {memoizedFib}</p>
<button onClick={() => setCount(count + 1)}>Next</button>
</div>
);
};export default Fibonacci;
