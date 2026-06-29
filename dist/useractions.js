import { userModel } from "./db";
export const adduser = async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const newuser = await userModel.create({
            name,
            email,
            age,
        });
        return res.status(200).json({ message: "user created succesfully" });
    }
    catch (error) {
        return res.status(401).json({ message: "error in creating the user" });
    }
};
