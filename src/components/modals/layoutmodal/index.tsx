import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import { ReactComponent as CloseIcon } from "../../../assets/icons/modal-sidebar-icons/carbon_close-outline.svg"

export interface ModalProps {
    isOpen: boolean;
    openOrClose: () => void;
    children?: ReactNode; 
    width: string,
    height: string
    overflowY?: any
    overflowX?: any
  }

const SmallModal: React.FC<ModalProps> = ({ isOpen, openOrClose, width, height, children, overflowY, overflowX }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-primary-gray-500 bg-opacity-40  w-svw h-full flex items-center justify-center z-50">
      <div style={{width:width, height: height, overflowY: overflowY, overflowX: overflowX}} className="relative bg-primary-white p-6 rounded-lg shadow-lg">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-black" onClick={openOrClose}>
             <CloseIcon />
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

export default SmallModal;
