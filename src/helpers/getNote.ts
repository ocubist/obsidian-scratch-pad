import { TAbstractFile, TFile } from "obsidian";
import { InvalidNoteError } from "src/errors/InvalidNoteError";
import { isNote } from "./isNote";

export function getNote(abstractFile: string | TAbstractFile) {
	// * Assert
	if (!isNote(abstractFile)) {
		throw new InvalidNoteError(abstractFile);
	}

	//* Convert
	const note =
		abstractFile instanceof TAbstractFile
			? abstractFile
			: app.vault.getAbstractFileByPath(abstractFile);

	return note as TFile;
}
