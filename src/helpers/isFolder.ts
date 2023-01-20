import { TAbstractFile, TFolder } from "obsidian";

export function isFolder(abstractFile: string | TAbstractFile) {
	const folder =
		abstractFile instanceof TAbstractFile
			? abstractFile
			: app.vault.getAbstractFileByPath(abstractFile);

	return folder instanceof TFolder;
}
