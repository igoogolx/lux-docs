---
sidebar_position: 0
---

# Proxy Mode

Select your proxy mode: Tun or System Proxy. The default is **Tun**.

* Tun:
    * Most browsers have enabled the "Secure DNS" feature by default.
      However, it causes dns can't be hijacked.
      Please disable this feature in your browser settings.
    * Tun will create a tun device and change the route table to handle all applications and all traffic.
    * To hijack dns, lux will modify system dns to "10.255.0.2" on macOS when it's enabled.

* System Proxy:
    * It is a feature supported by your operate system. Lux will start a local server and set
      the system setting with the local address.
    * Not all applications support it. Normally, browsers will use the setting automatically.

* Mixed(Recommended):
    * Enable Tun and System Proxy at the same time. It has better performance. 
      App like browsers will use System Proxy automatically. Others use Tun.
