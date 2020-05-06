import Layout from "../../components/layout/layout";
import LoginContainer from "../../containers/login";


const Login = () => {
  return (
    <Layout title="Login" hideNav={true}>
        <LoginContainer />
    </Layout>
  );
};

export default Login;
