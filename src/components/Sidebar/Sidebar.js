import React from 'react';
import styled from 'styled-components';
import './Sidebar.css';
import { penIcon } from './IconPen';
import { sidebarItemsData } from '../../data/SidebarData';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './CustomScrollbar.css';
import db from '../../firebase';

function Sidebar(props) {
  const addNewChannel = () => {
    const promptName = prompt('Enter channel name');
    if (promptName) {
      db.collection('rooms').add({
        name: promptName,
      });
    }
  };

  const expandChannelHandler = function () {
    document.querySelector('.channel__btn--expand').classList.toggle('expand');

    document.querySelector('.channelList').classList.toggle('display-none');
  };

  const channelClickHandler = function (e) {
    const clickChannel = e.target.closest('li');
    if (!clickChannel) return;

    document
      .querySelector('.channelList')
      .querySelectorAll('li')
      .forEach((channel) => {
        channel.classList.remove('clickedChannel');
      });
    document
      .querySelector('.mainChannels')
      .querySelectorAll('li')
      .forEach((channel) => {
        channel.classList.remove('clickedChannel');
      });

    clickChannel.classList.add('clickedChannel');
  };

  return (
    <Container>
      <div className="workspaceContainer">
        <div className="workspaceContainer__btn-container">
          <button className="workspace__btn">Clever Programmer</button>
          <span className="icon-down"></span>
        </div>
        <button className="workspace__btn--new-message">{penIcon.icon}</button>
      </div>

      <ChannelsWrapper>
        <SimpleBar
          style={{
            maxHeight: '100%',
          }}
        >
          <MainChannels className="mainChannels">
            {sidebarItemsData.map((item, i) => {
              let fontSize = '18px';
              if (i === 2 || i === 4) {
                fontSize = '16px';
              }
              return (
                <MainChannelItem
                  onClick={channelClickHandler}
                  key={`${item}-${i}`}
                >
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
              <button
                className="channel__btn channel__btn--expand"
                id="btn-expand"
                onClick={expandChannelHandler}
              >
                <span className="icon icon-down"></span>
              </button>
              <div className="channel-title">Channels</div>
              <button
                className="channel__btn channel__btn--addChannel"
                onClick={addNewChannel}
              >
                <span className="icon icon-add"></span>
              </button>
            </div>

            <ChannelsList className="channelList">
              {props.rooms
                .sort((a, b) => {
                  if (a.name >= b.name) return 1;
                  else return -1;
                })
                .map((item, i, arr) => {
                  return (
                    <Channel key={item.id} onClick={channelClickHandler}>
                      <span className="icon" data-icon={'\uE125'}></span>
                      <p className="name">{item.name}</p>
                    </Channel>
                  );
                })}

              <AddChannel onClick={addNewChannel}>
                <span className="icon" data-icon={'\uE281'}></span>
                <p className="name">Add channels</p>
              </AddChannel>
            </ChannelsList>
          </ChannelsContainer>
        </SimpleBar>
      </ChannelsWrapper>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div({
  background: '#3f0e40',
});

const ChannelsWrapper = styled.div`
  height: calc(100vh - 102px);
`;

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
    flex-shrink: 0;
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

const ChannelsContainer = styled.div`
  padding-bottom: 20px;
`;

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
    flex-shrink: 0;
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
