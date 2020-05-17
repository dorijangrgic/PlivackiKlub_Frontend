import { useRouter } from "next/router";
import Layout from "../../../components/layout/layout";
import TrainingFormEditContainer from "../../../containers/trainingFormEdit";

const TrainingFormEdit = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="Training edit">
      <TrainingFormEditContainer trainingId={pid} />
    </Layout>
  );
};

export default TrainingFormEdit;
