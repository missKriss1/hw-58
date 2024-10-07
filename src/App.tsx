import { useState } from "react";
import Modal from "./components/UI/Modal/Modal";
import Alert from "./components/UI/Alert/Alert";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlerts, setShowAlerts] = useState<boolean[]>([true, true, true]);

  const closeModalWindow = () => {
    setShowModal(!showModal);
  };

  const closeAlertWindow = (index: number) => {
    const indexNewAlerts = [...showAlerts];
    indexNewAlerts[index] = false;
    setShowAlerts(indexNewAlerts);
  };

  return (
    <div className="container text-center d-flex flex-column align-items-center">
      <div>
        <button
          className="btn btn-primary mt-4 "
          onClick={() => setShowModal(!showModal)}
        >
          Open a modal window
        </button>

        <Modal
          show={showModal}
          title="Some kinda modal title"
          content="This is modal content"
          closeModal={closeModalWindow}
        />
      </div>
      <div className="mt-4 w-25">
        <Alert type="warning" show={showAlerts[0]}/>
        <Alert
          type="success"
          closeAlert={() => closeAlertWindow(1)}
          show={showAlerts[1]}
        />
        <Alert
          type="danger"
          closeAlert={() => closeAlertWindow(2)}
          show={showAlerts[2]}
        />
      </div>
    </div>
  );
};

export default App;
