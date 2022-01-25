import CardGame from "../../components/CardGame";
import "./style.css";

function BoardGame(amountOfCards) {
	return /*html*/ `
    <section class="board-game">
        ${CardGame().repeat(amountOfCards)}
    </section>
    `;
}

export default BoardGame;
