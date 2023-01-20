import { TAbstractFile } from "obsidian";

export class InvalidNoteError extends Error {
	constructor(abstractFile: string | TAbstractFile) {
		const path =
			abstractFile instanceof TAbstractFile
				? abstractFile.path
				: abstractFile;

		super(
			`Provided Note ('${path}') doesn't represent a valid TFile or is not a markdown-file.`
		);
	}
}
