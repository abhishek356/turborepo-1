"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var material_1 = require("@mui/material");
var react_2 = require("react");
var SignUp = function (props) {
    var _a = (0, react_2.useState)(""), email = _a[0], setEmail = _a[1];
    var _b = (0, react_2.useState)(""), password = _b[0], setPassword = _b[1];
    return (<>
    
    <div>
            <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
                <material_1.Typography variant={"h6"}>
                Welcome to Coursera. Sign up below
                </material_1.Typography>
            </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <material_1.Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
                <material_1.TextField onChange={function (event) {
            setEmail(event.target.value);
        }} fullWidth={true} label="Email" variant="outlined"/>
                <br /><br />
                <material_1.TextField onChange={function (e) {
            setPassword(e.target.value);
        }} fullWidth={true} label="Password" variant="outlined" type={"password"}/>
                <br /><br />

                <material_1.Button size={"large"} variant="contained" onClick={function () {
            props.onClick(email, password);
        }}> Signup</material_1.Button>
            </material_1.Card>
        </div>
    </div>

    </>);
};
exports.default = SignUp;
