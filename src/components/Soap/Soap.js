import './Soap.scss';
import React from "react";
import { NotificationManager } from 'react-notifications';

function Soap() {

  const onSoapClick = () => {
    NotificationManager.error('For your safety you better try the towel first!', 'Voice');
  }

  const onTowelClick = () => {
    NotificationManager.error('Hold on! What about soap? It has to be first for sure.', 'Voice');
  }

  return (
    <div className="soap-and-towel-wrapper">
      <div className="block draggable">
        <img src="https://anerror.s3.amazonaws.com/towel.png" width="200" alt="Maria Kokunova Error" onDragStart={onTowelClick} />
      </div>
      <div className="block question-mark">
        <span>?</span>
      </div>
      <div className="block draggable">
        <img src="https://anerror.s3.amazonaws.com/soap.png" width="200" alt="Maria Kokunova Error" onDragStart={onSoapClick} />
      </div>
    </div>
  );

}

export default Soap;
