import {base_url} from "./API";

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
  if(response.status === 200) return;
  else return response.json(); // vraca body responsa
};

export { login, activate };
