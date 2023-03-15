import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';

// redux
import { useDispatch } from 'react-redux';
import { Add } from '../features/addTaskSlice';

const AddTask = ({ setAddTaskModal }) => {
  const [inputText, setInputText] = useState();
  const dispatch = useDispatch();

  const closeHandle = () => {
    setAddTaskModal(false);
  };

  const inputHandle = () => (e) => {
    const { value } = e.target;
    setInputText(value);
  };

  const addTask = () => {
    if (!inputText) {
      alert('Type Something in to the field');
    } else {
      dispatch(Add(inputText));
      setAddTaskModal(false);
      toast('Task Added to the List');
    }
  };

  return (
    <div className="w-full h-screen bg-black/30 absolute flex justify-center items-center">
      <ToastContainer position="bottom-center" />
      <div className="w-[400px] bg-white rounded">
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex justify-between">
            <h1 className="text-xl font-semibold">Add New Task</h1>
            <button onClick={() => closeHandle()}>
              <AiOutlineCloseCircle />
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter a Task"
            className="w-full outline-0 p-2 bg-gray-100"
            onChange={inputHandle()}
          />
          <button
            onClick={() => addTask()}
            className="w-28 p-2 rounded-md flex justify-center items-center space-x-1 bg-yellow-400"
          >
            <IoAddCircleOutline size={'1.1rem'} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
