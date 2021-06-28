const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require('jsonwebtoken');

const UserSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }
);

UserSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
});


UserSchema.methods.generateAuthToken = function () {
    // user found by email
    const user = this;
    /** JWT SIGN
     * PAYLOAD = user id
     * SECRET KEY = "FwB43-2-110%"
     * toString: parse the entire result to a string
     * toHexString: convert the user id in a hex string
     */
    const token = jwt.sign({ _id: user._id.toHexString() }, "FwB43-2-110%").toString();
    return token;
}
/** GET PUBLIC FIELDS */
UserSchema.methods.getPublicFields = function () {
    var returnObject = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        _id: this._id
    }
    return returnObject;
}
/** CHECK PASSWORD */
UserSchema.methods.checkPassword = function (password) {
    const user = this;
    if (user.password === password) {
        return true;
    } else {
        return false;
    }
}

module.exports = mongoose.model("User", UserSchema);
