import Layout from "../../../components/layout/layout";
import DetailContainer from "../../../containers/detail";
import { useRouter } from "next/router";
import { userAttributes } from "../../../components/tableAttributes";

const ClubUsers = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="MD-Club-Users">
      <DetailContainer
        name="clubs"
        id={pid}
        subName="users"
        attributes={userAttributes}
      ></DetailContainer>
    </Layout>
  );
};

export default ClubUsers;
