import { TFile, TFolder } from "obsidian";
import { isNote } from "./isNote";

export function isNoteChildOfFolder(
	note: TFile,
	folder: TFolder,
	recursive = false
) {
	// * Assert
	if (!isNote(note)) {
		return false;
	}

	if (recursive) {
		if (folder.isRoot()) {
			return true;
		}

		return note.path.includes(folder.path);
	} else {
		return note.parent.path === folder.path;
	}
}
