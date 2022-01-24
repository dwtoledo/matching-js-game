import "./src/styles/settings/color.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";
import PlayerName from "./src/components/PlayerName";

const numberOfCards = 6;

const $root = document.getElementById("root");
const $cardGameElement = CardGame();
const $playerOneElement = PlayerName("Player1");
const $playerTwoElement = PlayerName("Player2");

$root.insertAdjacentHTML("afterbegin", $playerTwoElement);
$root.insertAdjacentHTML("afterbegin", $playerOneElement);
$root.insertAdjacentHTML("beforeend", $cardGameElement.repeat(numberOfCards));
