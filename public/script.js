function setup() {
      noCanvas();
      const video = createCapture(VIDEO);
      video.size(160, 120);

      let lat, lon;
      const button = document.getElementById('submit');
      button.addEventListener('click', async event => {
        const mood = document.getElementById('mood').value;
        video.loadPixels();
        const image64 = video.canvas.toDataURL();
        const data = { lat, lon, mood, image64 };
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
      });

      if ('geolocation' in navigator) {   /* geolocation is available */
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(async position => {
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          console.log(lat, lon);
          document.getElementById('latitude').textContent = lat;
          document.getElementById('longitude').textContent = lon;
        })
      }
      else {
        /* geolocation IS NOT available */
        console.log('geolocation not available');
      }
    }