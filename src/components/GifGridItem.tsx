interface Image {
  title: string;
  url: string;
}

export const GifGridItem = ({ title, url }: Image) => {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  );
};
