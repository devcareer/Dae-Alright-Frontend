import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import "./index.scss";

const CustomModal = props => {
<<<<<<< HEAD
  
  return (
    <>
     

      <Modal show={props.show} onHide={props.onHide} className="custom-modal">
=======
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <>
     <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
        <Modal.Header closeButton></Modal.Header>
      <Modal show={show} className="custom-modal">
>>>>>>> Implemented SignIn with Email Auth
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
