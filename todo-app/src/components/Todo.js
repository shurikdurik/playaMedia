import { useState } from 'react';

const Todo = ({ text, checked, onToggle }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle();
  };

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span>{text}</span>
    </div>
  );
};

export default Todo;