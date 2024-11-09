import { FC, useState } from "react";
import { Todos } from "./Todo";

type CloseModal = {
  closeModal: () => void;
  todos?: Todos;
  setTodos: React.Dispatch<React.SetStateAction<Todos>>;
};

const Modal: FC<CloseModal> = ({ closeModal, setTodos }) => {
  const [text, setText] = useState<string>("");
  const handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setText(e.target.value);
  };
  const addTodos: () => void = () => {
    setTodos((prevTodos) => {
      if (text !== "") {
        return [...prevTodos, text];
      }
      return prevTodos;
    });
    setText("");
  };
  return (
    <div className="flex items-center absolute top-0 left-28 w-full h-full z-50">
      <div className="flex justify-center items-center border rounded-md mt-5 bg-slate-500 shadow-2xl">
        <input
          type="text"
          placeholder="Todoを追加"
          className="border flex justify-start m-3 rounded-md p-1"
          onChange={handleInput}
          value={text}
        />
        <button className="mr-3 rounded-md p-1" onClick={closeModal}>
          閉じる
        </button>
        <button
          onClick={addTodos}
          className="mr-3 rounded-md p-1 bg-blue-700 text-white"
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default Modal;
