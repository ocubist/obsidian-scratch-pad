import DeleteTrashNotesPlugin from "main";
import { UnexpectedError } from "src/errors/UnexpectedError";

export function getPlugin() {
	const plugin =
		// @ts-ignore
		app.plugins.plugins["obsidian-delete-trash-notes"]; // todo: Get rid of the magic-variable

	if (!(plugin instanceof DeleteTrashNotesPlugin)) {
		throw new UnexpectedError("Failed to access the plugin...");
	}

	return plugin;
}
