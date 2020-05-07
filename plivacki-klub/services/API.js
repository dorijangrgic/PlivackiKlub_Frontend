import jwt from "jwt-decode";

const base_url = "http://127.0.0.1:3030/api";

const checkUserRole = () => {
  const token = checkToken();
  // provjera za postojanje tokena
  return jwt(token)["roleId"];
};

const checkToken = () => {
  return localStorage.getItem("token");
};

const getAll = async (name, queryParams) => {
  const token = checkToken();

  let url = `${base_url}/${name}`;

  if (queryParams) {
    // console.log("Postoje query params", queryParams);

    url += "?";
    for (let key of Object.keys(queryParams)) {
      url += `${key}=${queryParams[key]}&`;
    }
    url = url.substring(0, url.length - 1);
  }

  // console.log("Get all", name, queryParams, url);

  return await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
};

export { base_url, checkUserRole, getAll };
