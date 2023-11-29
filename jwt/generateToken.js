const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userModel = require("../model/userModel");

dotenv.config();

module.exports = {
    generateToken: async (id) => {
        // console.log(id, "id")
        const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
        const token = jwt.sign({ _id: id }, JWT_SECRET_KEY, {
            // expiresIn: "1d",
        });
        return jwt.verify(token, JWT_SECRET_KEY, async (err, decode) => {
            if (err) throw err;
            try {
                const time = Math.floor(Date.now() / 1000);
                return {
                    token: token,
                    time: time,
                };
            } catch (error) {
                console.error(error);
                throw error;
            }
        });
    },
};
