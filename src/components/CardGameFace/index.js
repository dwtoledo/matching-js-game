import "./style.css";

function CardGameFace(
	icon = "alura-pixel",
	alt = "Clique na carta para virá-la."
) {
	return /*html*/ `
    <article class="card-game-face">
        <img src="../src/images/${icon}.png" alt="${alt}" />
    </article>
    `;
}

export default CardGameFace;
