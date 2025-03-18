interface Gif {
  id: string;
  title: string;
  url: string;
}

export const getGifs = async (category: string): Promise<Gif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=ivFRr8DcoBoCzHLI63DSx7R211szGjSH&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img: any) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
}; 