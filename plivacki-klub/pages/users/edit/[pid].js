import Layout from "../../../components/layout/layout";
import UserFormEditContainer from "../../../containers/userFormEdit";
import { useRouter } from "next/router";

const UserFormEdit = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="User edit">
      <UserFormEditContainer userId={pid} />
    </Layout>
  );
};

export default UserFormEdit;
