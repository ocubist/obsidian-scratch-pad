# Scratch Pad

"Scratch Pad" is a powerful plugin for Obsidian, that helps you keep your notes organized by automatically discarding them when they meet specific criteria. It's perfect for those who have a lot of abandoned notes in their Obsidian vault, or for those who need to create quick notes that don't need to be persistent.

With Scratch Pad, you must set up rules for discarding notes based on a specific folder, a regular expression, and the depth of the search.

-   You must select a folder, so only notes in that folder will be affected.
-   You must choose a regular expression, so only notes that match the regular expression will be affected.
-   You must choose to look for affected notes only in the direct children of the chosen folder or recursively in all sub-folders

Additionally, you can choose to discard affected files after Obsidian is initialized, when closing tabs or via command. This means you can control when and how the notes are discarded, giving you even more flexibility in your workflow.

This means you can focus on creating new notes without worrying about the clutter of old ones. It's a great tool for streamlining your workflow and decluttering your note-taking process.

> **Warning**  
> Be careful when setting up rules, as a wrong configuration can lead to deleting files that are not intended to be deleted. It is highly recommended to make a backup of your notes before using the plugin.

Try it out and see how it can help you keep your notes organized.

## What is Obsidian?

[Obsidian](https://obsidian.md) is a powerful note-taking and organization tool that utilizes a local folder of plain text files as its storage format. It's built on the principle of plain text and Markdown, making it easy to use and highly customizable. Obsidian allows users to create notes, organize them with tags, links and cross-references, and connect them together in a graph-like structure. This makes it an excellent tool for knowledge management, writing, and project management. It has a simple, clean interface, and it's easy to use even for people who are not tech-savvy.

## Installation

> **Note**  
> You must turn of Restricted Mode in order to use Community-Plugins

### Via Obsidians Community-Plugins

Simply browse for `Scratch Pad` in Obsidians Community-Plugins and install the Plugin…

### Manually

> **Note**  
> You must have [nodejs](https://nodejs.org/en/download/) installed in order to install the plugin manually.

1. In the `.obsidian`-folder of your vault, create the folder `plugins`, if it does not exist yet.
2. Clone this repo into the folder `.obsidian/plugins`.
3. Run the following commands inside `.obsidian/plugins/obsidian-scratch-pad`
    1. Run `npm install` to install all dependencies.
    2. Run `npm run dev` to transpile the TypeScript code into vanilla JavaScript.

## Setup Scratch Pad

### General Settings

-   **Delete Trash-Notes on Tab-Close**  
    When enabled, Trash-Notes will automatically be deleted, as soon as they are removed from the workspace.
-   **Delete Trash-Notes on Start-Up**  
    When enabled, all Trash-Notes will be deleted on start-up.

### Trash-Notes-Specifications

-   **RexExp to identify Trash-Notes**  
    The regular expression (RegExp) pattern to identify Trash-Notes. The default pattern, `^Untitled`, would translate into the JavaScript RexExp pattern `/^Untitled/`.
-   **Folder**  
    The folder to look for Trash-Notes.
-   **Include Sub-Folders**  
    When enabled, all sub-folders will be searched for Trash-Notes, otherwise only notes directly within the specified folder will be deleted.

### Misc

-   **Notification-Message**  
    When enabled, will trigger a notification-message every time Trash-Notes are deleted.
-   **Deleted Trash-Notes**  
    What to do with deleted Trash-Notes.
-   **Reset Settings**  
    Reset settings to default.

## Contributors

I would like to give a special thanks to [Reclusiarch-Grimaldus](https://github.com/Reaper176) for his important role in the development of this obsidian plugin. Without his contributions, support and sponsoring, this plugin wouldn't have been possible.

## License

This project is licensed under the terms of the MIT License, which means you are free to use, modify, and distribute the software as long as you give credit to the original author and do not hold them liable for any damages.

You are allowed to use the software for any purpose, including commercial use, and to modify the software to suit your needs. You can also distribute the software, whether in original or modified form, as long as the license and copyright notice are included.

## Support

This is an open-source project. You are free to use the code however you like, as long as you give credit to me. That does not mean, that I would not appreciate monetary support, as I am poor as f\*ck ✌

<a href="https://www.buymeacoffee.com/ocubist" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
