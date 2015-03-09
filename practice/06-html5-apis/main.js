/* myStorage Namespace */
var myStorage = (function() {
  var selectedStorage;

  function saveText(storage) {
    var iDBRequest;

    if (storage === 'localStorage') {
      localStorage.setItem('textarea-content', document.getElementsByClassName('textarea-content')[0].value);
      displayMessage('Content saved to ' + storage);
    }
    else
    if (storage === 'IndexedDB') {
      iDBRequest = indexedDB.open('Topic5db');
      iDBRequest.onupgradeneeded = function() {
        var db = iDBRequest.result;
        var store = db.createObjectStore('textarea', {keyPath: 'id'});
      }
      iDBRequest.onsuccess = function() {
        var db = iDBRequest.result;
        var tx = db.transaction('textarea', 'readwrite');
        var store = tx.objectStore('textarea');

        store.put({id: 1, content: document.getElementsByClassName('textarea-content')[0].value});
        tx.oncomplete = function() {
          displayMessage('Content saved to ' + storage);
          db.close();
        }
      }
    }
  }

  function loadText(storage) {
    var savedContent;
    var iDBRequest;

    if (storage === 'localStorage') {
      savedContent = localStorage.getItem('textarea-content');
      if (savedContent !== null) {
        document.getElementsByClassName('textarea-content')[0].value = savedContent;
        displayMessage('Content loaded from ' + storage);
      }
      else {
        displayMessage('Content not found in ' + storage);
      }
    }
    else
    if (storage === 'IndexedDB') {
      iDBRequest = indexedDB.open('Topic5db');
      iDBRequest.onupgradeneeded = function() {
        var db = iDBRequest.result;
        var store = db.createObjectStore('textarea', {keyPath: 'id'});
      }
      iDBRequest.onsuccess = function() {
        var db = iDBRequest.result;
        var tx = db.transaction('textarea', 'readonly');
        var store = tx.objectStore('textarea');
        var data = store.get(1);

        data.onsuccess = function() {
          if (data.result) {
            savedContent = data.result.content;
          }
          db.close();

          if (savedContent !== undefined) {
            document.getElementsByClassName('textarea-content')[0].value = savedContent;
            displayMessage('Content loaded from ' + storage);
          }
          else {
            displayMessage('Content not found in ' + storage);
          }
        }
      }
    }
  }

  function clearText(storage) {
    var iDBRequest;

    document.getElementsByClassName('textarea-content')[0].value = '';

    if (storage === 'localStorage') {
      localStorage.removeItem('textarea-content');
      displayMessage('Content cleared and removed from ' + storage);
    }
    else
    if (storage === 'IndexedDB') {
      iDBRequest = indexedDB.open('Topic5db');
      iDBRequest.onupgradeneeded = function() {
        var db = iDBRequest.result;
        var store = db.createObjectStore('textarea', {keyPath: 'id'});
      }
      iDBRequest.onsuccess = function() {
        var db = iDBRequest.result;
        var tx = db.transaction('textarea', 'readwrite');
        var store = tx.objectStore('textarea');
        var remove = store.delete(1);

        remove.onsuccess = function() {
          displayMessage('Content cleared and removed from ' + storage);
        }
      }
    }
  }

  function displayMessage(message) {
    document.getElementsByClassName('message')[0].innerHTML = message;

    clearTimeout(displayMessage.timerId);
    displayMessage.timerId = setTimeout(function() {
      document.getElementsByClassName('message')[0].innerHTML = '';
    },
    2000);
  }

  function loadFile(event) {
    var reader = new FileReader();

    event.stopPropagation();
    event.preventDefault();

    reader.onload = function(e) {
      document.getElementsByClassName('textarea-content')[0].value = reader.result;
    }
    reader.readAsText(event.dataTransfer.files[0], 'utf-8');
    displayMessage('Loaded "' + event.dataTransfer.files[0].name + '"');
  }

  function cancelDefault(event) {
    event.stopPropagation();
    event.preventDefault();
    return false;
  }

  document.getElementsByClassName('textarea-content')[0].addEventListener('dragover', cancelDefault, false);
  document.getElementsByClassName('textarea-content')[0].addEventListener('dragenter', cancelDefault, false);
  document.getElementsByClassName('textarea-content')[0].addEventListener('drop', loadFile, false);

  document.getElementsByClassName('load-bt')[0].addEventListener('click', function() {
    loadText(document.getElementById('storage-select').value);
  });
  document.getElementsByClassName('save-bt')[0].addEventListener('click', function() {
    saveText(document.getElementById('storage-select').value);
  });
  document.getElementsByClassName('clear-bt')[0].addEventListener('click', function() {
    clearText(document.getElementById('storage-select').value);
  });
})();


