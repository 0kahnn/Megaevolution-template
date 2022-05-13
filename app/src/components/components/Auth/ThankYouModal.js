import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import thankYou from "../../../assets/images/thank_you.png";
const ThankYouModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} className="auth-modal ">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={thankYou} className="thankyou-image" />
          <h3>Thank You For Signing Up!</h3>

          <Button className="btn-yellow " onClick={handleClose}>
            Okay
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ThankYouModal;
