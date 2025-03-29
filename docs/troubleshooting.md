---
sidebar_position: 4
---

# Troubleshooting


## Lux can't keep connected when os goes to sleep.

If lux keep connected, when os wakes up, network will be unavailable on macOS and memory usage will be huge on Windows.
The issue is still under investigation.
So, it's better to disconnect it and reconnect it when os wakes up.


## Lux can't be installed on macOS.

- "Lux" can’t be opened because the developer cannot be verified.

    - Click the Cancel button, then go to the Settings -> Privacy and Security page, click the Still Open button, and then click the Open button in the pop-up window. 
After that, there will be no more pop-up warnings when opening Lux. 🎉

    - If you cannot find the above options in Privacy & Security, or get error prompts such as broken files with Apple Silicon machines. 
Open Terminal.app and enter the following command (you may need to enter a password halfway through), then restart Lux:
   ```bash
    sudo xattr -r -d com.apple.quarantine /Applications/Lux.app
    ```

## Can't connect to the internet after using lux?

### 1.Kill the lux_core process

[//]: # (TODO)
Actually, lux_core is real precess.

### 2.Restore system setting

- Tun mode(**macOS-only**)
  - When it's tun mode, lux will modify the system DNS to 10.255.0.2. Normally, DNS will be restored after turning off lux.
  However, in some cases, the DNS might not be restored successfully. If this happens, you need to restore it manually.
  There are two ways to restore the DNS: through [System Settings](https://support.apple.com/guide/mac-help/change-dns-settings-on-mac-mh14127/mac)
  or by executing the following command lines.

```sh
networksetup -setdnsservers Wi-Fi empty
```

- System proxy mode
  - When it's System Proxy Mode, lux will modify the system proxy setting. Normally, all setting will be restored after turning off lux.
    However, in some cases, the setting might not be restored successfully. If this happens, you need to restore it manually.
    There are two ways to restore system proxy setting: 
   
    - MacOS: through [Change proxy settings](https://support.apple.com/guide/mac-help/change-proxy-settings-on-mac-mchlp2591/mac) or by executing the following command lines.

```sh
networksetup -setdnsservers Wi-Fi empty
```
