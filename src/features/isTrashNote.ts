import { TAbstractFile } from "obsidian";
import { getFolder } from "src/helpers/getFolder";
import { getNote } from "src/helpers/getNote";
import { getOpenNotes } from "src/helpers/getOpenNotes";
import { getPlugin } from "src/helpers/getPlugin";
import { isNote } from "src/helpers/isNote";
import { isNoteChildOfFolder } from "src/helpers/isNoteChildOfFolder";

export function isTrashNote(abstractFile: string | TAbstractFile) {
	// @guard
	if (!isNote(abstractFile)) return false;

	// * convert
	const note = getNote(abstractFile);

	// * Ignore, if file is currently open
	const openNotes = getOpenNotes();

	if (openNotes.some((openNote) => openNote.path === note.path)) {
		return false;
	}

	// * Ignore, if file is already deleted
	// @ts-ignore
	if (note.deleted) {
		return false;
	}

	// * collect necessary objects
	const plugin = getPlugin();

	const { trashNotePattern, trashNoteFolderPath, recursive } =
		plugin.settings;

	const trashNoteFolder = getFolder(trashNoteFolderPath);

	// * Check if note meets the Folder-Settings
	if (!isNoteChildOfFolder(note, trashNoteFolder, recursive)) {
		return false;
	}

	// * Check if the note meets the naming-pattern
	return new RegExp(trashNotePattern).test(note.basename);
}
