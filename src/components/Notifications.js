import React from "react";
import Notification from "./Notification";

const Notifications = (props) => {
  console.log(props.notifications);
  return (
    <section>
      {props.notifications.map((notification) => {
        return (
          <Notification
            notification={notification}
            onMarkAsRead={props.onMarkAsRead}
          />
        );
      })}
    </section>
  );
};

export default Notifications;
