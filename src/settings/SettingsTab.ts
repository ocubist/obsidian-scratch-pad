import ScratchPadPlugin from "main";
import { PluginSettingTab, Setting } from "obsidian";
import { getFolders } from "src/helpers/getFolders";
import { DEFAULT_SETTINGS } from "./SettingsObject";

export class SettingsTab extends PluginSettingTab {
	plugin: ScratchPadPlugin;

	constructor(plugin: ScratchPadPlugin) {
		super(plugin.app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.innerHTML = "";

		containerEl.createEl("h1", { text: "Scratch Pad" });

		containerEl.createEl("strong", { text: "Note:" });

		containerEl.createEl("p", {
			text: "This plugin has the potential to cause significant harm if used improperly, for example, with the note-pattern set to 'a', it could delete all notes with the letter 'a' in their names.",
		});
		containerEl.createEl("p", {
			text: "To prevent unwanted damage, it is highly recommended to use strict rules to define what constitutes a Trash-Note and when it should be deleted.",
		});
		containerEl.createEl("p", {
			text: "Additionally, it is important to note that you can use the command to delete all Trash-Notes, and bind it to any short-key of your choice. Automatic deletions should only be enabled if you fully understand the potential consequences.",
		});

		containerEl.createEl("h3", { text: "General Settings" });

		new Setting(containerEl)
			.setName("Delete Trash-Notes on Tab-Close")
			.setDesc(
				"When enabled, Trash-Notes will automatically be deleted, as soon as they are removed from the workspace."
			)
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
			.setDesc(
				"When enabled, all Trash-Notes will be deleted on start-up."
			)
			.addToggle((toggle) => {
				toggle
					.setValue(this.plugin.settings.deleteTrashNotesOnStartup)
					.onChange(async (value) => {
						this.plugin.settings.deleteTrashNotesOnStartup = value;
						await this.plugin.saveSettings();
					});
			});

		containerEl.createEl("h3", { text: "Trash-Note-Specifications" });

		new Setting(containerEl)
			.setName("RegExp to identify Trash-Notes")
			.setDesc(
				`The regular expression (RegEx) pattern used to identify Trash-Notes. The default pattern, '^Untitled', would translate into the Javascript RegExp pattern '/^Untitled/'.`
			)
			.addText((text) => {
				text.setValue(this.plugin.settings.trashNotePattern).onChange(
					async (value) => {
						if (value === "") {
							this.plugin.settings.trashNotePattern =
								DEFAULT_SETTINGS.trashNotePattern;

							this.hide();
							this.display();
						} else {
							this.plugin.settings.trashNotePattern = value;
						}
						await this.plugin.saveSettings();
					}
				);
			});

		new Setting(containerEl)
			.setName("Folder")
			.setDesc("The folder to look for Trash-Notes.")
			.addDropdown((dropdown) => {
				const folders = getFolders().sort((a, b) =>
					a.path.localeCompare(b.path)
				);
				folders.forEach((folder) => {
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
			.setName("Include sub-folders")
			.setDesc(
				"When enabled, all sub-folders will be searched for Trash-Notes, otherwise only notes directly within the specified folder will be deleted."
			)
			.addToggle((toggle) => {
				toggle
					.setValue(this.plugin.settings.recursive)
					.onChange(async (value) => {
						this.plugin.settings.recursive = value;
						await this.plugin.saveSettings();
					});
			});

		containerEl.createEl("h3", { text: "Misc" });

		new Setting(containerEl)
			.setName("Notification-Message")
			.setDesc(
				"When enabled, will trigger a notification message every time Trash-Notes are deleted."
			)
			.addToggle((toggle) => {
				toggle
					.setValue(this.plugin.settings.showToasties)
					.onChange(async (value) => {
						this.plugin.settings.showToasties = value;
						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName("Deleted Trash-Notes")
			.setDesc("What to do with deleted Trash-Notes.")
			.addDropdown((dropdown) => {
				dropdown.addOption(
					"obsidianTrash",
					"Move to Obsidian trash (.trash folder)"
				);
				dropdown.addOption("systemTrash", "Move to system trash");
				dropdown.addOption("permanently", "Permanently delete");

				dropdown.setValue(this.plugin.settings.deleteSetting);
				dropdown.onChange(async (value) => {
					this.plugin.settings.deleteSetting = value;
					await this.plugin.saveSettings();
				});
			});

		new Setting(containerEl)
			.setName("Reset Settings")
			.setDesc("Reset settings to the default.")
			.addButton((button) => {
				button.setButtonText("Reset Settings!").onClick(async () => {
					this.plugin.settings = { ...DEFAULT_SETTINGS };
					console.log("⚡❓😳", {
						DEFAULT_SETTINGS,
						settings: this.plugin.settings,
					});
					await this.plugin.saveSettings();
					this.hide();
					this.display();
				});
			});
	}
}
