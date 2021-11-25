import { AiOutlineEnvironment } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import "./Novanna.jpg";
import React from 'react';

function LayoutData (props) {
  let avapict = require('./Novanna.jpg')
    return (
      <body>
        <div class="card">
          <h1 class="card-name"> {props.name} </h1>
          <p class="card-job"> {props.currentJob} </p>

          < AiOutlineEnvironment /><span class="card-address"> {props.address} </span>
          <p></p>

          <img src = {avapict} />
          
          <table class="table">
            <tr>
            <td>< AiOutlineMail /> <p class="card-cont"> {props.email} </p></td>
            <td>< AiOutlineGithub /> <p class="card-cont"> {props.github} </p></td>
            <td>< AiOutlineLinkedin /> <p class="card-cont"> {props.linkedIn} </p></td>
            </tr>
          </table>
        </div>
      </body>
    )
  }

export default LayoutData;