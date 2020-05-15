import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";
import styles from "./userFormCreate.module.css";
const UserFormCreateComponent = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  groups
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup row>
        {/* ime i prezime */}
        <Label md={2} htmlFor="first_nameInput">
          Ime
        </Label>
        <Col md={4}>
          <input
            type="text"
            id="first_nameInput"
            name="first_name"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.first_name && <p>This is required</p>}
        </Col>
        <Label md={2} htmlFor="last_nameInput">
          Prezime
        </Label>
        <Col md={4}>
          <input
            type="text"
            id="last_nameInput"
            name="last_name"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.last_name && <p>This is required</p>}
        </Col>
      </FormGroup>
      <FormGroup row>
        {/* datum i email */}
        <Label md={2} htmlFor="date_of_birthInput">
          Datum
        </Label>
        <Col md={4}>
          <input
            type="datetime-local"
            id="date_of_birthInput"
            name="date_of_birth"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.date_of_birth && <p>This is required</p>}
        </Col>
        <Label md={2} htmlFor="emailInput">
          Email
        </Label>
        <Col md={4}>
          <input
            type="email"
            id="emailInput"
            name="email"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.email && <p>This is required</p>}
        </Col>
      </FormGroup>
      <FormGroup row>
        {/* rola i grupa */}
        <Label md={2} htmlFor="roleIdInput">
          Uloga
        </Label>
        <Col md={4}>
          <select
            type="select"
            id="roleIdInput"
            name="roleId"
            className="form-control"
            ref={register({ required: true })}
          >
            <option value={1}>Admin</option>
            <option value={2}>Trener</option>
            <option value={3}>Plivac</option>
          </select>
          {errors.roleId && <p>This is required</p>}
        </Col>
        <Label md={2} htmlFor="groupIdInput">
          Grupa
        </Label>
        <Col md={4}>
          <select
            type="select"
            id="groupIdInput"
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
          {errors.groupId && <p>This is required</p>}
        </Col>
      </FormGroup>
      <Button>Submit</Button>
    </form>
  );
};

export default UserFormCreateComponent;
