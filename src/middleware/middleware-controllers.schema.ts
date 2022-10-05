import mongoose from 'mongoose';
import { Access_Permissions, Status_MiddlewareControllers } from "./middleware-controllers.enum";
import base64url from "base64url";
import crypto  from "crypto";

export const middlewareControllersSchema = new mongoose.Schema(
  {
    path: {
        type : String,
        unique : true,
        require: true
    },
    status: {
        type : String,
        enum : Status_MiddlewareControllers,
        default : "online",
    },
    token:{
        type : String,
        default : base64url(crypto.randomBytes(8))
    },
    createAt: {
        type: Date,
        default:  Date.now()
    },
    permissions: {
        type: Access_Permissions,
        default: Access_Permissions.Commoner
    }
  },
  {
    versionKey: false,
  },
);
