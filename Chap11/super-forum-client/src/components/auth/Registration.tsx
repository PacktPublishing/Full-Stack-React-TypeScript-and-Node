import React, { FC, useReducer, useState } from "react";
import ReactModal from "react-modal";
import "./Registration.css";
import {
  isPasswordValid,
  PasswordTestResult,
} from "../../common/validators/PasswordValidator";

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case "userName":
      return { ...state, userName: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "passwordConfirm":
      return { ...state, passwordConfirm: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "resultMsg":
      return { ...state, resultMsg: action.payload };
    default:
      return { ...state, resultMsg: "A failure has occurred." };
  }
};

export interface RegistrationProps {
  isOpen: boolean;
  onClickToggle: (
    e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => void;
}

const Registration: FC<RegistrationProps> = ({ isOpen, onClickToggle }) => {
  const [isRegisterDisabled, setRegisterDisabled] = useState(true);
  const [
    { userName, password, email, passwordConfirm, resultMsg },
    dispatch,
  ] = useReducer(userReducer, {
    userName: "davec",
    password: "",
    email: "admin@dzhaven.com",
    passwordConfirm: "",
    resultMsg: "",
  });

  const allowRegister = (msg: string, setDisabled: boolean) => {
    setRegisterDisabled(setDisabled);
    dispatch({ payload: msg, type: "resultMsg" });
  };

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "userName" });
    if (!e.target.value) allowRegister("Username cannot be empty", true);
    else allowRegister("", false);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "email" });
    if (!e.target.value) allowRegister("Email cannot be empty", true);
    else allowRegister("", false);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "password" });
    const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value);

    if (!passwordCheck.isValid) {
      allowRegister(passwordCheck.message, true);
      return;
    }
    passwordsSame(passwordConfirm, e.target.value);
  };
  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "passwordConfirm" });
    passwordsSame(password, e.target.value);
  };
  const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
    if (passwordVal !== passwordConfirmVal) {
      allowRegister("Passwords do not match", true);
      return false;
    } else {
      allowRegister("", false);
      return true;
    }
  };

  const onClickRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onClickToggle(e);
  };

  const onClickCancel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClickToggle(e);
  };

  return (
    <ReactModal
      className="modal-menu"
      isOpen={isOpen}
      onRequestClose={onClickToggle}
      shouldCloseOnOverlayClick={true}
    >
      <form>
        <div className="reg-inputs">
          <div>
            <label>username</label>
            <input type="text" value={userName} onChange={onChangeUserName} />
          </div>
          <div>
            <label>email</label>
            <input type="text" value={email} onChange={onChangeEmail} />
          </div>
          <div>
            <label>
              password &nbsp;{" "}
              <label style={{ fontSize: "small" }}>
                (min length 8, 1 cap, 1 number, 1 symbol)
              </label>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div>
            <label>password confirmation</label>
            <input
              type="password"
              placeholder="Password Confirmation"
              value={passwordConfirm}
              onChange={onChangePasswordConfirm}
            />
          </div>
        </div>
        <div className="form-buttons">
          <div className="form-btn-left">
            <button
              style={{ marginLeft: ".5em" }}
              className="action-btn"
              disabled={isRegisterDisabled}
              onClick={onClickRegister}
            >
              Register
            </button>
            <button
              style={{ marginLeft: ".5em" }}
              className="cancel-btn"
              onClick={onClickCancel}
            >
              Close
            </button>
          </div>

          <span className="form-btn-right">
            <strong>{resultMsg}</strong>
          </span>
        </div>
      </form>
    </ReactModal>
  );
};

export default Registration;
