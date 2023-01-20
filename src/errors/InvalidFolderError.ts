import { TAbstractFile } from "obsidian";

export class InvalidFolderError extends Error {
	constructor(abstractFile: string | TAbstractFile) {
		const path =
			abstractFile instanceof TAbstractFile
				? abstractFile.path
				: abstractFile;

		super(`Provided Folder ('${path}') doesn't represent a valid TFolder.`);
	}
}
