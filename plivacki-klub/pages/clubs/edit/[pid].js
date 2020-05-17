import {useRouter} from "next/router";
import Layout from "../../../components/layout/layout"
import ClubFormEditContainer from "../../../containers/clubFormEdit";

const ClubFormEdit = () => {
  const Router = useRouter();
  const { pid } = Router.query;
  console.log(pid);

  return (
    <Layout title="Club edit">
      <ClubFormEditContainer clubId={pid} />
    </Layout>
  );
};

export default ClubFormEdit;
