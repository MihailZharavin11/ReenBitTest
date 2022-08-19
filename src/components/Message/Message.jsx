import React from "react";
import Avatar from "../Avatar/Avatar";
import "./message.scss";

const Message = ({ avatar, to, value, date }) => {
  const dateValue = new Date(date);
  const side = to === "interlocutor" ? "message--start" : "message--end";
  const messageColor =
    to === "interlocutor" ? "message__items--dark" : "message__items--light";
  let dateLocal = dateValue.toLocaleDateString();
  var timeLocal = dateValue.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className={`${"message"} ${side}`}>
      {to === "interlocutor" ? (
        <Avatar img={avatar} width={60} heigth={60} />
      ) : null}
      <div className="message__content">
        <div className={`${"message__items"} ${messageColor}`}>{value}</div>
        <div
          className={`${"message__date"} ${side}`}
        >{`${dateLocal}, ${timeLocal}`}</div>
      </div>
    </div>
  );
};

export default Message;
