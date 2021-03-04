import React from 'react';
import './ChatMessage.css';
import styled from 'styled-components';

function ChatMessage(props) {
  const { text, name, image, timestamp } = props;
  const time = new Date(timestamp.toDate());

  const nth = function (d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };
  const date = time.getDate();
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ][time.getMonth()];

  let year = time.getFullYear();

  const myTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(time);

  const formattedTime = `${month} ${date}${nth(date)} ${year} at ${myTime}`;

  return (
    <Container className="userMessage">
      <div className="userAvatar">
        <img src={image} alt="userImage" />
      </div>
      <div className="messageContent">
        <div className="user__name-container">
          <p className="user__name">{name}</p>
          <span className="user__messageTime">{formattedTime}</span>
        </div>
        <div className="user__message">{text}</div>
      </div>
    </Container>
  );
}
export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  :hover {
    background: rgba(29, 28, 29, 0.03);
  }
`;
