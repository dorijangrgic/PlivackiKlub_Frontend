import { base_url, checkToken, checkUserRole } from "./API";

const login = async data => {
  const response = await fetch(`${base_url}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  //   console.log("Service", response);

  return response.json(); // vraca body responsa
};

const activate = async (data, userId) => {
  const response = await fetch(`${base_url}/users/activate/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  console.log("Service", response);
  if (response.status === 200) return;
  else return response.json(); // vraca body responsa
};

const registerUser = async data => {
  const token = checkToken();

  const response = await fetch(`${base_url}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  console.log("Service", response);
  if (response.status === 400 || response.status === 200) {
    return response.json();
  } else {
    return;
  }
};

export { login, activate, registerUser };
