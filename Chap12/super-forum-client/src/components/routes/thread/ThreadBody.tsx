import React, { FC } from "react";
import RichEditor from "../../editor/RichEditor";

interface ThreadBodyProps {
  body?: string;
}

const ThreadBody: FC<ThreadBodyProps> = ({ body }) => {
  return (
    <div className="thread-body-container">
      <strong>Body</strong>
      <div className="thread-body-editor">
        <RichEditor existingBody={body} />
      </div>
    </div>
  );
};

export default ThreadBody;
