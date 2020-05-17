import { useRouter } from "next/router";
import Layout from "../../../components/layout/layout";
import AttendanceFormEditContainer from "../../../containers/attendanceFormEdit";

const AttendanceFormEdit = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="Attendance edit">
      <AttendanceFormEditContainer attendanceId={pid} />
    </Layout>
  );
};

export default AttendanceFormEdit;
