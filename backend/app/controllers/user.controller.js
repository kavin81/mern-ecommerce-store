import { userSchema } from "../models/user.model.js";
import { compare, hash } from "bcrypt";

class userController {
    async signup(data, callback) {
        const new_user = new userSchema({
            email: data.email,
            name: data.name,
            password: await hash(data.password, 10),
        });
        try {
            await new_user.save();

            callback.status(201).json({
                name: new_user.name,
                email: new_user.email,
            });
        } catch (error) {
            callback.status(400).json({ error: error.message });
        }
    }
    async signin(data, callback) {
        try {
            const user = await userSchema.findOne({ email: data.email });
            if (!user) {
                callback.status(400).json({
                    error: "Please check your email and/or password",
                });
            } else {
                const result = await compare(data.password, user.password);
                if (result) {
                    callback.status(200).json({
                        name: user.name,
                        email: user.email,
                    });
                } else {
                    callback.status(400).json({
                        error: "Please check your email and/or password",
                    });
                }
            }
        } catch (error) {
            callback.status(400).json({ error: error.message });
        }
    }
}

export default new userController();
