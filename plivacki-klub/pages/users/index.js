import Layout from "../../components/layout/layout";
import TableContainer from "../../containers/table";
import { userAttributes } from "../../components/tableAttributes";
import { userActions } from "../../components/tableActions";

const UserTable = () => {
  return (
    <Layout title="User list">
      <TableContainer
        name="users"
        attributes={userAttributes}
        actions={userActions}
      />
    </Layout>
  );
};

export default UserTable;
