const userModel = require("../models/userModel");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email: email });
      if (!user) {
        return res.status(200).json({
          hasError: true,
          msg: "Invalid emial or password",
        });
      }
      if (password !== user.password) {
        {
          return res.status(200).json({
            hasError: true,
            msg: "Invalid emial or password",
          });
        }
      }

      user._doc.key = process.env.KEY;

      return res.status(200).json({
        hasError: false,
        msg: "Login successful",
        data: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(200).json({
        hasError: true,
        msg: error,
      });
    }
  },
};
