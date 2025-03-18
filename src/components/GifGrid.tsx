import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
interface Props {
  category: string;
}

interface Image {
  id: string;
  title: string;
  url: string;
}

export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {isLoading && <h2>Cargando...</h2>}
      <h2>{category}</h2>
      <div className="card-grid">
        {images.map(({ id, title, url }: Image) => (
          <GifGridItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
