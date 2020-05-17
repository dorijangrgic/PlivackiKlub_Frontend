import { useRouter } from "next/router";
import Layout from "../../../components/layout/layout";
import NotifFormEditContainer from "../../../containers/notifFormEdit";

const NotifFormEdit = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="Task edit">
      <NotifFormEditContainer notifId={pid} />
    </Layout>
  );
};

export default NotifFormEdit;
