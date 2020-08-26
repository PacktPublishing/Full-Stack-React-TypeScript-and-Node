import React, { FC, useState, useEffect } from "react";
import CategoryThread from "../../../models/CategoryThread";
import "./TopCategory.css";

interface TopCategoryProps {
    topCategories: Array<CategoryThread>
}

const TopCategory: FC<TopCategoryProps> = ({ topCategories }) => {
    const [threads, setThreads] = useState<JSX.Element | undefined>();

    useEffect(() => {
        if (topCategories && topCategories.length > 0) {
            const newThreadElements = topCategories.map(top => 
                <li key={top.threadId}>
                    <span className="clickable-span">
                    {top.title}
                    </span>
                </li>
            );

            setThreads(<ul className="topcat-threads">
                {newThreadElements}
            </ul>);
        }
    }, [topCategories]);

    return (
        <div className="topcat-item-container">
            <div>
                <strong>{topCategories[0].category}</strong>
            </div>
            {threads}
        </div>
    )
}

export default TopCategory;