exports.saveMessage = (req, res) => {
    const {user , message} = req.body;

    if(!user || !message){
        return res.status(400).json({error: "User and message are required"});
    }

    res.status(200).json({
        status: "Message saved",
        data: {
            user,
            message
        }
    });
    console.log("Message saved successfully");
}