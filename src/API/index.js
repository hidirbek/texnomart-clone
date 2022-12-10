const BASE_URL = "https://api.escuelajs.co/api/v1";
const api = {
  category: function (id = 1) {
    return fetch(BASE_URL + "/categories/" + id)
      .then((res) => res.json())
      .then((data) => data);
  },
  products: function (page = 1) {
    return fetch(BASE_URL + "/products/" + id, {
      headers: {
        categoryName,
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
};
export default api;
