import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react icons
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

// add task modal
import AddTask from './components/AddTask';

// redux
import { useDispatch } from 'react-redux';
import { Remove } from './features/addTaskSlice';
import { Clear } from './features/addTaskSlice';
import { useSelector } from 'react-redux';

function App() {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const tasks = useSelector((state) => state.addTask);
  const dispatch = useDispatch();

  const removeHandle = (id) => {
    dispatch(Remove(id));
    toast('Task Removed from the list');
  };

  const clearAll = () => {
    dispatch(Clear());
    toast('All Tasks are removed from the list');
  };

  return (
    <>
      <div className="App w-full h-screen flex justify-center items-center">
        <ToastContainer position="bottom-center" />
        <div className="w-4/5 md:w-1/4 lg:w-4/12 2xl:w-1/5 m-auto h- overflow-auto bg-white rounded-md drop-shadow-xl border relative">
          <div className="w-full sticky top-0 bg-[#161616] text-gray-200 p-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold">To Do List App</h1>
              <p className="text-xs">Manage your Tasks</p>
            </div>
            <div className="w-8 h-8 bg-white text-black rounded-full flex justify-center items-center">
              <button onClick={() => setAddTaskModal(true)}>
                <AiOutlinePlus size={'1rem'} />
              </button>
            </div>
          </div>

          <div className="p-5 text-black">
            <ul className="space-y-4">
              {tasks &&
                tasks.map((task, id) => {
                  return (
                    <div key={id} className="bg-gray-100 flex justify-between">
                      <li className="flex space-x-4 p-4">
                        <input
                          type="checkbox"
                          name=""
                          id="complete"
                          className="peer/complete"
                        />
                        <label
                          htmlFor="complete"
                          className="peer-checked/complete:line-through"
                        >
                          {task}
                        </label>
                      </li>
                      <button onClick={() => removeHandle(id)}>
                        <MdDelete size={'1.5rem'} />
                      </button>
                    </div>
                  );
                })}
            </ul>
          </div>
          <div className="flex justify-center mb-3">
            {tasks.length > 0 && (
              <button
                className="btn bg-black text-white px-3 py-2 rounded-md  "
                onClick={() => clearAll()}
              >
                Clear All
              </button>
            )}
          </div>
        </div>
        {addTaskModal && <AddTask setAddTaskModal={setAddTaskModal} />}
      </div>
    </>
  );
}

export default App;
