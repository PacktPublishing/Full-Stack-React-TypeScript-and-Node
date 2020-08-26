import React, { FC } from "react";
import { getTimePastIfLessThanDay } from "../../../common/dates";

interface ThreadHeaderProps {
    header?: string;
    userName?: string;
    lastModifiedOn: Date;
    categoryId?: string;
    title?: string;
    body?: string;
}

const ThreadHeader: FC<ThreadHeaderProps> = ({ header, userName, lastModifiedOn, categoryId, title, body }) => {

    return (
        <div className="thread-header-container">
            <h3>{header}</h3>
            <div>
                <strong>{userName}</strong>
                <label>{getTimePastIfLessThanDay(lastModifiedOn)}</label>
            </div>
        </div>
    );
}

export default ThreadHeader;