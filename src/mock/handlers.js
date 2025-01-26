import { rest } from "msw";

export const handlers = [
  rest.post("/api/v1/login", (req, res, ctx) => {
    const { email, password } = req.body;
    if (email === "test" && password === "password") {
      return res(
        ctx.status(200),
        ctx.json({
          message: "로그인을 성공했습니다",
          id: 1,
          username: "username",
          accessToken: "eyJhbGciOiJIUzI1NiJ9",
          password: password,
        })
      );
    }
    return res(ctx.status(401), ctx.json({ message: "로그인 실패" }));
  }),

  rest.post("/api/v1/join", (req, res, ctx) => {
    const { username, email } = req.body;

    return res(
      ctx.status(201),
      ctx.json({ message: "회원가입 성공", username, email })
    );
  }),
];
