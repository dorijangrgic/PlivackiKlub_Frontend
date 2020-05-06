import { Table } from "reactstrap";

// reusable table component
// add filter and pagination
const TableComponent = ({ attributes, data }) => {
  console.log("Table component", attributes, data);

  return (
    <Table hover>
      <thead>
        <tr>
          {attributes.forEach(element => {
            return <th>{element}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.forEach(element => {
          <tr>
            {attributes.forEach(att => {
              <td>{element[att]}</td>;
            })}
          </tr>;
        })}
      </tbody>
    </Table>
  );
};

export default TableComponent;
