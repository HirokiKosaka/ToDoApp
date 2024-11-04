import { FC } from "react";

type CloseModal = {
  closeModal: () => void;
}

const Modal: FC<CloseModal> = ({ closeModal }) => {
  return (
    <div className="flex items-center absolute top-0 left-28 w-full h-full z-50">
      <div className="flex justify-center items-center border rounded-md mt-5 bg-slate-500 shadow-2xl">
        <input
          type="text"
          placeholder="Todoを追加"
          className="border flex justify-start m-3 rounded-md p-1"
        />
        <button className="mr-3 rounded-md p-1" onClick={closeModal}>
          閉じる
        </button>
        <button className="mr-3 rounded-md p-1 bg-blue-700 text-white">
          追加
        </button>
      </div>
    </div>
  );
};

export default Modal;
