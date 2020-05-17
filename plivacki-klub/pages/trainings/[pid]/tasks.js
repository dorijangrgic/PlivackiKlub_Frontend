import Layout from "../../../components/layout/layout";
import DetailContainer from "../../../containers/detail";
import { useRouter } from "next/router";
import { taskAttributes } from "../../../components/tableAttributes";

const GroupTrainings = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="MD-Training-Tasks">
      <DetailContainer
        name="trainings"
        id={pid}
        subName="tasks"
        attributes={taskAttributes}
      ></DetailContainer>
    </Layout>
  );
};

export default GroupTrainings;
