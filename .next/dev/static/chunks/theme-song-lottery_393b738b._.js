(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/ui/scroll-area.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollArea",
    ()=>ScrollArea,
    "ScrollBar",
    ()=>ScrollBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "scroll-area",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/ui/scroll-area.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/ui/scroll-area.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/ui/scroll-area.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/ui/scroll-area.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ScrollArea;
function ScrollBar({ className, orientation = 'vertical', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex touch-none p-px transition-colors select-none', orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent', orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        }, void 0, false, {
            fileName: "[project]/theme-song-lottery/components/ui/scroll-area.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/scroll-area.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c1 = ScrollBar;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "ScrollArea");
__turbopack_context__.k.register(_c1, "ScrollBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = 'default', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = SelectTrigger;
function SelectContent({ className, children, position = 'popper', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md', position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/lib/csv-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadCSV",
    ()=>downloadCSV,
    "exportToCSV",
    ()=>exportToCSV,
    "parseCSV",
    ()=>parseCSV
]);
function exportToCSV(data) {
    const lines = [];
    // Header
    lines.push("themeName,songIdx,chartIdx,title,artist,jacket,level,type,comment,weight");
    // Data rows
    data.themes.forEach((theme)=>{
        theme.songs.forEach((song)=>{
            const escapedTitle = `"${song.title.replace(/"/g, '""')}"`;
            const escapedArtist = `"${song.artist.replace(/"/g, '""')}"`;
            const escapedComment = `"${song.comment.replace(/"/g, '""')}"`;
            const escapedThemeName = `"${theme.name.replace(/"/g, '""')}"`;
            lines.push(`${escapedThemeName},${song.songIdx},${song.chartIdx},${escapedTitle},${escapedArtist},${song.jacket},${song.level},${song.type},${escapedComment},${song.weight || 1}`);
        });
    });
    return lines.join("\n");
}
function parseCSV(csvContent) {
    const lines = csvContent.split("\n").filter((line)=>line.trim());
    const themes = [];
    const themeMap = new Map();
    // Skip header
    for(let i = 1; i < lines.length; i++){
        const line = lines[i];
        const values = parseCSVLine(line);
        if (values.length >= 10) {
            const [themeName, songIdx, chartIdx, title, artist, jacket, level, type, comment, weight] = values;
            if (!themeMap.has(themeName)) {
                themeMap.set(themeName, []);
            }
            themeMap.get(themeName).push({
                songIdx: Number.parseInt(songIdx, 10),
                chartIdx: Number.parseInt(chartIdx, 10),
                title,
                artist,
                jacket,
                level: Number.parseInt(level, 10),
                type,
                comment: comment || "",
                weight: Number.parseInt(weight, 10) || 1
            });
        }
    }
    themeMap.forEach((songs, name)=>{
        themes.push({
            name,
            songs
        });
    });
    return {
        themes
    };
}
function parseCSVLine(line) {
    const result = [];
    let current = "";
    let inQuotes = false;
    for(let i = 0; i < line.length; i++){
        const char = line[i];
        if (char === '"') {
            if (inQuotes && line[i + 1] === '"') {
                current += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === "," && !inQuotes) {
            result.push(current);
            current = "";
        } else {
            current += char;
        }
    }
    result.push(current);
    return result;
}
function downloadCSV(content, filename) {
    const blob = new Blob([
        content
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/theme-editor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeEditor",
    ()=>ThemeEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$csv$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/csv-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const fetcher = async (url)=>{
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
    }
    const data = await res.json();
    return data;
};
function ThemeEditor({ onBack }) {
    _s();
    const [themes, setThemes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeTheme, setActiveTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newThemeName, setNewThemeName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAddingTheme, setIsAddingTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [levelFilter, setLevelFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingComment, setEditingComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingWeight, setEditingWeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { data: songData, error, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])("/api/songs", fetcher);
    const allCharts = (songData?.chartData || []).flatMap((song)=>song.chart.map((chart)=>({
                songIdx: song.songIdx,
                chartIdx: chart.chartIdx,
                title: song.title,
                artist: song.artist,
                level: chart.level,
                type: chart.type,
                jacket: chart.jacket
            })));
    const filteredCharts = allCharts.filter((chart)=>{
        const matchesSearch = chart.title.toLowerCase().includes(searchQuery.toLowerCase()) || chart.artist.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesLevel = levelFilter === "all" || chart.level === Number.parseInt(levelFilter);
        return matchesSearch && matchesLevel;
    });
    const handleAddTheme = ()=>{
        if (!newThemeName.trim()) return;
        const newTheme = {
            name: newThemeName.trim(),
            songs: []
        };
        setThemes([
            ...themes,
            newTheme
        ]);
        setActiveTheme(newThemeName.trim());
        setNewThemeName("");
        setIsAddingTheme(false);
    };
    const handleDeleteTheme = (themeName)=>{
        setThemes(themes.filter((t)=>t.name !== themeName));
        if (activeTheme === themeName) {
            setActiveTheme(themes[0]?.name || "");
        }
    };
    const handleAddChart = (chart)=>{
        const themeIndex = themes.findIndex((t)=>t.name === activeTheme);
        if (themeIndex === -1) return;
        // Generate a unique ID for this entry (allows duplicates)
        const uniqueId = `${chart.chartIdx}-${Date.now()}`;
        const newSong = {
            songIdx: chart.songIdx,
            chartIdx: chart.chartIdx,
            title: chart.title,
            artist: chart.artist,
            jacket: chart.jacket,
            level: chart.level,
            type: chart.type,
            comment: "",
            weight: 1,
            uniqueId
        };
        const updatedThemes = [
            ...themes
        ];
        updatedThemes[themeIndex].songs.push(newSong);
        setThemes(updatedThemes);
        setIsSearchOpen(false);
        setSearchQuery("");
    };
    const handleRemoveSong = (themeIndex, songIndex)=>{
        const updatedThemes = [
            ...themes
        ];
        updatedThemes[themeIndex].songs.splice(songIndex, 1);
        setThemes(updatedThemes);
    };
    const handleUpdateComment = (themeIndex, songIndex, comment)=>{
        const updatedThemes = [
            ...themes
        ];
        updatedThemes[themeIndex].songs[songIndex].comment = comment;
        setThemes(updatedThemes);
    };
    const handleUpdateWeight = (themeIndex, songIndex, weight)=>{
        const updatedThemes = [
            ...themes
        ];
        updatedThemes[themeIndex].songs[songIndex].weight = Math.max(1, weight);
        setThemes(updatedThemes);
    };
    const handleExport = ()=>{
        const csv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$csv$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportToCSV"])({
            themes
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$csv$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["downloadCSV"])(csv, "theme-songs.csv");
    };
    const currentThemeIndex = themes.findIndex((t)=>t.name === activeTheme);
    const getTypeLabel = (type)=>{
        const typeMap = {
            novice: "NOV",
            advanced: "ADV",
            exhaust: "EXH",
            maximum: "MXM",
            infinite: "INF",
            gravity: "GRV",
            heavenly: "HVN",
            vivid: "VVD",
            exceed: "XCD"
        };
        return typeMap[type.toLowerCase()] || type.toUpperCase();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto py-8 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: onBack,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            "돌아가기"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleExport,
                        disabled: themes.length === 0,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            "Export (CSV)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "테마 에디터"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4 flex-wrap",
                                children: [
                                    themes.map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: activeTheme === theme.name ? "default" : "outline",
                                                    size: "sm",
                                                    onClick: ()=>setActiveTheme(theme.name),
                                                    className: "rounded-r-none",
                                                    children: [
                                                        theme.name,
                                                        " (",
                                                        theme.songs.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "rounded-l-none border-l-0 px-2 bg-transparent",
                                                    onClick: ()=>handleDeleteTheme(theme.name),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, theme.name, true, {
                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)),
                                    isAddingTheme ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                placeholder: "테마 이름",
                                                value: newThemeName,
                                                onChange: (e)=>setNewThemeName(e.target.value),
                                                onKeyDown: (e)=>e.key === "Enter" && handleAddTheme(),
                                                className: "w-32 h-8",
                                                autoFocus: true
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                onClick: handleAddTheme,
                                                children: "추가"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 211,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "sm",
                                                variant: "ghost",
                                                onClick: ()=>setIsAddingTheme(false),
                                                children: "취소"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: ()=>setIsAddingTheme(true),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "w-4 h-4 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            "테마 추가"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            currentThemeIndex !== -1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded-lg overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-12 gap-2 p-3 bg-muted font-medium text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-1"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-3",
                                                children: "곡명"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-2",
                                                children: "아티스트"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-1",
                                                children: "레벨"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-1",
                                                children: "가중치"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-3",
                                                children: "코멘트"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 235,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "col-span-1"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y",
                                        children: [
                                            themes[currentThemeIndex].songs.map((song, songIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-12 gap-2 p-3 items-center hover:bg-muted/50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-1",
                                                            children: song.jacket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: song.jacket || "/placeholder.svg",
                                                                alt: song.title,
                                                                width: 32,
                                                                height: 32,
                                                                className: "rounded"
                                                            }, void 0, false, {
                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-3 text-sm truncate",
                                                            children: song.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-2 text-sm text-muted-foreground truncate",
                                                            children: song.artist
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-1 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-medium",
                                                                    children: getTypeLabel(song.type)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-1 text-muted-foreground",
                                                                    children: song.level
                                                                }, void 0, false, {
                                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                type: "number",
                                                                min: 1,
                                                                max: 99,
                                                                value: song.weight,
                                                                onChange: (e)=>handleUpdateWeight(currentThemeIndex, songIdx, Number.parseInt(e.target.value) || 1),
                                                                className: "h-7 text-sm w-14 text-center"
                                                            }, void 0, false, {
                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                            lineNumber: 263,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-3",
                                                            children: editingComment?.themeIdx === currentThemeIndex && editingComment?.songIdx === songIdx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                value: song.comment,
                                                                onChange: (e)=>handleUpdateComment(currentThemeIndex, songIdx, e.target.value),
                                                                onBlur: ()=>setEditingComment(null),
                                                                onKeyDown: (e)=>e.key === "Enter" && setEditingComment(null),
                                                                className: "h-7 text-sm",
                                                                autoFocus: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground cursor-pointer hover:bg-muted px-2 py-1 rounded min-h-[28px]",
                                                                onClick: ()=>setEditingComment({
                                                                        themeIdx: currentThemeIndex,
                                                                        songIdx
                                                                    }),
                                                                children: song.comment || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "italic text-muted-foreground/50",
                                                                    children: "코멘트 추가..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 44
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "col-span-1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "ghost",
                                                                size: "sm",
                                                                onClick: ()=>handleRemoveSong(currentThemeIndex, songIdx),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "w-4 h-4 text-destructive"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, song.uniqueId || `${song.chartIdx}-${songIdx}`, true, {
                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 19
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                                                open: isSearchOpen,
                                                onOpenChange: setIsSearchOpen,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 cursor-pointer hover:bg-muted/50 text-muted-foreground text-sm flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                    lineNumber: 306,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "곡 추가하기..."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                        lineNumber: 304,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                                        className: "max-w-4xl w-[90vw] overflow-visible",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                    children: "곡 검색"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                                className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                lineNumber: 315,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                                placeholder: "곡명 또는 아티스트로 검색...",
                                                                                value: searchQuery,
                                                                                onChange: (e)=>setSearchQuery(e.target.value),
                                                                                className: "pl-10"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                lineNumber: 316,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                        value: levelFilter,
                                                                        onValueChange: setLevelFilter,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                className: "w-[120px]",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                    placeholder: "레벨"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                    lineNumber: 325,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                lineNumber: 324,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                position: "popper",
                                                                                sideOffset: 4,
                                                                                className: "max-h-[300px]",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                        value: "all",
                                                                                        children: "전체 레벨"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                        lineNumber: 328,
                                                                                        columnNumber: 27
                                                                                    }, this),
                                                                                    Array.from({
                                                                                        length: 20
                                                                                    }, (_, i)=>i + 1).map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                            value: level.toString(),
                                                                                            children: [
                                                                                                "Lv.",
                                                                                                level
                                                                                            ]
                                                                                        }, level, true, {
                                                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                            lineNumber: 330,
                                                                                            columnNumber: 29
                                                                                        }, this))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                lineNumber: 327,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                        lineNumber: 323,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                                                                className: "h-[400px]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        filteredCharts.slice(0, 100).map((chart)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer",
                                                                                onClick: ()=>handleAddChart(chart),
                                                                                children: [
                                                                                    chart.jacket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        src: chart.jacket || "/placeholder.svg",
                                                                                        alt: chart.title,
                                                                                        width: 40,
                                                                                        height: 40,
                                                                                        className: "rounded flex-shrink-0"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                        lineNumber: 346,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex-1 min-w-0",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "font-medium truncate",
                                                                                                children: chart.title
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                                lineNumber: 355,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "text-sm text-muted-foreground truncate",
                                                                                                children: chart.artist
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                                lineNumber: 356,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                        lineNumber: 354,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-sm font-medium px-2 py-1 bg-muted rounded flex-shrink-0",
                                                                                        children: [
                                                                                            getTypeLabel(chart.type),
                                                                                            " Lv.",
                                                                                            chart.level
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                        lineNumber: 358,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, chart.chartIdx, true, {
                                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                                lineNumber: 340,
                                                                                columnNumber: 27
                                                                            }, this)),
                                                                        filteredCharts.length === 0 && searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-center py-8 text-muted-foreground",
                                                                            children: "검색 결과가 없습니다"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                            lineNumber: 364,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        !searchQuery && levelFilter === "all" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-center py-8 text-muted-foreground",
                                                                            children: "검색어를 입력하거나 레벨을 선택하세요"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                            lineNumber: 367,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                    lineNumber: 338,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                                lineNumber: 303,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this),
                            themes.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-12 text-muted-foreground",
                                children: "테마를 추가하여 시작하세요"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/theme-editor.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(ThemeEditor, "X+d5DtiKL+BtvXzM/VoXpLSuXcg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = ThemeEditor;
var _c;
__turbopack_context__.k.register(_c, "ThemeEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/theme-drawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeDrawer",
    ()=>ThemeDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/shuffle.js [app-client] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ThemeDrawer({ data, onBack }) {
    _s();
    const [selectedTheme, setSelectedTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [songCount, setSongCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [drawnSongs, setDrawnSongs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hasDrawn, setHasDrawn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentResultIndex, setCurrentResultIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentTheme = data.themes.find((t)=>t.name === selectedTheme);
    const maxSongs = currentTheme?.songs.length || 0;
    const handleDraw = ()=>{
        if (!currentTheme) return;
        // 가중치를 반영하여 곡 풀 생성 (weight 만큼 해당 곡 복제)
        const weightedPool = [];
        currentTheme.songs.forEach((song)=>{
            const weight = song.weight || 1;
            for(let i = 0; i < weight; i++){
                weightedPool.push(song);
            }
        });
        // 셔플 후 중복 제거하며 선택
        const shuffled = weightedPool.sort(()=>Math.random() - 0.5);
        const selected = [];
        const selectedIds = new Set();
        for (const song of shuffled){
            const uniqueKey = song.uniqueId || `${song.chartIdx}-${song.title}`;
            if (!selectedIds.has(uniqueKey)) {
                selected.push(song);
                selectedIds.add(uniqueKey);
                if (selected.length >= Math.min(songCount, maxSongs)) {
                    break;
                }
            }
        }
        setDrawnSongs(selected);
        setIsAnimating(true);
        setShowResult(false);
        setCurrentResultIndex(0);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeDrawer.useEffect": ()=>{
            if (isAnimating && videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        }
    }["ThemeDrawer.useEffect"], [
        isAnimating,
        currentResultIndex
    ]);
    const handleVideoEnded = ()=>{
        setShowResult(true);
    };
    const handleNextResult = ()=>{
        if (currentResultIndex < drawnSongs.length - 1) {
            // 다음 곡 결과로 이동
            setCurrentResultIndex((prev)=>prev + 1);
            setShowResult(false);
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        } else {
            // 모든 결과 표시 완료
            setIsAnimating(false);
            setShowResult(false);
            setHasDrawn(true);
        }
    };
    const handleReset = ()=>{
        setDrawnSongs([]);
        setHasDrawn(false);
        setIsAnimating(false);
        setShowResult(false);
        setCurrentResultIndex(0);
    };
    const handleSkipAnimation = ()=>{
        setIsAnimating(false);
        setShowResult(false);
        setHasDrawn(true);
    };
    const getTypeLabel = (type)=>{
        const typeMap = {
            novice: "NOV",
            advanced: "ADV",
            exhaust: "EXH",
            maximum: "MXM",
            infinite: "INF",
            gravity: "GRV",
            heavenly: "HVN",
            vivid: "VVD",
            exceed: "XCD"
        };
        return typeMap[type.toLowerCase()] || type.toUpperCase();
    };
    const currentSong = drawnSongs[currentResultIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto py-8 px-4",
        children: [
            isAnimating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reviv-oD81Rznit8NPTsk15zddgnlxVR9EPJ.webm",
                        className: "absolute inset-0 w-full h-full object-cover",
                        onEnded: handleVideoEnded
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    showResult && currentSong && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 text-center animate-in fade-in zoom-in duration-500 cursor-pointer",
                        onClick: handleNextResult,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black/70 backdrop-blur-sm rounded-xl p-8 max-w-md mx-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-muted-foreground mb-2",
                                    children: [
                                        currentResultIndex + 1,
                                        " / ",
                                        drawnSongs.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this),
                                currentSong.jacket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: currentSong.jacket || "/placeholder.svg",
                                    alt: currentSong.title,
                                    width: 200,
                                    height: 200,
                                    className: "rounded-lg mx-auto mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-white mb-2",
                                    children: currentSong.title
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                    lineNumber: 155,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mb-2",
                                    children: currentSong.artist
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-yellow-400",
                                    children: [
                                        getTypeLabel(currentSong.type),
                                        " Lv.",
                                        currentSong.level
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                    lineNumber: 157,
                                    columnNumber: 17
                                }, this),
                                currentSong.comment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm text-gray-400 bg-white/10 rounded px-3 py-2",
                                    children: currentSong.comment
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                    lineNumber: 161,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm text-white/50",
                                    children: currentResultIndex < drawnSongs.length - 1 ? "클릭하여 다음 곡 보기" : "클릭하여 결과 확인"
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                            lineNumber: 142,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        className: "absolute bottom-8 right-8 text-white/60 hover:text-white",
                        onClick: handleSkipAnimation,
                        children: "건너뛰기"
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "ghost",
                onClick: onBack,
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        className: "w-4 h-4 mr-2"
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    "돌아가기"
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "추첨 설정"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "테마와 추첨할 곡 수를 선택하세요"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                children: "테마 선택"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                value: selectedTheme,
                                                onValueChange: setSelectedTheme,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "테마를 선택하세요"
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: data.themes.map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: theme.name,
                                                                children: [
                                                                    theme.name,
                                                                    " (",
                                                                    theme.songs.length,
                                                                    "곡)"
                                                                ]
                                                            }, theme.name, true, {
                                                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                children: [
                                                    "추첨할 곡 수 (최대 ",
                                                    maxSongs,
                                                    "곡)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "number",
                                                min: 1,
                                                max: maxSongs,
                                                value: songCount,
                                                onChange: (e)=>setSongCount(Math.max(1, Math.min(maxSongs, Number.parseInt(e.target.value) || 1))),
                                                disabled: !selectedTheme
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "flex-1",
                                                onClick: handleDraw,
                                                disabled: !selectedTheme || maxSongs === 0,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 17
                                                    }, this),
                                                    "추첨하기"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this),
                                            hasDrawn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                onClick: handleReset,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                        className: "w-4 h-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 19
                                                    }, this),
                                                    "초기화"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    hasDrawn && drawnSongs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "추첨 결과"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: [
                                            selectedTheme,
                                            " 테마에서 ",
                                            drawnSongs.length,
                                            "곡이 선택되었습니다"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: drawnSongs.map((song, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4 p-4 bg-muted rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-2xl font-bold text-muted-foreground w-8",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 21
                                                }, this),
                                                song.jacket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: song.jacket || "/placeholder.svg",
                                                    alt: song.title,
                                                    width: 64,
                                                    height: 64,
                                                    className: "rounded-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                    lineNumber: 255,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold text-lg",
                                                            children: song.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-muted-foreground",
                                                            children: song.artist
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-muted-foreground mt-1",
                                                            children: [
                                                                getTypeLabel(song.type),
                                                                " Lv.",
                                                                song.level
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 23
                                                        }, this),
                                                        song.comment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 text-sm bg-background px-3 py-2 rounded border",
                                                            children: song.comment
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `${song.uniqueId || song.chartIdx}-${index}`, true, {
                                            fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                            lineNumber: 249,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/theme-drawer.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_s(ThemeDrawer, "tktE14raUIu8SN52tONqBpXIXGU=");
_c = ThemeDrawer;
var _c;
__turbopack_context__.k.register(_c, "ThemeDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/theme-song-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSongPicker",
    ()=>ThemeSongPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$theme$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/theme-editor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$theme$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/theme-drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$csv$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/csv-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ThemeSongPicker() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("home");
    const [importedData, setImportedData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleImport = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const text = await file.text();
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$csv$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseCSV"])(text);
        setImportedData(data);
        setMode("draw");
    };
    const handleBack = ()=>{
        setMode("home");
        setImportedData(null);
    };
    if (mode === "new") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$theme$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeEditor"], {
            onBack: handleBack
        }, void 0, false, {
            fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
            lineNumber: 36,
            columnNumber: 12
        }, this);
    }
    if (mode === "draw" && importedData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$theme$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeDrawer"], {
            data: importedData,
            onBack: handleBack
        }, void 0, false, {
            fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
            lineNumber: 40,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto py-8 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "max-w-md mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                className: "w-6 h-6 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-2xl",
                            children: "테마별 곡 추첨"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: "테마를 만들고 곡을 추가하여 랜덤 추첨을 해보세요"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "w-full h-16 text-lg bg-transparent",
                            onClick: ()=>setMode("new"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "w-5 h-5 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                "새로 만들기"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "w-full h-16 text-lg bg-transparent",
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "csv-import",
                                        className: "cursor-pointer flex items-center justify-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                className: "w-5 h-5 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            "가져오기 (Import)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "csv-import",
                                    type: "file",
                                    accept: ".csv",
                                    className: "hidden",
                                    onChange: handleImport
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/theme-song-picker.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ThemeSongPicker, "VNdZcPRhqGK0eeMYuJ4qFJ5AeaI=");
_c = ThemeSongPicker;
var _c;
__turbopack_context__.k.register(_c, "ThemeSongPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/app/data:a4e98a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40da8ba6d5212caa926222039ea9a633bd76a3ad7a":"fetchCharts"},"theme-song-lottery/app/actions.ts",""] */ __turbopack_context__.s([
    "fetchCharts",
    ()=>fetchCharts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var fetchCharts = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40da8ba6d5212caa926222039ea9a633bd76a3ad7a", __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchCharts"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFJhbmRvbUNoYXJ0IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBsZXZlbDogbnVtYmVyXG4gIHZlcnNpb246IG51bWJlclxuICBkYXRlOiBzdHJpbmdcbiAgamFja2V0Pzogc3RyaW5nXG4gIHR5cGU/OiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIEZldGNoQ2hhcnRzUGFyYW1zIHtcbiAgbWluTGV2ZWw/OiBudW1iZXJcbiAgbWF4TGV2ZWw/OiBudW1iZXJcbiAgbWluVmVyc2lvbj86IG51bWJlclxuICBtYXhWZXJzaW9uPzogbnVtYmVyXG4gIGNvdW50PzogbnVtYmVyXG4gIGlzTWVnYW1peD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ2hhcnRzKHBhcmFtczogRmV0Y2hDaGFydHNQYXJhbXMpOiBQcm9taXNlPFJhbmRvbUNoYXJ0W10+IHtcbiAgY29uc3QgeyBtaW5MZXZlbCwgbWF4TGV2ZWwsIG1pblZlcnNpb24sIG1heFZlcnNpb24sIGNvdW50ID0gMSwgaXNNZWdhbWl4ID0gZmFsc2UgfSA9IHBhcmFtc1xuXG4gIGNvbnN0IHF1ZXJ5UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG5cbiAgaWYgKG1pbkxldmVsICE9PSB1bmRlZmluZWQpIHF1ZXJ5UGFyYW1zLmFwcGVuZChcIm1pbkxldmVsXCIsIG1pbkxldmVsLnRvU3RyaW5nKCkpXG4gIGlmIChtYXhMZXZlbCAhPT0gdW5kZWZpbmVkKSBxdWVyeVBhcmFtcy5hcHBlbmQoXCJtYXhMZXZlbFwiLCBtYXhMZXZlbC50b1N0cmluZygpKVxuICBpZiAobWluVmVyc2lvbiAhPT0gdW5kZWZpbmVkKSBxdWVyeVBhcmFtcy5hcHBlbmQoXCJtaW5WZXJzaW9uXCIsIG1pblZlcnNpb24udG9TdHJpbmcoKSlcbiAgaWYgKG1heFZlcnNpb24gIT09IHVuZGVmaW5lZCkgcXVlcnlQYXJhbXMuYXBwZW5kKFwibWF4VmVyc2lvblwiLCBtYXhWZXJzaW9uLnRvU3RyaW5nKCkpXG4gIGlmIChjb3VudCAhPT0gdW5kZWZpbmVkKSBxdWVyeVBhcmFtcy5hcHBlbmQoXCJjb3VudFwiLCBjb3VudC50b1N0cmluZygpKVxuICBpZiAoaXNNZWdhbWl4KSBxdWVyeVBhcmFtcy5hcHBlbmQoXCJpc01lZ2FtaXhcIiwgXCJ0cnVlXCIpXG5cbiAgY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52LlZFUkNFTF9VUkwgPyBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LlZFUkNFTF9VUkx9YCA6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCJcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0vYXBpL3JhbmRvbT8ke3F1ZXJ5UGFyYW1zLnRvU3RyaW5nKCl9YFxuXG4gIGNvbnNvbGUubG9nKFwiW3YwXSBGZXRjaGluZyBmcm9tOlwiLCB1cmwpXG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBjYWNoZTogXCJuby1zdG9yZVwiLFxuICB9KVxuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmxvZyhcIlt2MF0gUmVzcG9uc2Ugbm90IG9rOlwiLCByZXNwb25zZS5zdGF0dXMpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBBUEkgcmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YClcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgY29uc29sZS5sb2coXCJbdjBdIFJlY2VpdmVkIGRhdGEga2V5czpcIiwgT2JqZWN0LmtleXMoZGF0YSkpXG4gIGNvbnNvbGUubG9nKFwiW3YwXSBjaGFydERhdGE6XCIsIGRhdGEuY2hhcnREYXRhPy5sZW5ndGggfHwgMCwgXCJpdGVtc1wiKVxuXG4gIHJldHVybiBkYXRhLmNoYXJ0RGF0YSB8fCBbXVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzU0FvQnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/ui/checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Checkbox({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "checkbox",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Indicator"], {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                className: "size-3.5"
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/ui/checkbox.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/theme-song-lottery/components/ui/checkbox.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/checkbox.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Checkbox;
;
var _c;
__turbopack_context__.k.register(_c, "Checkbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/random-chart-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RandomChartPicker",
    ()=>RandomChartPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$app$2f$data$3a$a4e98a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/app/data:a4e98a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const VERSION_MAP = {
    1: "Booth",
    2: "Infinite Infection",
    3: "Gravity Wars",
    4: "Heavenly Haven",
    5: "Vivid Wave",
    6: "Exceed Gear"
};
function RandomChartPicker() {
    _s();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [charts, setCharts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showResults, setShowResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        minLevel: "",
        maxLevel: "",
        minVersion: "",
        maxVersion: "",
        count: "1",
        isMegamix: false
    });
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleCheckboxChange = (checked)=>{
        setFormData((prev)=>({
                ...prev,
                isMegamix: checked
            }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RandomChartPicker.useEffect": ()=>{
            if (showResults) {
                setShowResults(false);
                setCharts([]);
            }
        }
    }["RandomChartPicker.useEffect"], [
        formData
    ]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setError(null);
        setShowResults(false);
        setCharts([]);
        startTransition(async ()=>{
            try {
                const params = {
                    minLevel: formData.minLevel ? Number.parseInt(formData.minLevel) : undefined,
                    maxLevel: formData.maxLevel ? Number.parseInt(formData.maxLevel) : undefined,
                    minVersion: formData.minVersion ? Number.parseInt(formData.minVersion) : undefined,
                    maxVersion: formData.maxVersion ? Number.parseInt(formData.maxVersion) : undefined,
                    count: formData.count ? Number.parseInt(formData.count) : 1,
                    isMegamix: formData.isMegamix
                };
                setIsAnimating(true);
                const minAnimationTime = new Promise((resolve)=>setTimeout(resolve, 1500));
                const fetchPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$app$2f$data$3a$a4e98a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["fetchCharts"])(params);
                const [_, result] = await Promise.all([
                    minAnimationTime,
                    fetchPromise
                ]);
                setCharts(result);
                setIsAnimating(false);
                setShowResults(true);
            } catch (err) {
                setError("차트를 불러오는데 실패했습니다. 다시 시도해주세요.");
                setIsAnimating(false);
                console.error(err);
            }
        });
    };
    const formatDate = (dateStr)=>{
        if (!dateStr) return "";
        if (dateStr.includes("-") || dateStr.includes("/") || dateStr.includes(".")) {
            return dateStr.substring(0, 10);
        }
        if (/^\d{8}$/.test(dateStr)) {
            return `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}`;
        }
        return dateStr;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-card text-card-foreground rounded-xl border shadow-sm p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-base font-semibold",
                                            children: "레벨 범위 (Level)"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid flex-1 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "minLevel",
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Min"
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "minLevel",
                                                            name: "minLevel",
                                                            type: "number",
                                                            placeholder: "1",
                                                            value: formData.minLevel,
                                                            onChange: handleInputChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground mt-6",
                                                    children: "~"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid flex-1 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "maxLevel",
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Max"
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "maxLevel",
                                                            name: "maxLevel",
                                                            type: "number",
                                                            placeholder: "20",
                                                            value: formData.maxLevel,
                                                            onChange: handleInputChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            className: "text-base font-semibold",
                                            children: "버전 범위 (Version)"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid flex-1 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "minVersion",
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Min"
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "minVersion",
                                                            name: "minVersion",
                                                            type: "number",
                                                            placeholder: "1",
                                                            min: "1",
                                                            max: "6",
                                                            value: formData.minVersion,
                                                            onChange: handleInputChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground mt-6",
                                                    children: "~"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid flex-1 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: "maxVersion",
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Max"
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            id: "maxVersion",
                                                            name: "maxVersion",
                                                            type: "number",
                                                            placeholder: "6",
                                                            min: "1",
                                                            max: "6",
                                                            value: formData.maxVersion,
                                                            onChange: handleInputChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-1",
                                            children: "1: Booth ~ 6: Exceed Gear"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 items-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "count",
                                            className: "text-base font-semibold",
                                            children: "수량 (Count)"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "count",
                                            name: "count",
                                            type: "number",
                                            min: "1",
                                            max: "50",
                                            value: formData.count,
                                            onChange: handleInputChange
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2 h-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                            id: "isMegamix",
                                            checked: formData.isMegamix,
                                            onCheckedChange: handleCheckboxChange
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "isMegamix",
                                            className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                                            children: "Megamix만 포함"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            className: "w-full h-12 text-lg relative overflow-hidden",
                            disabled: isPending || isAnimating,
                            children: isPending || isAnimating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "h-5 w-5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isAnimating ? "차트 뽑는 중..." : "데이터 불러오는 중..."
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                lineNumber: 212,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                        lineNumber: 218,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "랜덤 차트 뽑기"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                lineNumber: 217,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-destructive/15 text-destructive p-4 rounded-md flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                        lineNumber: 228,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this),
            isAnimating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-12 space-y-6 animate-in fade-in duration-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                lineNumber: 236,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                className: "h-24 w-24 text-primary relative z-10 animate-bounce"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold animate-pulse",
                        children: "운명의 차트를 찾는 중..."
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                lineNumber: 234,
                columnNumber: 9
            }, this),
            showResults && charts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in slide-in-from-bottom-4 duration-700 fade-in",
                children: charts.map((chart, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 duration-300", "animate-in zoom-in-95 fade-in duration-500"),
                        style: {
                            animationDelay: `${index * 100}ms`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-square relative bg-muted group",
                                children: [
                                    chart.jacket ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: chart.jacket || "/placeholder.svg",
                                        alt: chart.title,
                                        className: "object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                        lineNumber: 256,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center h-full text-muted-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                            className: "h-12 w-12"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 263,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                        lineNumber: 262,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-sm font-bold backdrop-blur-sm",
                                        children: [
                                            "Lv. ",
                                            chart.level
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "p-4 pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-lg leading-tight line-clamp-1",
                                    title: chart.title,
                                    children: chart.title
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                lineNumber: 270,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "p-4 pt-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-muted-foreground space-y-1 mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Version:"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground text-right truncate ml-2",
                                                    children: VERSION_MAP[chart.version] || `Vol.${chart.version}`
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 277,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Date:"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground",
                                                    children: formatDate(chart.date)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this),
                                        chart.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Type:"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-foreground",
                                                    children: chart.type
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                            lineNumber: 288,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                                lineNumber: 275,
                                columnNumber: 15
                            }, this)
                        ]
                    }, `${chart.title}-${index}`, true, {
                        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                        lineNumber: 246,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
                lineNumber: 244,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/random-chart-picker.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(RandomChartPicker, "ERlxxvNSmBHDjIqiXATdwaizzqY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = RandomChartPicker;
var _c;
__turbopack_context__.k.register(_c, "RandomChartPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/megamix-browser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MegamixBrowser",
    ()=>MegamixBrowser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/checkbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const fetcher = (url)=>fetch(url).then((res)=>res.json());
const VERSION_NAMES = {
    1: "BOOTH",
    2: "INFINITE INFECTION",
    3: "GRAVITY WARS",
    4: "HEAVENLY HAVEN",
    5: "VIVID WAVE",
    6: "EXCEED GEAR"
};
const LEVELS = [
    17,
    18,
    19,
    20
];
function MegamixBrowser() {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedLevels, setSelectedLevels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        17,
        18,
        19,
        20
    ]);
    const [selectedVersion, setSelectedVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])("/api/megamix?minLevel=17&maxLevel=20&minVersion=1&maxVersion=6", fetcher);
    const allCharts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MegamixBrowser.useMemo[allCharts]": ()=>{
            if (!data?.data) return [];
            return data.data.filter({
                "MegamixBrowser.useMemo[allCharts]": (chart)=>chart.level >= 17
            }["MegamixBrowser.useMemo[allCharts]"]);
        }
    }["MegamixBrowser.useMemo[allCharts]"], [
        data
    ]);
    // Filter charts based on search, level, and version
    const filteredCharts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MegamixBrowser.useMemo[filteredCharts]": ()=>{
            return allCharts.filter({
                "MegamixBrowser.useMemo[filteredCharts]": (chart)=>{
                    const matchesSearch = searchQuery === "" || chart.title.toLowerCase().includes(searchQuery.toLowerCase()) || chart.artist && chart.artist.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchesLevel = selectedLevels.includes(chart.level);
                    const matchesVersion = selectedVersion === "all" || chart.version === selectedVersion;
                    return matchesSearch && matchesLevel && matchesVersion;
                }
            }["MegamixBrowser.useMemo[filteredCharts]"]);
        }
    }["MegamixBrowser.useMemo[filteredCharts]"], [
        allCharts,
        searchQuery,
        selectedLevels,
        selectedVersion
    ]);
    // Group charts by version
    const chartsByVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MegamixBrowser.useMemo[chartsByVersion]": ()=>{
            const grouped = {};
            for(let v = 1; v <= 6; v++){
                grouped[v] = [];
            }
            filteredCharts.forEach({
                "MegamixBrowser.useMemo[chartsByVersion]": (chart)=>{
                    if (grouped[chart.version]) {
                        grouped[chart.version].push(chart);
                    }
                }
            }["MegamixBrowser.useMemo[chartsByVersion]"]);
            return grouped;
        }
    }["MegamixBrowser.useMemo[chartsByVersion]"], [
        filteredCharts
    ]);
    const handleLevelToggle = (level)=>{
        setSelectedLevels((prev)=>prev.includes(level) ? prev.filter((l)=>l !== level) : [
                ...prev,
                level
            ]);
    };
    const getLevelColor = (level)=>{
        switch(level){
            case 17:
                return "bg-yellow-500";
            case 18:
                return "bg-red-500";
            case 19:
                return "bg-purple-500";
            case 20:
                return "bg-pink-500";
            default:
                return "bg-gray-500";
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-8 w-8 animate-spin"
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-2",
                    children: "데이터를 불러오는 중..."
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-96 text-destructive",
            children: "데이터를 불러오는 데 실패했습니다."
        }, void 0, false, {
            fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[calc(100vh-120px)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto p-4",
                children: [
                    selectedVersion === "all" ? // Show all versions grouped
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: Object.entries(chartsByVersion).map(([version, charts])=>{
                            if (charts.length === 0) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold mb-4 sticky top-0 bg-background py-2 z-10 border-b",
                                        children: [
                                            VERSION_NAMES[Number(version)],
                                            " (",
                                            charts.length,
                                            "곡)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3",
                                        children: charts.map((chart, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                                                chart: chart,
                                                getLevelColor: getLevelColor
                                            }, `${chart.title}-${chart.type}-${idx}`, false, {
                                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                                lineNumber: 135,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, version, true, {
                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this) : // Show single version
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-4",
                                children: [
                                    VERSION_NAMES[selectedVersion],
                                    " (",
                                    chartsByVersion[selectedVersion]?.length || 0,
                                    "곡)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3",
                                children: chartsByVersion[selectedVersion]?.map((chart, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartCard, {
                                        chart: chart,
                                        getLevelColor: getLevelColor
                                    }, `${chart.title}-${chart.type}-${idx}`, false, {
                                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this),
                    filteredCharts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-64 text-muted-foreground",
                        children: "조건에 맞는 채보가 없습니다."
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-64 border-l bg-card p-4 space-y-6 overflow-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-sm font-medium mb-2 block",
                                children: "곡 검색"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        placeholder: "곡명 또는 아티스트",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "pl-9"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-sm font-medium mb-3 block",
                                children: "레벨 필터"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: LEVELS.map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                                                id: `level-${level}`,
                                                checked: selectedLevels.includes(level),
                                                onCheckedChange: ()=>handleLevelToggle(level)
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                                lineNumber: 187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: `level-${level}`,
                                                className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold ${getLevelColor(level)}`,
                                                        children: level
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Level ",
                                                    level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, level, true, {
                                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                className: "text-sm font-medium mb-3 block",
                                children: "버전 필터"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                                value: selectedVersion.toString(),
                                onValueChange: (v)=>setSelectedVersion(v === "all" ? "all" : Number(v)),
                                className: "w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                    className: "flex flex-col h-auto w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "all",
                                            className: "w-full justify-start",
                                            children: "전체 버전"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        Object.entries(VERSION_NAMES).map(([version, name])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                value: version,
                                                className: "w-full justify-start text-xs",
                                                children: name
                                            }, version, false, {
                                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 border-t",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-muted-foreground",
                            children: [
                                "총 ",
                                filteredCharts.length,
                                "개의 채보"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_s(MegamixBrowser, "KH9pI7vY9jY4whIsmq7CH1xGX1E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c = MegamixBrowser;
function ChartCard({ chart, getLevelColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative aspect-square rounded-lg overflow-hidden bg-muted",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: chart.jacket || "/placeholder.svg?height=150&width=150",
                alt: chart.title,
                fill: true,
                className: "object-cover",
                sizes: "(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 12.5vw"
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-1 right-1 w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold ${getLevelColor(chart.level)}`,
                children: chart.level
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-[10px] font-medium",
                children: chart.type
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-xs font-bold line-clamp-2",
                        children: chart.title
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    chart.artist && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/70 text-[10px] mt-1 line-clamp-1",
                        children: chart.artist
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                        lineNumber: 265,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/megamix-browser.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
}
_c1 = ChartCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "MegamixBrowser");
__turbopack_context__.k.register(_c1, "ChartCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Switch({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "switch",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
            "data-slot": "switch-thumb",
            className: 'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        }, void 0, false, {
            fileName: "[project]/theme-song-lottery/components/ui/switch.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/theme-song-lottery/components/ui/switch.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Switch;
;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/components/tournament-script-manager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TournamentScriptManager",
    ()=>TournamentScriptManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/scroll-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/swr/dist/index/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/switch.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
const fetcher = async (url)=>{
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    return res.json();
};
const defaultRoundData = ()=>({
        roomNumber: "",
        deadline: "",
        team1Players: [
            "",
            ""
        ],
        team2Players: [
            "",
            ""
        ],
        team1Songs: [
            "",
            "",
            ""
        ],
        team2Songs: [
            "",
            "",
            ""
        ],
        team1BannedSong: "",
        team2BannedSong: "",
        team1Player: "",
        team2Player: "",
        team1SongsLong: [
            "",
            "",
            "",
            "",
            ""
        ],
        team2SongsLong: [
            "",
            "",
            "",
            "",
            ""
        ],
        team1Songs2: [
            "",
            ""
        ],
        team2Songs2: [
            "",
            ""
        ],
        team1BannedSong4: "",
        team2BannedSong4: "",
        team1DesignatedSong: "",
        team2DesignatedSong: "",
        stage3DesignatedSong: "",
        stage4DesignatedSong: "",
        team1StrategyUsed: false,
        team2StrategyUsed: false,
        team1StrategyOptions: [
            "",
            "",
            ""
        ],
        team2StrategyOptions: [
            "",
            "",
            ""
        ],
        team1StrategySelected: "",
        team2StrategySelected: "",
        team1StrategyTarget: "",
        team2StrategyTarget: "",
        team1Strategy17: [
            "",
            "",
            ""
        ],
        team1Strategy18: [
            "",
            "",
            ""
        ],
        team2Strategy17: [
            "",
            "",
            ""
        ],
        team2Strategy18: [
            "",
            "",
            ""
        ]
    });
const defaultData = ()=>({
        team1: {
            name: "",
            players: [
                "",
                "",
                ""
            ]
        },
        team2: {
            name: "",
            players: [
                "",
                "",
                ""
            ]
        },
        rounds: [
            defaultRoundData(),
            defaultRoundData(),
            defaultRoundData(),
            defaultRoundData()
        ],
        songInfoMap: {}
    });
const getTypeLabel = (type)=>{
    const labels = {
        nov: "NOV",
        adv: "ADV",
        exh: "EXH",
        mxm: "MXM",
        inf: "INF",
        grv: "GRV",
        hvn: "HVN",
        vvd: "VVD",
        xcd: "XCD"
    };
    return labels[type?.toLowerCase()] || type?.toUpperCase() || "";
};
const formatSongName = (chart)=>{
    return `${chart.title} ${getTypeLabel(chart.type)}`;
};
const chartToSongInfo = (chart)=>({
        // name: formatSongName(chart), // Removed, as name is not part of SongInfo interface
        title: chart.title,
        artist: chart.artist,
        jacket: chart.jacket,
        level: chart.level,
        type: chart.type,
        date: chart.date
    });
const loadImageAsBase64 = async (url)=>{
    return new Promise((resolve)=>{
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = ()=>{
            try {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    ctx.drawImage(img, 0, 0);
                    resolve(canvas.toDataURL("image/jpeg", 0.8));
                } else {
                    resolve(null);
                }
            } catch (e) {
                console.log("[v0] Failed to convert image to base64:", e);
                resolve(null);
            }
        };
        img.onerror = ()=>{
            console.log("[v0] Failed to load image:", url);
            resolve(null);
        };
        img.src = url;
    });
};
const SongInputField = ({ value, placeholder, onClick, onClear })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                value: value,
                readOnly: true,
                onClick: onClick,
                placeholder: placeholder,
                className: "h-8 text-sm cursor-pointer pr-8"
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                lineNumber: 208,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: (e)=>{
                    e.stopPropagation();
                    onClear();
                },
                className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 224,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
        lineNumber: 207,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = SongInputField;
function TournamentScriptManager({ onBack }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultData());
    const [copiedId, setCopiedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [songSearchOpen, setSongSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [levelFilter, setLevelFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [songSearchTarget, setSongSearchTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageDialogOpen, setImageDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageRoundIdx, setImageRoundIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [songNotFoundWarning, setSongNotFoundWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [generatedImage, setGeneratedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null) // State to hold the generated image data URL
    ;
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { data: songData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])("/api/songs", fetcher);
    const allCharts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TournamentScriptManager.useMemo[allCharts]": ()=>(songData?.chartData || []).flatMap({
                "TournamentScriptManager.useMemo[allCharts]": (song)=>song.chart.map({
                        "TournamentScriptManager.useMemo[allCharts]": (chart)=>({
                                songIdx: song.songIdx,
                                chartIdx: chart.chartIdx,
                                title: song.title,
                                artist: song.artist,
                                level: chart.level,
                                type: chart.type,
                                jacket: chart.jacket,
                                date: song.date
                            })
                    }["TournamentScriptManager.useMemo[allCharts]"])
            }["TournamentScriptManager.useMemo[allCharts]"])
    }["TournamentScriptManager.useMemo[allCharts]"], [
        songData
    ]);
    const filteredCharts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TournamentScriptManager.useMemo[filteredCharts]": ()=>allCharts.filter({
                "TournamentScriptManager.useMemo[filteredCharts]": (chart)=>{
                    const matchesSearch = chart.title.toLowerCase().includes(searchQuery.toLowerCase()) || chart.artist.toLowerCase().includes(searchQuery.toLowerCase());
                    const matchesLevel = levelFilter === "all" || chart.level === Number.parseInt(levelFilter);
                    return matchesSearch && matchesLevel;
                }
            }["TournamentScriptManager.useMemo[filteredCharts]"])
    }["TournamentScriptManager.useMemo[filteredCharts]"], [
        allCharts,
        searchQuery,
        levelFilter
    ]);
    const copyToClipboard = async (text, id)=>{
        await navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(()=>setCopiedId(null), 2000);
    };
    // Helper to get SongInfo from the map, prioritizing the replaced song if applicable
    const getSongInfo = (roundIdx, field, arrayIdx, originalSongName)=>{
        const infoKey = arrayIdx !== undefined ? `round${roundIdx}_${field}_${arrayIdx}` : `round${roundIdx}_${field}`;
        // Try to find info for the potentially replaced song first
        if (data.songInfoMap[infoKey]) {
            return data.songInfoMap[infoKey];
        }
        // Fallback to original song name if provided
        if (originalSongName) {
            const originalKey = arrayIdx !== undefined ? `round${roundIdx}_${field}_${arrayIdx}` // Assuming original field name is same
             : `round${roundIdx}_${field}`;
            return data.songInfoMap[originalKey] || null;
        }
        return null;
    };
    const handleSelectSong = async (chart)=>{
        if (!songSearchTarget) return;
        const { roundIdx, field, arrayIdx } = songSearchTarget;
        const songName = formatSongName(chart);
        const songInfo = chartToSongInfo(chart);
        const infoKey = arrayIdx !== undefined ? `round${roundIdx}_${field}_${arrayIdx}` : `round${roundIdx}_${field}`;
        // Try to load jacket as base64
        if (chart.jacket) {
            const base64 = await loadImageAsBase64(chart.jacket);
            if (base64) {
                songInfo.jacketBase64 = base64;
            }
        }
        if (arrayIdx !== undefined) {
            const currentRound = data.rounds[roundIdx];
            const currentArray = currentRound[field] || [];
            const newArray = [
                ...currentArray
            ];
            newArray[arrayIdx] = songName;
            updateRound(roundIdx, field, newArray);
        } else {
            updateRound(roundIdx, field, songName);
        }
        setData((prev)=>({
                ...prev,
                songInfoMap: {
                    ...prev.songInfoMap,
                    [infoKey]: songInfo
                }
            }));
        setSongSearchOpen(false);
        setSearchQuery("");
        setSongSearchTarget(null);
    };
    const openSongSearch = (roundIdx, field, arrayIdx)=>{
        setSongSearchTarget({
            roundIdx,
            field,
            arrayIdx
        });
        setSongSearchOpen(true);
    };
    const updateTeam = (teamIdx, field, value)=>{
        setData((prev)=>({
                ...prev,
                [`team${teamIdx}`]: {
                    ...prev[`team${teamIdx}`],
                    [field]: value
                }
            }));
    };
    const updateRound = (roundIdx, field, value)=>{
        setData((prev)=>{
            const newRounds = [
                ...prev.rounds
            ];
            newRounds[roundIdx] = {
                ...newRounds[roundIdx],
                [field]: value
            };
            return {
                ...prev,
                rounds: newRounds
            };
        });
    };
    const clearSong = (roundIdx, field, arrayIdx)=>{
        const infoKey = arrayIdx !== undefined ? `round${roundIdx}_${field}_${arrayIdx}` : `round${roundIdx}_${field}`;
        if (arrayIdx !== undefined) {
            const round = data.rounds[roundIdx];
            const currentArray = round[field] || [];
            const newArray = [
                ...currentArray
            ];
            newArray[arrayIdx] = "";
            updateRound(roundIdx, field, newArray);
        } else {
            updateRound(roundIdx, field, "");
        }
        setData((prev)=>{
            const newSongInfoMap = {
                ...prev.songInfoMap
            };
            delete newSongInfoMap[infoKey];
            return {
                ...prev,
                songInfoMap: newSongInfoMap
            };
        });
    };
    const generateSongListImage = async (roundIdx)=>{
        const round = data.rounds[roundIdx];
        // 1. 라운드 타입에 따라 사용되는 선수/곡 배열 결정
        const isRound13 = roundIdx === 0 || roundIdx === 2;
        const isRound2 = roundIdx === 1;
        const isRound4 = roundIdx === 3;
        // 플레이어 구성
        const team1Players = isRound2 || isRound4 ? [
            round.team1Player || ""
        ] : round.team1Players || [
            "",
            ""
        ];
        const team2Players = isRound2 || isRound4 ? [
            round.team2Player || ""
        ] : round.team2Players || [
            "",
            ""
        ];
        // 밴/스트래티지 관련 (1,3라운드에서만)
        const team1BannedSong = isRound13 ? round.team1BannedSong || "" : "";
        const team2BannedSong = isRound13 ? round.team2BannedSong || "" : "";
        // 2. SongInfo 를 찾기 위한 헬퍼
        const getSongInfoByField = (field, arrayIdx)=>{
            const infoKey = `round${roundIdx}_${String(field)}_${arrayIdx}`;
            return data.songInfoMap[infoKey] || null;
        };
        // 전략 카드로 바뀐 곡에 대한 SongInfo 찾기
        // (1,3라운드: teamXStrategyOptions, 2라운드: teamXStrategy17 / teamXStrategy18 포함)
        const getSongInfoFromStrategy = (teamIdxUsed, songName)=>{
            const strategyFields = teamIdxUsed === 1 ? [
                "team1StrategyOptions",
                "team1Strategy17",
                "team1Strategy18"
            ] : [
                "team2StrategyOptions",
                "team2Strategy17",
                "team2Strategy18"
            ];
            for (const field of strategyFields){
                const options = round[field] || [];
                for(let i = 0; i < options.length; i++){
                    if (options[i] === songName) {
                        const infoKey = `round${roundIdx}_${String(field)}_${i}`;
                        return data.songInfoMap[infoKey] || null;
                    }
                }
            }
            return null;
        };
        const songs = [];
        // ----- 1,3 라운드 (2v2, 밴 + 스트래티지) -----
        if (isRound13) {
            const rawTeam1Songs = round.team1Songs || [];
            const rawTeam2Songs = round.team2Songs || [];
            // 밴 적용 + 인덱스 유지
            const team1Songs = rawTeam1Songs.map((name, idx)=>({
                    name,
                    idx
                })).filter(({ name })=>name.trim() !== "" && name !== team1BannedSong).slice(0, 2) // 👈 여기 추가
            ;
            const team2Songs = rawTeam2Songs.map((name, idx)=>({
                    name,
                    idx
                })).filter(({ name })=>name.trim() !== "" && name !== team2BannedSong).slice(0, 2) // 
            ;
            // 팀1 곡들
            team1Songs.forEach(({ name: originalSong, idx }, displayIdx)=>{
                let finalSong = originalSong;
                let isStrategy = false;
                let info = null;
                // 상대(팀2)가 이 곡에 스트래티지 쓴 경우
                if (round.team2StrategyUsed && round.team2StrategyTarget === originalSong && round.team2StrategySelected) {
                    finalSong = round.team2StrategySelected;
                    isStrategy = true;
                    info = getSongInfoFromStrategy(2, finalSong);
                }
                // 2) 기본적으로는 원래 team1Songs[idx] 에 대응하는 SongInfo 사용
                if (!info) {
                    info = getSongInfoByField("team1Songs", idx);
                }
                songs.push({
                    team: data.team1.name,
                    player: team1Players[displayIdx] || "",
                    songName: finalSong,
                    info,
                    isStrategy
                });
            });
            // 팀2 곡들
            team2Songs.forEach(({ name: originalSong, idx }, displayIdx)=>{
                let finalSong = originalSong;
                let isStrategy = false;
                let info = null;
                // 상대(팀1)가 이 곡에 스트래티지 쓴 경우
                if (round.team1StrategyUsed && round.team1StrategyTarget === originalSong && round.team1StrategySelected) {
                    finalSong = round.team1StrategySelected;
                    isStrategy = true;
                    info = getSongInfoFromStrategy(1, finalSong);
                }
                if (!info) {
                    info = getSongInfoByField("team2Songs", idx);
                }
                songs.push({
                    team: data.team2.name,
                    player: team2Players[displayIdx] || "",
                    songName: finalSong,
                    info,
                    isStrategy
                });
            });
        }
        // ----- 2 라운드 (1v1, 5곡씩) -----
        // ----- 2 라운드 (1v1, 5곡씩, 스트래티지 상대곡 교체) -----
        if (isRound2) {
            const rawTeam1Songs = round.team1SongsLong || [];
            const rawTeam2Songs = round.team2SongsLong || [];
            // 팀1 곡들: 팀2가 이 곡에 스트래티지를 걸었을 수 있음
            rawTeam1Songs.forEach((originalSong, idx)=>{
                if (!originalSong.trim()) return;
                let finalSong = originalSong;
                let isStrategy = false;
                let info = null;
                // 팀2가 이 곡(target)에 스트래티지 사용한 경우
                if (round.team2StrategyUsed && round.team2StrategyTarget === originalSong && round.team2StrategySelected) {
                    finalSong = round.team2StrategySelected;
                    isStrategy = true;
                    // 팀2가 사용한 스트래티지 후보(17/18/옵션) 중에서 정보 찾기
                    info = getSongInfoFromStrategy(2, finalSong);
                }
                // 기본: 원래 team1SongsLong[idx] 정보 사용
                if (!info) {
                    info = getSongInfoByField("team1SongsLong", idx);
                }
                songs.push({
                    team: data.team1.name,
                    player: team1Players[0] || "",
                    songName: finalSong,
                    info,
                    isStrategy
                });
            });
            // 팀2 곡들: 팀1이 이 곡에 스트래티지 걸었을 수 있음
            rawTeam2Songs.forEach((originalSong, idx)=>{
                if (!originalSong.trim()) return;
                let finalSong = originalSong;
                let isStrategy = false;
                let info = null;
                if (round.team1StrategyUsed && round.team1StrategyTarget === originalSong && round.team1StrategySelected) {
                    finalSong = round.team1StrategySelected;
                    isStrategy = true;
                    info = getSongInfoFromStrategy(1, finalSong);
                }
                if (!info) {
                    info = getSongInfoByField("team2SongsLong", idx);
                }
                songs.push({
                    team: data.team2.name,
                    player: team2Players[0] || "",
                    songName: finalSong,
                    info,
                    isStrategy
                });
            });
        }
        if (songs.length === 0) {
            setNotification({
                type: "error",
                message: "표시할 곡이 없습니다."
            });
            return;
        }
        // 4. 자켓 이미지 로딩 (base64 우선, 없으면 URL)
        const loadImage = (src)=>{
            return new Promise((resolve)=>{
                const img = new window.Image();
                img.crossOrigin = "anonymous";
                img.onload = ()=>resolve(img);
                img.onerror = ()=>{
                    console.log("[v0] Image load failed, using placeholder", src);
                    resolve(null);
                };
                img.src = src;
            });
        };
        const jacketImages = await Promise.all(songs.map((song)=>{
            if (song.info?.jacketBase64) {
                return loadImage(song.info.jacketBase64);
            } else if (song.info?.jacket) {
                return loadImage(song.info.jacket);
            }
            return Promise.resolve(null);
        }));
        // 5. 캔버스에 그리기 – 팀별 좌/우 컬럼 고정
        const cardWidth = 360;
        const cardHeight = 110;
        const jacketSize = 90;
        const padding = 12;
        // 팀별로 곡 분리
        const team1SongsForLayout = songs.filter((s)=>s.team === data.team1.name);
        const team2SongsForLayout = songs.filter((s)=>s.team === data.team2.name);
        const rows = Math.max(team1SongsForLayout.length, team2SongsForLayout.length);
        const canvas = document.createElement("canvas");
        canvas.width = 2 * cardWidth + padding * 3; // 왼쪽 카드 + 오른쪽 카드 + 패딩
        canvas.height = rows * cardHeight + padding * (rows + 1) + 50;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        // 배경
        ctx.fillStyle = "#1a1a2e";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // 타이틀
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 24px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(`${roundIdx + 1}라운드 선곡 목록`, canvas.width / 2, 35);
        // songs 배열에서 해당 SongEntry 의 자켓 이미지를 찾아오는 헬퍼
        const getJacketForSong = (song)=>{
            const idx = songs.indexOf(song);
            if (idx === -1) return null;
            return jacketImages[idx];
        };
        // 실제 카드 하나를 그리는 헬퍼 (기존 for문 안 카드 그리기 코드 그대로 옮김)
        const drawSongCard = (song, x, y, jacketImg)=>{
            // 카드 배경
            ctx.fillStyle = song.isStrategy ? "#3d2066" : "#2d2d44";
            ctx.beginPath();
            ctx.roundRect(x, y, cardWidth, cardHeight, 8);
            ctx.fill();
            // 팀 색 바
            ctx.fillStyle = song.team === data.team1.name ? "#3b82f6" : "#ef4444";
            ctx.beginPath();
            ctx.roundRect(x, y, 6, cardHeight, [
                8,
                0,
                0,
                8
            ]);
            ctx.fill();
            const jacketX = x + 16;
            const jacketY = y + (cardHeight - jacketSize) / 2;
            // 자켓 이미지
            if (jacketImg) {
                ctx.save();
                ctx.beginPath();
                ctx.roundRect(jacketX, jacketY, jacketSize, jacketSize, 6);
                ctx.clip();
                ctx.drawImage(jacketImg, jacketX, jacketY, jacketSize, jacketSize);
                ctx.restore();
            } else {
                // 플레이스홀더
                const gradient = ctx.createLinearGradient(jacketX, jacketY, jacketX + jacketSize, jacketY + jacketSize);
                gradient.addColorStop(0, "#4a4a6a");
                gradient.addColorStop(1, "#2a2a4a");
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.roundRect(jacketX, jacketY, jacketSize, jacketSize, 6);
                ctx.fill();
                ctx.fillStyle = "#888";
                ctx.font = "32px sans-serif";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText("♪", jacketX + jacketSize / 2, jacketY + jacketSize / 2);
            }
            // 텍스트 영역
            const textX = jacketX + jacketSize + 12;
            const textMaxWidth = cardWidth - jacketSize - 44;
            // 선수 이름
            ctx.fillStyle = "#9ca3af";
            ctx.font = "12px sans-serif";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.fillText(song.player || "선수", textX, y + 12);
            // 곡명
            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 14px sans-serif";
            let songDisplayName = song.songName;
            while(ctx.measureText(songDisplayName).width > textMaxWidth && songDisplayName.length > 3){
                songDisplayName = songDisplayName.slice(0, -1);
            }
            if (songDisplayName !== song.songName) songDisplayName += "...";
            ctx.fillText(songDisplayName, textX, y + 30);
            // 아티스트
            let nextTextY = y + 50;
            if (song.info?.artist) {
                ctx.fillStyle = "#9ca3af";
                ctx.font = "12px sans-serif";
                let artistName = song.info.artist;
                while(ctx.measureText(artistName).width > textMaxWidth && artistName.length > 3){
                    artistName = artistName.slice(0, -1);
                }
                if (artistName !== song.info.artist) artistName += "...";
                ctx.fillText(artistName, textX, nextTextY);
                nextTextY += 16;
            }
            // 날짜 (YYYY-MM-DD까지만)
            if (song.info?.date) {
                ctx.fillStyle = "#6b7280";
                ctx.font = "11px sans-serif";
                const rawDate = song.info.date;
                const formattedDate = rawDate.includes("T") ? rawDate.split("T")[0] : rawDate.slice(0, 10);
                let dateText = formattedDate;
                while(ctx.measureText(dateText).width > textMaxWidth && dateText.length > 3){
                    dateText = dateText.slice(0, -1);
                }
                if (dateText !== formattedDate) dateText += "...";
                ctx.fillText(dateText, textX, nextTextY);
                nextTextY += 16;
            }
            // 레벨/타입 뱃지
            if (song.info?.level && song.info?.type) {
                const badgeText = `${song.info.type} ${song.info.level}`;
                ctx.font = "bold 11px sans-serif";
                const badgeWidth = ctx.measureText(badgeText).width + 12;
                const typeColors = {
                    NOV: "#6366f1",
                    ADV: "#eab308",
                    EXH: "#ef4444",
                    MXM: "#ec4899",
                    INF: "#ec4899",
                    GRV: "#f97316",
                    HVN: "#06b6d4",
                    VVD: "#a855f7",
                    XCD: "#22c55e"
                };
                ctx.fillStyle = typeColors[song.info.type] || "#6b7280";
                const badgeY = nextTextY + 2;
                ctx.beginPath();
                ctx.roundRect(textX, badgeY, badgeWidth, 20, 4);
                ctx.fill();
                ctx.fillStyle = "#ffffff";
                ctx.textBaseline = "middle";
                ctx.fillText(badgeText, textX + 6, badgeY + 10);
            }
            // 스트래티지 라벨
            if (song.isStrategy) {
                ctx.fillStyle = "#a855f7";
                ctx.font = "bold 10px sans-serif";
                ctx.textAlign = "right";
                ctx.fillText("STRATEGY", x + cardWidth - 12, y + 16);
                ctx.textAlign = "left";
            }
        };
        // 행 단위로 좌/우에 팀1/팀2 카드 배치
        for(let row = 0; row < rows; row++){
            const y = 50 + padding + row * (cardHeight + padding);
            const songLeft = team1SongsForLayout[row] // 팀1
            ;
            const songRight = team2SongsForLayout[row] // 팀2
            ;
            if (songLeft) {
                const xLeft = padding;
                drawSongCard(songLeft, xLeft, y, getJacketForSong(songLeft));
            }
            if (songRight) {
                const xRight = padding * 2 + cardWidth;
                drawSongCard(songRight, xRight, y, getJacketForSong(songRight));
            }
        }
        setGeneratedImage(canvas.toDataURL("image/png"));
        setImageRoundIdx(roundIdx);
        setImageDialogOpen(true);
    };
    const copyImageToClipboard = async ()=>{
        if (!generatedImage) return;
        try {
            const blob = await fetch(generatedImage).then((res)=>res.blob());
            await navigator.clipboard.write([
                new ClipboardItem({
                    "image/png": blob
                })
            ]);
            setCopiedId("image");
            setTimeout(()=>setCopiedId(null), 2000);
        } catch (e) {
            console.error("Failed to copy image:", e);
            alert("이미지 복사에 실패했습니다.");
        }
    };
    const downloadImage = ()=>{
        if (!generatedImage) return;
        const link = document.createElement("a");
        link.download = `round${imageRoundIdx + 1}_songs.png`;
        link.href = generatedImage;
        link.click();
    };
    const getOpponentSongs = (round, teamIdx, roundIdx)=>{
        // This function is only used for banned song selection, so it should refer to team1Songs/team2Songs or team1Songs2/team2Songs2
        if (roundIdx === 0 || roundIdx === 2) {
            return teamIdx === 1 ? round.team2Songs?.filter(Boolean) || [] : round.team1Songs?.filter(Boolean) || [];
        } else if (roundIdx === 1) {
            return teamIdx === 1 ? round.team2SongsLong?.filter(Boolean) || [] : round.team1SongsLong?.filter(Boolean) || [];
        } else if (roundIdx === 3) {
            return teamIdx === 1 ? round.team2Songs2?.filter(Boolean) || [] : round.team1Songs2?.filter(Boolean) || [];
        }
        return [] // Should not happen for rounds 0-3
        ;
    };
    const getRound2StrategyOptions = (round, teamIdx)=>{
        const songs17 = (teamIdx === 1 ? round.team1Strategy17 : round.team2Strategy17) || [];
        const songs18 = (teamIdx === 1 ? round.team1Strategy18 : round.team2Strategy18) || [];
        return [
            ...songs17,
            ...songs18
        ].filter(Boolean);
    };
    const getStrategyUsed = (round, teamIdx)=>{
        return teamIdx === 1 ? round.team1StrategyUsed : round.team2StrategyUsed;
    };
    const getStrategyTarget = (round, teamIdx)=>{
        return teamIdx === 1 ? round.team1StrategyTarget || "" : round.team2StrategyTarget || "";
    };
    const getStrategySelected = (round, teamIdx)=>{
        return teamIdx === 1 ? round.team1StrategySelected || "" : round.team2StrategySelected || "";
    };
    const exportCSV = ()=>{
        const rows = [];
        rows.push("section,key,value,title,artist,jacket,level,type,date");
        // Escape function for CSV values
        const escapeCSV = (str)=>{
            if (!str) return "";
            // Escape quotes by doubling them and wrap in quotes if contains comma or quote
            const escaped = str.replace(/"/g, '""');
            if (escaped.includes(",") || escaped.includes('"') || escaped.includes("\n")) {
                return `"${escaped}"`;
            }
            return escaped;
        };
        rows.push(`team,team1Name,${escapeCSV(data.team1.name)},,,,,,`);
        rows.push(`team,team1Player1,${escapeCSV(data.team1.players[0])},,,,,,`);
        rows.push(`team,team1Player2,${escapeCSV(data.team1.players[1])},,,,,,`);
        rows.push(`team,team1Player3,${escapeCSV(data.team1.players[2])},,,,,,`);
        rows.push(`team,team2Name,${escapeCSV(data.team2.name)},,,,,,`);
        rows.push(`team,team2Player1,${escapeCSV(data.team2.players[0])},,,,,,`);
        rows.push(`team,team2Player2,${escapeCSV(data.team2.players[1])},,,,,,`);
        rows.push(`team,team2Player3,${escapeCSV(data.team2.players[2])},,,,,,`);
        data.rounds.forEach((round, idx)=>{
            const section = `round${idx + 1}`;
            Object.entries(round).forEach(([key, value])=>{
                if (Array.isArray(value)) {
                    value.forEach((v, i)=>{
                        const infoKey = `round${idx}_${key}_${i}`;
                        const info = data.songInfoMap[infoKey];
                        if (info) {
                            rows.push(`${section},${key}_${i},${escapeCSV(v)},${escapeCSV(info.title)},${escapeCSV(info.artist)},${escapeCSV(info.jacket)},${info.level},${escapeCSV(info.type)},${escapeCSV(info.date)}`);
                        } else {
                            rows.push(`${section},${key}_${i},${escapeCSV(v)},,,,,,`);
                        }
                    });
                } else if (typeof value === "boolean") {
                    rows.push(`${section},${key},${value},,,,,,`);
                } else if (typeof value === "string") {
                    const infoKey = `round${idx}_${key}`;
                    const info = data.songInfoMap[infoKey];
                    if (info) {
                        rows.push(`${section},${key},${escapeCSV(value)},${escapeCSV(info.title)},${escapeCSV(info.artist)},${escapeCSV(info.jacket)},${info.level},${escapeCSV(info.type)},${escapeCSV(info.date)}`);
                    } else {
                        rows.push(`${section},${key},${escapeCSV(value)},,,,,,`);
                    }
                }
            });
        });
        const csv = rows.join("\n");
        const blob = new Blob([
            "\uFEFF" + csv
        ], {
            type: "text/csv;charset=utf-8;"
        }) // Add BOM for Excel
        ;
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "tournament_data.csv";
        link.click();
        URL.revokeObjectURL(url);
    };
    const importCSV = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TournamentScriptManager.useCallback[importCSV]": (e)=>{
            const file = e.target.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = ({
                "TournamentScriptManager.useCallback[importCSV]": (event)=>{
                    const text = event.target?.result;
                    const lines = text.split("\n").slice(1) // Skip header
                    ;
                    const newData = defaultData();
                    const newSongInfoMap = {};
                    lines.forEach({
                        "TournamentScriptManager.useCallback[importCSV]": (line)=>{
                            if (!line.trim()) return;
                            // Parse CSV with proper quote handling
                            const values = [];
                            let current = "";
                            let inQuotes = false;
                            for(let i = 0; i < line.length; i++){
                                const char = line[i];
                                if (char === '"') {
                                    if (inQuotes && line[i + 1] === '"') {
                                        current += '"';
                                        i++; // Skip next quote
                                    } else {
                                        inQuotes = !inQuotes;
                                    }
                                } else if (char === "," && !inQuotes) {
                                    values.push(current.trim());
                                    current = "";
                                } else {
                                    current += char;
                                }
                            }
                            values.push(current.trim());
                            if (values.length < 3) return;
                            const [section, key, value, title, artist, jacket, level, type, date] = values;
                            // Store song info if available
                            if (title && title.trim()) {
                                const roundMatch = section.match(/round(\d+)/);
                                if (roundMatch) {
                                    const roundIdx = Number.parseInt(roundMatch[1]) - 1;
                                    // Fix the key format - remove duplicate array index handling
                                    let infoKey;
                                    if (key.includes("_")) {
                                        const keyParts = key.split("_");
                                        const baseKey = keyParts.slice(0, -1).join("_");
                                        const arrayIdx = keyParts[keyParts.length - 1];
                                        infoKey = `round${roundIdx}_${baseKey}_${arrayIdx}`;
                                    } else {
                                        infoKey = `round${roundIdx}_${key}`;
                                    }
                                    newSongInfoMap[infoKey] = {
                                        title: title.trim(),
                                        artist: artist?.trim() || "",
                                        jacket: jacket?.trim() || "",
                                        level: Number.parseInt(level) || 0,
                                        type: type?.trim() || "",
                                        date: date?.trim() || ""
                                    };
                                }
                            }
                            // Restore data values
                            if (section === "team") {
                                if (key === "team1Name") newData.team1.name = value;
                                else if (key === "team2Name") newData.team2.name = value;
                                else if (key.startsWith("team1Player")) {
                                    const idx = Number.parseInt(key.replace("team1Player", "")) - 1;
                                    if (idx >= 0 && idx < 3) newData.team1.players[idx] = value;
                                } else if (key.startsWith("team2Player")) {
                                    const idx = Number.parseInt(key.replace("team2Player", "")) - 1;
                                    if (idx >= 0 && idx < 3) newData.team2.players[idx] = value;
                                }
                            } else if (section.startsWith("round")) {
                                const roundIdx = Number.parseInt(section.replace("round", "")) - 1;
                                if (roundIdx >= 0 && roundIdx < 4) {
                                    const keyParts = key.split("_");
                                    const lastPart = keyParts[keyParts.length - 1];
                                    const isArrayIndex = !isNaN(Number.parseInt(lastPart));
                                    if (isArrayIndex) {
                                        const baseKey = keyParts.slice(0, -1).join("_");
                                        const arrayIdx = Number.parseInt(lastPart);
                                        const round = newData.rounds[roundIdx];
                                        if (!round[baseKey]) {
                                            // Initialize array based on key type
                                            if (baseKey.includes("SongsLong") || baseKey.includes("Strategy17") || baseKey.includes("Strategy18")) {
                                                round[baseKey] = [
                                                    "",
                                                    "",
                                                    "",
                                                    "",
                                                    ""
                                                ];
                                            } else if (baseKey.includes("Songs2")) {
                                                round[baseKey] = [
                                                    "",
                                                    ""
                                                ];
                                            } else if (baseKey.includes("Songs") || baseKey.includes("StrategyOptions")) {
                                                round[baseKey] = [
                                                    "",
                                                    "",
                                                    ""
                                                ];
                                            } else if (baseKey.includes("Players")) {
                                                round[baseKey] = [
                                                    "",
                                                    ""
                                                ];
                                            } else {
                                                round[baseKey] = [];
                                            }
                                        }
                                        const arr = round[baseKey];
                                        while(arr.length <= arrayIdx){
                                            arr.push("");
                                        }
                                        arr[arrayIdx] = value;
                                    } else {
                                        const round = newData.rounds[roundIdx];
                                        if (value.toLowerCase() === "true") {
                                            round[key] = true;
                                        } else if (value.toLowerCase() === "false") {
                                            round[key] = false;
                                        } else {
                                            round[key] = value;
                                        }
                                    }
                                }
                            }
                        }
                    }["TournamentScriptManager.useCallback[importCSV]"]);
                    newData.songInfoMap = newSongInfoMap;
                    setData(newData);
                }
            })["TournamentScriptManager.useCallback[importCSV]"];
            reader.readAsText(file);
            e.target.value = "";
        }
    }["TournamentScriptManager.useCallback[importCSV]"], []);
    const generateRecordingStartScript = (roundIdx)=>{
        return `# 녹화 시작 안내
* ${roundIdx + 1}라운드 출전 선수분들 녹화 시작하셨으면 말씀 부탁드립니다.
* ${roundIdx + 1}라운드 출전 선수분들 타건음 마이크 음소거 한번 더 확인 부탁드립니다.`;
    };
    const generateRecordingEndScript = (roundIdx)=>{
        return `# 녹화 종료 안내
* ${roundIdx + 1}라운드 출전 선수분들 녹화 종료 부탁드립니다.
* 녹화하신 영상을 https://drive.google.com/drive/folders/1HCiwJYMPH-sRQ0gxGQGj-PmeM2GRwHYi 으로 파일 이름을 **플레이어_라운드** 형식으로 수정하여 전송 부탁드립니다.
-# 예시) 고갱_${roundIdx + 1}라운드`;
    };
    const generateEntryScript = (roundIdx)=>{
        const round = data.rounds[roundIdx];
        const isRound13 = roundIdx === 0 || roundIdx === 2;
        const isRound4 = roundIdx === 3;
        if (isRound13) {
            const team1Players = round.team1Players?.join(" ") || "";
            const team2Players = round.team2Players?.join(" ") || "";
            const team1Songs = round.team1Songs?.join(" , ") || "";
            const team2Songs = round.team2Songs?.join(" , ") || "";
            return `# ${roundIdx + 1}라운드 엔트리
* **팀 ${data.team1.name} : ${team1Players}**
  * 팀 **${data.team1.name}** 선곡 : **${team1Songs}**
* **팀 ${data.team2.name} : ${team2Players}**
  * 팀 **${data.team2.name}** 선곡 : **${team2Songs}**
## 밴 카드를 ${round.deadline || "??:??"}까지 결정하여 팀 채널에서 알려주시기 바랍니다!
* 밴 카드를 먼저 사용 후, 스트래티지 카드 사용 여부를 결정하여 주세요.
* 스트래티지 카드 사용을 하지 않는 경우, 사용하지 않는다고 알려주셔야 합니다.`;
        } else if (isRound4) {
            const team1Songs = round.team1Songs2?.join(" , ") || "";
            const team2Songs = round.team2Songs2?.join(" , ") || "";
            return `# ${roundIdx + 1}라운드 엔트리
* **팀 ${data.team1.name} : ${round.team1Player || ""}**
  * 팀 **${data.team1.name}** 선곡 : **${team1Songs}**
* **팀 ${data.team2.name} : ${round.team2Player || ""}**
  * 팀 **${data.team2.name}** 선곡 : **${team2Songs}**
## 밴 카드를 ${round.deadline || "??:??"}까지 결정하여 팀 채널에서 알려주시기 바랍니다!`;
        } else {
            const team1Songs = round.team1SongsLong?.join(" , ") || "";
            const team2Songs = round.team2SongsLong?.join(" , ") || "";
            return `# ${roundIdx + 1}라운드 엔트리
* **팀 ${data.team1.name} : ${round.team1Player || ""}**
  * 팀 **${data.team1.name}** 선곡 : **${team1Songs}**
* **팀 ${data.team2.name} : ${round.team2Player || ""}**
  * 팀 **${data.team2.name}** 선곡 : **${team2Songs}**
## 스트래티지 카드를 ${round.deadline || "??:??"}까지 결정하여 팀 채널에서 알려주시기 바랍니다!
* 스트래티지 카드 사용을 하지 않는 경우, 사용하지 않는다고 알려주셔야 합니다.`;
        }
    };
    const generateStrategyScript = (roundIdx, teamIdx)=>{
        const round = data.rounds[roundIdx];
        const teamName = teamIdx === 1 ? data.team1.name : data.team2.name;
        // ✅ 1,3라운드: 기존 포맷 유지 (랜덤 3곡)
        if (roundIdx === 0 || roundIdx === 2) {
            const options = teamIdx === 1 ? round.team1StrategyOptions : round.team2StrategyOptions;
            if (!options || options.every((o)=>!o)) return "";
            const filtered = options.filter((o)=>o && o.trim());
            if (filtered.length === 0) return "";
            return `# 팀 ${teamName}이 ${roundIdx + 1}라운드 스트래티지 카드를 사용하였습니다!
## 랜덤으로 뽑힌 곡들 중에서 하나를 선택해주시길 바랍니다.
${filtered.map((song)=>`* ${song}`).join("\n")}`;
        }
        // ✅ 2라운드: 17렙 / 18렙 후보에서 선택
        if (roundIdx === 1) {
            const options17 = (teamIdx === 1 ? round.team1Strategy17 : round.team2Strategy17) || [];
            const options18 = (teamIdx === 1 ? round.team1Strategy18 : round.team2Strategy18) || [];
            const has17 = options17.some((o)=>o && o.trim());
            const has18 = options18.some((o)=>o && o.trim());
            if (!has17 && !has18) return "";
            let script = `# 팀 ${teamName}이 ${roundIdx + 1}라운드 스트래티지 카드를 사용하였습니다!
## 아래 곡들 중에서 **상대 자선곡에 사용할 스트래티지 곡**을 1곡 선택해주시길 바랍니다.\n`;
            if (has17) {
                script += `\n### 17레벨 후보\n${options17.filter((s)=>s && s.trim()).map((s)=>`* ${s}`).join("\n")}`;
            }
            if (has18) {
                script += `\n\n### 18레벨 후보\n${options18.filter((s)=>s && s.trim()).map((s)=>`* ${s}`).join("\n")}`;
            }
            return script;
        }
        // 다른 라운드는 현재 스트래티지 없음
        return "";
    };
    const generateArenaEntryScript = (roundIdx)=>{
        const round = data.rounds[roundIdx];
        const isRound13 = roundIdx === 0 || roundIdx === 2;
        const isRound4 = roundIdx === 3;
        if (isRound13) {
            const team1Players = round.team1Players || [
                "",
                ""
            ];
            const team1Songs = round.team1Songs || [
                "",
                "",
                ""
            ];
            const team2Players = round.team2Players || [
                "",
                ""
            ];
            const team2Songs = round.team2Songs || [
                "",
                "",
                ""
            ];
            const team1Banned = round.team1BannedSong;
            const team2Banned = round.team2BannedSong;
            const team1StrategyTarget = round.team1StrategyTarget;
            const team1StrategySelected = round.team1StrategySelected;
            const team2StrategyTarget = round.team2StrategyTarget;
            const team2StrategySelected = round.team2StrategySelected;
            const team1FinalSongs = team1Songs.map((song)=>{
                if (round.team2StrategyUsed && song === team2StrategyTarget && team2StrategySelected) {
                    return team2StrategySelected;
                }
                return song;
            });
            const team2FinalSongs = team2Songs.map((song)=>{
                if (round.team1StrategyUsed && song === team1StrategyTarget && team1StrategySelected) {
                    return team1StrategySelected;
                }
                return song;
            });
            const team1PlayableSongs = team1FinalSongs.filter((song)=>song && song !== team2Banned);
            const team2PlayableSongs = team2FinalSongs.filter((song)=>song && song !== team1Banned);
            let script = `# ${roundIdx + 1}라운드 출전 선수 아레나 방번호 ${round.roomNumber || "??????"} 로 입장해주세요\n`;
            team1PlayableSongs.forEach((song, idx)=>{
                if (idx < 2 && team1Players[idx]) {
                    script += `* 팀 **${data.team1.name}** 의 **${team1Players[idx]}** 선수는 자선곡 **${song}**을(를) 선곡해주세요.\n`;
                }
            });
            if (team2Banned) {
                script += `* 팀 **${data.team1.name}** 의 자선곡 **${team2Banned}**는 밴 당하였습니다.\n`;
            }
            team2PlayableSongs.forEach((song, idx)=>{
                if (idx < 2 && team2Players[idx]) {
                    script += `* 팀 **${data.team2.name}** 의 **${team2Players[idx]}** 선수는 자선곡 **${song}**을(를) 선곡해주세요.\n`;
                }
            });
            if (team1Banned) {
                script += `* 팀 **${data.team2.name}** 의 자선곡 **${team1Banned}**는 밴 당하였습니다.\n`;
            }
            script += `\n종료 후 나오는 리절트 창 촬영 부탁드립니다.\n`;
            if (!round.team1StrategyUsed && !round.team2StrategyUsed) {
                script += `\n## 스트래티지 카드는 사용되지 않았습니다.`;
            } else {
                if (round.team1StrategyUsed && team1StrategyTarget && team1StrategySelected) {
                    script += `\n## 팀 ${data.team1.name} 에서 ${team1StrategyTarget}곡에 스트래티지 카드를 사용하여 무작위 선곡인 ${team1StrategySelected}으로 변경되었습니다.`;
                }
                if (round.team2StrategyUsed && team2StrategyTarget && team2StrategySelected) {
                    script += `\n## 팀 ${data.team2.name} 에서 ${team2StrategyTarget}곡에 스트래티지 카드를 사용하여 무작위 선곡인 ${team2StrategySelected}으로 변경되었습니다.`;
                }
            }
            return script;
        } else if (isRound4) {
            const team1Songs = round.team1Songs2 || [
                "",
                ""
            ];
            const team2Songs = round.team2Songs2 || [
                "",
                ""
            ];
            const team1Banned = round.team1BannedSong4;
            const team2Banned = round.team2BannedSong4;
            const team1PlayableSong = team1Songs.find((song)=>song && song !== team2Banned) || team1Songs[0];
            const team2PlayableSong = team2Songs.find((song)=>song && song !== team1Banned) || team2Songs[0];
            return `# ${roundIdx + 1}라운드 출전선수 싱글배틀 방번호 ${round.roomNumber || "??????"} 로 입장해주세요
* 팀 **${data.team1.name}** 의 **${round.team1Player || ""}** 선수는 자선곡 **${team1PlayableSong}** 을 **1번째로 골라주시고**, 지정곡 **${round.stage3DesignatedSong || "????"}** 을 **두번째로 골라주시기 바랍니다.**
* 팀 **${data.team2.name}** 의 **${round.team2Player || ""}** 선수는 자선곡 **${team2PlayableSong}** 을 **1번째로 골라주시고**, 지정곡 **${round.stage4DesignatedSong || "????"}** 을 **두번째로 골라주시기 바랍니다.**

종료 후 나오는 리절트 창 촬영 부탁드립니다.`;
        } else {
            return `# ${roundIdx + 1}라운드 출전 선수 아레나 방번호 ${round.roomNumber || "??????"} 로 입장해주세요
* 팀 **${data.team1.name}** 의 **${round.team1Player || ""}** 선수
* 팀 **${data.team2.name}** 의 **${round.team2Player || ""}** 선수

종료 후 나오는 리절트 창 촬영 부탁드립니다.`;
        }
    };
    const BanSelectDropdown = ({ value, songs, onChange, placeholder })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: value,
            onValueChange: onChange,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                    className: "h-8 text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                        placeholder: placeholder
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 1272,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1271,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                            value: "none",
                            children: "없음"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1275,
                            columnNumber: 9
                        }, this),
                        songs.filter(Boolean).map((song, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                value: song,
                                children: song
                            }, idx, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1277,
                                columnNumber: 11
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1274,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
            lineNumber: 1270,
            columnNumber: 5
        }, this);
    const StrategyTargetDropdown = ({ value, songs, onChange, placeholder })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: value,
            onValueChange: onChange,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                    className: "h-8 text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                        placeholder: placeholder
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 1298,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1297,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                            value: "none",
                            children: "없음"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1301,
                            columnNumber: 9
                        }, this),
                        songs.filter(Boolean).map((song, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                value: song,
                                children: song
                            }, idx, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1303,
                                columnNumber: 11
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1300,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
            lineNumber: 1296,
            columnNumber: 5
        }, this);
    const StrategySelectedDropdown = ({ value, options, onChange, placeholder })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
            value: value,
            onValueChange: onChange,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                    className: "h-8 text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                        placeholder: placeholder
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 1324,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1323,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                            value: "none",
                            children: "없음"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1327,
                            columnNumber: 9
                        }, this),
                        options.filter(Boolean).map((option, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                value: option,
                                children: option
                            }, idx, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1329,
                                columnNumber: 11
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1326,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
            lineNumber: 1322,
            columnNumber: 5
        }, this);
    const ScriptCard = ({ title, script, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "bg-muted/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "py-2 px-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                className: "text-sm font-medium",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1341,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "icon",
                                className: "h-7 w-7",
                                onClick: ()=>copyToClipboard(script, id),
                                children: copiedId === id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    className: "h-4 w-4 text-green-500"
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 1343,
                                    columnNumber: 32
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 1343,
                                    columnNumber: 79
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1342,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 1340,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1339,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "px-3 pb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "text-xs whitespace-pre-wrap text-muted-foreground max-h-40 overflow-y-auto",
                        children: script
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 1348,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1347,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
            lineNumber: 1338,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 max-w-6xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                lineNumber: 1355,
                columnNumber: 7
            }, this),
            notification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-4 right-4 z-50 px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 ${notification.type === "error" ? "bg-red-500/90 text-white" : "bg-green-500/90 text-white"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        notification.type === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1363,
                            columnNumber: 46
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1363,
                            columnNumber: 74
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            children: notification.message
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1364,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1362,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                lineNumber: 1358,
                columnNumber: 9
            }, this),
            songNotFoundWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 right-4 z-50 bg-yellow-500/90 text-black px-4 py-2 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1372,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium",
                            children: songNotFoundWarning
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1373,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1371,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                lineNumber: 1370,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: onBack,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                        lineNumber: 1381,
                                        columnNumber: 13
                                    }, this),
                                    "메인으로 돌아가기"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1380,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                children: "대회 멘트 관리"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1384,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 1379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: ".csv",
                                        onChange: importCSV,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                        lineNumber: 1388,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1391,
                                                    columnNumber: 17
                                                }, this),
                                                "Import"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1390,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                        lineNumber: 1389,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1387,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "outline",
                                onClick: exportCSV,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                        lineNumber: 1397,
                                        columnNumber: 13
                                    }, this),
                                    "Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1396,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 1386,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                lineNumber: 1378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: songSearchOpen,
                onOpenChange: setSongSearchOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-2xl max-h-[80vh] overflow-visible",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: "곡 검색"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1407,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1406,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "곡명 또는 아티스트 검색...",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    className: "flex-1",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 1410,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                    value: levelFilter,
                                    onValueChange: setLevelFilter,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                            className: "w-24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                placeholder: "레벨"
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 1419,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1418,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                            position: "popper",
                                            sideOffset: 4,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                    value: "all",
                                                    children: "전체"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1422,
                                                    columnNumber: 17
                                                }, this),
                                                Array.from({
                                                    length: 20
                                                }, (_, i)=>i + 1).map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                        value: level.toString(),
                                                        children: [
                                                            "Lv.",
                                                            level
                                                        ]
                                                    }, level, true, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1424,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1421,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 1417,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1409,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollArea"], {
                            className: "h-[400px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    filteredCharts.slice(0, 100).map((chart, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 p-2 rounded hover:bg-muted cursor-pointer",
                                            onClick: ()=>handleSelectSong(chart),
                                            children: [
                                                chart.jacket && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: chart.jacket || "/placeholder.svg",
                                                    alt: chart.title,
                                                    width: 40,
                                                    height: 40,
                                                    className: "rounded flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1440,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium truncate",
                                                            children: chart.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 1449,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-muted-foreground truncate",
                                                            children: chart.artist
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 1450,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1448,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium px-2 py-1 bg-muted rounded flex-shrink-0",
                                                    children: [
                                                        getTypeLabel(chart.type),
                                                        " Lv.",
                                                        chart.level
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1452,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, `${chart.songIdx}-${chart.chartIdx}-${idx}`, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1434,
                                            columnNumber: 17
                                        }, this)),
                                    filteredCharts.length === 0 && searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-muted-foreground py-4",
                                        children: "검색 결과가 없습니다"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                        lineNumber: 1458,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1432,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1431,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1405,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                lineNumber: 1404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: imageDialogOpen,
                onOpenChange: setImageDialogOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: [
                                    imageRoundIdx + 1,
                                    "라운드 선곡 목록 이미지"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1468,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1467,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center overflow-auto",
                            children: generatedImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: generatedImage,
                                alt: "Generated Song List",
                                className: "max-w-full border rounded"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1472,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: canvasRef,
                                className: "max-w-full border rounded"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1478,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1470,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: downloadImage,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1483,
                                            columnNumber: 15
                                        }, this),
                                        "다운로드"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 1482,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: copyImageToClipboard,
                                    children: [
                                        copiedId === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1487,
                                            columnNumber: 39
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1487,
                                            columnNumber: 76
                                        }, this),
                                        "클립보드에 복사"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 1486,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1481,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                    lineNumber: 1466,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                lineNumber: 1465,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                defaultValue: "teams",
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                        className: "grid w-full grid-cols-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "teams",
                                children: "팀 정보"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1496,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "round1",
                                children: "1라운드"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1497,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "round2",
                                children: "2라운드"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1498,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "round3",
                                children: "3라운드"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1499,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "round4",
                                children: "4라운드"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1500,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                value: "common",
                                children: "공통 멘트"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1501,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 1495,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "teams",
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [
                                1,
                                2
                            ].map((teamIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                children: [
                                                    "팀 ",
                                                    teamIdx
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 1510,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1509,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            children: "팀 이름"
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 1514,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            value: data[`team${teamIdx}`].name,
                                                            onChange: (e)=>updateTeam(teamIdx, "name", e.target.value),
                                                            placeholder: "팀 이름"
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 1515,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1513,
                                                    columnNumber: 19
                                                }, this),
                                                [
                                                    0,
                                                    1,
                                                    2
                                                ].map((playerIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                children: [
                                                                    "선수 ",
                                                                    playerIdx + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                lineNumber: 1523,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                value: data[`team${teamIdx}`].players[playerIdx],
                                                                onChange: (e)=>{
                                                                    const newPlayers = [
                                                                        ...data[`team${teamIdx}`].players
                                                                    ];
                                                                    newPlayers[playerIdx] = e.target.value;
                                                                    updateTeam(teamIdx, "players", newPlayers);
                                                                },
                                                                placeholder: `선수 ${playerIdx + 1} 닉네임`
                                                            }, void 0, false, {
                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                lineNumber: 1524,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, playerIdx, true, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1522,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1512,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, teamIdx, true, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 1508,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1506,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 1505,
                        columnNumber: 9
                    }, this),
                    [
                        0,
                        2
                    ].map((roundIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                            value: `round${roundIdx + 1}`,
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid lg:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-lg",
                                                            children: "공통 설정"
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 1548,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1547,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "space-y-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            children: "방 번호"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1553,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            value: data.rounds[roundIdx].roomNumber,
                                                                            onChange: (e)=>updateRound(roundIdx, "roomNumber", e.target.value),
                                                                            placeholder: "219219"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1554,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 1552,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            children: "마감시간"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1561,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                            value: data.rounds[roundIdx].deadline,
                                                                            onChange: (e)=>updateRound(roundIdx, "deadline", e.target.value),
                                                                            placeholder: "13:00"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1562,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 1560,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 1551,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1550,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 1546,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "border-blue-500/30 bg-blue-500/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-lg text-blue-400",
                                                            children: "사전 입력"
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 1574,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1573,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "space-y-4",
                                                        children: [
                                                            1,
                                                            2
                                                        ].map((teamIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3 p-3 bg-muted/30 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-medium",
                                                                        children: [
                                                                            "팀 ",
                                                                            data[`team${teamIdx}`].name || `팀${teamIdx}`
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1579,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                className: "text-xs",
                                                                                children: "출전 선수 (2명)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                lineNumber: 1582,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid grid-cols-2 gap-2",
                                                                                children: [
                                                                                    0,
                                                                                    1
                                                                                ].map((playerIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                                        value: data.rounds[roundIdx][`team${teamIdx}Players`]?.[playerIdx] || "",
                                                                                        onValueChange: (value)=>{
                                                                                            const newPlayers = [
                                                                                                ...data.rounds[roundIdx][`team${teamIdx}Players`] || [
                                                                                                    "",
                                                                                                    ""
                                                                                                ]
                                                                                            ];
                                                                                            newPlayers[playerIdx] = value;
                                                                                            updateRound(roundIdx, `team${teamIdx}Players`, newPlayers);
                                                                                        },
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                                className: "h-8 text-sm",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                                    placeholder: `선수 ${playerIdx + 1}`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                                    lineNumber: 1603,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                                lineNumber: 1602,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                                children: data[`team${teamIdx}`].players.filter(Boolean).map((player, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                                        value: player,
                                                                                                        children: player
                                                                                                    }, idx, false, {
                                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                                        lineNumber: 1607,
                                                                                                        columnNumber: 37
                                                                                                    }, this))
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                                lineNumber: 1605,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, playerIdx, true, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 1585,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                lineNumber: 1583,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1581,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                className: "text-xs",
                                                                                children: "선곡 (3곡) - 클릭하여 검색"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                lineNumber: 1618,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-1",
                                                                                children: [
                                                                                    0,
                                                                                    1,
                                                                                    2
                                                                                ].map((songIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SongInputField, {
                                                                                        value: data.rounds[roundIdx][`team${teamIdx}Songs`]?.[songIdx] || "",
                                                                                        placeholder: `곡 ${songIdx + 1} 클릭하여 검색`,
                                                                                        onClick: ()=>openSongSearch(roundIdx, `team${teamIdx}Songs`, songIdx),
                                                                                        onClear: ()=>clearSong(roundIdx, `team${teamIdx}Songs`, songIdx)
                                                                                    }, songIdx, false, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 1621,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                lineNumber: 1619,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1617,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                className: "text-xs",
                                                                                children: "스트래티지 랜덤 3곡 (미리 뽑기)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                lineNumber: 1637,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-1",
                                                                                children: [
                                                                                    0,
                                                                                    1,
                                                                                    2
                                                                                ].map((optIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SongInputField, {
                                                                                        value: data.rounds[roundIdx][`team${teamIdx}StrategyOptions`]?.[optIdx] || "",
                                                                                        placeholder: `랜덤곡 ${optIdx + 1} 클릭하여 검색`,
                                                                                        onClick: ()=>openSongSearch(roundIdx, `team${teamIdx}StrategyOptions`, optIdx),
                                                                                        onClear: ()=>clearSong(roundIdx, `team${teamIdx}StrategyOptions`, optIdx)
                                                                                    }, optIdx, false, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 1640,
                                                                                        columnNumber: 31
                                                                                    }, this))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                lineNumber: 1638,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1636,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, teamIdx, true, {
                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                lineNumber: 1578,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1576,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 1572,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "border-orange-500/30 bg-orange-500/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "text-lg text-orange-400",
                                                            children: "경기 진행 중"
                                                        }, void 0, false, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 1663,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1662,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                        className: "space-y-4",
                                                        children: [
                                                            1,
                                                            2
                                                        ].map((teamIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3 p-3 bg-muted/30 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-medium",
                                                                        children: [
                                                                            "팀 ",
                                                                            data[`team${teamIdx}`].name || `팀${teamIdx}`
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1668,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                className: "text-xs",
                                                                                children: "밴할 곡 (상대 팀 선곡에서 선택)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                lineNumber: 1671,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BanSelectDropdown, {
                                                                                value: teamIdx === 1 ? data.rounds[roundIdx].team1BannedSong || "" : data.rounds[roundIdx].team2BannedSong || "",
                                                                                songs: getOpponentSongs(data.rounds[roundIdx], teamIdx, roundIdx),
                                                                                onChange: (value)=>updateRound(roundIdx, teamIdx === 1 ? "team1BannedSong" : "team2BannedSong", value === "none" ? "" : value),
                                                                                placeholder: "밴할 곡 선택"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                lineNumber: 1672,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1670,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                                                        id: `r${roundIdx}-team${teamIdx}-strategy-switch`,
                                                                                        checked: getStrategyUsed(data.rounds[roundIdx], teamIdx),
                                                                                        onCheckedChange: (checked)=>updateRound(roundIdx, teamIdx === 1 ? "team1StrategyUsed" : "team2StrategyUsed", checked)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 1692,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                        htmlFor: `r${roundIdx}-team${teamIdx}-strategy-switch`,
                                                                                        className: "text-xs",
                                                                                        children: "스트래티지 카드 사용"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 1703,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                lineNumber: 1691,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            getStrategyUsed(data.rounds[roundIdx], teamIdx) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "space-y-2 pl-6",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                                className: "text-xs",
                                                                                                children: "대상곡 (상대 팀 곡 선택)"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                                lineNumber: 1711,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrategyTargetDropdown, {
                                                                                                value: getStrategyTarget(data.rounds[roundIdx], teamIdx),
                                                                                                songs: getOpponentSongs(data.rounds[roundIdx], teamIdx, roundIdx),
                                                                                                onChange: (value)=>updateRound(roundIdx, teamIdx === 1 ? "team1StrategyTarget" : "team2StrategyTarget", value === "none" ? "" : value),
                                                                                                placeholder: "대상곡 선택"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                                lineNumber: 1712,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 1710,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                                className: "text-xs",
                                                                                                children: "선택한 랜덤곡"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                                lineNumber: 1726,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrategySelectedDropdown, {
                                                                                                value: getStrategySelected(data.rounds[roundIdx], teamIdx),
                                                                                                options: data.rounds[roundIdx][`team${teamIdx}StrategyOptions`] || [],
                                                                                                onChange: (value)=>updateRound(roundIdx, teamIdx === 1 ? "team1StrategySelected" : "team2StrategySelected", value === "none" ? "" : value),
                                                                                                placeholder: "랜덤곡 선택"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                                lineNumber: 1727,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 1725,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                lineNumber: 1709,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1690,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, teamIdx, true, {
                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                lineNumber: 1667,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1665,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 1661,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                        lineNumber: 1545,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                className: "w-full bg-transparent",
                                                onClick: ()=>generateSongListImage(roundIdx),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1759,
                                                        columnNumber: 19
                                                    }, this),
                                                    "선곡 목록 이미지 생성"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 1754,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                                title: "녹화 시작 안내",
                                                script: generateRecordingStartScript(roundIdx),
                                                id: `r${roundIdx}-rec-start`
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 1763,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                                title: "엔트리 공개",
                                                script: generateEntryScript(roundIdx),
                                                id: `r${roundIdx}-entry`
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 1768,
                                                columnNumber: 17
                                            }, this),
                                            [
                                                1,
                                                2
                                            ].map((teamIdx)=>{
                                                const script = generateStrategyScript(roundIdx, teamIdx);
                                                return script ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                                    title: `팀 ${data[`team${teamIdx}`].name || teamIdx} 스트래티지 안내`,
                                                    script: script,
                                                    id: `r${roundIdx}-strat-${teamIdx}`
                                                }, teamIdx, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1772,
                                                    columnNumber: 21
                                                }, this) : null;
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                                title: "아레나 입장 안내",
                                                script: generateArenaEntryScript(roundIdx),
                                                id: `r${roundIdx}-arena`
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 1780,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                                title: "녹화 종료 안내",
                                                script: generateRecordingEndScript(roundIdx),
                                                id: `r${roundIdx}-rec-end`
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 1785,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                        lineNumber: 1753,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                lineNumber: 1544,
                                columnNumber: 13
                            }, this)
                        }, roundIdx, false, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1543,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "round2",
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-lg",
                                                        children: "공통 설정"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1801,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1800,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        children: "방 번호"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1806,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        value: data.rounds[1].roomNumber,
                                                                        onChange: (e)=>updateRound(1, "roomNumber", e.target.value),
                                                                        placeholder: "219219"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1807,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                lineNumber: 1805,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        children: "마감시간"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1814,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        value: data.rounds[1].deadline,
                                                                        onChange: (e)=>updateRound(1, "deadline", e.target.value),
                                                                        placeholder: "13:00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 1815,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                lineNumber: 1813,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1804,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1803,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1799,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "border-blue-500/30 bg-blue-500/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-lg text-blue-400",
                                                        children: "사전 입력"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1827,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1826,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-4",
                                                    children: [
                                                        1,
                                                        2
                                                    ].map((teamIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 p-3 bg-muted/30 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "팀 ",
                                                                        data[`team${teamIdx}`].name || `팀${teamIdx}`
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 1832,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            className: "text-xs",
                                                                            children: "출전 선수"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1835,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                            value: teamIdx === 1 ? data.rounds[1].team1Player || "" : data.rounds[1].team2Player || "",
                                                                            onValueChange: (value)=>updateRound(1, teamIdx === 1 ? "team1Player" : "team2Player", value),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                    className: "h-8 text-sm",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                        placeholder: "선수 선택"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 1843,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 1842,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                    children: data[`team${teamIdx}`].players.filter(Boolean).map((player, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                            value: player,
                                                                                            children: player
                                                                                        }, idx, false, {
                                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                            lineNumber: 1847,
                                                                                            columnNumber: 31
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 1845,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1836,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 1834,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            className: "text-xs",
                                                                            children: "선곡 (5곡) - 클릭하여 검색"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1856,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-1",
                                                                            children: [
                                                                                0,
                                                                                1,
                                                                                2,
                                                                                3,
                                                                                4
                                                                            ].map((songIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SongInputField, {
                                                                                    value: data.rounds[1][`team${teamIdx}SongsLong`]?.[songIdx] || "",
                                                                                    placeholder: `곡 ${songIdx + 1} 클릭하여 검색`,
                                                                                    onClick: ()=>openSongSearch(1, `team${teamIdx}SongsLong`, songIdx),
                                                                                    onClear: ()=>clearSong(1, `team${teamIdx}SongsLong`, songIdx)
                                                                                }, songIdx, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 1859,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1857,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 1855,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    className: "text-xs",
                                                                                    children: "스트래티지 17렙"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 1875,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                [
                                                                                    0,
                                                                                    1,
                                                                                    2
                                                                                ].map((optIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SongInputField, {
                                                                                            value: data.rounds[1][`team${teamIdx}Strategy17`]?.[optIdx] || "",
                                                                                            placeholder: `17렙 ${optIdx + 1}`,
                                                                                            onClick: ()=>openSongSearch(1, `team${teamIdx}Strategy17`, optIdx),
                                                                                            onClear: ()=>clearSong(1, `team${teamIdx}Strategy17`, optIdx)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                            lineNumber: 1878,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    }, optIdx, false, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 1877,
                                                                                        columnNumber: 29
                                                                                    }, this))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1874,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    className: "text-xs",
                                                                                    children: "스트래티지 18렙"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 1892,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                [
                                                                                    0,
                                                                                    1,
                                                                                    2
                                                                                ].map((optIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-1",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SongInputField, {
                                                                                            value: data.rounds[1][`team${teamIdx}Strategy18`]?.[optIdx] || "",
                                                                                            placeholder: `18렙 ${optIdx + 1}`,
                                                                                            onClick: ()=>openSongSearch(1, `team${teamIdx}Strategy18`, optIdx),
                                                                                            onClear: ()=>clearSong(1, `team${teamIdx}Strategy18`, optIdx)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                            lineNumber: 1895,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    }, optIdx, false, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 1894,
                                                                                        columnNumber: 29
                                                                                    }, this))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1891,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 1873,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, teamIdx, true, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 1831,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1829,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1825,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "border-orange-500/30 bg-orange-500/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-lg text-orange-400",
                                                        children: "경기 진행 중 (스트래티지)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 1916,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1915,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-4",
                                                    children: [
                                                        1,
                                                        2
                                                    ].map((teamIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 p-3 bg-muted/30 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "팀 ",
                                                                        data[`team${teamIdx}`].name || `팀${teamIdx}`
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 1926,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                                            id: `r2-team${teamIdx}-strategy-switch`,
                                                                            checked: getStrategyUsed(data.rounds[1], teamIdx),
                                                                            onCheckedChange: (checked)=>updateRound(1, teamIdx === 1 ? "team1StrategyUsed" : "team2StrategyUsed", checked)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1932,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            htmlFor: `r2-team${teamIdx}-strategy-switch`,
                                                                            className: "text-xs",
                                                                            children: "스트레티지 카드 사용"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1945,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 1931,
                                                                    columnNumber: 23
                                                                }, this),
                                                                getStrategyUsed(data.rounds[1], teamIdx) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2 pl-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    className: "text-xs",
                                                                                    children: "스트레티지를 적용할 상대곡 (5곡 중 선택)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 1957,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrategyTargetDropdown, {
                                                                                    value: getStrategyTarget(data.rounds[1], teamIdx),
                                                                                    songs: getOpponentSongs(data.rounds[1], teamIdx, 1),
                                                                                    onChange: (value)=>updateRound(1, teamIdx === 1 ? "team1StrategyTarget" : "team2StrategyTarget", value === "none" ? "" : value),
                                                                                    placeholder: "상대 자선곡 선택"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 1960,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1956,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                                    className: "text-xs",
                                                                                    children: "선택된 스트레티지 곡 (17/18렙 후보 중)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 1976,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StrategySelectedDropdown, {
                                                                                    value: getStrategySelected(data.rounds[1], teamIdx),
                                                                                    options: getRound2StrategyOptions(data.rounds[1], teamIdx),
                                                                                    onChange: (value)=>updateRound(1, teamIdx === 1 ? "team1StrategySelected" : "team2StrategySelected", value === "none" ? "" : value),
                                                                                    placeholder: "스트레티지 곡 선택"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 1979,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 1975,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 1954,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, teamIdx, true, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 1922,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 1920,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 1914,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 1798,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            className: "w-full bg-transparent",
                                            onClick: ()=>generateSongListImage(1),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2011,
                                                    columnNumber: 17
                                                }, this),
                                                "선곡 목록 이미지 생성"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2010,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                            title: "녹화 시작 안내",
                                            script: generateRecordingStartScript(1),
                                            id: "r2-rec-start"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2015,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                            title: "엔트리 공개",
                                            script: generateEntryScript(1),
                                            id: "r2-entry"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2016,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                1,
                                                2
                                            ].map((teamIdx)=>{
                                                const script = generateStrategyScript(1, teamIdx);
                                                return script ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                                    title: `팀 ${data[`team${teamIdx}`].name || teamIdx} 스트래티지 안내`,
                                                    script: script,
                                                    id: `r2-strat-${teamIdx}`
                                                }, teamIdx, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2021,
                                                    columnNumber: 21
                                                }, this) : null;
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2017,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                            title: "아레나 입장 안내",
                                            script: generateArenaEntryScript(1),
                                            id: "r2-arena"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2030,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                            title: "녹화 종료 안내",
                                            script: generateRecordingEndScript(1),
                                            id: "r2-rec-end"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2031,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 2009,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 1797,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 1796,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "round4",
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-lg",
                                                        children: "공통 설정"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 2042,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2041,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        children: "방 번호"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 2047,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        value: data.rounds[3].roomNumber,
                                                                        onChange: (e)=>updateRound(3, "roomNumber", e.target.value),
                                                                        placeholder: "219219"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 2048,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                lineNumber: 2046,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                        children: "마감시간"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 2055,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        value: data.rounds[3].deadline,
                                                                        onChange: (e)=>updateRound(3, "deadline", e.target.value),
                                                                        placeholder: "13:00"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                        lineNumber: 2056,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                lineNumber: 2054,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 2045,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2044,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2040,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "border-purple-500/30 bg-purple-500/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-lg text-purple-400",
                                                        children: "주최측 지정곡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 2068,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2067,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-xs",
                                                                    children: "3스테이지 지정곡 - 클릭하여 검색"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 2072,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SongInputField, {
                                                                    value: data.rounds[3].stage3DesignatedSong || "",
                                                                    placeholder: "3스테이지 지정곡",
                                                                    onClick: ()=>openSongSearch(3, "stage3DesignatedSong"),
                                                                    onClear: ()=>clearSong(3, "stage3DesignatedSong")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 2073,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 2071,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                    className: "text-xs",
                                                                    children: "4스테이지 지정곡 - 클릭하여 검색"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 2081,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SongInputField, {
                                                                    value: data.rounds[3].stage4DesignatedSong || "",
                                                                    placeholder: "4스테이지 지정곡",
                                                                    onClick: ()=>openSongSearch(3, "stage4DesignatedSong"),
                                                                    onClear: ()=>clearSong(3, "stage4DesignatedSong")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 2082,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 2080,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2070,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2066,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "border-blue-500/30 bg-blue-500/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-lg text-blue-400",
                                                        children: "사전 입력"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 2094,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2093,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-4",
                                                    children: [
                                                        1,
                                                        2
                                                    ].map((teamIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 p-3 bg-muted/30 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "팀 ",
                                                                        data[`team${teamIdx}`].name || `팀${teamIdx}`
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 2099,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            className: "text-xs",
                                                                            children: "출전 선수"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 2102,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                            value: teamIdx === 1 ? data.rounds[3].team1Player || "" : data.rounds[3].team2Player || "",
                                                                            onValueChange: (value)=>updateRound(3, teamIdx === 1 ? "team1Player" : "team2Player", value),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                                                    className: "h-8 text-sm",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                                                        placeholder: "선수 선택"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                        lineNumber: 2110,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 2109,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                                                    children: data[`team${teamIdx}`].players.filter(Boolean).map((player, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                                            value: player,
                                                                                            children: player
                                                                                        }, idx, false, {
                                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                            lineNumber: 2114,
                                                                                            columnNumber: 31
                                                                                        }, this))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 2112,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 2103,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 2101,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            className: "text-xs",
                                                                            children: "선곡 (2곡) - 클릭하여 검색"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 2123,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "space-y-1",
                                                                            children: [
                                                                                0,
                                                                                1
                                                                            ].map((songIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SongInputField, {
                                                                                    value: data.rounds[3][`team${teamIdx}Songs2`]?.[songIdx] || "",
                                                                                    placeholder: `곡 ${songIdx + 1} 클릭하여 검색`,
                                                                                    onClick: ()=>openSongSearch(3, `team${teamIdx}Songs2`, songIdx),
                                                                                    onClear: ()=>clearSong(3, `team${teamIdx}Songs2`, songIdx)
                                                                                }, songIdx, false, {
                                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                                    lineNumber: 2126,
                                                                                    columnNumber: 29
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 2124,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 2122,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, teamIdx, true, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 2098,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2096,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2092,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "border-orange-500/30 bg-orange-500/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-lg text-orange-400",
                                                        children: "경기 진행 중"
                                                    }, void 0, false, {
                                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                        lineNumber: 2145,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "space-y-4",
                                                    children: [
                                                        1,
                                                        2
                                                    ].map((teamIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 p-3 bg-muted/30 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-medium",
                                                                    children: [
                                                                        "팀 ",
                                                                        data[`team${teamIdx}`].name || `팀${teamIdx}`
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 2150,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                            className: "text-xs",
                                                                            children: "밴할 곡 (상대 팀 선곡에서 선택)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 2153,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BanSelectDropdown, {
                                                                            value: teamIdx === 1 ? data.rounds[3].team1BannedSong4 || "" : data.rounds[3].team2BannedSong4 || "",
                                                                            songs: getOpponentSongs(data.rounds[3], teamIdx, 3),
                                                                            onChange: (value)=>updateRound(3, teamIdx === 1 ? "team1BannedSong4" : "team2BannedSong4", value === "none" ? "" : value),
                                                                            placeholder: "밴할 곡 선택"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                            lineNumber: 2154,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                                    lineNumber: 2152,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, teamIdx, true, {
                                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                            lineNumber: 2149,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2147,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 2039,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            className: "w-full bg-transparent",
                                            onClick: ()=>generateSongListImage(3),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                    className: "h-4 w-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2179,
                                                    columnNumber: 17
                                                }, this),
                                                "선곡 목록 이미지 생성"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                            title: "녹화 시작 안내",
                                            script: generateRecordingStartScript(3),
                                            id: "r4-rec-start"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                            title: "엔트리 공개",
                                            script: generateEntryScript(3),
                                            id: "r4-entry"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                            title: "아레나 입장 안내",
                                            script: generateArenaEntryScript(3),
                                            id: "r4-arena"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2185,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptCard, {
                                            title: "녹화 종료 안내",
                                            script: generateRecordingEndScript(3),
                                            id: "r4-rec-end"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                            lineNumber: 2186,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 2177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 2038,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 2037,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                        value: "common",
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "경기 사전 안내"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                        lineNumber: 2195,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 2194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                className: "text-sm whitespace-pre-wrap p-4 bg-muted rounded-lg",
                                                children: `# 경기 사전 안내
* 원활한 경기 진행을 위하여 경기 시작 전 15분까지 사전 녹화 준비를 완료해주세요.
* 경기를 진행하기 전/후로 녹화 시작과 종료를 안내드릴 예정입니다.
* 모든 행동은 스태프의 지시에 맞춰서 진행해주시기 바랍니다.
  * 코인 투입, 아레나 진입, 선곡 등
* 사용하시는 기체에 타건음 마이크가 있는 경우 타건음 마이크 소리를 음소거해주세요.
## 실제 대회 경기중이 아닌경우, 지속적으로 디스코드를 확인하여 주시기 바랍니다!`
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 2199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                className: "absolute top-2 right-2",
                                                onClick: ()=>copyToClipboard(`# 경기 사전 안내
* 원활한 경기 진행을 위하여 경기 시작 전 15분까지 사전 녹화 준비를 완료해주세요.
* 경기를 진행하기 전/후로 녹화 시작과 종료를 안내드릴 예정입니다.
* 모든 행동은 스태프의 지시에 맞춰서 진행해주시기 바랍니다.
  * 코인 투입, 아레나 진입, 선곡 등
* 사용하시는 기체에 타건음 마이크가 있는 경우 타건음 마이크 소리를 음소거해주세요.
## 실제 대회 경기중이 아닌경우, 지속적으로 디스코드를 확인하여 주시기 바랍니다!`, "common-pre"),
                                                children: copiedId === "common-pre" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-4 w-4 text-green-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2224,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                    lineNumber: 2226,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                                lineNumber: 2206,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                        lineNumber: 2198,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                                    lineNumber: 2197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                            lineNumber: 2193,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                        lineNumber: 2192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
                lineNumber: 1494,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/components/tournament-script-manager.tsx",
        lineNumber: 1354,
        columnNumber: 5
    }, this);
}
_s(TournamentScriptManager, "FOmaLa2sKnIFEWBVN242kGgPoI8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
    ];
});
_c1 = TournamentScriptManager;
var _c, _c1;
__turbopack_context__.k.register(_c, "SongInputField");
__turbopack_context__.k.register(_c1, "TournamentScriptManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/theme-song-lottery/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$theme$2d$song$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/theme-song-picker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$random$2d$chart$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/random-chart-picker.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$megamix$2d$browser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/megamix-browser.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$tournament$2d$script$2d$manager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/tournament-script-manager.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/theme-song-lottery/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/shuffle.js [app-client] (ecmascript) <export default as Shuffle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3X3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareText$3e$__ = __turbopack_context__.i("[project]/theme-song-lottery/node_modules/lucide-react/dist/esm/icons/message-square-text.js [app-client] (ecmascript) <export default as MessageSquareText>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Home() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("menu");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: [
            mode === "menu" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold tracking-tight",
                            children: "SDVX Chart Picker"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground text-lg",
                            children: "원하는 모드를 선택하세요"
                        }, void 0, false, {
                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "h-40 flex flex-col items-center justify-center gap-4 text-lg hover:bg-primary hover:text-primary-foreground transition-all bg-transparent",
                                    onClick: ()=>setMode("random"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shuffle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shuffle$3e$__["Shuffle"], {
                                            className: "h-12 w-12"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Random Chart Picker"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: "레벨/버전 필터로 랜덤 추첨"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/app/page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "h-40 flex flex-col items-center justify-center gap-4 text-lg hover:bg-primary hover:text-primary-foreground transition-all bg-transparent",
                                    onClick: ()=>setMode("theme"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                            className: "h-12 w-12"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "테마별 곡 추첨"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: "테마 파일로 맞춤 추첨"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/app/page.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "h-40 flex flex-col items-center justify-center gap-4 text-lg hover:bg-primary hover:text-primary-foreground transition-all bg-transparent",
                                    onClick: ()=>setMode("megamix"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3X3$3e$__["Grid3X3"], {
                                            className: "h-12 w-12"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "Megamix 채보 열람"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: "17+ 고레벨 채보 브라우저"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/app/page.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "h-40 flex flex-col items-center justify-center gap-4 text-lg hover:bg-primary hover:text-primary-foreground transition-all bg-transparent",
                                    onClick: ()=>setMode("tournament"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareText$3e$__["MessageSquareText"], {
                                            className: "h-12 w-12"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold",
                                            children: "대회 멘트 관리"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-muted-foreground",
                                            children: "경기 진행 멘트 정리"
                                        }, void 0, false, {
                                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/theme-song-lottery/app/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/theme-song-lottery/app/page.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/theme-song-lottery/app/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            mode === "random" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        className: "mb-6",
                        onClick: ()=>setMode("menu"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-4 w-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            "메인으로 돌아가기"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-8 text-center",
                        children: "Random Chart Picker"
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/app/page.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$random$2d$chart$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RandomChartPicker"], {}, void 0, false, {
                        fileName: "[project]/theme-song-lottery/app/page.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/app/page.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            mode === "theme" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            onClick: ()=>setMode("menu"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/app/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                "메인으로 돌아가기"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/app/page.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$theme$2d$song$2d$picker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeSongPicker"], {}, void 0, false, {
                        fileName: "[project]/theme-song-lottery/app/page.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/app/page.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            mode === "megamix" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 pt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                onClick: ()=>setMode("menu"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/theme-song-lottery/app/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    "메인으로 돌아가기"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/theme-song-lottery/app/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold mt-2",
                                children: "Megamix 채보 열람"
                            }, void 0, false, {
                                fileName: "[project]/theme-song-lottery/app/page.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/theme-song-lottery/app/page.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$megamix$2d$browser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MegamixBrowser"], {}, void 0, false, {
                        fileName: "[project]/theme-song-lottery/app/page.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/app/page.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this),
            mode === "tournament" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 pt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            onClick: ()=>setMode("menu"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/theme-song-lottery/app/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                "메인으로 돌아가기"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/theme-song-lottery/app/page.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/theme-song-lottery/app/page.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$theme$2d$song$2d$lottery$2f$components$2f$tournament$2d$script$2d$manager$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TournamentScriptManager"], {}, void 0, false, {
                        fileName: "[project]/theme-song-lottery/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/theme-song-lottery/app/page.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/theme-song-lottery/app/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Home, "f+AyJoU68yCoZ4pf3stmtw5Iv3E=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=theme-song-lottery_393b738b._.js.map