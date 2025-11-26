module.exports = [
"[project]/theme-song-lottery/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40da8ba6d5212caa926222039ea9a633bd76a3ad7a":"fetchCharts"},"",""] */ __turbopack_context__.s([
    "fetchCharts",
    ()=>fetchCharts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
async function fetchCharts(params) {
    const { minLevel, maxLevel, minVersion, maxVersion, count = 1, isMegamix = false } = params;
    const queryParams = new URLSearchParams();
    if (minLevel !== undefined) queryParams.append("minLevel", minLevel.toString());
    if (maxLevel !== undefined) queryParams.append("maxLevel", maxLevel.toString());
    if (minVersion !== undefined) queryParams.append("minVersion", minVersion.toString());
    if (maxVersion !== undefined) queryParams.append("maxVersion", maxVersion.toString());
    if (count !== undefined) queryParams.append("count", count.toString());
    if (isMegamix) queryParams.append("isMegamix", "true");
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
    const url = `${baseUrl}/api/random?${queryParams.toString()}`;
    console.log("[v0] Fetching from:", url);
    const response = await fetch(url, {
        cache: "no-store"
    });
    if (!response.ok) {
        console.log("[v0] Response not ok:", response.status);
        throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    console.log("[v0] Received data keys:", Object.keys(data));
    console.log("[v0] chartData:", data.chartData?.length || 0, "items");
    return data.chartData || [];
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    fetchCharts
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchCharts, "40da8ba6d5212caa926222039ea9a633bd76a3ad7a", null);
}),
"[project]/theme-song-lottery/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/theme-song-lottery/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/app/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/theme-song-lottery/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/theme-song-lottery/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40da8ba6d5212caa926222039ea9a633bd76a3ad7a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchCharts"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$theme$2d$song$2d$lottery$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/theme-song-lottery/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/theme-song-lottery/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/app/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/theme-song-lottery/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/theme-song-lottery/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/theme-song-lottery/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=theme-song-lottery_62c92505._.js.map