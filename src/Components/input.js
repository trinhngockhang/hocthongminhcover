import React, { Component } from 'react';
import styled from 'styled-components';
const Form = styled.form`
  position: absolute;
  width:100%;
  bottom:0px;
  padding:0px; 
  display:block;
`;

const Input = styled.input`
  height:50px;
  width:100%;
  border-style: none;
  
`;

const Div = styled.div`
  position: absolute;
  bottom:0px;
  padding:3px;
  font-family: inherit;
`;

const Name = styled.h1`
 font-size: 23px;
 font-weight: 400;
`;

const Time = styled.p`
  color: rgba(0, 0, 0, .40);
  vertical-align: middle;
  margin-top: 2px;
`;

const Header = styled.div`
  text-align:center;
`;

const Me = styled.p`
  border-bottom-left-radius: 1.3em;
  border-top-left-radius: 1.3em;
  background-color: #0084ff;
  color: #fff;
  margin: 1px 0;
  padding: 6px 12px;
  
`;

const You = styled.p`
  border-bottom-left-radius: 1.3em;
  border-top-left-radius: 1.3em;
  background-color: #f1f0f0;
  color: rgba(0, 0, 0, 1);
  margin: 1px 0;
  padding: 6px 12px;
`; 

export default class InputStateful extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {arr:[{mess:'hello',id:1},{mess:"what's your name?",id:2}],
                      show:false,
                      lastMess:''                  
        };
      }
    static defaultProps={
      name:"Minh béo",
      time:'online 2 hour ago'
    }
    handleChange(event) {
      this.setState({lastMess: event.target.value
      });
      event.target.value=this.state.lastMess;
      }
    
    handleSubmit(event) {
      this.state.arr.push({mess:this.state.lastMess,id:1});
      this.setState(this.state);
      console.log(event);
      this.state.lastMess='';
      event.preventDefault();
      }
    render(){
        return(
            <div>
              
              <Header>
              <Name>{this.props.name}</Name>
              <Time>{this.props.time}</Time>
              </Header>  

                <div>
                    {
                      this.state.arr.map((content,idx) =>{
                       return content.id ==1?
                        <Me key={idx}>{content.mess}</Me>
                        :  <You key={idx}>{content.mess}</You>
                      })
                    }
                </div>   
            
             <Form onSubmit={this.handleSubmit}>
               <Input type="text" value={this.state.lastMess} onChange={this.handleChange}
                placeholder="Type your message..." />
               {/* <input type="submit" value="Submit" /> */}
              
            </Form>
           
                
            </div>
        )
    }
}