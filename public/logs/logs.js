getData();
    async function getData() {
      const response = await fetch('/api');
      const data = await response.json();

      for(item of data) {
        const root = document.createElement('div');
        const mood = document.createElement('p');
        const lat = document.createElement('p');
        const lon = document.createElement('p');
        const date = document.createElement('p');
        const image = document.createElement('img');

        mood.textContent = `mood: ${item.mood}`;
        lat.textContent = `lat: ${item.lat}`;
        lon.textContent = `lon: ${item.lon}`;
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = dateString;
        image.src = item.image64; 

        root.append(mood, lat, lon, date, image);
        document.body.append(root);
      }
      console.log(data);
    }
     // even though we already used /api with post it's ok to re-use again here because since the fetch default is get this will be a different process on the server than the post '/api'. 