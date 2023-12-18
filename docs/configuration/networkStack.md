---
sidebar_position: 5
---

# Network Stack


When it is tun mode, lux run at the network layer. That's where network stack works.

```sh
tun --> network stack --> sys socket --> internet
```

There are two supported network stacks.


| Stack  | Description                                                                                           |
|--------|-------------------------------------------------------------------------------------------------------|
| system | Perform L3 to L4 translation using the system network stack                                           |
| gviosr | Perform L3 to L4 translation using [gVisor](https://github.com/google/gvisor)'s virtual network stack |
