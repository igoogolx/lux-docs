---
sidebar_position: 4
---

# Troubleshooting


### Lux can't keep connected when os goes to sleep.

If lux keep connected, when os wakes up, network will be unavailable on macOS and memory usage will be huge on Windows.
The issue is still under investigation.
So, it's better to disconnect it and reconnect it when os wakes up.


### Lux can't be installed on macOS.

- "Lux" can’t be opened because the developer cannot be verified.

    - Click the Cancel button, then go to the Settings -> Privacy and Security page, click the Still Open button, and then click the Open button in the pop-up window. 
After that, there will be no more pop-up warnings when opening Lux. 🎉

    - If you cannot find the above options in Privacy & Security, or get error prompts such as broken files with Apple Silicon machines. 
Open Terminal.app and enter the following command (you may need to enter a password halfway through), then restart Lux:
   ```bash
    sudo xattr -r -d com.apple.quarantine /Applications/Lux.app
    ```
