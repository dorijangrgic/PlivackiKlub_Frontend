const base_url = "http://127.0.0.1:3030/api";

const checkToken = () => {
  return localStorage.getItem("token");
};

const getAll = async name => {
  const token = checkToken();
  console.log("Get all", name);

  return await fetch(`${base_url}/${name}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
};

export { base_url, getAll };
