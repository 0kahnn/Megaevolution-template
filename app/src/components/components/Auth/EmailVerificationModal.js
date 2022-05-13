import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const EmailVerificationModal = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} className="auth-modal wide-modal">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Please Verify Your Email</h3>
          <p>
            Check your email at john@gmail.com and verify your account.
            <br />
            This window will automatically close once verification os completed.
          </p>
          <div className="mt-5">
            <Button className="btn-blue me-3" onClick={handleClose}>
              Resend Email
            </Button>
            <Button className="btn-transparent" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default EmailVerificationModal;
