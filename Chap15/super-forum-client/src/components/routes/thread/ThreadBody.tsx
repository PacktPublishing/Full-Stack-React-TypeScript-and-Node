import React, { FC } from "react";
import RichEditor from "../../editor/RichEditor";
import { Node } from "slate";

interface ThreadBodyProps {
  body?: string;
  readOnly: boolean;
  sendOutBody: (body: Node[]) => void;
}

const ThreadBody: FC<ThreadBodyProps> = ({ body, readOnly, sendOutBody }) => {
  return (
    <div className="thread-body-container">
      <strong>Body</strong>
      <div className="thread-body-editor">
        <RichEditor
          existingBody={body}
          readOnly={readOnly}
          sendOutBody={sendOutBody}
        />
      </div>
    </div>
  );
};

export default ThreadBody;
