const recommend_blocks = document.getElementsByClassName("recommend_block");
let indexValue = 0;
let sliderIndex = 0;
showImages(indexValue);

for (let e of recommend_blocks) {
  e.addEventListener("click", function () {
    if (e === recommend_blocks[0]) {
      sliderIndex = 0;
    } else if (e === recommend_blocks[1]) {
      sliderIndex = 1;
    } else {
      sliderIndex = 2;
    }
    showImages((indexValue = sliderIndex));
  });
}

function showImages() {
  const images = document.querySelectorAll(".slide");
  const slider = document.querySelectorAll(".recommend_block");

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < slider.length; i++) {
    slider[i].style.color = "white";
  }
  images[indexValue].style.display = "flex";
  slider[indexValue].style.color = "red";
}

const signup_Form = document.querySelector("#Signup_Form"),
  first_name = document.querySelector(".Name_Form"),
  email = document.querySelector(".Email_Form"),
  website = document.querySelector(".Website_Form"),
  message = document.querySelector(".User_Message");

signup_Form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user_Data = {
    name: first_name.value,
    email: email.value,
    website: website.value,
    message: message.value,
  };

  create_User(user_Data);
  signup_Form.reset();
});

function create_User(user_Data) {
  try {
    fetch("http://borjomi.loremipsum.ge/api/send-message", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_Data),
    });
  } catch (e) {
    console.log("Error - ", e);
  }
}

const send_Message_Btn = document.querySelector(".Btn"),
  my_Modal = document.querySelector(".Modal"),
  my_body = document.querySelector("body");

send_Message_Btn.addEventListener("click", () => {
  open_Modal(my_Modal);
});

function open_Modal(modal) {
  modal.classList.add("visible");
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";

  const close_Btn = modal.querySelector(".Close_Btn");
  close_Btn.addEventListener("click", () => {
    closeModal(modal);
  });
}

function closeModal(modal) {
  modal.classList.remove("visible");
}

const skills = document.querySelector(".section_first_right");
const progress_Bars = document.querySelectorAll(".skills");

function showProgress() {
  progress_Bars.forEach((progress_Bar) => {
    progress_Bar.style.opacity = 1;
  });
}

function hideProgress() {
  progress_Bars.forEach((e) => {
    e.style.opacity = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skills.getBoundingClientRect().top;

  if (sectionPos < window.innerHeight / 2) {
    showProgress();
  } else {
    hideProgress();
  }
});

const images_Blocks = document.querySelectorAll(".block"),
  my_Images = document.querySelectorAll(".section_first_middle img");

for (let i = 0; i < images_Blocks.length; i++) {
  images_Blocks[i].addEventListener("click", function () {
    my_Images[i].style.display = "block";
    for (let index = 0; index < images_Blocks.length; index++) {
      if (index != i) {
        my_Images[index].style.display = "none";
      }
    }
  });
}

let header_images = document.querySelectorAll(".header_middle_images img"),
  imgIndex = 0;

setInterval(function () {
  if (imgIndex != header_images.length - 1) {
    imgIndex++;
  } else {
    imgIndex = 0;
  }

  header_images[imgIndex].style.display = "block";
  for (let i = 0; i < header_images.length; i++) {
    if (i != imgIndex) {
      header_images[i].style.display = "none";
    }
  }
}, 5000);
