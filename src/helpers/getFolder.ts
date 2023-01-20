import { TAbstractFile, TFolder } from "obsidian";
import { InvalidFolderError } from "src/errors/InvalidFolderError";
import { isFolder } from "./isFolder";

export function getFolder(abstractFile: string | TAbstractFile) {
	//* Assert
	if (!isFolder(abstractFile)) {
		throw new InvalidFolderError(abstractFile);
	}

	//* Convert
	const folder =
		abstractFile instanceof TAbstractFile
			? abstractFile
			: app.vault.getAbstractFileByPath(abstractFile);

	return folder as TFolder;
}
