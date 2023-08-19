const { rest } = require("msw");
const { setupServer } = require("msw/node");

const tasks = [
  {
    id: 1,
    title: "Implement login functionality",
    description: "Add login functionality to the application",
    label: "Feature Request",
    status: "To Do",
    dueDate: "2023-09-05",
  },
  {
    id: 2,
    title: "Fix bug in user registration",
    description: "Investigate and fix the bug affecting user registration",
    label: "Issue",
    status: "In Progress",
    dueDate: "2023-09-10",
  },
  {
    id: 3,
    title: "Refactor code for performance improvement",
    description: "Optimize code for better performance and maintainability",
    label: "Improvement",
    status: "Review",
    dueDate: "2023-09-15",
  },
  {
    id: 4,
    title: "Implement data caching",
    description: "Integrate data caching mechanism for faster data retrieval",
    label: "Feature Request",
    status: "To Do",
    dueDate: "2023-09-07",
  },
  {
    id: 5,
    title: "Enhance UI/UX for dashboard",
    description:
      "Improve the user interface and user experience of the dashboard",
    label: "Improvement",
    status: "In Progress",
    dueDate: "2023-09-12",
  },
  {
    id: 6,
    title: "Fix compatibility issue with Safari browser",
    description:
      "Identify and resolve compatibility issues with Safari browser",
    label: "Issue",
    status: "In Progress",
    dueDate: "2023-09-09",
  },
  {
    id: 7,
    title: "Write unit tests for API endpoints",
    description:
      "Create unit tests to ensure the proper functioning of API endpoints",
    label: "Improvement",
    status: "To Do",
    dueDate: "2023-09-06",
  },
  {
    id: 8,
    title: "Implement password reset functionality",
    description: "Allow users to reset their passwords via email verification",
    label: "Feature Request",
    status: "Done",
    dueDate: "2023-09-03",
  },
  {
    id: 9,
    title: "Improve error handling mechanism",
    description: "Enhance error handling to provide better user feedback",
    label: "Improvement",
    status: "To Do",
    dueDate: "2023-09-08",
  },
  {
    id: 10,
    title: "Fix formatting issue in report generation",
    description:
      "Investigate and resolve formatting problems in the generated reports",
    label: "Issue",
    status: "Review",
    dueDate: "2023-09-11",
  },
  {
    id: 11,
    title: "Implement search functionality",
    description:
      "Add search functionality to allow users to search for specific items",
    label: "Feature Request",
    status: "To Do",
    dueDate: "2023-09-17",
  },
  {
    id: 12,
    title: "Fix responsive design issue on mobile devices",
    description:
      "Resolve layout problems and improve user experience on mobile devices",
    label: "Issue",
    status: "In Progress",
    dueDate: "2023-09-20",
  },
  {
    id: 13,
    title: "Add pagination to the results page",
    description:
      "Implement pagination to display search results in smaller chunks",
    label: "Feature Request",
    status: "To Do",
    dueDate: "2023-09-18",
  },
  {
    id: 14,
    title: "Improve accessibility for visually impaired users",
    description:
      "Enhance the application to support better accessibility for visually impaired users",
    label: "Improvement",
    status: "Review",
    dueDate: "2023-09-22",
  },
  {
    id: 15,
    title: "Fix broken link on the homepage",
    description:
      "Identify and repair the broken link leading to an incorrect page",
    label: "Issue",
    status: "In Progress",
    dueDate: "2023-09-13",
  },
  {
    id: 16,
    title: "Optimize database queries",
    description:
      "Improve the efficiency of database queries for faster data retrieval",
    label: "Improvement",
    status: "To Do",
    dueDate: "2023-09-16",
  },
  {
    id: 17,
    title: "Write user documentation",
    description: "Create comprehensive documentation for end-users",
    label: "Task",
    status: "To Do",
    dueDate: "2023-09-14",
  },
  {
    id: 18,
    title: "Implement file upload functionality",
    description: "Allow users to upload files and store them securely",
    label: "Feature Request",
    status: "In Progress",
    dueDate: "2023-09-19",
  },
  {
    id: 19,
    title: "Fix broken images in the gallery",
    description:
      "Identify and fix broken images in the gallery section of the application",
    label: "Issue",
    status: "Review",
    dueDate: "2023-09-21",
  },
  {
    id: 20,
    title: "Implement multi-language support",
    description: "Add support for multiple languages in the application",
    label: "Feature Request",
    status: "To Do",
    dueDate: "2023-09-23",
  },
];

// put one-off handlers that don't really need an entire file to themselves here
const miscHandlers = [
  rest.get(`${process.env.REMIX_DEV_HTTP_ORIGIN}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${process.env.REMIX_DEV_HTTP_ORIGIN}/ping`, (req) =>
    req.passthrough()
  ),
  rest.get("https://example.com/tasks", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        tasks,
      })
    );
  }),
];

const server = setupServer(...miscHandlers);

server.listen({ onUnhandledRequest: "bypass", port: 4000 });
console.info("🔶 Mock server running");

process.once("SIGINT", () => server.close());
process.once("SIGTERM", () => server.close());
