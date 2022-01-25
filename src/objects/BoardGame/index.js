import "./style.css";
import CardGameFace from "../../components/CardGameFace";

function BoardGame(amountOfCards) {
	return /*html*/ `
    <section class="board-game">
        ${CardGameFace().repeat(amountOfCards)}
    </section>
    `;
}

export default BoardGame;
