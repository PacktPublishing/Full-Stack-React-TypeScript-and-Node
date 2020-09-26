import React, { FC } from "react";
import RichEditor from "../../editor/RichEditor";

interface ThreadBodyProps {
  body?: string;
  readOnly: boolean;
}

const ThreadBody: FC<ThreadBodyProps> = ({ body, readOnly }) => {
  return (
    <div className="thread-body-container">
      <strong>Body</strong>
      <div className="thread-body-editor">
        <RichEditor existingBody={body} readOnly={readOnly} />
      </div>
    </div>
  );
};

export default ThreadBody;
