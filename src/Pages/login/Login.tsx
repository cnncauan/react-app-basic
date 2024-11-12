import { useCallback, useEffect, useMemo, useRef, useState } from "react";

//
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const inputPasswordRef = useRef<HTMLInputElement>(null);

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
            onKeyDown={(e) =>
              e.key === "Enter" ? inputPasswordRef.current?.focus() : undefined
            }
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>senha</span>
          <input
            type="password"
            value={password}
            ref={inputPasswordRef}
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={hadleEntrar}>
          entrar
        </button>
      </form>
    </div>
  );
};
