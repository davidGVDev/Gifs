import { useState } from "react";

interface Props {
  onNewCategory: (value: string) => void;
}

export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    
    onNewCategory(inputValue.trim());
    setInputValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gift"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
