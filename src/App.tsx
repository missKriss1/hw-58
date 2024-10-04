import Modal from './components/UI/Modal/Modal.tsx';
import { useState } from 'react';


const App = () => {

  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModalWindow = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Modal show={showModal} title = 'Some kinda modal title' content =' This is modal content' closeModal={closeModalWindow}></Modal>

      <button className='btn btn-primary' onClick={() => setShowModal(!showModal)}>Open a modal window</button>
    </>
  )
};

export default App
