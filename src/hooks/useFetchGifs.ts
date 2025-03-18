//Custom hook para obtener los gifs

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

interface Image {
  id: string;
  title: string;
  url: string;
}

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGifs(category).then((gifs) => {
      setImages(gifs);
      setIsLoading(false);
    });
  }, [category]);

  return {
    images,
    isLoading
  };
};  