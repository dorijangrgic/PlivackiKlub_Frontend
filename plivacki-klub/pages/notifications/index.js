import Layout from "../../components/layout/layout";
import TableContainer from "../../containers/table";
import { notifAttributes } from "../../components/tableAttributes";
import { notifActions } from "../../components/tableActions";

const NotificationTable = () => {
  return (
    <Layout title="Notification list">
      <TableContainer
        name="notifications"
        attributes={notifAttributes}
        actions={notifActions}
      />
    </Layout>
  );
};

export default NotificationTable;
