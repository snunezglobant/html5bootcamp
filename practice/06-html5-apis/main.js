function saveText() {
  localStorage.setItem('textarea-content', document.getElementById('textarea-content').value);
  displayMessage('Content saved');
}

function loadText() {
  var savedContent = localStorage.getItem('textarea-content');

  if (savedContent !== null) {
    document.getElementById('textarea-content').value = savedContent;
    displayMessage('Content loaded');
  }
  else {
    displayMessage('Content not found')
  }
}

function clearText() {
  localStorage.removeItem('textarea-content');
  document.getElementById('textarea-content').value = '';
  displayMessage('Content cleared and removed from storage');
}

function displayMessage(message) {
  document.getElementById('message').innerHTML = message;

  clearTimeout(displayMessage.timerId);
  displayMessage.timerId = setTimeout(function() {
    document.getElementById('message').innerHTML = '';
  },
  2000);
}

function loadFile(event) {
  var reader = new FileReader();

  event.stopPropagation();
  event.preventDefault();

  reader.onload = function(e) {
    document.getElementById('textarea-content').value = reader.result;
  }
  reader.readAsText(event.dataTransfer.files[0], 'utf-8');
  displayMessage('Loaded "' + event.dataTransfer.files[0].name + '"');
}

function cancelDefault(event) {
  event.stopPropagation();
  event.preventDefault();
  return false;
}

function setupDnDListener() {
  document.getElementById('textarea-content').addEventListener('dragover', cancelDefault, false);
  document.getElementById('textarea-content').addEventListener('dragenter', cancelDefault, false);
  document.getElementById('textarea-content').addEventListener('drop', loadFile, false);
}
