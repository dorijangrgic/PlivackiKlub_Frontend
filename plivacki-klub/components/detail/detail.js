import { Form, FormGroup, Col, Label, Table, Button } from "reactstrap";

const DetailComponent = ({
  details,
  masterData,
  id,
  name,
  subName,
  attributes
}) => {
  return (
    <Col md={12}>
      <h1>{`${name}-${id}-${subName}`}</h1>
      <hr />
      {Object.keys(masterData).map(element => {
        if (typeof masterData[element] !== "object") {
          let value;
          // ovdje ide prikaz mastera
          if (element === "verified" || element === "finished") {
            value = masterData[element] ? "True" : "False";
          } else {
            value = masterData[element];
          }
          return (
            <div className="row" key={element}>
              <Label md={4}>{element}</Label>
              <Col md={8}>
                <p>{value}</p>
              </Col>
            </div>
          );
        }
      })}
      <hr />
      <div className="row">
        <Table hover striped bordered>
          <thead className="thead-dark">
            <tr>
              {attributes.map(element => {
                // to show attributes from nested objects
                if (element.includes("-")) {
                  let value = element.split("-");
                  element = value[0] + " " + value[1];
                }
                return (
                  <th className="text-center" key={element} value={element}>
                    {element}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {details.map(element => {
              return (
                <tr key={element.id}>
                  {attributes.map(att => {
                    if (att.includes("-")) {
                      att = att.split("-");
                      let nested = att[0];
                      let attribute = att[1];
                      if (element[nested]) {
                        console.log(
                          "Nested",
                          element[nested],
                          element[nested][attribute]
                        );

                        return (
                          <td className="text-center" key={att}>
                            {element[nested][attribute]}
                          </td>
                        );
                      }
                    }
                    let value;
                    if (att === "verified" || att === "finished") {
                      value = element[att] ? "True" : "False";
                    } else {
                      value = element[att];
                    }
                    return (
                      <td className="text-center" key={att}>
                        {value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Col>
  );
};

export default DetailComponent;
