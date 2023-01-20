import { Plugin, TFile } from "obsidian";
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
}
