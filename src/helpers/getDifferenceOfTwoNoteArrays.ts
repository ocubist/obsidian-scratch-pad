import { TFile } from "obsidian";

export function getDifferenceOfTwoNoteArrays(
	array: TFile[],
	arrayToCompare: TFile[]
) {
	// * The notes, that are in the second, but not in the first array
	const newNotes = arrayToCompare.filter(
		(val: TFile) => !array.includes(val)
	);

	// * The notes, that are in the first, but not in the second array
	const missingNotes = array.filter(
		(val: TFile) => !arrayToCompare.includes(val)
	);

	return { newNotes, missingNotes };
}
