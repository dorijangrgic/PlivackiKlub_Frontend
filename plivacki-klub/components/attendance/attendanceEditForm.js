import { FormGroup, Label, Col, Button } from "reactstrap";

const AttendanceFormEditComponent = ({
  register,
  onSubmit,
  handleSubmit,
  errors,
  attendanceData
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup row>
        <Label md={2} htmlFor="finishedInput">
          Prisutan
        </Label>
        <Col md={4}>
          <select
            type="text"
            id="finishedInput"
            name="finished"
            className="form-control"
            ref={register({ required: true })}
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
          {errors.finished && <p>This is required</p>}
        </Col>
      </FormGroup>
      <Button>Submit</Button>
    </form>
  );
};

export default AttendanceFormEditComponent;
