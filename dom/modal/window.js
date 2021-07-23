const openBtn = document.querySelector("#openOverlay");
const body = document.body;
const successModal = createModal("hello world!");



openBtn.addEventListener("click", (e) => {
  body.appendChild(successModal);
});

function createModal(content) {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  overlayElement.addEventListener("click", (e) => {
    if (e.target == overlayElement) {
      closeElement.click();
    }
  });

  const containerElement = document.createElement("div");
  containerElement.classList.add("modal-container");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");

  contentElement.innerHTML = content;

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";

  closeElement.addEventListener("click", (e) => {
    e.preventDefault();
    body.removeChild(overlayElement);
  });


  overlayElement.appendChild(containerElement);
  containerElement.appendChild(contentElement);
  contentElement.appendChild(closeElement);

return overlayElement;

}
