import Layout from "../../components/layout/layout";
import TableContainer from "../../containers/table";
import { groupAttributes } from "../../components/tableAttributes";
import { groupActions } from "../../components/tableActions";

const GroupTable = () => {
  return (
    <Layout title="Group list">
      <TableContainer
        name="groups"
        attributes={groupAttributes}
        actions={groupActions}
      />
    </Layout>
  );
};

export default GroupTable;
