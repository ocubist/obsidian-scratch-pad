import { Command } from "obsidian";
import { deleteTrashNotes } from "src/features/deleteTrashNotes";

export const deleteTrashNotesCommand = {
	id: "delete-trash-notes-command",
	name: "Delete Trash-Notes",
	callback: async () => {
		await deleteTrashNotes();
	},
} as Command;
