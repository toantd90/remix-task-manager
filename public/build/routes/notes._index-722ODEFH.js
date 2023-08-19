import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Link
} from "/build/_shared/chunk-BGGL6UYV.js";
import {
  createHotContext
} from "/build/_shared/chunk-GVUO4VGY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/notes._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/notes._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes._index.tsx"
  );
  import.meta.hot.lastModified = "1688822968000";
}
function NoteIndexPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
    "No note selected. Select a note on the left, or",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "new", className: "text-blue-500 underline", children: "create a new note." }, void 0, false, {
      fileName: "app/routes/notes._index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes._index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = NoteIndexPage;
var _c;
$RefreshReg$(_c, "NoteIndexPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NoteIndexPage as default
};
//# sourceMappingURL=/build/routes/notes._index-722ODEFH.js.map
