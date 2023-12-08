import { useState } from 'react';
import { toast } from 'react-toastify';

export const SerchBar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = ({ target }) => {
    setInput(target.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === '') {
      toast('Введите Ваш запрос!');
      return;
    }

    onSubmit(input);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
        value={input}
      />
      <button type="submit">
        <span>Пошук</span>
      </button>
    </form>
  );
};
