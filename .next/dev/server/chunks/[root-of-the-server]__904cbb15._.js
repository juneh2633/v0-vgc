module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/theme-song-lottery/app/api/random/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/server.js [app-route] (ecmascript)");
;
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const queryParams = new URLSearchParams();
    const minLevel = searchParams.get("minLevel");
    const maxLevel = searchParams.get("maxLevel");
    const minVersion = searchParams.get("minVersion");
    const maxVersion = searchParams.get("maxVersion");
    const count = searchParams.get("count");
    const isMegamix = searchParams.get("isMegamix");
    if (minLevel) queryParams.append("minLevel", minLevel);
    if (maxLevel) queryParams.append("maxLevel", maxLevel);
    if (minVersion) queryParams.append("minVersion", minVersion);
    if (maxVersion) queryParams.append("maxVersion", maxVersion);
    if (count) queryParams.append("count", count);
    const baseEndpoint = isMegamix === "true" ? "https://juneh2633.ddns.net/chart/random/megamix" : "https://juneh2633.ddns.net/chart/random";
    const url = `${baseEndpoint}?${queryParams.toString()}`;
    console.log("[v0] Fetching random charts from:", url);
    try {
        const response = await fetch(url, {
            cache: "no-store"
        });
        if (!response.ok) {
            console.log("[v0] API Error:", response.status, response.statusText);
            return __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "API request failed"
            }, {
                status: response.status
            });
        }
        const data = await response.json();
        console.log("[v0] Random API Response keys:", Object.keys(data));
        console.log("[v0] data exists:", !!data.data);
        if (data.data) {
            console.log("[v0] data length:", data.data.length);
            if (data.data.length > 0) {
                console.log("[v0] First chart keys:", Object.keys(data.data[0]));
                console.log("[v0] First chart sample:", JSON.stringify(data.data[0]).substring(0, 500));
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            chartData: data.data || []
        });
    } catch (error) {
        console.error("[v0] Fetch error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__904cbb15._.js.map