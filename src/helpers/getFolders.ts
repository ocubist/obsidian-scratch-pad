import { TFolder } from "obsidian";
import { UnexpectedError } from "src/errors/UnexpectedError";
import { getFolder } from "./getFolder";
import { isFolder } from "./isFolder";

export function getFolders(folder?: string | TFolder, recursive?: boolean) {
	if (!folder) {
		// # Case: Return All

		return app.vault.getAllLoadedFiles().filter(isFolder).map(getFolder);
	} else if (!recursive) {
		// # Case: Return all direct folder-children in folder

		return getFolder(folder).children.filter(isFolder).map(getFolder);
	} else if (recursive) {
		// # Case: Return all folder-children and sub-folder-children

		// - The future return-value
		const result: TFolder[] = [];

		// - Loop all children
		getFolder(folder)
			.children.filter(isFolder)
			.forEach((child) => {
				const childAsFolder = getFolder(child);

				// - push current child-folder
				result.push(childAsFolder);

				// - push all sub-child-folders recursively
				getFolders(childAsFolder, true).forEach((grandChild) =>
					result.push(grandChild)
				);
			});

		// - return
		return result;
	} else {
		// # Case: None of the cases matched, which should not happen at all
		throw new UnexpectedError();
	}
}
