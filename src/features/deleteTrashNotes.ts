import { Notice, TFile } from "obsidian";
import { UnexpectedError } from "src/errors/UnexpectedError";
import { getPlugin } from "src/helpers/getPlugin";
import { isTrashNote } from "./isTrashNote";

export async function deleteTrashNotes(notes: TFile[]) {
	const _notes = [...notes];

	let deleteCounter = 0;
	while (_notes.length > 0) {
		const note = _notes.pop() as TFile;
		if (isTrashNote(note)) {
			deleteCounter = deleteCounter + 1;
			await app.vault.delete(note);
		}
	}

	fireToasty(deleteCounter);
}

function fireToasty(amount: number) {
	// @guard
	if (!getPlugin().settings.showToasties) {
		return;
	}

	if (amount < 0 || !Number.isInteger(amount)) {
		// * Case: Invalid
		throw new UnexpectedError(
			`amount '${amount}' is not a valid amount for deleted Trash-Notes...`
		);
	} else if (amount === 0) {
		// * Case: Zero Trash-Notes deleted
		return;
	} else if (amount === 1) {
		// * Case: 1 Trash-Note deleted
		new Notice(`1 Trash-Note has been deleted...`);
	} else if (amount > 1) {
		// * Case: Many Trash-Notes deleted
		new Notice(`${amount} Trash-Notes have been deleted...`);
	} else {
		// * Case: Should not happen
		throw new UnexpectedError();
	}
}
