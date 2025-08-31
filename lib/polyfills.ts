if (typeof window !== "undefined") {
  // Polyfill for process.emitWarning
  if (typeof global === "undefined") {
    ;(window as any).global = window
  }

  if (typeof process === "undefined") {
    ;(window as any).process = {
      env: { NODE_ENV: "development" },
      emitWarning: () => {},
      nextTick: (fn: Function) => setTimeout(fn, 0),
      version: "",
      versions: { node: "" },
      platform: "browser",
      browser: true,
    }
  } else if (typeof process.emitWarning === "undefined") {
    process.emitWarning = () => {}
  }

  // Buffer polyfill
  if (typeof Buffer === "undefined") {
    ;(window as any).Buffer = {
      from: () => new Uint8Array(),
      isBuffer: () => false,
    }
  }
}
