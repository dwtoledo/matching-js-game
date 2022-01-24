import "./src/styles/generic/reset.css";
import CardGame from "./src/components/CardGame";

const $root = document.getElementById("root");
const $element = CardGame();

$root.insertAdjacentHTML("beforeend", $element);
