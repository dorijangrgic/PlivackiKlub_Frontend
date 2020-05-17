import { FormGroup, Label, Col, Button } from "reactstrap";

const ClubFormCreateComponent = ({
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
        <Label md={2} htmlFor="addressInput">
          Adresa
        </Label>
        <Col md={4}>
          <input
            type="text"
            id="addressInput"
            name="address"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.address && <p>This is required</p>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label md={2} htmlFor="post_codeInput">
          Post code
        </Label>
        <Col md={4}>
          <input
            type="text"
            id="post_codeInput"
            name="postCode"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.postCode && <p>This is required</p>}
        </Col>
        <Label md={2} htmlFor="oibInput">
          OIB
        </Label>
        <Col md={4}>
          <input
            type="text"
            id="oibInput"
            name="oib"
            className="form-control"
            ref={register({ required: true })}
          />
          {errors.oib && <p>This is required</p>}
        </Col>
      </FormGroup>
      <Button>Submit</Button>
    </form>
  );
};

export default ClubFormCreateComponent;
