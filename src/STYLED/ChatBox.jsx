import styled from 'styled-components';

export const Form = styled.form`
 width:60%;
`;

export const NewMess = styled.div`
 border-style: none;
  border-top:1px solid #ccc!important;
  height:10%;
`;
export const ContentMess = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 8px 0 12px;
    position: relative;
`;

export const Input = styled.input`
  font-size: 15px;
  height:100%;
  width:100%;
  overflow-y: auto;
  border-style: none;
  padding: 7px 0;
`;

export const Icon = styled.div`
  width:40%;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  line-height: 0;
  padding: 8px 0;
`;

export const Name = styled.h1`
 font-size: 18px;
`;

export const Time = styled.p`
  color: rgba(0, 0, 0, .40);
  vertical-align: middle;
  margin-top: 0px;
  font-size: 11px;
`;

export const Header = styled.div`
  text-align:center;
  border-bottom:1px solid #ccc!important;
  height:10%;
`;

export const Me = styled.p`
  border-bottom-left-radius: 1.3em;
  border-top-left-radius: 1.3em;
  border-bottom-right-radius: 1.3em;
  border-top-right-radius: 1.3em;
  background-color: #0084ff;
  color: #fff;
  margin: 1px 0;
  padding: 6px 12px;
  // direction: rtl;
  clear:both;
  font-size:17px;
  float:right;
  word-wrap:break-word;
  font-family: inherit;
  max-width: 55%;
`;

export const You = styled.p.attrs({
  
})`
  border-top-right-radius: 1.3em;
  border-bottom-left-radius: 1.3em;
  border-top-left-radius: 1.3em;
  background-color: #f1f0f0;
  color: rgba(0, 0, 0, 1);
  margin: 1px 0;
  padding: 6px 12px;
  float:left;
  font-size:17px;
  word-wrap:break-word;
  max-width: 55%;
`;

export const Force = styled.div`
  min-height: 450px;
`;

export const HeartIcon = styled.div`
  margin: 1px 0;
  padding: 6px 12px;
  // direction: rtl;
  clear:both;
  
  float:right;
  word-wrap:break-word;
  font-family: inherit;
  max-width: 55%;
`;

export const Chat = styled.div`
  overflow-y: scroll;
  height:500px;
  ::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.2);
	background-color: #555;
}
::-webkit-scrollbar
{
	width: 7px;
	background-color: #F5F5F5;
}

`;

export const Avatars = styled.div`
  float:left;
`;

export const DivYou = styled.div`
  clear:both;
`;

export const  ChatBox = styled.div`
position:fixed;
width:50%;
height:100%;
border: 1px solid #ccc!important;;
display:block;
right:25%;
`;
