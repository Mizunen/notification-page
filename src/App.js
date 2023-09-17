import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import angelaAvatarImg from "./assets/images/avatar-angela-gray.webp";
import annaAvatar from "./assets/images/avatar-anna-kim.webp";
import jacobAvatar from "./assets/images/avatar-jacob-thompson.webp";
import kimberlyAvatar from "./assets/images/avatar-kimberly-smith.webp";
import markAvatar from "./assets/images/avatar-mark-webber.webp";
import nathanAvatar from "./assets/images/avatar-nathan-peterson.webp";
import rizkyAvatar from "./assets/images/avatar-rizky-hasanuddin.webp";
import chessImage from "./assets/images/image-chess.webp";
import "./main.css";
import Notifications from "./components/Notifications";
import NotificationsHandler from "./components/NotificationsHeader";
import Card from "./components/ui/Card";
function App() {
  const [notifications, setNotifications] = useState([
    {
      id: 0,
      profileImage: markAvatar,
      userName: "Mark Webber",
      action: "reaction",
      wasSeen: false,
      postName: "My first tournament today!",
      time: "1m ago",
    },
    {
      id: 1,
      profileImage: angelaAvatarImg,
      userName: "Angela Gray",
      action: "followed",
      wasSeen: false,
      time: "5m ago",
    },
    {
      id: 2,
      profileImage: jacobAvatar,
      userName: "Jacob Thompson",
      action: "joined",
      groupName: "Chess Club",
      wasSeen: false,
      time: "1 day ago",
    },
    {
      id: 3,
      profileImage: rizkyAvatar,
      userName: "Rizky Hasanuddin",
      action: "private message",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      wasSeen: true,
      time: "5 days ago",
    },
    {
      id: 4,
      profileImage: kimberlyAvatar,
      userName: "Kimberly Smith",
      action: "comment",
      picture: chessImage,
      wasSeen: true,
      time: "1 week ago",
    },
    {
      id: 5,
      profileImage: nathanAvatar,
      userName: "Nathan Peterson",
      action: "reaction",
      postName: "5 end-game strategies to increase your win rate",
      wasSeen: true,
      time: "2 weeks ago",
    },
    {
      id: 6,
      profileImage: annaAvatar,
      userName: "Anna Kim",
      action: "left",
      groupName: "Chess Club",
      wasSeen: true,
      time: "2 weeks ago",
    },
  ]);

  let unseen = 0;

  notifications.map((notification) => {
    if (notification.wasSeen === false) {
      unseen += 1;
    }
  });

  let markAsReadHandler = (action) => {
    if (action === "all") {
      let newNotifications = notifications.map((notification) => {
        if (notification.wasSeen === false) {
          return { ...notification, wasSeen: true };
        }
        return notification;
      });
      setNotifications(newNotifications);
    } else {
      if (notifications[action].wasSeen === false) {
        setNotifications((prevState) => {
          let newNotifications = [...prevState];
          newNotifications[action].wasSeen = true;
          return newNotifications;
        });
      }
    }
  };
  console.log(unseen);
  return (
    <Card>
      <NotificationsHandler
        numUnseen={unseen}
        onMarkAsRead={markAsReadHandler}
      />
      <Notifications
        notifications={notifications}
        onMarkAsRead={markAsReadHandler}
      />
    </Card>
  );
}

export default App;
