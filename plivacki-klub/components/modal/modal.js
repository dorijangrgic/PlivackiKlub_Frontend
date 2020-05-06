import { Modal, ModalHeader, ModalBody } from "reactstrap";

const CustomModal = ({ showModal, setShowModal, message }) => {
  const handleClose = () => {
    setShowModal(!showModal);
  };

  return (
    <Modal isOpen={showModal}>
      <ModalHeader toggle={handleClose}>Error</ModalHeader>
      <ModalBody>{message}</ModalBody>
    </Modal>
  );
};

export default CustomModal;
