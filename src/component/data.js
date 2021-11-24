import { AiOutlineEnvironment } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import React from 'react';
import Pict from './component/Novanna2.jpg';

function LayoutData (props) {
    return (
      <div class="card">

        <h1 class="card-name"> {props.name} </h1>
        <p class="card-job"> {props.currentJob} </p>
  
        < AiOutlineEnvironment /><span class="card-address"> {props.address} </span>
        <p></p>

        <img 
          // src='{this.props.pict}' alt="Avatar"
          src={Pict}
        ></img>

        <table class="table">
          <tr>
          <td>< AiOutlineMail /> <p class="card-cont"> {props.email} </p></td>
          <td>< AiOutlineGithub /> <p class="card-cont"> {props.github} </p></td>
          <td>< AiOutlineLinkedin /> <p class="card-cont"> {props.linkedIn} </p></td>
          </tr>
        </table>
      </div>
    )
  }

export default LayoutData;