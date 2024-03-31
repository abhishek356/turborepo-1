"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploader = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
var FileUpload_1 = require("@mui/icons-material/FileUpload");
var CloudUpload_1 = require("@mui/icons-material/CloudUpload");
var styles_1 = require("@mui/material/styles");
var FileUploader = function (props) {
    var VisuallyHiddenInput = (0, styles_1.styled)('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (<>
    
        <div>
            <material_1.Card variant={'outlined'} sx={{
            width: '25%',
            height: '65%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        }}>

            <material_1.CardContent>
                <material_1.CardHeader>
                    <material_1.Typography variant='h4'>Upload your file</material_1.Typography>
                </material_1.CardHeader>
                    <FileUpload_1.default />
                <material_1.Box sx={{
            position: 'relative'
        }}>
                <material_1.Button component='label' role='undefined' variant='contained' tabIndex={-1} startIcon={<CloudUpload_1.default />} onClick={function () {
            props.onClick();
        }} sx={{
            position: "absolute",
            top: '100%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
        }}>
                            Upload file
                            <VisuallyHiddenInput type='file'/>
                    </material_1.Button>
                </material_1.Box>
                   
            </material_1.CardContent>
            </material_1.Card>
        </div>
        </>);
};
exports.FileUploader = FileUploader;
exports.default = exports.FileUploader;
