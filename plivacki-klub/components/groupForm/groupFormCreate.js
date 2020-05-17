import { FormGroup, Label, Col, Button } from "reactstrap";

const GroupFormCreateComponent = ({
  register,
  onSubmit,
  handleSubmit,
  errors,
  clubs
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup row>
        <Label md={2} htmlFor="nameInput">
          Ime
        </Label>
        <Col md={4}>
          <input
            type="text"
            id="nameInput"
            name="name"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.name && <p>This is required</p>}
        </Col>
        <Label md={2} htmlFor="groupIdInput">
          Klub
        </Label>
        <Col md={4}>
          <select
            type="select"
            id="clubIdInput"
            name="clubId"
            className="form-control"
            ref={register({ required: true })}
          >
            {clubs.map(element => {
              return (
                <option key={element.id} value={element.id}>
                  {element.name}
                </option>
              );
            })}
          </select>
          {errors.clubId && <p>This is required</p>}
        </Col>
      </FormGroup>
      <Button>Submit</Button>
    </form>
  );
};

export default GroupFormCreateComponent;
