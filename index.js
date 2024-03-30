import {renderCards} from "./src/cards.js";
import {sidebar} from "./src/sidebar.js";

// render cards
renderCards();

const btnSidebar = document.querySelector("#btn-sidebar");
btnSidebar.onclick = sidebar;
