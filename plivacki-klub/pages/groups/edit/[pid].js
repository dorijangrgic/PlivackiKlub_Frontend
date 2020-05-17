import { useRouter } from "next/router";
import Layout from "../../../components/layout/layout";
import GroupFormEditContainer from "../../../containers/groupFormEdit";

const GroupFormEdit = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="Group edit">
      <GroupFormEditContainer groupId={pid} />
    </Layout>
  );
};

export default GroupFormEdit;
