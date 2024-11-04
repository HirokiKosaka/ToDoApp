const Todo = () => {
  return (
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
      </div>
      <div className="w-1/3 bg-yellow-300">
        <h1 className="text-center">Under Taking</h1>
        <ul>
          <li>
            <button>Create Todo List</button>
          </li>
        </ul>
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
      </div>
    </div>
  );
};

export default Todo;
