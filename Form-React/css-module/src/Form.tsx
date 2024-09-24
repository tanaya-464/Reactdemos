import React from 'react';
import styles from './Form.module.css';

interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label}>Username:</label>
      <input className={styles.input} type="text" />
      <label className={styles.label}>Password:</label>
      <input className={styles.input} type="password" />
      <button className={styles.button} type="submit">Login</button>
    </form>
  );
};

export default Form;