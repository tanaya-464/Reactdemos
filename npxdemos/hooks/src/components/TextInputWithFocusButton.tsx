import React, { useRef } from 'react';
const TextInputWithFocusButton: React.FC = () => {
const inputEl = useRef<HTMLInputElement>(null);
const onButtonClick = () => {
if (inputEl.current) {
inputEl.current.focus();
}
};
return (
<>
<input ref={inputEl} type="text" />
<button onClick={onButtonClick}>Focus the input</button>
</>
);
}
export default TextInputWithFocusButton