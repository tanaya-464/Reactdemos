import React from 'react';
import './Form.less';

interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="label">Username:</label>
      <input className="input" type="text" />
      <label className="label">Password:</label>
      <input className="input" type="password" />
      <button className="button" type="submit">Login</button>
    </form>
  );
};

export default Form;