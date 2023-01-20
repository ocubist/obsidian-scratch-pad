import ScratchPadPlugin from "main";
import { UnexpectedError } from "src/errors/UnexpectedError";

export function getPlugin() {
	const plugin =
		// @ts-ignore
		app.plugins.plugins["obsidian-scratch-pad"]; // todo: Get rid of the magic-variable

	if (!(plugin instanceof ScratchPadPlugin)) {
		throw new UnexpectedError("Failed to access the plugin...");
	}

	return plugin;
}
