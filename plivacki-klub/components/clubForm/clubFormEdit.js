import { FormGroup, Label, Col, Button } from "reactstrap";

const ClubFormEditComponent = ({
  register,
  onSubmit,
  handleSubmit,
  errors,
  clubData
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
            placeholder={clubData.name}
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
            placeholder={clubData.address}
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
            placeholder={clubData.postCode}
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
            placeholder={clubData.oib}
          />
          {errors.oib && <p>This is required</p>}
        </Col>
      </FormGroup>
      <Button>Submit</Button>
    </form>
  );
};

export default ClubFormEditComponent;
