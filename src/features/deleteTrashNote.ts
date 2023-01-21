import { TFile } from "obsidian";
import { getPlugin } from "src/helpers/getPlugin";

export async function deleteTrashNote(note: TFile) {
	// @guard
	// @ts-ignore
	if (note.deleted) {
		return;
	}

	const { deleteSetting } = getPlugin().settings;

	if (deleteSetting === "systemTrash") {
		await app.vault.trash(note, true);
	} else if (deleteSetting === "obsidianTrash") {
		await app.vault.trash(note, false);
	} else if (deleteSetting === "permanently") {
		await app.vault.delete(note);
	}
}
