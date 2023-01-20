import { getNotes } from "src/helpers/getNotes";
import { getPlugin } from "src/helpers/getPlugin";
import { isTrashNote } from "./isTrashNote";

export function findTrashNotes() {
	// * collect necessary objects
	const plugin = getPlugin();
	const { trashNoteFolderPath, recursive } = plugin.settings;

	// * Return all Trash-Notes, that meet the requirements
	return getNotes(trashNoteFolderPath, recursive).filter(isTrashNote);
}
