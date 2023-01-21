import ScratchPadPlugin from "main";
import { PluginSettingTab, Setting } from "obsidian";
import { getFolders } from "src/helpers/getFolders";

export class SettingsTab extends PluginSettingTab {
	plugin: ScratchPadPlugin;

	constructor(plugin: ScratchPadPlugin) {
		super(plugin.app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.innerHTML = "";

		new Setting(containerEl)
			.setName("Delete Trash-Notes on Tab-Close")
			.addToggle((toggle) => {
				toggle
					.setValue(this.plugin.settings.deleteTrashNotesOnTabClose)
					.onChange(async (value) => {
						this.plugin.settings.deleteTrashNotesOnTabClose = value;
						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName("Delete Trash-Notes on Start-Up")
			.addToggle((toggle) => {
				toggle
					.setValue(this.plugin.settings.deleteTrashNotesOnStartup)
					.onChange(async (value) => {
						this.plugin.settings.deleteTrashNotesOnStartup = value;
						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName("RegExp to identify Trash-Notes")
			.addText((text) => {
				text.setValue(this.plugin.settings.trashNotePattern).onChange(
					async (value) => {
						this.plugin.settings.trashNotePattern = value;
						await this.plugin.saveSettings();
					}
				);
			});

		new Setting(containerEl)
			.setName("Folders to look for Trash-Notes")
			.addDropdown((dropdown) => {
				const folders = getFolders().sort((a, b) =>
					a.path.localeCompare(b.path)
				);
				folders.forEach((folder) => {
					// @ts-ignore
					dropdown.addOption(folder.path, folder.path);
				});

				dropdown.setValue(this.plugin.settings.trashNoteFolderPath);
				dropdown.onChange(async (value) => {
					this.plugin.settings.trashNoteFolderPath = value;
					await this.plugin.saveSettings();
					console.log(`Folder changed: ${value}`);
				});
			});

		new Setting(containerEl)
			.setName("Delete Trash-Notes in Sub-Folders")
			.addToggle((toggle) => {
				toggle
					.setValue(this.plugin.settings.recursive)
					.onChange(async (value) => {
						this.plugin.settings.recursive = value;
						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName("Show Notification-Message when Trash-Notes got deleted")
			.addToggle((toggle) => {
				toggle
					.setValue(this.plugin.settings.showToasties)
					.onChange(async (value) => {
						this.plugin.settings.showToasties = value;
						await this.plugin.saveSettings();
					});
			});
	}
}
