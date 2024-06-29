const form = document.getElementById("formName");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addName(form.name.value);
  form.name.value = "";
  form.name.focus();
});

function addName(name) {
  const ol = document.getElementById("nameList");
  const template = document
    .getElementById("templateName")
    .content.cloneNode(true);
  const spanName = template.querySelector(".name");
  const spanBin = template.querySelector(".bin");
  spanName.textContent = name;
  spanBin.onclick = deleteName;
  ol.appendChild(template);
}

function deleteName(event) {
  const element = event.target;
  if (confirm("Are you sure to delete this name")) {
    element.parentNode.remove();
  }
}

function bindDeleteName() {
  const bins = document.querySelectorAll(".bin");
  bins.forEach((bin) => (bin.onclick = deleteName));
}

bindDeleteName();
