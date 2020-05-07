import Layout from "../../components/layout/layout";
import TableContainer from "../../containers/table";
import { clubAttributes } from "../../components/tableAttributes";
import { clubActions } from "../../components/tableActions";

const ClubTable = () => {
  return (
    <Layout title="Club list">
      <TableContainer name="clubs" attributes={clubAttributes} actions={clubActions}/>
    </Layout>
  );
};

export default ClubTable;
