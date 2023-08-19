const { rest } = require("msw");
const { setupServer } = require("msw/node");

// put one-off handlers that don't really need an entire file to themselves here
const miscHandlers = [
  rest.get(`${process.env.REMIX_DEV_HTTP_ORIGIN}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${process.env.REMIX_DEV_HTTP_ORIGIN}/ping`, (req) =>
    req.passthrough()
  ),
  // rest.get(`${process.env.REMIX_DEV_HTTP_ORIGIN}/tasks`, (req, res, ctx) => {
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       tasks: [
  //         {
  //           name: "Task 1",
  //         },
  //         {
  //           name: "Task 2",
  //         },
  //       ],
  //     })
  //   );
  // }),
];

const server = setupServer(...miscHandlers);

server.listen({ onUnhandledRequest: "bypass", port: 4000 });
console.info("🔶 Mock server running");

process.once("SIGINT", () => server.close());
process.once("SIGTERM", () => server.close());
