import { TFile, TFolder } from "obsidian";
import { UnexpectedError } from "src/errors/UnexpectedError";
import { getFolder } from "./getFolder";
import { getFolders } from "./getFolders";
import { getNote } from "./getNote";
import { isNote } from "./isNote";

export function getNotes(folder?: string | TFolder, recursive?: boolean) {
	if (!folder) {
		// # Case: Get All Files
		return app.vault.getFiles().filter(isNote).map(getNote);
	}

	const _folder = getFolder(folder);

	if (!recursive) {
		// # Case: Get all direct Files in Folder
		return _folder.children.filter(isNote).map(getNote);
	} else if (recursive) {
		// # Case: Get Files from folders and subfolders recursively

		const folders = [_folder, ...getFolders(_folder, true)];

		const result: TFile[] = [];
		folders.forEach((folder) => {
			folder.children
				.filter(isNote)
				.forEach((note) => result.push(getNote(note)));
		});

		return result;
	} else {
		// # Case: All other matches failed
		throw new UnexpectedError();
	}
}
