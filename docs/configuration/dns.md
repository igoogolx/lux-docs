---
sidebar_position: 2
---

# Dns

There are 3 dns servers in Lux.
* Local dns: resolve domains that need to be connected directly.
* Remote dns: resolve up domains that need to be connected by proxy
* Boost dns:
  * local DNS or remote dns are set to DNS-over-HTTPS (DoH).
  * the proxy server is a domain name.

:::tip

If a domain is resolved through local dns, its requests will be directed. 
Conversely, if a domain is resolved through remote dns, its requests will be proxied.

:::

## Supported dns
* Tcp: tcp://8.8.8.8 ,e.g
* Doh: https://dns.google/dns-query ,e.g
* Dot: tls://dns.rubyfish.cn:853, e.g
* Dhcp: dhcp://auto


|      | Local dns | Remote dns | Boost dns  |
|------|-----------|------------|------------|
| Tcp  | Y         | Y          | Y          |
| Doh  | Y         | Y          | N          |
| Dot  | Y         | Y          | Y          |
| Dhcp | Y         | N          | N          |
