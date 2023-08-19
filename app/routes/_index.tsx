import type { V2_MetaFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

import { Nav, Card, Profile } from "~/components";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

type Task = {
  id: number;
  title: string;
  description: string;
  label: string;
  status: string;
  dueDate: string;
};

export async function loader({ request }: LoaderArgs) {
  const response = await fetch("https://example.com/tasks");
  const data = (await response.json()) as { tasks: Array<Task> };

  return json(data);
}

export default function Index() {
  const user = useOptionalUser();
  const { tasks } = useLoaderData<typeof loader>();

  return (
    <div className="App">
      <div className={"flex h-screen"}>
        <div className={"w-64 overflow-auto border-r bg-gray-100 px-8 py-4"}>
          <img
            className={"h-8 w-8"}
            src="https://i.pravatar.cc/100"
            alt="logo"
          />
          <Nav />
        </div>
        <div className={"flex min-w-0 flex-1 flex-col bg-white"}>
          <div className={"flex-shrink-0 border-b-2 border-gray-200"}>
            <header className={"px-6"}>
              <div
                className={
                  "flex items-center justify-between border-b border-gray-200 py-2"
                }
              >
                {/* right */}
                <div className={"flex-1"}>
                  <div className={"relative w-64"}>
                    <span
                      className={
                        "absolute inset-y-0 left-0 flex items-center pl-3"
                      }
                    >
                      <svg
                        className={"h-6 w-6 text-gray-600"}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </span>
                    <input
                      className={
                        "block w-full rounded-lg border border-gray-400 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-600"
                      }
                      placeholder="Search"
                    />
                  </div>
                </div>
                {/* right end */}
                <div className={"flex items-center"}>
                  <button className={""}>
                    <svg
                      className="h-5 w-5 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        stroke="currentColor"
                        d="M468 392h-20c-10.384 0-18.709-3.609-24.745-10.728-7.363-8.684-11.255-22.386-11.255-39.626V204c0-78.818-59.543-144.777-136-154.699V0h-40v49.301C159.543 59.223 100 125.181 100 204v144c0 14.175-3.734 25.775-10.799 33.546C82.984 388.385 74.27 392 64 392H44v56h161.413A51.888 51.888 0 00204 460c0 28.673 23.327 52 52 52s52-23.327 52-52c0-4.131-.499-8.145-1.413-12H468v-56zm-212 80c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm-136.792-64C132.813 392.784 140 372.052 140 348V204c0-63.067 51.263-115.072 114.302-115.987h3.396C320.737 88.928 372 140.933 372 204v137.646c0 26.84 7.174 49.488 20.745 65.494.245.289.492.576.741.86H119.208z"
                      />
                    </svg>
                  </button>
                  <Profile />
                </div>
              </div>

              <div className={"flex items-center justify-between py-2"}>
                <div className={"flex"}>
                  <h2
                    className={
                      "text-2xl font-semibold leading-tight text-gray-900"
                    }
                  >
                    All Issues
                  </h2>
                  <div className={"ml-6 flex"}>
                    <span
                      className={"-ml-2 rounded-full border-2 border-white"}
                    >
                      <img
                        className={"h-6 w-6 rounded-full object-cover"}
                        src="https://i.pravatar.cc/100"
                        alt="avatar"
                      />
                    </span>
                  </div>
                </div>
                <div className={"flex"}>
                  <span
                    className={"inline-flex rounded border bg-gray-200 p-1"}
                  >
                    <button className={"rounded px-2 py-1"}>
                      <svg
                        className={" h-6 w-6 text-gray-600 "}
                        height="512"
                        viewBox="0 -53 384 384"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="currentColor"
                          d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"
                        />
                      </svg>
                    </button>
                    <button className={"rounded bg-white px-2 py-1 shadow"}>
                      <svg
                        className={" h-6 w-6 text-gray-600 "}
                        height="512"
                        viewBox="0 -53 384 384"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke="currentColor"
                          d="M368 154.668H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 32H16C7.168 32 0 24.832 0 16S7.168 0 16 0h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0M368 277.332H16c-8.832 0-16-7.168-16-16s7.168-16 16-16h352c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0"
                        />
                      </svg>
                    </button>
                  </span>
                  <button
                    className={
                      "ml-5 flex items-center rounded bg-gray-800 py-1 pl-2 pr-4 text-sm font-medium text-white hover:bg-gray-700"
                    }
                  >
                    <svg className={"h-5 w-5"} viewBox="0 0 24 24" fill="none">
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        d="M12 7v10m5-5H7"
                      />
                    </svg>
                    <span className={"ml-1"}>New Issue</span>
                  </button>
                </div>
              </div>
            </header>
          </div>

          <div className={"flex-1 overflow-auto"}>
            <main className={"inline-flex p-3"}>
              <div className={"w-80 flex-shrink-0 rounded bg-gray-100 p-3"}>
                <h3 className={"text-sm font-medium text-gray-900"}>To Do</h3>
                <ul className={"mt-2"}>
                  {tasks
                    .filter((task) => task.status === "To Do")
                    .map(({ id, title, dueDate, label }) => (
                      <Card
                        key={id}
                        title={title}
                        dueDate="Sep 14"
                        label={label}
                      />
                    ))}
                </ul>
              </div>

              <div
                className={"ml-3 w-80 flex-shrink-0 rounded bg-gray-100 p-3"}
              >
                <h3 className={"text-sm font-medium text-gray-900"}>
                  In Progress
                </h3>
                <ul className={"mt-2"}>
                  {tasks
                    .filter((task) => task.status === "In Progress")
                    .map(({ id, title, dueDate, label }) => (
                      <Card
                        key={id}
                        title={title}
                        dueDate="Sep 14"
                        label={label}
                      />
                    ))}
                </ul>
              </div>

              <div
                className={"ml-3 w-80 flex-shrink-0 rounded bg-gray-100 p-3"}
              >
                <h3 className={"text-sm font-medium text-gray-900"}>
                  In Review
                </h3>
                <ul className={"mt-2"}>
                  {tasks
                    .filter((task) => task.status === "Review")
                    .map(({ id, title, dueDate, label }) => (
                      <Card
                        key={id}
                        title={title}
                        dueDate="Sep 14"
                        label={label}
                      />
                    ))}
                </ul>
              </div>

              <div
                className={"ml-3 w-80 flex-shrink-0 rounded bg-gray-100 p-3"}
              >
                <h3 className={"text-sm font-medium text-gray-900"}>Done</h3>
                <ul className={"mt-2"}>
                  {tasks
                    .filter((task) => task.status === "Done")
                    .map(({ id, title, dueDate, label }) => (
                      <Card
                        key={id}
                        title={title}
                        dueDate="Sep 14"
                        label={label}
                      />
                    ))}
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
