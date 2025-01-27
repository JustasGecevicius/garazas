import {
  useEffect,
  useRef,
  useState,
  MutableRefObject,
  ReactNode,
} from 'react';

type PropsType = {
  openRef: MutableRefObject<() => void>
  closeRef: MutableRefObject<() => void>
  children: ReactNode
};

export function BaseModalWrapper(props: PropsType) {
  const { closeRef, openRef, children } = props;
  const dialogRef = useRef<HTMLDialogElement>();
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    if (!dialogRef?.current) return;
    dialogRef?.current?.showModal();
    setIsOpen(true);
  }

  function closeModal() {
    dialogRef.current.close();
    setIsOpen(true);
  }

  function checkDialogClick(event) {
    const rect = dialogRef.current.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      dialogRef.current.close();
    }
  }

  useEffect(() => {
    openRef.current = openModal;
    closeRef.current = closeModal;
  }, [closeRef, openRef]);

  useEffect(() => {
    const refCopy = dialogRef.current;
    refCopy.addEventListener('click', checkDialogClick);
    return () => {
      refCopy.removeEventListener('click', checkDialogClick);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className='p-4 rounded-md backdrop:bg-black/50 backdrop:backdrop-blur-sm'>
      {isOpen ? children : null}
    </dialog>
  );
}
