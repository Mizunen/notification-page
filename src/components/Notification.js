import React from "react";
import styles from "./Notification.module.css";
const Notification = (props) => {
  let notificationContent = null;
  const { notification } = props;
  let notSeenContent = (
    <span className={styles["notification-alert__container"]}>
      <div className={styles["notification-alert"]}></div>
    </span>
  );

  let userName = (
    <a className={styles["notification__username"]}>{notification.userName}</a>
  );
  let time = (
    <span className={styles["notification__time"]}>{notification.time}</span>
  );
  switch (notification.action) {
    case "reaction":
      notificationContent = (
        <>
          <p>
            {userName} reacted to your recent post{" "}
            <a className={styles["notification__post-name"]}>
              {notification.postName}
            </a>
            {time}
            {!notification.wasSeen && notSeenContent}
          </p>
        </>
      );
      break;

    case "joined":
      notificationContent = (
        <>
          <p>
            {userName} has joined{" "}
            <a className={styles["notification__group-name"]}>
              {notification.groupName}
            </a>
            {time}
            {!notification.wasSeen && notSeenContent}
          </p>
        </>
      );
      break;

    case "left":
      notificationContent = (
        <>
          <p>
            {userName} left{" "}
            <a className={styles["notification__group-name"]}>
              {notification.groupName}
            </a>{" "}
            {!notification.wasSeen && notSeenContent}
            {time}
          </p>
        </>
      );
      break;

    case "followed":
      notificationContent = (
        <>
          <p>
            {userName} followed you {time}
          </p>
          {!notification.wasSeen && notSeenContent}
        </>
      );
      break;

    case "comment":
      notificationContent = (
        <>
          <p>
            {userName} commented on your picture {time}
            {!notification.wasSeen && notSeenContent}
          </p>
          <figure
            className={`${styles["notification-picture"]} ${styles["notification-img"]}`}
          >
            <a>
              <img src={notification.picture} />
            </a>
          </figure>
        </>
      );
      break;
    case "private message":
      notificationContent = (
        <div>
          <p>
            {userName} has sent you a private message {time}
            {!notification.wasSeen && notSeenContent}
          </p>

          <p className={styles["notification__message"]}>
            {notification.message}
          </p>
        </div>
      );
      break;

    default:
      console.log(notification.action);
      notificationContent = <p>No notifications {notification.action}</p>;
  }

  let onMarkAsReadHandler = () => {
    props.onMarkAsRead(notification.id);
  };

  return (
    <section
      className={`${styles.notification} ${
        !notification.wasSeen && styles.unseen
      }`}
      onClick={onMarkAsReadHandler}
    >
      <figure className={styles["notification-img"]}>
        <img
          src={props.notification.profileImage}
          alt={props.notification.userName}
        />
      </figure>
      {notificationContent}

      {/* {time} */}
      {/* {!props.notification.wasSeen && (
        <div className={styles["notification-alert"]}></div>
      )} */}
    </section>
  );
};

export default Notification;
