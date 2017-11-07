export function assert (condition, msg = 'uncaught error') {
    if (!condition) throw new Error(`[juex] ${msg}`)
}