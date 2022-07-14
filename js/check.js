/*이용약관*/

$(document).ready(function () {
  var allCheck = document.getElementById("agreementAll"),
    checkBox = document.getElementsByName("agreement");
  checkBoxLength = document.getElementsByName("agreement").length;

  for (var i = 0; i < checkBoxLength; i++) {
    checkBox[i].addEventListener("click", function () {
      if (this.checked == false && allCheck.checked == true) {
        allCheck.checked = false;
        return;
      }
    });
  }

  allCheck.addEventListener("click", function () {
    if (allCheck.checked) {
      check_all();
    } else {
      uncheck_all();
    }
  });

  function check_all() {
    for (var i = 0; i < checkBoxLength; i++) {
      checkBox[i].checked = true;
    }
  }

  function uncheck_all() {
    for (var i = 0; i < checkBoxLength; i++) {
      checkBox[i].checked = false;
    }
  }
});
