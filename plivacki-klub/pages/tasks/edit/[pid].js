import { useRouter } from "next/router";
import Layout from "../../../components/layout/layout";
import TaskFormEditContainer from "../../../containers/taskFormEdit";

const TaskFormEdit = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="Task edit">
      <TaskFormEditContainer taskId={pid} />
    </Layout>
  );
};

export default TaskFormEdit;
