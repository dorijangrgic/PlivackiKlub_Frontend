import Layout from "../../components/layout/layout";
import { Jumbotron } from "reactstrap";

const Dashboard = () => {
  return (
    <Layout title="Dashboard">
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            This is an information system used for faculty purposes
          </p>
          <hr className="my-2" />
          <p>
            You can see all tables and edit/delete if you're admin or coach. 
          </p>
        </Jumbotron>
      </div>
    </Layout>
  );
};

export default Dashboard;
