import "./src/styles/settings/color.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";

const $root = document.getElementById("root");
const $element = CardGame();

$root.insertAdjacentHTML("beforeend", $element);
