---
sidebar_position: 1
---

# Getting started



### 1. Install it manually
1. Download the [installer](https://github.com/igoogolx/lux/releases) file and install it
2. Open it like a normal app

### 2. Install it from [winget](https://github.com/microsoft/winget-cli)(windows only)
```sh
winget install igoogolx.lux
```


:::tip My tip

On macOS, you need to manually configure system DNS to hijack.

```sh
# replace "Wi-Fi" according to your actual network
networksetup -setdnsservers Wi-Fi 8.8.8.8
```

