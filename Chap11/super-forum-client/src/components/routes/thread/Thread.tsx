import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Thread.css";
import ThreadHeader from "./ThreadHeader";
import ThreadCategory from "./ThreadCategory";
import ThreadTitle from "./ThreadTitle";
import ThreadItem from "../../../models/Thread";
import { dataService } from "../../../services/DataService";
import Nav from "../../areas/Nav";
import ThreadBody from "./ThreadBody";

const Thread = () => {
  const [thread, setThread] = useState<ThreadItem | undefined>();
  const { id } = useParams();

  useEffect(() => {
    console.log("Thread id", id);
    if (id && id > 0) {
      dataService.getThreadById(id).then((th) => {
        setThread(th);
      });
    }
  }, [id]);

  return (
    <div className="thread-container">
      <div className="thread-nav-container">
        <Nav />
      </div>
      <div className="thread-content-container">
        <ThreadHeader
          userName={thread?.userName}
          lastModifiedOn={thread ? thread.lastModifiedOn : new Date()}
          title={thread?.title}
        />
        <ThreadCategory categoryName={thread?.category?.name} />
        <ThreadTitle title={thread?.title} />
        <ThreadBody body={thread?.body} />
      </div>
    </div>
  );
};

export default Thread;
