import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({children, onClose}, ref) {

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }

  });


  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/80 px-24 py-8 rounded-md shadow-md" onClose={onClose}>
      {children}
      <form method="dialog" className="mt-4 text-center">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;