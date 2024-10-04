import BackDrop from '../BackDrop/BackDrop.tsx';
import * as React from 'react';
interface Props {
  show: boolean;
  title?: string;
  content?: string;
  closeModal: () => void;
}

const Modal: React.FC <Props> = ({show, title, content, closeModal}) => {
  return (
    <div>
      <>
        <BackDrop show={show}/>
        <div className="modal show" style={{display: show ? 'block' : 'none'}}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">{title}</h1>
              </div>
              <p>{content}</p>
              <div className="modal-footer">
                <button onClick={closeModal} className="btn btn-primary">Close</button>
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  );
};

export default Modal;