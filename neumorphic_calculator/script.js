const input_field = document.querySelector(".input");
const clear = document.querySelector(".clear");

clear.addEventListener("click", clearField);

function clearField() {
	input_field.value = 0;
}
