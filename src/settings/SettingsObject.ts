export interface SettingsObject {
	deleteTrashNotesOnTabClose: boolean;
	deleteTrashNotesOnStartup: boolean;
	trashNotePattern: string;
	trashNoteFolderPath: string;
	recursive: boolean;
	showToasties: boolean;
}

export const DEFAULT_SETTINGS: SettingsObject = {
	deleteTrashNotesOnTabClose: false,
	deleteTrashNotesOnStartup: false,
	trashNotePattern: "^Untitled",
	trashNoteFolderPath: "/",
	recursive: false,
	showToasties: true,
};
