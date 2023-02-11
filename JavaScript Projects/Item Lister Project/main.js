const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form Submit Event
form.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('click', filterItems);

//Add Form
function addItem(e) {
  e.preventDefault();

  // Get Input Value
  const newItem = document.getElementById('item').value;

  // Create new li value
  const li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(e) {
  // converts text to lower case
  const text = e.target.value.toLowerCase();
  // get list
  const items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function (item) {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}