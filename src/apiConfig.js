let apiUrl;
const apiUrls = {
  // production: "https://secret-brook-73691.herokuapp.com",
  development: "http://localhost:3001"
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

// apiUrl = apiUrls.production;
export default apiUrl;
