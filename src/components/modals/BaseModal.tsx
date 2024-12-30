import type { ReactNode } from 'react';

type PropsType = {
  isOpen: boolean;
  children?: ReactNode;
};

export function BaseModalWrapper(props: PropsType) {
  const { isOpen, children } = props;
  return (
    <dialog
      open={isOpen}
      className='rounded-md'>
      {children}
    </dialog>
  );
}
