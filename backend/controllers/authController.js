exports.login = (req, res) => {
    const { email, password } = req.body;
    console.log("Login request received:", req.body);
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    res.status(200).json({ message: "Login successful", token:"mock-jwt-token" });
    console.log("Login response sent");
}