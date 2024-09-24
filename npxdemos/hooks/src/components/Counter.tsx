import React, { useState, useCallback } from 'react';
const Button: React.FC<{ onClick: () => void }> = React.memo(({ onClick }) => {
return <button onClick={onClick}>Click me</button>;
});
const Counter: React.FC = () => {
const [count, setCount] = useState(0);
const increment = useCallback(() => {
setCount((prev) => prev + 1);
}, []);
return (
<div>
<p>Count: {count}</p>
<Button onClick={increment}/>
</div>)
};

export default Counter 
