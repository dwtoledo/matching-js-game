import "./style.css";
import CardGame from "../../components/CardGame";

function BoardGame(amountOfCards) {
	const $cardGameElement = CardGame();
	const $boardContent = $cardGameElement.repeat(amountOfCards);

	return `
    <section class="board-game">
        ${$boardContent}
    </section>
    `;
}

export default BoardGame;
