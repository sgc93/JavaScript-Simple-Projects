const input_field = document.querySelector(".input");
const clear = document.querySelector(".clear");
const negate = document.querySelector(".negate");

clear.addEventListener("click", clearField);
negate.addEventListener("click", negateValue);

function clearField() {
	input_field.value = 0;
}

function negateValue() {
	input_field.value = -input_field.value;
}
