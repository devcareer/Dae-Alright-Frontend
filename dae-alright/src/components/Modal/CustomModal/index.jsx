<<<<<<< HEAD
=======


>>>>>>> 8d6af9f0be04ab5e3820c4f16d3bb5b1c58c8932
import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import "./index.scss";
<<<<<<< HEAD

const CustomModal = props => {
  
  return (
    <>
     

      <Modal show={props.show} onHide={props.onHide} className="custom-modal">
=======


const CustomModal = props => {


  return (
    <>
    
      <Modal show={props.show} className="custom-modal">
>>>>>>> 8d6af9f0be04ab5e3820c4f16d3bb5b1c58c8932
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
<<<<<<< HEAD
export default CustomModal;
=======
export default CustomModal; 
>>>>>>> 8d6af9f0be04ab5e3820c4f16d3bb5b1c58c8932
