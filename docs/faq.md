---
sidebar_position: 5
---

# FAQ

### What's the difference between clash and lux?

* Lux is built on clash's code. But it's not another GUI client of clash. Clash powers lux and make it support more
  proxy protocols.
* Lux is easy to start because of built-in proxy rules. Clash is highly customized and need more configuration manually.
* Lux is open sourced completely. However, Clash Premium is close sourced.

### Why is elevated privileges needed(root on macOS and admin on Windows)?

To intercept network traffic at the kernel level, lux will create the tun device.
The tun device is a virtual network interface that allows user-space programs to interact with network stack as if they
were traditional network devices.
Lux leverages the tun device functionality to establish a VPN tunnel and route network traffic through it.
The tun device requires elevated privileges.


### Why not clash.meta?

Clash.meat is a forked clash project. It supports tun and more proxy protocols. 
The reason is that clash is lighter and more stable.  

### Does lux use fake ip?

No. Every dns query gets the real ips.

### Can I share my proxy with other devices in LAN?

Yes. You can enable a local http server. Then other devices can connect this server.

### Does lux support secure dns?

Yes. You can set local or remote dns as DoH(Dns-over-Https).

### Can lux be used with other vpn?

No. In this situation, lux may not work as expected. 


