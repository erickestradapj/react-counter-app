const getImage = async () => {
   try {
      const apiKey = 'zrt2ozRs3vUiIHf9iR3wpiLbgFSrDWal';
      const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
      const { data } = await res.json();
      const { url } = data.images.original;

      const img = document.createElement('img');
      img.src = url;

      document.body.append(img);
   } catch (error) {
      // Handle error
      console.error(error);
   }
};

getImage();
