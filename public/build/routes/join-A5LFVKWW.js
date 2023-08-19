import {
  require_user
} from "/build/_shared/chunk-G3ACJGOK.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-2LTVY2GU.js";
import "/build/_shared/chunk-TYFBQLB4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  Form,
  Link,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-BGGL6UYV.js";
import {
  createHotContext
} from "/build/_shared/chunk-GVUO4VGY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/join.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());
var import_user = __toESM(require_user());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/join.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/join.tsx"
  );
  import.meta.hot.lastModified = "1688822968000";
}
var meta = () => [{
  title: "Sign Up"
}];
function Join() {
  var _a, _b, _c2, _d, _e;
  _s();
  const [searchParams] = useSearchParams();
  const redirectTo = (_a = searchParams.get("redirectTo")) != null ? _a : void 0;
  const actionData = useActionData();
  const emailRef = (0, import_react2.useRef)(null);
  const passwordRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var _a2, _b2, _c3, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c3 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c3.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-col justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-md px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email address" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 112,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: emailRef, id: "email", required: true, autoFocus: true, name: "email", type: "email", autoComplete: "email", "aria-invalid": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) ? true : void 0, "aria-describedby": "email-error", className: "w-full rounded border border-gray-500 px-2 py-1 text-lg" }, void 0, false, {
          fileName: "app/routes/join.tsx",
          lineNumber: 116,
          columnNumber: 15
        }, this),
        ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.email) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "email-error", children: actionData.errors.email }, void 0, false, {
          fileName: "app/routes/join.tsx",
          lineNumber: 117,
          columnNumber: 44
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/join.tsx",
        lineNumber: 115,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700", children: "Password" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", ref: passwordRef, name: "password", type: "password", autoComplete: "new-password", "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) ? true : void 0, "aria-describedby": "password-error", className: "w-full rounded border border-gray-500 px-2 py-1 text-lg" }, void 0, false, {
          fileName: "app/routes/join.tsx",
          lineNumber: 128,
          columnNumber: 15
        }, this),
        ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.password) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-1 text-red-700", id: "password-error", children: actionData.errors.password }, void 0, false, {
          fileName: "app/routes/join.tsx",
          lineNumber: 129,
          columnNumber: 47
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/join.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join.tsx",
      lineNumber: 123,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: redirectTo }, void 0, false, {
      fileName: "app/routes/join.tsx",
      lineNumber: 135,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400", children: "Create Account" }, void 0, false, {
      fileName: "app/routes/join.tsx",
      lineNumber: 136,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-sm text-gray-500", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "text-blue-500 underline", to: {
        pathname: "/login",
        search: searchParams.toString()
      }, children: "Log in" }, void 0, false, {
        fileName: "app/routes/join.tsx",
        lineNumber: 142,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/join.tsx",
      lineNumber: 140,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/join.tsx",
      lineNumber: 139,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/join.tsx",
    lineNumber: 110,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/join.tsx",
    lineNumber: 109,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/join.tsx",
    lineNumber: 108,
    columnNumber: 10
  }, this);
}
_s(Join, "RidIhLwFrqAsyRbtfUp5EYY5fes=", false, function() {
  return [useSearchParams, useActionData];
});
_c = Join;
var _c;
$RefreshReg$(_c, "Join");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Join as default,
  meta
};
//# sourceMappingURL=/build/routes/join-A5LFVKWW.js.map
