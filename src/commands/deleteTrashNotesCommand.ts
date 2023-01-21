import { Command } from "obsidian";
import { deleteTrashNotes } from "src/features/deleteTrashNotes";
import { findTrashNotes } from "src/features/findTrashNotes";

export const deleteTrashNotesCommand = {
	id: "delete-trash-notes-command",
	name: "Delete Trash-Notes",
	callback: async () => {
		await deleteTrashNotes(findTrashNotes());
	},
} as Command;
