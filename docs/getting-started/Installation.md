---
sidebar_position: 1
---

# Installation



### Install it manually
1. Download the [installer](https://github.com/igoogolx/lux/releases) file and install it
2. Open it like a normal app

### Install it from [winget](https://github.com/microsoft/winget-cli)(windows only)
```sh
winget install igoogolx.lux
```

Note:
1.On macOS, you need to manually configure system DNS to hijack.
```sh
# replace "Wi-Fi" according to your actual network
networksetup -setdnsservers Wi-Fi 8.8.8.8
```

2.On Apple Silicon Mac, you may see the error: “Lux” is damaged and can’t be opened. You should move it to the Trash. To solve this, open a new Terminal window and type:
```sh
xattr -d com.apple.quarantine /Applications/Lux.app
```

