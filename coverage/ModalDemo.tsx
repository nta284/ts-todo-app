import { ElementRef, forwardRef, useImperativeHandle, useRef } from "react";

interface ModalHandler {
    openModal: () => void;
}

interface ModalProps {
    isOpen: boolean;
}

const Modal = forwardRef<ModalHandler, ModalProps>(({ isOpen }, ref) => {
    useImperativeHandle(ref, () => ({
        openModal: () => {
            console.log("");
        }
    }))
    return <div>Modal</div>;
});

const App = () => {
    const modalRef = useRef<ElementRef<typeof Modal>>(null);

    return (
        <div>
            <Modal ref={modalRef} isOpen={false} />
        </div>
    )
}
