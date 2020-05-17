import { FormGroup, Label, Col, Button } from "reactstrap";

const NotifFormEditComponent = ({
  register,
  onSubmit,
  handleSubmit,
  errors,
  notifData
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup row>
        <Label md={2} htmlFor="titleInput">
          Naslov
        </Label>
        <Col md={4}>
          <input
            type="text"
            id="titleInput"
            name="title"
            className="form-control"
            ref={register({ required: true })}
            placeholder={notifData.title}
          />
          {errors.title && <p>This is required</p>}
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
            placeholder={notifData.description}
          />
          {errors.description && <p>This is required</p>}
        </Col>
      </FormGroup>
      <Button>Submit</Button>
    </form>
  );
};

export default NotifFormEditComponent;
