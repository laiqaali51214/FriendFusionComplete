import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.log("No auth header or header does not start with 'Bearer '");
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = authHeader.split(" ")[1];

  // console.log("Extracted token:", token);

  try {
    const userToken = JWT.verify(token, process.env.JWT_SECRET_KEY);

    // console.log("Decoded user token:", userToken);

    if (!userToken.userId) {
      console.log("Token does not contain userId");
      return res.status(401).json({ message: "Authentication failed" });
    }

    req.body.user = {
      userId: userToken.userId,
    };

    next();
  } catch (error) {
    console.log("JWT verification failed:", error);
    return res.status(401).json({ message: "Authentication failed" });
  }
};

export default userAuth;
