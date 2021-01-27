import jsonp from "jsonp";

function fetchsong(term) {
  const songUrl = `https://itunes.apple.com/search?term=${term}&entity=song `;
  console.log("songUrl", songUrl);
  console.log("Nova linija");

  return new Promise((resolve) => {
    jsonp(songUrl, (error, response) => {
      console.log("succes!", response.results);
      resolve(response.results);
    });
  });
}

export default fetchsong;
