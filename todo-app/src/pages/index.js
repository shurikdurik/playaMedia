import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TodoList from '../components/TodoList';
import LanguageSelector from '../components/LanguageSelector';

const initialTodos = [
  { text: 'foo', checked: false },
  { text: 'bar', checked: false },
  { text: 'buz', checked: true },
];

const IndexPage = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState('');
  const { t } = useTranslation();

  const handleToggle = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].checked = !updatedTodos[index].checked;
    setTodos(updatedTodos);
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = [
        ...todos,
        { text: newTodo, checked: false },
      ];
      setTodos(updatedTodos);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>{t('appTitle')}</h1>
      <LanguageSelector />
      <TodoList todos={todos} onToggle={handleToggle} />
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder={t('addTodoPlaceholder')}
      />
      <button onClick={handleAddTodo}>{t('addTodoButton')}</button>
    </div>
  );
};

export default IndexPage;