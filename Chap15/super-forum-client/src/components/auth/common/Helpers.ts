import { Dispatch } from "react";

export const allowSubmit = (
  dispatch: Dispatch<any>,
  msg: string,
  setDisabled: boolean
) => {
  dispatch({ type: "isSubmitDisabled", payload: setDisabled });
  dispatch({ payload: msg, type: "resultMsg" });
};
