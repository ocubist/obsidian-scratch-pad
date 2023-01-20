import DeleteTrashNotesPlugin from "main";
import { PluginSettingTab, Setting } from "obsidian";
// import { getFolders } from "src/utility/obsidian-development-tools";

export class SettingsTab extends PluginSettingTab {
	plugin: DeleteTrashNotesPlugin;

	constructor(plugin: DeleteTrashNotesPlugin) {
		super(plugin.app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.innerHTML = "";

		new Setting(containerEl).setName("test").addToggle((toggle) => {
			toggle
				.setValue(this.plugin.settings.test)
				.onChange(async (value) => {
					this.plugin.settings.test = value;
					await this.plugin.saveSettings();
				});
		});
	}
}
