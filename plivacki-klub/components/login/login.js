// component handles the rendering
const LoginComponent = ({ register, handleSubmit, onSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="usernameOrEmailInput">Email address or Username</label>
        <input
          type="text"
          className="form-control"
          id="usernameOrEmailInput"
          aria-describedby="emailHelp"
          placeholder="Enter email/username"
          name="usernameOrEmail"
          ref={register}
        />
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
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default LoginComponent;
