import { Plugin, TFile } from "obsidian";
import { deleteTrashNotesCommand } from "src/commands/deleteTrashNotesCommand";
import { deleteTrashNotes } from "src/features/deleteTrashNotes";
import { findTrashNotes } from "src/features/findTrashNotes";
import { getDifferenceOfTwoNoteArrays } from "src/helpers/getDifferenceOfTwoNoteArrays";
import { getOpenNotes } from "src/helpers/getOpenNotes";
import { DEFAULT_SETTINGS, SettingsObject } from "src/settings/SettingsObject";
import { SettingsTab } from "src/settings/SettingsTab";

// Remember to rename these classes and interfaces!

export default class ScratchPadPlugin extends Plugin {
	settings: SettingsObject;
	openNotes: TFile[] = [];

	async onload() {
		await this.loadSettings();

		// # Settings
		this.addSettingTab(new SettingsTab(this));

		// # Commands
		this.addCommand(deleteTrashNotesCommand);

		// # On StartUp
		app.workspace.onLayoutReady(this.onStartUp.bind(this));

		// # Update Open-Notes
		this.registerEvent(
			app.workspace.on(
				"layout-change",
				this.deleteClosedTrashNotes.bind(this)
			)
		);
	}

	onunload() {}

	async loadSettings() {
		this.settings = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	async deleteClosedTrashNotes() {
		try {
			const newOpenNotes = getOpenNotes();
			if (this.settings.deleteTrashNotesOnTabClose) {
				const difference = getDifferenceOfTwoNoteArrays(
					this.openNotes,
					newOpenNotes
				);

				// 	originalOpenNotes: this.openNotes,
				// 	newNotes: difference.newNotes,
				// 	missingNotes: difference.missingNotes,
				// });

				const closedNotes = [...difference.missingNotes];
				await deleteTrashNotes(closedNotes);
			}

			this.openNotes = newOpenNotes;
		} catch {
			// ignore...
		}
	}

	updateOpenNotes(notes: TFile[]) {
		this.openNotes = notes;
	}

	async onStartUp() {
		this.updateOpenNotes(getOpenNotes());

		if (this.settings.deleteTrashNotesOnStartup) {
			await deleteTrashNotes(findTrashNotes());
		}
	}
}
