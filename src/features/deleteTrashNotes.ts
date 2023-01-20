import { Notice, TFile } from "obsidian";
import { findTrashNotes } from "./findTrashNotes";

export async function deleteTrashNotes() {
	const trashNotes = findTrashNotes();
	const length = trashNotes.length;

	while (trashNotes.length > 0) {
		const noteToDelete = trashNotes.pop() as TFile;
		app.vault.delete(noteToDelete); // idea: Maybe better not completely delete them...
	}

	new Notice(`${length} Trash-Notes have been deleted...`); // todo: Handle 0, 1 and many differently
}
