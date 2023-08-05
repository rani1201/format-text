const textarea = document.getElementById("textarea1");

function color(e) {
  let value = e.value;
  textarea.style.color = value;
}

function bold(e) {
  if (textarea.style.fontWeight == "bold") {
    textarea.style.fontWeight = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.fontWeight = "bold";
    e.classList.add("active");
  }
}

function italic(e) {
  if (textarea.style.fontStyle == "italic") {
    textarea.style.fontStyle = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.fontStyle = "italic";
    e.classList.add("active");
  }
}

function underline(e) {
  if (textarea.style.textDecoration == "underline") {
    textarea.style.textDecoration = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textDecoration = "underline";
    e.classList.add("active");
  }
}

function upper(e) {
  if (textarea.style.textTransform == "uppercase") {
    textarea.style.textTransform = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textTransform = "uppercase";
    e.classList.add("active");
  }
}

function lower(e) {
  if (textarea.style.textTransform == "lowercase") {
    textarea.style.textTransform = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textTransform = "lowercase";
    e.classList.add("active");
  }
}

function count(e) {
  var text = textarea.value;

  var charCount = text.length;

  // Display the character count
  var charCountElement = document.getElementById("charCount");
  charCountElement.textContent = "Character count: " + charCount;
}

function copy(e) {
  var textToCopy = textarea.value;
  textarea.select();
  document.execCommand("copy");
  alert("Text copied to clipboard!");
}

function extra(e) {
  var text = textarea.value;
  var cleanText = text.replace(/\s+/g, " ");
  textarea.value = cleanText;
}

window.addEventListener("load", () => {
  textarea.value = "";
});

let btn=document.getElementById("btn1");
let btnText=document.getElementById("btnText");
let btnIcon=document.getElementById("btnIcon");

btn.onclick = function () {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        btnIcon.src = "sun.png";
        btnText.innerHTML = "Light";
    } else {
        btnIcon.src = "moon.png";
        btnText.innerHTML = "Dark";
    }

}