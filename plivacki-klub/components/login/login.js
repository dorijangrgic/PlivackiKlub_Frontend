import {Button} from "reactstrap";

// component handles the rendering
const LoginComponent = ({ register, handleSubmit, onSubmit, errors }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Log in</h1>
      <div className="form-group">
        <label htmlFor="usernameOrEmailInput">Email address or Username</label>
        <input
          type="text"
          className="form-control"
          id="usernameOrEmailInput"
          aria-describedby="emailHelp"
          placeholder="Enter email/username"
          name="usernameOrEmail"
          ref={register({ required: true })}
        />
        {errors.usernameOrEmail && <p>This is required</p>}
      </div>
      <div className="form-group">
        <label htmlFor="passwordInput">Password</label>
        <input
          type="password"
          className="form-control"
          id="passwordInput"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && <p>This is required</p>}
      </div>
      <Button type="submit" className="btn btn-primary">
        Submit
      </Button>
    </form>
  );
};

export default LoginComponent;
