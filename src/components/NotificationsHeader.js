import React from "react";
import styles from "./NotificationsHeader.module.css";
const NotificationsHeader = (props) => {
  const onMarkAsReadHandler = () => {
    props.onMarkAsRead("all");
  };
  return (
    <header>
      <p>
        Notifications{" "}
        {props.numUnseen !== 0 && (
          <span className={styles["notifications__number"]}>
            {props.numUnseen}
          </span>
        )}
      </p>
      <button className={styles["mark-all"]} onClick={onMarkAsReadHandler}>
        Mark all as read
      </button>
    </header>
  );
};

export default NotificationsHeader;
