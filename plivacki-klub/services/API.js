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


const getAllById = async (name, subName, nameId) => {
  const token = checkToken();

  return await fetch(`${base_url}/${name}/${nameId}/${subName}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });

  // console.log("Service", response);
  // return response;
};

const getSingle = async (name, id) => {
  const token = checkToken();

  return await fetch(`${base_url}/${name}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
};

const update = async (data, name, id) => {
  const token = checkToken();

  const response = await fetch(`${base_url}/${name}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  console.log("Response", response);
  return response.json();
};

const create = async (data, name) => {
  const token = checkToken();

  const response = await fetch(`${base_url}/${name}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  console.log("Service", response);
  return response;
};

export {
  base_url,
  checkUserRole,
  getAll,
  checkToken,
  getSingle,
  update,
  create,
  getAllById
};
