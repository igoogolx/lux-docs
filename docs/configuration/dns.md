---
sidebar_position: 2
---

# Dns

Control how domains are resolved. There are 3 dns servers in lux.

* Local dns: resolve domains that need to be connected directly.
* Remote dns: resolve up domains that need to be connected by proxy.
* Boost dns:
  * Local dns is set to dns-over-https (DoH). For example, https://dns.google/dns-query.
  * The proxy server is a domain name. For example, example.com.

:::tip

If a domain is resolved through local dns, its requests will be directed. 
Conversely, if a domain is resolved through remote dns, its requests will be proxied.

:::

## Supported dns
* Tcp: tcp://8.8.8.8 ,e.g
* Doh: https://dns.google/dns-query ,e.g
* Dhcp: dhcp://auto


|      | Local dns | Remote dns | Boost dns  |
|------|-----------|------------|------------|
| Tcp  | Y         | Y          | Y          |
| Doh  | Y         | Y          | N          |
| Dhcp | Y         | N          | N          |
