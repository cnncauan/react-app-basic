import { useCallback, useEffect, useMemo, useState } from "react";

//
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");

  const handleClick = () => {
    console.log(email);
    console.log(password);
  };

  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  const hadleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <div>
      <form>
        <label>
          <p>quantidades de letra do seu email: {emailLength}</p>
          <span>Email</span>
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
        <button type="button" onClick={hadleEntrar}>
          entrar
        </button>
      </form>
    </div>
  );
};
