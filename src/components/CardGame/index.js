import "./style.css";

function CardGame() {
	return `
    <div class="flip-card">
        <article class="card-game">
            <div class="card-game__front">
                <object data="../src/images/alura-pixel.svg"></object>
            </div>
            <div class="card-game__back">
            </div>
        </article>
    </div>
    `;
}

export default CardGame;
