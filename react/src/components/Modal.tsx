import RBModal from "react-bootstrap/Modal";

export default function Modal({
  isModalOpen,
  onClose,
  children,
}: {
  isModalOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <RBModal
      show={isModalOpen}
      onHide={onClose}
      centered
      scrollable
      backdrop
      keyboard
      dialogClassName="booking-modal-dialog"
      contentClassName="bg-dark border border-warning text-center"
    >
      <RBModal.Body className="position-relative p-4">
        {children}

        <button
          type="button"
          onClick={onClose}
          className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
          aria-label="Bezárás"
        />
      </RBModal.Body>
    </RBModal>
  );
}
