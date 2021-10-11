const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInput);

function onInput(event) {
  refs.span.style.fontSize = `${event.target.value}px`;
}
