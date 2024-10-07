import * as React from "react";

interface Props {
  closeAlert?: () => void;
  type: "primary" | "success" | "danger" | "warning";
  show: boolean;
}

const Alert: React.FC<Props> = ({ closeAlert, type, show }) => {
  return (
    <div
      className={`alert alert-${type} `}
      style={{ display: show ? "block" : "none" }}
      role="alert"
    >
      A simple {type} alert—check it out!
      <div>
        {closeAlert && (
          <button className="btn btn-close" onClick={closeAlert}></button>
        )}
      </div>
    </div>
  );
};

export default Alert;
