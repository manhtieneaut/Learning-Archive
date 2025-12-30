import React,{useState} from "react";
import useModal from "./components/modal";

export default function App() {
  const { modal, isOpen, setIsOpen } = useModal();
  const onOpenModal = () => setIsOpen(true);
  return (
    <div className='container'>
      <div>Welcome</div>
      <div onClick={onOpenModal}>Open modal</div>
      {modal}
    </div>
  );
}