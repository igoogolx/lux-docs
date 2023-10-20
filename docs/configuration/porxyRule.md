---
sidebar_position: 3
---

# Proxy Rules

Select your proxy rule. Lux supports 4 built-in rules.

:::tip
Please [dns page](dns.md) first.
:::

* Proxy All: 
  * Domains will be resolved by remote dns.
  * Ips will be proxied.
* Bypass CN: 
  * CN domains will be resolved by local dns. Others are remote dns.
  * CN ips and ips that are from CN domains will be proxied. Others are directed.
* Proxy GFW:
  * GFW domains will be resolved by remote dns. Others are local dns.
  * Ips that are from GFW domains will be proxied. Others are directed.
* Bypass All:
  * Domains will be resolved by local dns.
  * Ips will be directed.

