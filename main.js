import "./src/styles/settings/color.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/objects/BoardGame";

const AMOUNT_OF_CARDS = 6;

const $root = document.getElementById("root");
const $playerOneElement = PlayerName("Player1");
const $playerTwoElement = PlayerName("Player2");
const $boardGameElement = BoardGame(AMOUNT_OF_CARDS);

$root.insertAdjacentHTML("afterbegin", $playerTwoElement);
$root.insertAdjacentHTML("afterbegin", $playerOneElement);
$root.insertAdjacentHTML("beforeend", $boardGameElement);
