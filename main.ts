import { Plugin, TFile } from "obsidian";
import { deleteTrashNotesCommand } from "src/commands/deleteTrashNotesCommand";
import { deleteTrashNotes } from "src/features/deleteTrashNotes";
import { DEFAULT_SETTINGS, SettingsObject } from "src/settings/SettingsObject";
import { SettingsTab } from "src/settings/SettingsTab";

// Remember to rename these classes and interfaces!

export default class DeleteTrashNotesPlugin extends Plugin {
	settings: SettingsObject;
	openNotes: TFile[] = [];

	async onload() {
		await this.loadSettings();

		// # Settings
		this.addSettingTab(new SettingsTab(this));

		// # Commands
		this.addCommand(deleteTrashNotesCommand);

		// # Delete Trash-Notes on Start-Up
		app.workspace.onLayoutReady(this.deleteTrashNotesOnStartUp.bind(this));
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

	async deleteTrashNotesOnStartUp() {
		// @guard
		if (!this.settings.deleteTrashNotesOnStartup) {
			return;
		}

		await deleteTrashNotes();
	}
}
