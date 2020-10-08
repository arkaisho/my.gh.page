import React from 'react';
import profilepic from "../../assets/images/roundprofilepic.png";
import './style.css'

export default class ProfilePic extends React.Component{
    render(){
        return(
            <img className="profileImage" alt="imagem de perfil" src={profilepic}/> 
        );
    }
}