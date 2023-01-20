import { TFile } from "obsidian";

export function filterUniqueNotes(value: TFile, index: number, self: TFile[]) {
	return self.indexOf(value) === index;
}
