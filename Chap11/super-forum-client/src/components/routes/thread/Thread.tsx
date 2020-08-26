import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Thread.css";
import ThreadHeader from "./ThreadHeader";
import ThreadItem from "../../../models/Thread";
import { dataService } from "../../../services/DataService";

const Thread = () => {
    const [thread, setThread] = useState<ThreadItem | undefined>();
    const { id } = useParams();

    useEffect(() => {
        console.log("Thread id", id);
        if(id && id > 0) {
            dataService.getThreadById(id)
            .then(th => {
                setThread(th);
            });
        }
    }, [id]);

    return (
        <div className="thread-container">
            <ThreadHeader 
                header={thread?.category?.name}
                userName={thread?.userName}
                lastModifiedOn={thread ? thread.lastModifiedOn : new Date()}
                categoryId={thread?.category?.id}
                title={thread?.title}
                body={thread?.body}
            />
        </div>
    );
}

export default Thread;