import React, { FC, useEffect, useState } from "react";
import ThreadItem from "../../../models/ThreadItem";
import ThreadResponse from "./ThreadResponse";

interface ThreadResponsesBuilderProps {
  threadItems?: Array<ThreadItem>;
  readOnly: boolean;
  refreshThread?: () => void;
}

const ThreadResponsesBuilder: FC<ThreadResponsesBuilderProps> = ({
  threadItems,
  readOnly,
  refreshThread,
}) => {
  const [responseElements, setResponseElements] = useState<
    JSX.Element | undefined
  >();

  useEffect(() => {
    if (threadItems) {
      const thResponses = threadItems.map((ti) => {
        return (
          <li key={`thr-${ti.id}`}>
            <ThreadResponse
              body={ti.body}
              userName={ti.user.userName}
              lastModifiedOn={ti.createdOn}
              points={ti.points}
              readOnly={readOnly}
              threadItemId={ti?.id || "0"}
              threadId={ti.thread.id}
              refreshThread={refreshThread}
            />
          </li>
        );
      });
      setResponseElements(<ul>{thResponses}</ul>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadItems, readOnly]);

  return (
    <div className="thread-body-container">
      <strong style={{ marginBottom: ".75em" }}>Responses</strong>
      {responseElements}
    </div>
  );
};

export default ThreadResponsesBuilder;
