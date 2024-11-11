import { useEffect, useState } from "react";

//
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  useEffect(() => {
    if (window.confirm("vc é home?")) {
      console.log("home");
    } else {
      console.log("mulher");
    }
  }, []);

  useEffect(() => {
    console.log(email);
  }, [email]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  const handleClick = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <form>
        <label>
          <span>password</span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>senha</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleClick}>
          entrar
        </button>
      </form>
    </div>
  );
};
