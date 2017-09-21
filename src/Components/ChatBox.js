import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Avatar from '@atlaskit/avatar';
import {Form,Input,Me,You,Chat,Avatars,DivYou,Force,NewMess,ContentMess,Icon,HeartIcon} from '../STYLED/ChatBox.jsx'
import CameraIcon from '@atlaskit/icon/glyph/camera';
import AttachmentIcon from '@atlaskit/icon/glyph/attachment';
import EmojiEmojiIcon from '@atlaskit/icon/glyph/emoji/emoji';
import HipchatSdVideoIcon from '@atlaskit/icon/glyph/hipchat/sd-video';
import EmojiSymbolsIcon from '@atlaskit/icon/glyph/emoji/symbols';
import MediaServicesScaleLargeIcon from '@atlaskit/icon/glyph/media-services/scale-large';
export default class ChatBox extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.iconSubmit = this.iconSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {arr:[{mess:'a Khang dz oi',id:2,time:"10:00am"},{mess:"lô cc",id:1,time:"10:00am"},{mess:"hihi",id:2}],
                      show:false,
                      lastMess:''                  
        };
      }
      scrollToBottom = () => {
        const node = ReactDOM.findDOMNode(this.messagesEnd);
        node.scrollTop = node.scrollHeight;
      }
      
      componentDidMount() {
        this.scrollToBottom();
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }
    
    iconSubmit(event){
      console.log('heart');
      this.state.arr.push({mess:"/heart",id:1});
      this.setState(this.state);
    }
    handleChange(event) {
      this.setState({lastMess: event.target.value
      });
      event.target.value=this.state.lastMess;
      }
    
    handleSubmit(event) {
      if(this.state.lastMess!=='')
      this.state.arr.push({mess:this.state.lastMess,id:1});
      this.setState(this.state);
      this.state.lastMess='';
      event.preventDefault();
      }
    render(){
        return(
            <div>
              <Chat ref={(el) => { this.messagesEnd = el; }}>
                    {
                      this.state.arr.map((content,idx) =>{
                       return content.id ==1?
                         content.mess=='/heart'?
                         <HeartIcon><EmojiSymbolsIcon size="large" color ="red"/></HeartIcon>
                        : <Me key={idx}>{content.mess}</Me>
                        :<DivYou key={idx}>
                          <Avatars>
                            <Avatar name={this.props.name} size="medium" />
                          </Avatars>
                          <You >{content.mess}</You>                          
                         </DivYou>
                      })
                    }
                </Chat>
              <NewMess>
                <ContentMess>
                 <Form onSubmit={this.handleSubmit}>
                   <Input type="text" value={this.state.lastMess} onChange={this.handleChange}
                     placeholder="Type your message..." />
                    <label/> 
                 </Form>
                 <Icon>
                   <CameraIcon/>
                   <AttachmentIcon/>
                   <EmojiEmojiIcon/>
                   <MediaServicesScaleLargeIcon/>
                   <HipchatSdVideoIcon/>
                   <EmojiSymbolsIcon color ="red" onClick={this.iconSubmit}/>
                 </Icon>  
                 </ContentMess> 
              </NewMess>       
              
            </div>
        )
    }
}