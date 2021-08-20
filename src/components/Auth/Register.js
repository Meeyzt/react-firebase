import { Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebase/firebase";

function Register() {
  const { currentUser, setCurrentUser } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = e.target.elements;
    if (password.value === confirmPassword.value) {
      try {
        auth.createUserWithEmailAndPassword(email.value, password.value);
        setCurrentUser(true);
        console.log("Successfully");
      } catch (error) {
        console.log("LOGOGO", error);
      }
    } else {
      console.log("Password not cross");
    }
    if (currentUser) {
      return <Redirect to="/dashboard" />;
    }
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="flex">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Register;
