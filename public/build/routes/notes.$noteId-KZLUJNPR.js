import {
  require_note
} from "/build/_shared/chunk-2LJDV4EM.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-2LTVY2GU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError
} from "/build/_shared/chunk-BGGL6UYV.js";
import {
  createHotContext
} from "/build/_shared/chunk-GVUO4VGY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/notes.$noteId.tsx
var import_node = __toESM(require_node());
var import_note = __toESM(require_note());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/notes.$noteId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/notes.$noteId.tsx"
  );
  import.meta.hot.lastModified = "1688822968000";
}
function NoteDetailsPage() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl font-bold", children: data.note.title }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "py-6", children: data.note.body }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", { className: "my-4" }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400", children: "Delete" }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(NoteDetailsPage, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = NoteDetailsPage;
function ErrorBoundary() {
  _s2();
  const error = useRouteError();
  if (error instanceof Error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      "An unexpected error occurred: ",
      error.message
    ] }, void 0, true, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 81,
      columnNumber: 12
    }, this);
  }
  if (!isRouteErrorResponse(error)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Unknown Error" }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 84,
      columnNumber: 12
    }, this);
  }
  if (error.status === 404) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Note not found" }, void 0, false, {
      fileName: "app/routes/notes.$noteId.tsx",
      lineNumber: 87,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    "An unexpected error occurred: ",
    error.statusText
  ] }, void 0, true, {
    fileName: "app/routes/notes.$noteId.tsx",
    lineNumber: 89,
    columnNumber: 10
  }, this);
}
_s2(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c2 = ErrorBoundary;
var _c;
var _c2;
$RefreshReg$(_c, "NoteDetailsPage");
$RefreshReg$(_c2, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  NoteDetailsPage as default
};
//# sourceMappingURL=/build/routes/notes.$noteId-KZLUJNPR.js.map
