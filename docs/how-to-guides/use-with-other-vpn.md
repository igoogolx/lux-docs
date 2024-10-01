---
sidebar_position: 1
---


# Use With Other VPN

## Why?
Although Lux supports multiple proxy protocols, it does not support all of them.
Therefore, in some cases, you might want to use Lux alongside other VPNs on your machine.
This is feasible, but in certain scenarios, additional configuration may be required; otherwise, it may not work properly.

## Add Rules
Assuming your VPN supports connections through a Socks5 proxy and is running on 127.0.0.1:1080, let’s proceed with configuring Lux.
First, Lux has two proxy modes: System Proxy, which requires no additional configuration.

:::tip
Please read [mode page](../configuration/mode.md) first.
:::

Now, if you want to use Lux’s Tun mode, but after adding a Socks5 proxy server with the address 127.0.0.1:1080 in Lux, you may find that the network can't work.
This happens because Lux does not know the real server address of your VPN and, therefore, cannot properly handle your VPN’s network traffic.
To fix this, you need to inform Lux of your VPN’s real server address, which can be configured through the Rule Page.
The server address could be either an IP or a domain, and for each case, different types of rules need to be added.

### IP

### DOMAIN

