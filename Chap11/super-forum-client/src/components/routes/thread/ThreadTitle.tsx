import React, { FC } from "react";

interface ThreadTitleProps {
  title?: string;
}

const ThreadTitle: FC<ThreadTitleProps> = ({ title }) => {
  return (
    <div className="thread-title-container">
      <strong>Title</strong>
      <div className="field">
        <input type="text" value={title} placeholder="Title" />
      </div>
    </div>
  );
};

export default ThreadTitle;
