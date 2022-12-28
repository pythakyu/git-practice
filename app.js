app.post("/users/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await myDataSource.query(
    `
    SELECT
      users.id
    FROM
      users
    WHERE
      users.email = ?
   `,
    [email]
  );

  if (!user) {
    res.json({ message: "SIGNUP_REQUIRED" });
  }

  return res.json({ userId: user.id });
});
