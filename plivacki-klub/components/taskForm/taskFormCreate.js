import { FormGroup, Label, Col, Button } from "reactstrap";

const TaskFormCreateComponent = ({
  register,
  onSubmit,
  handleSubmit,
  errors
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
        <Label md={2} htmlFor="descriptionInput">
          Opis
        </Label>
        <Col md={4}>
          <input
            type="text"
            id="descriptionInput"
            name="description"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.description && <p>This is required</p>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label md={2} htmlFor="intensityInput">
          Intenzitet
        </Label>
        <Col md={4}>
          <select
            type="text"
            id="intensityInput"
            name="intensity"
            className="form-control"
            ref={register({ required: true })}
          >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
          </select>
          {errors.intensity && <p>This is required</p>}
        </Col>
        <Label md={2} htmlFor="durationInput">
          Trajanje
        </Label>
        <Col md={4}>
          <input
            type="number"
            id="durationInput"
            name="duration"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.duration && <p>This is required</p>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label md={2} htmlFor="noteInput">
          Opaska
        </Label>
        <Col md={4}>
          <input
            type="text"
            id="noteInput"
            name="note"
            className="form-control"
            ref={register()}
          />
        </Col>
      </FormGroup>
      <Button>Submit</Button>
    </form>
  );
};

export default TaskFormCreateComponent;
