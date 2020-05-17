import { FormGroup, Label, Col, Button } from "reactstrap";

const TrainingFormEditComponent = ({
  register,
  onSubmit,
  handleSubmit,
  errors,
  groups,
  tasks,
  trainingData
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup row>
        <Label md={2} htmlFor="groupInput">
          Grupa
        </Label>
        <Col md={4}>
          <select
            type="text"
            id="groupInput"
            name="groupId"
            className="form-control"
            ref={register({ required: true })}
          >
            {groups.map(element => {
              return (
                <option key={element.id} value={element.id}>
                  {element.name}
                </option>
              );
            })}
          </select>
          {errors.group && <p>This is required</p>}
        </Col>
        <Label md={2} htmlFor="tasksInput">
          Zadaci
        </Label>
        <Col md={4}>
          <select
            multiple
            type="select"
            id="tasksInput"
            name="taskIds"
            className="form-control"
            ref={register({ required: true })}
          >
            {tasks.map(element => {
              return (  
                <option key={element.id} value={element.id}>
                  {element.name}
                </option>
              );
            })}
          </select>
          {errors.tasks && <p>This is required</p>}
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
        <Label md={2} htmlFor="finishedInput">
          Odraden
        </Label>
        <Col md={4}>
          <select
            type="text"
            id="finishedInput"
            name="finished"
            className="form-control"
            ref={register()}
          >
            <option value={true}>True</option>
            <option value={false}>False</option>
          </select>
        </Col>
      </FormGroup>
      <Button>Submit</Button>
    </form>
  );
};

export default TrainingFormEditComponent;
