import jwt from "jsonwebtoken";

const users = [{ username: "min", password: "123456" }];

// login
function login(req, res) {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });
  }

  if (user.password !== password) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });
  }

  const supersetToken = generateSupersetToken();

  res.json({ success: true, supersetToken });
}

function generateSupersetToken() {
  const SECRET_KEY = process.env.GUEST_TOKEN_JWT_SECRET;
  const ALGORITHM = "HS256";
  const EXP_SECONDS = 300;

  const iat = parseFloat((Date.now() / 1000).toFixed(6));
  const exp = iat + EXP_SECONDS;

  const payload = {
    user: { username: "admin", first_name: "Superset", last_name: "Admin" },
    resources: [
      { type: "dashboard", id: "2b3cfadc-61ed-40a6-9afe-a2281fbec5e6" },
    ],
    rls_rules: [],
    iat: iat,
    exp: exp,
    aud: "superset",
    type: "guest",
  };

  const token = jwt.sign(payload, SECRET_KEY, { algorithm: ALGORITHM });
  return token;
}

export { login };
