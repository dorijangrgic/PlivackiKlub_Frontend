import { checkToken } from "../services/API";
import { useRouter } from "next/router";
import Layout from "../components/layout/layout";
import { Jumbotron, Button } from "reactstrap";
import { useEffect, useState } from "react";

const HomePage = () => {
  // const [token, setToken] = useState("");
  const Router = useRouter();
  let token = null;

  const onLogin = () => {
    Router.push("/users/login");
  };

  const getToken = () => {
    // setToken(checkToken());
    token = checkToken();
  }

  useEffect(() => {
    console.log("Use effect home 1", token);
    getToken();
    if (token === null) {
      console.log("Token je null");
    } else {
      Router.push("/dashboard")
      console.log("Use effect home 2", token);
    }
  }, [token]);

  return (
    <Layout title="Home page" hideNav={true}>
      <div>
        <Jumbotron> 
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            Welcome to PlivackiKlub information system. It is used for faculty purposes
          </p>
          <hr className="my-2" />
          <p>
            You should log in to use this fancy information system
          </p>
          <p className="lead">
            <Button onClick={onLogin} color="primary">
              Login
            </Button>
          </p>
        </Jumbotron>
      </div>
    </Layout>
  );
};

export default HomePage;
