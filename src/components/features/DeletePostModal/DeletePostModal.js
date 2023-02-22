import { Modal, Button } from "react-bootstrap";

const DeletePostModal = props => {

  return (
    <Modal {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter">
      <div>
        <Modal.Header closeButton onClick={props.onHide}>
          <Modal.Title>Are you sure ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This operation will completely remove this post from the app.<br />
            Are you sure you want to do that ?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="secondary">Cancel</Button>
          <Button onClick={props.deletePostAction} variant="danger">Remove</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default DeletePostModal;