import React, { Component } from 'react';
import Chat from './ChatBox';
import {ChatBox,Header,Name,Time} from '../STYLED/ChatBox.jsx'
import styled from 'styled-components';

type Props = {
    name: String,
    time: String
}

export default class ChatBoxStateless extends React.Component{
    props: Props
    static defaultProps={
        name:"Luong Beat",
        time:'online 2 hour ago'
      }
    render(){
        return(
            <ChatBox>
               <Header>
                <Name>{this.props.name}</Name>
                <Time>{this.props.time}</Time>
              </Header>    
              <Chat name={this.props.name}>
              </Chat>                    
            </ChatBox>      
        )
    }
}