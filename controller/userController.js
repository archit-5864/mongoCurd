const { generateToken } = require('../jwt/generateToken');
const user = require('../model/userModel')

module.exports = {
    createUser: async (req, res) => {
        try {
            const data = req.body;
            const newUser = await user.create(data);
            let token;
            if (newUser) {
                const latestUser = await user.findById(newUser._id);
                token = await generateToken(newUser._id);
                // console.log(token, "tokenjuuy");
                await latestUser.updateOne({
                    loginTime: token.time,
                    token: token.token,
                });
            }
            let obj = {
                name: newUser.name,
                _id: newUser._id,
                email: newUser.email,
                token: token ? token.token : null,
                loginTime: token ? token.time : null,
            };
            return res.json({
                message: "Success",
                status: 200,
                body: obj,
            });
        } catch (error) {
            console.error(error);
            return res.json({
                message: "Failed",
                status: 500,
            });
        }
    },
}



