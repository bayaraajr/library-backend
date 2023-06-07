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
exports.updateUser = async (req, res) => {
    try {
        await User.findOneAndUpdate(req.body.email, req.body);
        
        return{
            message: "Successfully changed a user"
        }
    } catch (error) {
        return {
            error: "Error"
        }
    }
}
