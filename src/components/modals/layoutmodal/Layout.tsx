import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';


export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode; 
  }

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className=" bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white w-[800px] h-[800px] overflow-y-auto p-6 rounded-lg shadow-lg">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={onClose}>
          Close
        </button>
       
        <div className='flex'>
            <Sidebar />
            {children}
        </div>
      </div>
    </div>,
   document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
