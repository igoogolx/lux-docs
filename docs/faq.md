---
sidebar_position: 4
---

# FAQ

### What's the difference between clash and lux?
* Lux is built on clash's code and use some code from it. But it's not another GUI client of clash. Clash powers lux and make it support more proxy types.
* Lux is easy to start because of built-in proxy rules. Clash is highly customized and need more configuration manually.
* Lux is fully open sourced. However, Clash Premium is close sourced.

### Why is elevated privileges needed(root on macOS and admin on Windows)?

To intercept network traffic at the kernel level, Lux will create the tun device.
The tun device is a virtual network interface that allows user-space programs to interact with network stack as if they were traditional network devices. 
Lux leverages the tun device functionality to establish a VPN tunnel and route network traffic through it.
The tun device requires elevated privileges because it involves interacting with the network stack at a low level,
which is typically restricted to ensure security and prevent unauthorized access or manipulation of network traffic


### Can I share my proxy with other devices in LAN?
Yes. You can enable a local http server. Then other devices can connect this server.

### Can Lux support secure DNS?
Yes. You cant set doh as local or remote dns.

