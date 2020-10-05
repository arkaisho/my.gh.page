import React from 'react';
import './style.css'

export default class Link extends React.Component{
    render(){
        return(
            <div style={{height:"20px"}}>
                <img className="icon" alt="icon" src={this.props.icon}/><a href={this.props.info.link}>{this.props.info.text}</a>
            </div>
        );
    }
}