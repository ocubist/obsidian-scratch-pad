import { MarkdownView, TFile } from "obsidian";
import { filterUniqueNotes } from "./filterUniqueNotes";
import { isNote } from "./isNote";

export function getOpenNotes() {
	const openNotes: TFile[] = [];

	app.workspace.iterateAllLeaves((leaf) => {
		if (leaf.view instanceof MarkdownView) {
			openNotes.push(leaf.view.file);
		}
	});

	return openNotes.filter(filterUniqueNotes).filter(isNote);
}
