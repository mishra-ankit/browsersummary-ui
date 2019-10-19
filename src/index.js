import "./styles.css";

const getNoteHTML = (text, date) => {
  return `
	<div class="card mdl-card mdl-shadow--2dp">
		<div class="mdl-card__supporting-text">
			${text}
		</div>
		<div class="menu">
			<div class="edit">
<button class="mdl-button mdl-js-button mdl-button--icon">
  <i class="material-icons">edit</i>
</button>
			</div>
			<div class="delete">
<button class="mdl-button mdl-js-button mdl-button--icon">
  <i class="material-icons">delete</i>
</button>
			</div>
		</div>
    </div>`;
};

function initialize() {
  const notes = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia11...",
    "Lorem ipsum",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia...",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia..."
  ];
  notes.forEach(note => {
    document.getElementById("app").innerHTML =
      document.getElementById("app").innerHTML + getNoteHTML(note);
  });
}

window.load = initialize();
