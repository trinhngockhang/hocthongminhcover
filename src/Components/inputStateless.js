import React, { Component } from 'react';
import Chat from './input';

import styled from 'styled-components';


const ChatBox = styled.div`
position:fixed;
width:50%;
height:100%;
border-style: groove;
display:block;
left:1px;
`;



export default class InputStateless extends React.Component{
    render(){
        return(
            <ChatBox>
              <Chat> </Chat>                    
            </ChatBox>      
          
        )
    }
}