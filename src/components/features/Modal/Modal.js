import { Modal, Button } from "react-bootstrap";

const DeletePostModal = props => {
  return (
    <div
      className="modal show"
      style={{ display: props.show , position: 'fixed' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure ?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>This operation will completely remove this post from the app.<br/>
          Are you sure you want to do that ?
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.hideModalAction} variant="secondary">Cancel</Button>
          <Button onClick={props.deletePostAction}variant="danger">Remove</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default DeletePostModal;