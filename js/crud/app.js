const form = document.getElementById("formName");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addName(form.name.value);
  form.name.value = "";
  form.name.focus();
});

function addName(name) {
  const ol = document.getElementById("nameList");
  const li = document.createElement("li");
  li.textContent = name;
  ol.appendChild(li);
}
