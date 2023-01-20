import { TAbstractFile, TFile } from "obsidian";

export function isNote(abstractFile: string | TAbstractFile) {
	const note =
		abstractFile instanceof TAbstractFile
			? abstractFile
			: app.vault.getAbstractFileByPath(abstractFile);

	return note instanceof TFile && note.extension === "md";
}
