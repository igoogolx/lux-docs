---
sidebar_position: 2
---

# Development

Develop and build on your own.

## Requirements

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en)(16 or above)
* [Golang](https://go.dev/)(1.21 or above)
* [Flutter](https://flutter.dev/)(3.10 or above)


## Download projects

```sh

#core
git clone https://github.com/igoogolx/itun2socks.git

#dashboard
git clone https://github.com/igoogolx/lux-client.git

#app
git clone https://github.com/igoogolx/lux.git

```

## Start local development

### Core
:::caution
It must be run as root on macOS or admin on Windows
:::


```sh
cd itun2socks

#download third parties
go run scripts/generate.go

go run -tags="with_gvisor debug" -port=9000
```

### Dashboard

```sh
cd lux-client

yarn install

yarn dev
```



## Build

```sh

cd lux

dart pub global activate flutter_distributor
dart run scripts/init.dart


#Widows
flutter_distributor release --name windows-latest

#Macos
npm install -g appdmg
flutter_distributor release --name macos-latest
```


