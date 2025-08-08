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
        password:{
            type: String,
            required: true,
            minlength:8
        },
        workinghours:{
            start:{
                type: String,
                required: true,
                default: 09:00
            },
            end:{
                type: String,
                required:true,
                default:17:00
            }
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        refreshToken: String,
        deviceInfo: {
            deviceId: String,
            deviceType: String,
            lastKnownLocation: {
            latitude: Number,
            longitude: Number,
            timestamp: Date,
            }
        }
    }, { timestamps: true }
);

export const user =mongoose.model("User",userSchema);
