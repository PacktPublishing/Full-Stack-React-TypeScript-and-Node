import React, { FC } from "react";
import { getTimePastIfLessThanDay } from "../../../common/dates";

interface UserNameAndTimeProps {
  userName?: string;
  lastModifiedOn?: Date;
}

const UserNameAndTime: FC<UserNameAndTimeProps> = ({
  userName,
  lastModifiedOn,
}) => {
  return (
    <span>
      <strong>{userName}</strong>
      <label style={{ marginLeft: "1em" }}>
        {lastModifiedOn ? getTimePastIfLessThanDay(lastModifiedOn) : ""}
      </label>
    </span>
  );
};

export default UserNameAndTime;
