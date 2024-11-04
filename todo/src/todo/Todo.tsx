import Modal from "./Modal";

const Todo = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-1/3 bg-red-300">
          <h1 className="text-center">Todo</h1>
          <ul>
            <li>
              <button>Writting a Note</button>
            </li>
            <li>
              <button>go runnning</button>
            </li>
            <li>
              <button>learning English</button>
            </li>
          </ul>
          <button className="border border-white rounded-md p-1 text-white">
            Add Todo
          </button>
        </div>
        <div className="w-1/3 bg-yellow-300">
          <h1 className="text-center">Under Taking</h1>
          <ul>
            <li>
              <button>Create Todo List</button>
            </li>
          </ul>
          <div className="flex">
            <button className="border border-white rounded-md p-1 text-white mr-1">
              Undo
            </button>
            <button className="border border-white rounded-md p-1 text-white">
              Done
            </button>
          </div>
        </div>
        <div className="w-1/3 bg-blue-300">
          <h1 className="text-center">Done</h1>
          <ul>
            <li>
              <button>laundry</button>
            </li>
            <li>
              <button>reading</button>
            </li>
          </ul>
          <button className="border border-white rounded-md p-1 text-white">
            Undo
          </button>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Todo;
