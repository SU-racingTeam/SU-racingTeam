const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const nextBtns1 = document.querySelectorAll(".btn-next1");
const nextBtns2 = document.querySelectorAll(".btn-next2");
const nextBtns3 = document.querySelectorAll(".btn-next3");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const input_field = document.getElementsByClassName("input");
const input_field1 = document.getElementsByClassName("user");
const input_field2 = document.getElementsByClassName("user1");

let formStepsNum = 0;

nextBtns1.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();

  });
});

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    validationForm();
    updateFormSteps();
    updateProgressbar();

  });
});

nextBtns2.forEach((btn) => {
  btn.addEventListener("click", () => {
    validationForm2();
    updateFormSteps();
    updateProgressbar();

  });
});

nextBtns3.forEach((btn) => {
  btn.addEventListener("click", () => {
    validationForm3();
    updateFormSteps();
    updateProgressbar();

  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

var count = 0;
function validationForm(){

  // For loop to count blank inputs.
for (var i = input_field.length; i > count; i--) {
  if (input_field[i - 1].value == "") {
  count = count + 1;
  } else {
  count = 0;
  }
  }
  if (count != 0) {
  swal.fire({
    title: "All fields must be entered",
    icon: "warning"
  });

  } else {
    formStepsNum++;
  }
  }

  var count2 = 0;
  function validationForm2(){
  
    // For loop to count blank inputs.
  for (var i = input_field1.length; i > count2; i--) {
    if (input_field1[i - 1].value == "") {
    count2 = count2 + 1;
    } else {
    count2 = 0;
    }
    }
    if (count2 != 0) {
    swal.fire({
      title: "All fields must be entered",
      icon: "warning"
    });
  
    } else {
      formStepsNum++;
    }
    }

  var count3 = 0;
  function validationForm3(){

  // For loop to count blank inputs.
      for (var i = input_field2.length; i > count3; i--) {
        if (input_field2[i - 1].value == "") {
        count3 = count3 + 1;
        } else {
        count3 = 0;
        }
        }
        if (count3 != 0) {
        swal.fire({
          title: "All fields must be entered",
          icon: "warning"
        });

        } else {
          formStepsNum++;
        }
  }