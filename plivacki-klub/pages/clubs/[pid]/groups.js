import Layout from "../../../components/layout/layout";
import DetailContainer from "../../../containers/detail";
import { useRouter } from "next/router";
import { groupAttributes } from "../../../components/tableAttributes";

const ClubGroups = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="MD-Club-Groups">
      <DetailContainer
        name="clubs"
        id={pid}
        subName="groups"
        attributes={groupAttributes}
      ></DetailContainer>
    </Layout>
  );
};

export default ClubGroups;
