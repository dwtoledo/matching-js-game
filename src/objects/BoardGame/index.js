import CardGame from "../../components/CardGame";

function BoardGame(amountOfCards) {
	const $cardGameElement = CardGame();
	const $boardGameElement = $cardGameElement.repeat(amountOfCards);
	return $boardGameElement;
}

export default BoardGame;
