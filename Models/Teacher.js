const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name": String,
        "id": String,
        "dept": String,
        "sub": String
    }
)
let teachermodel = mongoose.model("teachers", schema);
module.exports = { teachermodel }