// 29. 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

// program to get the file extension

let filename = prompt('Enter a filename with the extension ');

function getFileExtension(filename) {
  // get file extension
  const extension = filename.split('.').pop();
  return extension;
}

// passing the filename
const output = getFileExtension(filename);
console.log(output);
