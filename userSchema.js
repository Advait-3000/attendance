import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        employeeId: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
            enum: ["CMPN", "INFT", "ENCS", "EXTC", "ELEC"],
        },
        contact:{
        type:String,
        required:true
        }
    }, { timestamps: true }
);

export const user =mongoose.model("User",userSchema);
