---
sidebar_position: 4
---

# Auto Mode

Let lux decide the best proxy server automatically.
You can enable Auto Mode in the Setting to select a proxy automatically.
There are 2 mode types.

* url-test
  * Lux benchmarks each proxy servers in the list, by sending HTTP HEAD requests to a specified URL through these servers periodically. 
    It's possible to set a maximum tolerance value, benchmarking interval, and the target URL.
* fallback
  * Lux periodically tests the availability of servers in the list with the same mechanism of `url-test`. The first available server will be used.

