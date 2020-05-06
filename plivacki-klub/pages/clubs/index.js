import Layout from "../../components/layout/layout";
import TableContainer from "../../containers/table";
import { clubAttributes } from "../../components/tableAttributes";

const ClubTable = () => {
  return (
    <Layout title="Club list">
      <h1>Lista klubova prijo</h1>
      <TableContainer name="clubs" attributes={clubAttributes} />
    </Layout>
  );
};

export default ClubTable;
