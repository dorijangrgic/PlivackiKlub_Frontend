import Layout from "../../components/layout/layout";
import TableContainer from "../../containers/table";
import { attendanceAttributes } from "../../components/tableAttributes";
import { attendanceActions } from "../../components/tableActions";

const AttendanceTable = () => {
  return (
    <Layout title="Attendance list">
      <TableContainer
        name="attendances"
        attributes={attendanceAttributes}
        actions={attendanceActions}
      />
    </Layout>
  );
};

export default AttendanceTable;
