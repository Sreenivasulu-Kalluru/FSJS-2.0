import React, { useState, useEffect } from 'react';
import List from './components/List';
import Alert from './components/Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  // Submit Handler function
  const submitHandler = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'Please enter a todo list');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'info', 'Item Name Updated');
    } else {
      showAlert(true, 'success', 'Item Added to the List');
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };

  // Show Alert Function
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  // Remove Item function
  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item Removed from the List');
    setList(list.filter((item) => item.id !== id));
  };

  // Edit Item Function
  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editItem.title);
  };

  // Clear List Function
  const clearList = () => {
    showAlert(true, 'danger', 'Cleared the Todo List');
    setList([]);
  };

  return (
    <section className="section-center">
      <form onSubmit={submitHandler}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          Todo List with CRUD Operations
        </h3>
        <div className="mb-3 form">
          <input
            type="text"
            className="form-control"
            placeholder="e.g, Learn React, Practice React"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginLeft: '.5rem' }}
          >
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <div className="text-center">
            <button className="btn btn-warning" onClick={clearList}>
              Clear All
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default App;
