exports.ping = (req, res ) => {
    return res.status(200).json({ message: "Pong from controller" });
}