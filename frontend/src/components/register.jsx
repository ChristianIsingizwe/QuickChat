import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <form action="">
      <label htmlFor="username">Name: </label>
      <input type="text" />
      <label htmlFor="email">Email: </label>
      <input type="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" />
      <button type="submit"> SIGNUP</button>
      <p>
        Already have an account <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

export default RegisterForm;
