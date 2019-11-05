// Proxy PAC File
// - Used to redirect certain addresses to the server through the SOCKS ssh port (1280 for this file), i.e. 
//   tunnel traffic through server.
// - Useful for easily accessing webpages from services running on a server (Jupyter notebooks, TensorBoard, Spark UI, etc.)
//   that is otherwise locked down by a firewall.
// - To install on OS X/MacOS, go to "Settings->Network->Advanced->Proxies->Automatic Proxy Configuration"
//   and paste the local file url (`file:///absolute/path/to/proxy.pac`).
// - Alternatively, use `./reinstall_proxy.sh`.
// - SSH to the server with `ssh -D 1280 ....`.
function FindProxyForURL(url, host) {
  // Setup a SOCKS proxy on port 1280.
  proxy = "SOCKS4 103.126.109.2:4145; SOCKS 103.126.109.2:4145"

 
  return "DIRECT";
}
