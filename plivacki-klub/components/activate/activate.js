const ActivateComponent = ({ handleSubmit, onSubmit, register, errors }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Activate your profile</h1>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
          placeholder="Enter username"
          name="username"
          ref={register({ required: true })}
        />
        {errors.username && <p>This is required</p>}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true, minLength: 8 })}
        />
        {errors.password && <p>This is required</p>}
        {errors.password && errors.password.type === "minLength" && (
          <p>Password has to be longer than 8 charachters</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ActivateComponent;
