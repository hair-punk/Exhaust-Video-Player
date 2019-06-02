import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player'
import PerfectScrollbar from 'react-perfect-scrollbar'
import styled from 'styled-components'
const InfoElements = styled.span`
height:450px;
weight:300px;
display:flex;
font-family:arial helvetica,sans-serif;
flex-direction:column;
align-items:center
background-color: rgba(0,0,0,0)
`;
const Description = styled.p`
font-size:11px;
text-align:left;
color:#c6d4df
margin-block-start:0px
margin-block-end:0px
`;
const Line = styled.span`
text-align:left;
font-size:10px;
margin-block-start:0px
margin-block-end:0px
`;
const Label = styled.span`
color:#556772;
`;
const Value = styled.span`
color:#66C0F4;
`;
const Tag = styled.button`
background-color:rgba( 103, 193, 245, .5 );
color:#66C0F4
border-radius:5px;
&:hover{
background-color:#66C0F4
color:#ffffff
}
`;

class InfoBox extends React.Component{
render(){
  var date = this.props.releaseDate.split('T')[0]

  return(<InfoElements>
      <Line><img src={this.props.picture} height="160px" width="240px"/></Line>
      <Line><Description>{this.props.description}</Description></Line>
      <Line><Label>RECENT REVIEWS:</Label> <Value>Mostly Positive</Value></Line>
      <Line><Label>ALL REVIEWS:</Label><Value> Mostly Positive</Value></Line>
      <br></br>
      <Line><Label>RELEASE DATE:</Label><Value>{date}</Value></Line>
      <br></br>
      <Line><Label>DEVELOPER:</Label><Value> {this.props.developer}</Value></Line>
      <Line><Label>PUBLISHER:</Label><Value> {this.props.publisher}</Value></Line>
      <br></br>
      <Line><Label> Popular user-defined tags for this product:</Label></Line>
      <span>{this.props.metaTags.map((tag)=>(
        <Tag>{tag}</Tag>
      ))}</span>
  </InfoElements>)
}

}

export default InfoBox