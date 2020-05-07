import Layout from "../../components/layout/layout";
import TableContainer from "../../containers/table";
import { taskAttributes } from "../../components/tableAttributes";
import { taskActions } from "../../components/tableActions";

const TaskTable = () => {
  return (
    <Layout title="Task list">
      <TableContainer
        name="tasks"
        attributes={taskAttributes}
        actions={taskActions}
      />
    </Layout>
  );
};

export default TaskTable;
