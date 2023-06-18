export const getImage = async () => {
   try {
      const apiKey = 'zrt2ozRs3vUiIHf9iR3wpiLbgFSrDWal';
      const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
      const { data } = await res.json();
      const { url } = data.images.original;

      return url;
   } catch (error) {
      // Handle error
      console.error(error);
      return 'Image not found';
   }
};

getImage();
