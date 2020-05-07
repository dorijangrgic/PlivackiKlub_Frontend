import Layout from "../../../components/layout/layout";
import ActivateContainer from "../../../containers/activate";
import Router from "next/router";

const Activate = () => {
  const { pid } = Router.query;

  return (
    <Layout title="Activate profile" hideNav={true}>
      <ActivateContainer userId={pid}/>
    </Layout>
  );
};

export default Activate;
