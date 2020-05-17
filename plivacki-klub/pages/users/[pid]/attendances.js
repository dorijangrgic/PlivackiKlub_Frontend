import Layout from "../../../components/layout/layout";
import DetailContainer from "../../../containers/detail";
import { useRouter } from "next/router";
import { attendanceAttributes } from "../../../components/tableAttributes";

const GroupTrainings = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="MD-User-Attendances">
      <DetailContainer
        name="users"
        id={pid}
        subName="attendances"
        attributes={attendanceAttributes}
      ></DetailContainer>
    </Layout>
  );
};

export default GroupTrainings;
