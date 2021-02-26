import React from 'react';
import './ChatMessage.css';
import styled from 'styled-components';

function ChatMessage() {
  return (
    <Container>
      <div className="userAvatar">
        <img
          src="https://randomuser.me/api/portraits/women/11.jpg"
          alt="userImage"
        />
      </div>
      <div className="messageContent">
        <div className="user__name-container">
          <p className="user__name">Trupti Ranjan Sahu</p>
          <span className="user__messageTime">Feb 24th at 1:55:47 PM</span>
        </div>
        <div className="user__message">
          explicabo voluptate vel, sit aliquid iure quaerat distinctio
          voluptatibus molestiae, laudantium nobis libero quidem est. dolollitia
          error dolore ipsum harum neque debitis, nostrum quod amet minima
          aliquid deserunt nisi! Nemo in aliquid reiciendis. Libero illum a
          error deserunt ea, sed id quod repellendus iure labore ex eum maxime
          doloribus porro eaque. Autem, esse veritatis fugit reprehenderit ad
          deleniti debitis unde
        </div>
      </div>
    </Container>
  );
}
export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  :hover {
    background: rgba(29, 28, 29, 0.03);
  }
`;
