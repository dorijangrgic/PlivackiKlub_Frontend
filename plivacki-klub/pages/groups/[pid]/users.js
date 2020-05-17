import Layout from "../../../components/layout/layout";
import DetailContainer from "../../../containers/detail";
import { useRouter } from "next/router";
import { userAttributes } from "../../../components/tableAttributes";

const GroupUsers = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="MD-Group-Users">
      <DetailContainer
        name="groups"
        id={pid}
        subName="users"
        attributes={userAttributes}
      ></DetailContainer>
    </Layout>
  );
};

export default GroupUsers;