/* webSocket Namespace */
var webSocket = (function() {
  var socketMessage = document.getElementsByClassName('socket-message')[0];
  var socketOutput = document.getElementsByClassName('socket-output')[0];
  var socketUri = 'ws://echo.websocket.org/';
  var socket;

  function connect() {
    socket = new WebSocket(socketUri);

    socket.onmessage = function(event) {
      getMessage(event.data);
    }

    socket.onopen = function(event) {
      document.getElementsByClassName('connect-bt')[0].disabled = true;
      document.getElementsByClassName('disconnect-bt')[0].disabled = false;
      document.getElementsByClassName('send-bt')[0].disabled = false;
      document.getElementsByClassName('socket-message')[0].disabled = false;
    }

    socket.onclose = function(event) {
      document.getElementsByClassName('connect-bt')[0].disabled = false;
      document.getElementsByClassName('disconnect-bt')[0].disabled = true;
      document.getElementsByClassName('send-bt')[0].disabled = true;
      document.getElementsByClassName('socket-message')[0].value = '';
      document.getElementsByClassName('socket-message')[0].disabled = true;
    }
  }

  function disconnect() {
    socket.close();
  }

  function send() {
    socket.send(socketMessage.value);
    socketMessage.value = '';
  }

  function getMessage(msg) {
    socketOutput.value += msg + '\n';
  }

  document.getElementsByClassName('connect-bt')[0].addEventListener('click', connect);
  document.getElementsByClassName('disconnect-bt')[0].addEventListener('click', disconnect);
  document.getElementsByClassName('send-bt')[0].addEventListener('click', send);
})();


/* myCanvas Namespace */
var myCanvas = (function() {
  var canvas = document.getElementsByClassName('my-canvas')[0];
  var context = canvas.getContext('2d');
  var myRectangle = {
    width: 150,
    height: 100
  };
  var animationDirection = {};
  var previousFrameTimeStamp;
  var randomColors = [];

  for (var i = 0; i < 14; i++) {
    randomColors.push(getRandomColor());
  };

  function renderBackground() {
    context.beginPath();
    context.translate(600, 40);
    context.moveTo(0, 0);
    context.lineTo(0, 80);
    context.lineTo(150, 80);
    context.lineTo(80, 0);
    context.closePath();
    context.fillStyle = randomColors[2];
    context.fill();
    context.strokeStyle = randomColors[3];
    context.stroke();
    context.translate(-600, -40);

    context.beginPath();
    context.translate(120, 50);
    context.moveTo(0, 0);
    context.lineTo(70, 100);
    context.lineTo(70, 0);
    context.closePath();
    context.fillStyle = randomColors[4];
    context.fill();
    context.strokeStyle = randomColors[5];
    context.stroke();

    context.beginPath();
    context.translate(-70, 100);
    context.moveTo(0, 0);
    context.lineTo(0, 60);
    context.lineTo(160, 60);
    context.closePath();
    context.fillStyle = randomColors[6];
    context.fill();
    context.strokeStyle = randomColors[7];
    context.stroke();

    context.beginPath();
    context.translate(250, 0);
    context.moveTo(0, 0);
    context.lineTo(0, 120);
    context.lineTo(250, 100);
    context.closePath();
    context.fillStyle = randomColors[8];
    context.fill();
    context.strokeStyle = randomColors[9];
    context.stroke();

    context.beginPath();
    context.translate(100, -120);
    context.moveTo(0, 0);
    context.lineTo(80, 30);
    context.lineTo(100, 90);
    context.lineTo(-20, 130);
    context.lineTo(-50, 60);
    context.closePath();
    context.fillStyle = randomColors[10];
    context.fill();
    context.strokeStyle = randomColors[11];
    context.stroke();

    context.beginPath();
    context.arc(190, 120, 60, 0, 2*Math.PI);
    context.closePath();
    context.fillStyle = randomColors[12];
    context.strokeStyle = randomColors[13];
    context.fill();
    context.stroke();
  }

  function getRandomColor() {
    return '#xxxxxx'.replace(/x/g, function() {
      return Math.floor(Math.random()*16).toString(16);
    });
  }

  function getNewDirectionVector() {
    var higher;
    var result = {
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1
    }

    higher = Math.max(Math.abs(result.x), Math.abs(result.y));
    result.x /= higher;
    result.y /= higher;

    return result;
  }

  function renderRectangle() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.beginPath();
    context.fillStyle = randomColors[0];
    context.strokeStyle = randomColors[1];
    context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
    context.fill();
    context.stroke();
  }

  function animateRectangle() {
    var elapsedTime = Date.now() - previousFrameTimeStamp;
    var speed = 0.06;
    var newX = myRectangle.x + (animationDirection.x * speed * elapsedTime);
    var newY = myRectangle.y + (animationDirection.y * speed * elapsedTime);

    if ((newX > 0) && (newY > 0) &&
    (newX < (canvas.width - myRectangle.width)) &&
    (newY < (canvas.height - myRectangle.height)))  {
      myRectangle.x = newX;
      myRectangle.y = newY;
    }
    else {
      animationDirection = getNewDirectionVector();
      randomColors[0] = getRandomColor();
      randomColors[1] = getRandomColor();
    }

    previousFrameTimeStamp = Date.now();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
    renderBackground();
    context.globalAlpha = 0.6;
    renderRectangle();

    requestAnimationFrame(function() {
      animateRectangle();
    });
  }

  previousFrameTimeStamp = Date.now();

  myRectangle.x = canvas.width / 2 - myRectangle.width / 2;
  myRectangle.y = canvas.height / 2 - myRectangle.height / 2;

  animationDirection = getNewDirectionVector();
  animateRectangle();
})();
