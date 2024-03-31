"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = exports.Admin = exports.User = void 0;
var mongoose_1 = require("mongoose");
// Define mongoose schemas
var userSchema = new mongoose_1.default.Schema({
    username: { type: String },
    password: String,
    purchasedCourses: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Course' }]
});
var adminSchema = new mongoose_1.default.Schema({
    username: String,
    password: String
});
var courseSchema = new mongoose_1.default.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});
exports.User = mongoose_1.default.model('User', userSchema);
exports.Admin = mongoose_1.default.model('Admin', adminSchema);
exports.Course = mongoose_1.default.model('Course', courseSchema);
// module.exports = {
//   User,
//   Admin,
//   Course
// }
