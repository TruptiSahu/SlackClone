import React from 'react';
import styled from 'styled-components';
import './Sidebar.css';
import { penIcon } from './IconPen';
import { sidebarItemsData } from './SidebarData';
import { channelNameList } from './ChannelListData';

function Sidebar() {
  return (
    <Container>
      <div className="workspaceContainer">
        <div className="workspaceContainer__btn-container">
          <button className="workspace__btn">Clever Programmer</button>
          <span className="icon-down"></span>
        </div>
        <button className="workspace__btn--new-message">{penIcon.icon}</button>
      </div>

      <MainChannels>
        {sidebarItemsData.map((item, i) => {
          let fontSize = '18px';
          if (i === 2 || i === 4) {
            fontSize = '16px';
          }
          return (
            <MainChannelItem>
              <span
                className="icon"
                style={{ fontSize: fontSize }}
                data-icon={item.icon}
              ></span>
              <p className="name">{item.text}</p>
            </MainChannelItem>
          );
        })}
      </MainChannels>

      <ChannelsContainer>
        <div className="newChannelContainer">
          <button className="channel__btn channel__btn--expand" id="btn-expand">
            <span className="icon icon-down"></span>
          </button>
          <div className="channel-title">Channels</div>
          <button className="channel__btn channel__btn--addChannel">
            <span className="icon icon-add"></span>
          </button>
        </div>

        <ChannelsList className="channelList">
          {channelNameList.map((item) => {
            return (
              <Channel>
                <span className="icon" data-icon={'\uE125'}></span>
                <p className="name">{item}</p>
              </Channel>
            );
          })}

          <AddChannel>
            <span className="icon" data-icon={'\uE281'}></span>
            <p className="name">Add channels</p>
          </AddChannel>
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div({
  background: '#3f0e40',
});

const MainChannels = styled.ul({
  margin: '12px 0',
});

const MainChannelItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 28px;
  padding: 0 16px;
  cursor: pointer;
  width: 100%;
  color: rgb(188, 171, 188);

  :hover {
    background: #350d36;
  }

  > .icon {
    font-family: 'Slack v2';
    font-style: normal;
    font-weight: 400;
    width: 20px;
    opacity: 1;
    font-size: 16px;
    display: 'inline-flex';
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 0 -2px;
    font-size: 18px;
    width: 26px;
    height: 20px;
  }

  > .icon::before {
    content: attr(data-icon);
    font-family: 'Slack v2';
    font-weight: 400;
    line-height: 1;
  }

  > .icon:nth-of-type(3) {
  }

  > .name {
    margin-right: auto;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    opacity: 1;
    line-height: 28px;
    color: rgb(188, 171, 188);
    cursor: pointer;
    font-size: 15px;
    font-family: 'Slack-Lato', sans-serif;
    font-weight: 400;
  }
`;

const ChannelsContainer = styled.div``;

const ChannelsList = styled.div``;

const Channel = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 28px;
  padding: 0 16px;
  cursor: pointer;
  width: 100%;
  color: rgb(188, 171, 188);

  :hover {
    background: #350d36;
  }

  > .icon {
    font-family: 'Slack v2';
    font-style: normal;
    font-weight: 400;
    width: 20px;
    opacity: 1;
    font-size: 16px;
    display: 'inline-flex';
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 0 -2px;
    width: 26px;
    height: 20px;
    margin-left: 8px;
    font-size: 20px;
  }

  > .icon::before {
    content: attr(data-icon);
    font-family: 'Slack v2';
    font-weight: 400;
    line-height: 1;
  }

  > .name {
    margin-right: auto;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    opacity: 1;
    line-height: 28px;
    color: rgb(188, 171, 188);
    cursor: pointer;
    font-size: 15px;
    font-family: 'Slack-Lato', sans-serif;
    font-weight: 400;
  }
`;

const AddChannel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 28px;
  padding: 0 16px;
  cursor: pointer;
  width: 100%;
  color: rgb(188, 171, 188);

  :hover {
    background: #350d36;
  }

  > .icon {
    font-family: 'Slack v2';
    font-style: normal;
    font-weight: 400;
    width: 20px;
    opacity: 1;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 0 -2px;
    height: 20px;
    margin-left: 8px;
    font-size: 20px;
    margin-right: 8px;
    background: rgba(255, 255, 255, 0.1);
  }

  > .icon::before {
    content: attr(data-icon);
    font-family: 'Slack v2';
    font-weight: 400;
    line-height: 1;
  }

  > .name {
    margin-right: auto;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    opacity: 1;
    line-height: 28px;
    color: rgb(188, 171, 188);
    cursor: pointer;
    font-size: 15px;
    font-family: 'Slack-Lato', sans-serif;
    font-weight: 400;
    paddingleft: 5px;
  }
`;
