import React from "react";
import PropTypes from "prop-types";

const Modal = ({ title, content, onClose}) => {

    return (
      <div>
        <div className="modal ">
          <h3 className="modal-title text-center text-xl font-bold">{title}</h3>
          {content}
          {/* <button onClick={onClose} className="modal-button">Close</button> */}
        </div>
      </div>
    );
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    button: PropTypes.string
}
export default Modal