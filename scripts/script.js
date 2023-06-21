function addFriend() {
    var addButton = document.getElementById("addFriendBtn");
    if (!addButton.disabled) {
      addButton.innerHTML = "Очікується підтвердження";
      addButton.disabled = true;
      var friendCount = document.getElementById("count");
      friendCount.innerHTML = parseInt(friendCount.innerHTML) + 1;
    }
  }
  
  function sendMessage() {
    var sendMessageBtn = document.getElementById("sendMessageBtn");
    sendMessageBtn.classList.toggle("clicked");
  }
  
  function jobOffer() {
    var jobOfferBtn = document.getElementById("jobOfferBtn");
    var addFriendBtn = document.getElementById("addFriendBtn");
    jobOfferBtn.classList.toggle("clicked");
    addFriendBtn.style.display = jobOfferBtn.classList.contains("clicked") ? "none" : "inline";
  }
  
  function submitHomework() {
    var done_hw = document.getElementById("done_hw");
    var homeworkText = prompt("Введіть текст зданого ДЗ:");
    if (homeworkText) {
      var newRow = done_hw.insertRow(-1);
      var cell = newRow.insertCell(0);
      cell.innerHTML = homeworkText;
    }
  }
  