import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
