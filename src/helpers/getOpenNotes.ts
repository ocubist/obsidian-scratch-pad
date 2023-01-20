import { MarkdownView, TFile } from "obsidian";
import { filterUniqueArrayItems } from "./filterUniqueArrayItems";
import { isNote } from "./isNote";

export function getOpenNotes() {
	const openNotes: TFile[] = [];

	app.workspace.iterateAllLeaves((leaf) => {
		if (leaf.view instanceof MarkdownView) {
			openNotes.push(leaf.view.file);
		}
	});

	return openNotes.filter(filterUniqueArrayItems).filter(isNote);
}
