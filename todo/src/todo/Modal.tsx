const Modal = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center border rounded-md mt-5">
        <input
          type="text"
          placeholder="Todoを追加"
          className="border flex justify-start m-3 rounded-md p-1"
        />
        <button className="mr-3 rounded-md p-1 bg-blue-700 text-white">追加</button>
      </div>
    </div>
  );
};

export default Modal;
