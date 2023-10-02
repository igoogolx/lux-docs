---
sidebar_position: 2
---

# Dns

There are 3 dns servers in Lux.
* Local dns: look up domains that need to be connected directly.
* Remote dns: look up domains that need to be connected by proxy
* Boost dns:
  * when both Local DNS and Remote DNS are set to DNS-over-HTTPS (DoH).
  * the address of the proxy server is a domain name.

:::tip

If a domain is resolved through Local DNS, its requests will not go through the proxy. Conversely, if a domain is resolved through Remote DNS, its requests will be routed through the proxy.

:::

## Supported Dns
* Tcp: tcp://8.8.8.8
* Doh: https://dns.google/dns-query
* Dot:
* Dhcp: dhcp://auto


|      | Local dns | Remote dns | Boost dns  |
|------|-----------|------------|------------|
| Tcp  | Y         | Y          | Y          |
| Doh  | Y         | Y          | N          |
| Dot  | Y         | Y          | Y          |
| Dhcp | Y         | N          | N          |
