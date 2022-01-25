import CardGameFace from "../CardGameFace";
import "./style.css";

function CardGame() {
	return /*html*/ `
    <article class="card-game">
        <div class="card-game__front">
            ${CardGameFace()}
        </div>
        <div class="card-game__back">
            ${CardGameFace("javascript", "Logo do Javascript")}        
        </div>
    </article>
    `;
}

export default CardGame;
