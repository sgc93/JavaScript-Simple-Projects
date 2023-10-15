const input_field = document.querySelector(".input");
const clear = document.querySelector(".clear");
const negate = document.querySelector(".negate");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const zero_zero = document.querySelector(".zero-zero");
const modulo = document.querySelector(".module");
const divide = document.querySelector(".divide");
const times = document.querySelector(".times");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const equal = document.querySelector(".equal");
const dot = document.querySelector(".dot");

const keys = [
	one,
	two,
	three,
	four,
	five,
	six,
	seven,
	eight,
	nine,
	zero,
	zero_zero,
	modulo,
	divide,
	times,
	minus,
	plus,
	dot,
];

keys.forEach((key) => {
	key.addEventListener("click", () => {
		input_field.value += key.innerHTML;
	});
});

clear.addEventListener("click", clearField);
negate.addEventListener("click", negateValue);

function clearField() {
	input_field.value = 0;
}

function negateValue() {
	input_field.value = -input_field.value;
}
