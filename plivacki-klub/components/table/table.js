import {
  Table,
  Button,
  ButtonGroup,
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import styles from "./table.module.css";
import ActionContainer from "../../containers/action";

// reusable table component
// add filter and pagination
const TableComponent = ({
  attributes,
  data,
  name,
  actions,
  queryParams,
  updateFilterAndPagination,
  addNew
}) => {

  console.log("Add new", addNew);
  

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className={styles.textLeft}>
            {name}
          </Col>
          <Col md={6} className={styles.textRight} hidden={!addNew}>
            <p>Dodaj novi</p>
          </Col>
        </Row>
      </Container>
      <Table hover striped bordered>
        <thead>
          <tr>
            {attributes.map(element => {
              // to show attributes from nested objects
              if (element.includes("-")) {
                let value = element.split("-");
                element = value[0] + " " + value[1];
              }
              return (
                <th
                  key={element}
                  onClick={updateFilterAndPagination("offset")}
                  value={element}
                >
                  {element}
                </th>
              );
            })}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(element => {
            return (
              <tr key={element.id}>
                {attributes.map(att => {
                  if (att.includes("-")) {
                    att = att.split("-");
                    let nested = att[0];
                    let attribute = att[1];
                    if (element[nested]) {
                      return <td key={att}>{element[nested][attribute]}</td>;
                    }
                  }
                  return <td key={att}>{element[att]}</td>;
                })}
                <td>
                  <ButtonGroup>
                    {actions.map(action => {
                      return <Button key={action}>{action}</Button>;
                    })}
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* odvojiti formu mozda */}

      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="limit" className="mr-sm-2">
            Limit
          </Label>
          <Input
            type="select"
            name="limit"
            id="limit"
            onChange={updateFilterAndPagination("limit")}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="offset" className="mr-sm-2">
            Page
          </Label>
          <Pagination>
            <PaginationItem>{/* srediti paginaciju uf uf */}</PaginationItem>
          </Pagination>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="searchAttribute" className="mr-sm-2">
            Filter
          </Label>
          <Input
            type="select"
            name="searchAttribute"
            id="searchAttribute"
            onChange={updateFilterAndPagination("searchAttribute")}
          >
            {attributes.map(element => {
              return (
                <option key={element} value={element}>
                  {element}
                </option>
              );
            })}
          </Input>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="searchValue" className="mr-sm-2">
            Value
          </Label>
          <Input
            type="text"
            name="searchValue"
            id="searchValue"
            onChange={updateFilterAndPagination("searchValue")}
          />
        </FormGroup>
      </Form>
    </>
  );
};

export default TableComponent;
