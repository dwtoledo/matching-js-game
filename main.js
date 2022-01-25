import "./src/styles/settings/color.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";

const AMOUNT_OF_CARDS = 6;
const $root = document.getElementById("root");

$root.insertAdjacentHTML(
	"beforeend",
	`
        ${ScoreBoard()}
        ${BoardGame(AMOUNT_OF_CARDS)}
    `
);
