import { TFile } from "obsidian";
import { findTrashNotes } from "./findTrashNotes";

export async function deleteTrashNotes() {
	const trashNotes = findTrashNotes();

	while (trashNotes.length > 0) {
		const noteToDelete = trashNotes.pop() as TFile;
		app.vault.delete(noteToDelete); // idea: Maybe better not completely delete them...
	}
}
