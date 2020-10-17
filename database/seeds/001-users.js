exports.seed = function (knex) {
  const users = [
    {
      username: "HailOmninyte1",
      password: "password8"
    },
    {
      username: "HailOmninyte2",
      password: "password9"
    }
  ]

  return knex("users").insert(users)
}