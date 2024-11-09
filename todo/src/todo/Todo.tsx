import { FC, useState } from "react";
import Modal from "./Modal";

export type Todos = string[];

const Todo: FC = () => {
  // todosの配列
  const [todos, setTodos] = useState<Todos>([]);
  // takingの配列
  const [taking, setTaking] = useState<Todos>([]);
  // doneの配列
  const [dones, setDones] = useState<Todos>([]);
  // todoから指定された要素を削除する関数
  const handleDelete: (todo: string) => void = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  // todo->takingへ移動する関数
  const handleTaking: (todo: string) => void = (todo) => {
    if (!taking.includes(todo)) {
      setTaking([...taking, todo]);
    }
    handleDelete(todo);
  };
  // taking->todosへ戻す関数
  const handleBackToTodos: (item: string) => void = (item) => {
    setTodos([...todos, item]);
    setTaking(taking.filter((todo) => todo !== item));
  };
  // taking->doneへ移動する関数
  const handleDone: (take: string) => void = (take) => {
    setDones([...dones, take]);
    setTaking(taking.filter((item) => item !== take));
  };
  // done->takingへ戻す関数
  const handleBacktoTaking: (done: string) => void = (done) => {
    setTaking([...taking, done]);
    setDones(dones.filter((item) => item !== done));
  };
  const [isModal, setIsModal] = useState<boolean>(false);
  const handleModalOpen: () => void = () => {
    setIsModal(true);
  };
  const handleModalClose: () => void = () => {
    setIsModal(false);
  };
  return (
    <div className="w-full h-full relative">
      <div className="flex h-screen">
        <div className="w-1/3 bg-red-300">
          <h1 className="text-center">Todo</h1>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-between pl-2 py-2 hover:bg-slate-200"
                >
                  {todo}
                  <div className="flex pr-2 gap-3">
                    <button
                      onClick={() => handleDelete(todo)}
                      className="flex items-center justify-center hover:text-red-500"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleTaking(todo)}
                      className="flex items-center justify-center hover:text-blue-500"
                    >
                      Take
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <button
            className="border border-white rounded-md p-1 text-white"
            onClick={handleModalOpen}
          >
            Add Todo
          </button>
        </div>
        <div className="w-1/3 bg-yellow-300">
          <h1 className="text-center">Under Taking</h1>
          <ul>
            {taking.map((item) => {
              return (
                <li className="flex justify-between pl-2 py-2 hover:bg-slate-200">
                  {item}
                  <div className="flex pr-2 gap-3">
                    <button
                      onClick={() => handleBackToTodos(item)}
                      className="flex items-center justify-center hover:text-red-500"
                    >
                      Undo
                    </button>
                    <button
                      onClick={() => handleDone(item)}
                      className="flex items-center justify-center hover:text-blue-500"
                    >
                      Done
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-1/3 bg-blue-300">
          <h1 className="text-center">Done</h1>
          <ul>
            {dones.map((done, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-between pl-2 py-2 hover:bg-slate-200"
                >
                  {done}
                  <div className="flex pr-2 gap-3">
                    <button
                      onClick={() => handleBacktoTaking(done)}
                      className="flex items-center justify-center hover:text-red-500"
                    >
                      Undo
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isModal && (
        <Modal
          closeModal={handleModalClose}
          todos={todos}
          setTodos={setTodos}
        />
      )}
    </div>
  );
};

export default Todo;
