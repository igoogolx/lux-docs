---
sidebar_position: 3
---

# Proxy Rules

Select your proxy rule. Lux supports 4 built-in rules. The default is **Proxy All**.

:::tip
Please read [dns page](dns.md) first.
:::

* Proxy All: 
  * All domains will be resolved by remote dns.
  * All ips will be proxied.
* Bypass CN: 
  * CN domains will be resolved by local dns. Others are remote dns.
  * CN ips and ips that are from CN domains will be proxied. Others are directed.
* Proxy GFW:
  * GFW domains will be resolved by remote dns. Others are local dns.
  * Ips that are from GFW domains will be proxied. Others are directed.
* Bypass All:
  * All domains will be resolved by local dns.
  * All ips will be directed.


# Add your rules

```txt
TYPE,ARGUMENT,POLICY
```

## Policy

There are four types of POLICY for now, in which:

- PROXY: routes the packet to the proxy server
- BYPASS: directly connects to the target through `default interface` 
- REJECT: drops the packet


## Types of rules

There are a number of rules where one might find useful. The following section covers each rule type and how they should be used.

### DOMAIN

`DOMAIN,www.google.com,policy` routes only `www.google.com` to `policy`.

### DOMAIN-SUFFIX

`DOMAIN-SUFFIX,youtube.com,policy` routes any domain names that ends with `youtube.com`.

In this case, `www.youtube.com` and `foo.bar.youtube.com` will be routed to `policy`.

### DOMAIN-KEYWORD

`DOMAIN-KEYWORD,google,policy` routes any domain names to policy that contains `google`.

In this case, `www.google.com` or `googleapis.com` are routed to `policy`.

### DOMAIN-REGEX

`DOMAIN-REGEX,.*,policy` routes any domain names to policy that meets regex `.*`.

In this case, `www.google.com` or `googleapis.com` are routed to `policy`.


### IP-CIDR

IP-CIDR rules are used to route packets based on the **destination IPv4 address** of the packet.



