import Layout from "../../../components/layout/layout";
import DetailContainer from "../../../containers/detail";
import { useRouter } from "next/router";
import { trainingAttributes } from "../../../components/tableAttributes";

const GroupTrainings = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="MD-Group-Trainings">
      <DetailContainer
        name="groups"
        id={pid}
        subName="trainings"
        attributes={trainingAttributes}
      ></DetailContainer>
    </Layout>
  );
};

export default GroupTrainings;
