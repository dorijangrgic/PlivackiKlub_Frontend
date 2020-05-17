import Layout from "../../../components/layout/layout";
import TaskFormCreateContainer from "../../../containers/taskFormCreate";
import TrainingFormCreateContainer from "../../../containers/trainingFormCreate";

const TrainingFormCreate = () => {
  return (
    <Layout title="Create training">
      <TrainingFormCreateContainer />
    </Layout>
  );
};

export default TrainingFormCreate;
