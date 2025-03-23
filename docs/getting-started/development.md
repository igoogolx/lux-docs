---
sidebar_position: 2
---

# Development

Develop and build on your own.

## Requirements

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en)(20 or above)
* [Golang](https://go.dev/)(1.24 or above)
* [Flutter](https://flutter.dev/)(3.29 or above)


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
go generate

go run -tags="with_gvisor debug" -port=9000
```

### Dashboard

```sh
cd lux-client

yarn install

yarn dev
```



## Build

As you can see, lux is released by GitHub action. You can also build it on your own.
The latest steps are always in [build.yml](https://github.com/igoogolx/lux/blob/main/.github/workflows/build.yml).


### Requirements

* [Inno Setup 6 ](https://jrsoftware.org/isinfo.php) (windows only)


```sh

cd lux

dart pub global activate flutter_distributor
dart run scripts/init.dart


#Windows
flutter_distributor release --name windows-latest

#MacOS on apple silicon
npm install -g appdmg
flutter_distributor release --name macos-14

#MacOS on intel
npm install -g appdmg
flutter_distributor release --name macos-13
```


