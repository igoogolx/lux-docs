---
sidebar_position: 6
---

# FAQ

### What's the difference between clash and lux?

* Lux is built on clash's code. But it's not another GUI client of clash. Clash powers lux and make it support more
  proxy protocols.
* Lux is easy to start because of built-in proxy rules. Clash is highly customized and needs more configuration manually.
* Lux is open-sourced fully. However, Clash Premium is close sourced.

### Why are elevated privileges necessary (root on macOS and admin on Windows)?

To intercept network traffic at the kernel level, lux will create the tun device.
The tun device is a virtual network interface that allows user-space programs to interact with network stack as if they
were traditional network devices.
Lux leverages the tun device functionality to establish a VPN tunnel and route network traffic through it.
The tun device requires elevated privileges.



### Does lux use fake ip?

No. Every dns query gets the real ips.

### Can I share my proxy with other devices in LAN?

Yes. You can enable a local server which is socks and http remix. Then other devices can connect this server.

### Does lux support secure dns?

Yes. You can set local or remote dns as DoH(Dns-over-Https).

### Can lux be used with other vpn?

No. In this situation, lux may not work as expected. 

### Why can’t my macOS connect to the internet after using lux?

When it's tun mode, lux will modify the system DNS to 10.255.0.2. Normally, DNS will be restored after turning off lux.
However, in some cases, the DNS might not be restored successfully. If this happens, you need to restore it manually. 
There are two ways to restore the DNS: through [System Settings](https://support.apple.com/guide/mac-help/change-dns-settings-on-mac-mh14127/mac) 
or by executing the following command lines.


```sh
networksetup -setdnsservers Wi-Fi empty
```
