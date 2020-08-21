import React, { useEffect, useState } from "react";
import { AppState } from "../../store/AppState";
import { useSelector, useDispatch } from "react-redux";
import { UserProfileSetType } from "../../store/user/Reducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRegistered,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import Registration from "../auth/Registration";
import "./SideBarMenus.css";
import Login from "../auth/Login";

const SideBarMenus = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const user = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // todo: replace with GraphQL call
    dispatch({
      type: UserProfileSetType,
      payload: {
        id: 1,
        userName: "testUser",
      },
    });
  }, [dispatch]);

  const onClickRegister = (e: React.MouseEvent<Element, MouseEvent>) => {
    setShowRegister(!showRegister);
  };

  const onClickToggleRegister = () => {
    setShowRegister(!showRegister);
  };

  const onClickLogin = (e: React.MouseEvent<Element, MouseEvent>) => {
    setShowLogin(!showLogin);
  };

  const onClickToggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <React.Fragment>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span className="menu-name">{user?.userName}</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faRegistered} />
          <span onClick={onClickRegister} className="menu-name">
            register
          </span>
          <Registration
            isOpen={showRegister}
            onClickToggle={onClickToggleRegister}
          />
        </li>
        <li>
          <FontAwesomeIcon icon={faSignInAlt} />
          <span onClick={onClickLogin} className="menu-name">
            login
          </span>
          <Login isOpen={showLogin} onClickToggle={onClickToggleLogin} />
        </li>
      </ul>
    </React.Fragment>
  );
};

export default SideBarMenus;
