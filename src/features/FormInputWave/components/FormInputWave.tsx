import { useState } from "react";
import { LabelWave } from "./LabelWave";

interface FormData {
  email: string;
  password: string;
  emailHasFocus: boolean;
  passwordHasFocus: boolean;
  [key: string]: string | boolean;
}
export const FormInputWave = () => {
  const containerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };
  const initialUser: FormData = {
    email: "",
    password: "",
    emailHasFocus: false,
    passwordHasFocus: false,
  };

  const [user, setUser] = useState(initialUser);
  const { email, password, emailHasFocus, passwordHasFocus } = user;

  const formControlClass = " relative mt-6 mr-0 mb-10 ";
  const inputClass =
    " bg-transparent block border-0 border-solid border-b-2 border-b-white w-full " +
    " pt-4 text-lg z-50 relative focus:outline-0 focus:border-b-blue-200 " +
    " valid:outline-0 valid:border-b-blue-200 ";

  const handleOnFocus =
    (eventName: string) => (e: React.FocusEvent<HTMLInputElement>) => {
      const newUser: FormData = { ...user };
      const property = (e.target.name + "HasFocus") as string;
      newUser[property] = eventName == "focus" ? true : false;
      setUser(newUser);
    };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUser: FormData = { ...user };
    const property = e.target.name as string;
    newUser[property] = e.target.value;
    setUser(newUser);
  };

  return (
    <div className=" py-5 px-10 rounded-md " style={containerStyle}>
      <h4 className=" text-center mb-7 ">Please Login</h4>
      <form>
        <div className={`${formControlClass}`}>
          <input
            type="email"
            name="email"
            required
            className={`${inputClass} `}
            onFocus={handleOnFocus("focus")}
            onBlur={handleOnFocus("blur")}
            onChange={handleOnChange}
          />
          <LabelWave
            label="Email"
            hasFocus={emailHasFocus}
            inputValue={email}
          ></LabelWave>
        </div>

        <div className={`${formControlClass}`}>
          <input
            type="password"
            name="password"
            required
            className={`${inputClass} `}
            onFocus={handleOnFocus("focus")}
            onBlur={handleOnFocus("blur")}
            onChange={handleOnChange}
          />
          <LabelWave
            label="Password"
            hasFocus={passwordHasFocus}
            inputValue={password}
          ></LabelWave>
        </div>

        <button className=" text-black cursor-pointer inline-block w-full bg-blue-200 p-4 text-base rounded-md focus:outline-0 active:scale-95 ">
          Login
        </button>

        <p className=" mt-7 ">
          Don't have an account?{" "}
          <a className=" no-underline text-blue-200 cursor-pointer ">
            Register
          </a>{" "}
        </p>
      </form>
    </div>
  );
};
