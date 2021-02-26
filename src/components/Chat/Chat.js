import React from 'react';
import styled from 'styled-components';
import './Chat.css';
import ChatInput from '../ChatInput/ChatInput';
import ChatMessage from '../ChatMessage/ChatMessage';
import db from '../../firebase';

function Chat(props) {
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            <span className="icon icon-hash"></span>
            <p>profit-with-javascript</p>
            <button className="btn-channelStar">
              <span className="icon icon-star"></span>
            </button>
          </ChannelName>
          <ChannelInfo>
            <span className="channel-pin">
              <span className="icon icon-pin"></span>
              94
            </span>
            <span className="divider">|</span>
            <p className="channel-topic">Access JavaScript course here</p>
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div className="group-members">
            <div className="group-membersImg">
              <span className="avatar"></span>
              <span className="avatar"></span>
              <span className="avatar"></span>
              <span className="group-count">{props.groupCount}</span>
            </div>
          </div>
          <button className="btn btn-addMember">
            <span className="icon icon-user"></span>
          </button>
          <button className="btn btn-channelDetail">
            <span className="icon icon-info"></span>
          </button>
        </ChannelDetails>
      </Header>
      <MessageContainer>
        <ChatMessage />
      </MessageContainer>
      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div({
  height: 'calc(100vh - 38px)',
  display: 'grid',
  gridTemplateRows: '64px auto min-content',
});

const Header = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 20px;
  border-bottom: 1px solid rgba(29, 28, 29, 0.13);
  flex-shrink: 0;
`;

const Channel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-item: center;
  flex-basis: 0;
  width: 0;
  flex-grow: 1;
`;

const ChannelName = styled.div`
  color: rgb(29, 28, 29);
  font-weight: 900;
  font-family: 'Slack-Lato', sans-serif;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ChannelInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  font-size: 13px;
  line-height: 1.38463;
  font-weight: 400;
  color: rgba(29, 28, 29, 0.7);
  font-family: 'Slack-Lato', sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 0;
`;

const ChannelDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(29, 28, 29, 0.7);
  font-size: 13px;
  line-height: 24px;
  margin-left: 24px;
  white-space: nowrap;
`;

const MessageContainer = styled.div`
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(29, 28, 29, 0.52);
    border-radius: 10px;
  }
`;
