## Goal

A Plugin for Obsidian, that automatically deletes _Trash-Notes_

## Requirements

-   Auto-Delete Notes, that are just created on the fly and have no value to conserve
    -   When the Tab gets closed
    -   When Obsidian starts
-   Only Notes, that match a pattern should be deleted
-   Only Notes, in a specific folder (default is root) should be deleted
-   There should be on-off-switches

## Brain-Dump how to accomplish

### Settings-Tab

-   **deleteTrashNotesOnTabClose**: If turned on, delete _Trash-Notes_ in the moment their tabs got closed
    -   **Default**: `false`
-   **deleteTrashNotesOnStartup**: Search for notes effected on start-up and delete them
    -   **Default**: `false`
-   **TrashNotePatterns**: RegEx-Patterns to find effected notes
    -   **Default**: `^Untitled`
-   **Folders**: Folders to look for effected Files
    -   **Default**: `/`
-   **recursive**: Also look for trash-notes in sub-folders
    -   **Default**: `false`

### Interface

There is probably no need for a special interface-extension

### Commands

-   Toggle: Delete Trash-Notes when Tab closes
    -   Better would be: Turn On and Turn Off
-   Toggle: Delete Trash-Notes on Start-Up
    -   Better would be: Turn On and Turn Off
-   Delete specified Trash-Notes
