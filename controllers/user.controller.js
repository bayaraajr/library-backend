const User = require("../models/User");

exports.registerUser = async (req, res) => {
    try {
        // console.log(req);
        await User.create(req.body);

        return {
            message: "Successfully registered a user",
        };
    } catch (error) {
        return {
            error: "Error",
        };
    }
};
