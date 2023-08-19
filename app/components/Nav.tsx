function Nav() {
  return (
    <nav className={"mt-8"}>
      <h3
        className={
          "text-left text-xs font-semibold uppercase tracking-wide text-gray-600"
        }
      >
        Issues
      </h3>
      <div className={"-mx-3 mt-2"}>
        <a
          href="#"
          className={
            "flex items-center justify-between rounded-lg bg-gray-200 px-3 py-2"
          }
        >
          <span className={"text-sm font-medium text-gray-900 "}>All</span>
          <span className={"text-xs font-semibold text-gray-700 "}>36</span>
        </a>
        <a
          href="#"
          className={"flex items-center justify-between rounded-lg px-3 py-2"}
        >
          <span className={"text-sm font-medium text-gray-700 "}>
            Assigned to me
          </span>
          <span className={"text-xs font-semibold text-gray-700 "}>2</span>
        </a>
        <a
          href="#"
          className={"flex items-center justify-between rounded-lg px-3 py-2"}
        >
          <span className={"text-sm font-medium text-gray-700 "}>
            Created by me
          </span>
          <span className={"text-xs font-semibold text-gray-700 "}>2</span>
        </a>
        <a
          href="#"
          className={"flex items-center justify-between rounded-lg px-3 py-2"}
        >
          <span className={"text-sm font-medium text-gray-700 "}>Archived</span>
          <span className={"text-xs font-semibold text-gray-700 "}>1</span>
        </a>
      </div>
      <h3
        className={
          "mt-8 text-left text-xs font-semibold uppercase tracking-wide text-gray-600"
        }
      >
        Tags
      </h3>
      <div className={"-mx-3 mt-2"}>
        <a
          href="#"
          className={"flex items-center justify-between rounded-lg px-3 py-2"}
        >
          <span className={"text-sm font-medium text-gray-700 "}>Bug</span>
        </a>
        <a
          href="#"
          className={"flex items-center justify-between rounded-lg px-3 py-2"}
        >
          <span className={"text-sm font-medium text-gray-700 "}>
            Feature Request
          </span>
        </a>
        <a
          href="#"
          className={"flex items-center justify-between rounded-lg px-3 py-2"}
        >
          <span className={"text-sm font-medium text-gray-700 "}>
            Marketing
          </span>
        </a>
        <a
          href="#"
          className={"flex items-center justify-between rounded-lg px-3 py-2"}
        >
          <span className={"text-sm font-medium text-gray-700 "}>v2.0</span>
        </a>
        <a
          href="#"
          className={"flex items-center justify-between rounded-lg px-3 py-2"}
        >
          <span className={"text-sm font-medium text-gray-700 "}>
            Enhancement
          </span>
        </a>
        <a
          href="#"
          className={"flex items-center justify-between rounded-lg px-3 py-2"}
        >
          <span className={"text-sm font-medium text-gray-700 "}>Design</span>
        </a>
      </div>
      <button
        className={
          " -ml-1 mt-4 flex items-center text-sm font-medium text-gray-600"
        }
      >
        <svg
          className={"h-5 w-5 text-gray-500"}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M12 7v10m5-5H7"
          />
        </svg>
        <span className={"ml-1"}>New Project</span>
      </button>
    </nav>
  );
}

export default Nav;
