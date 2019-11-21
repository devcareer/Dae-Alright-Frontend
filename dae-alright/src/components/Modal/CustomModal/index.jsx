

import React, {useState} from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import "./index.scss";
import Button from 'react-bootstrap/Button' 


const CustomModal = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <Modal show={show} onHide={handleClose} className="custom-modal">
        {props.title && <Modal.Title>{props.title()}</Modal.Title>}
        {props.body && <Modal.Body>{props.body()}</Modal.Body>}
        {props.footer && <Modal.Footer>{props.footer()}</Modal.Footer>}
      </Modal>
    </>
  );
};
CustomModal.propTypes = {
 title: PropTypes.func.isRequired,
 body: PropTypes.func.isRequired,
 footer: PropTypes.func
};
export default CustomModal; 
