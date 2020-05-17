import Layout from "../../components/layout/layout";
import TableContainer from "../../containers/table";
import { trainingAttributes } from "../../components/tableAttributes";
import { trainingActions } from "../../components/tableActions";

const TrainingTable = () => {
  return (
    <Layout title="Training list">
      <TableContainer
        name="trainings"
        attributes={trainingAttributes}
        actions={trainingActions}
      />
    </Layout>
  );
};

export default TrainingTable;
