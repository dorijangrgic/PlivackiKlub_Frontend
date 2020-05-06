import Head from "next/head";
import CustomNavbar from "../../components/navbar/navbar";
import styles from "./layout.module.css";
import { Container, Row, Col } from "reactstrap";

const Layout = ({ children, title, hideNav }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
      </Head>

      <CustomNavbar hideNav={hideNav}/>

      <div className={styles.marginTop}>
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Layout;
