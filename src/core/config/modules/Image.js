/**
* THIS FILE IS AUTOMATICALLY GENERATED BY src/core/config/scripts/generateConfig.js
*
* @author n1474335 [n1474335@gmail.com]
* @copyright Crown Copyright 2023
* @license Apache-2.0
*/
const AddTextToImage = require("../../operations/AddTextToImage.js")
const BlurImage = require("../../operations/BlurImage.js")
const ContainImage = require("../../operations/ContainImage.js")
const ConvertImageFormat = require("../../operations/ConvertImageFormat.js")
const CoverImage = require("../../operations/CoverImage.js")
const CropImage = require("../../operations/CropImage.js")
const DitherImage = require("../../operations/DitherImage.js")
const ExtractEXIF = require("../../operations/ExtractEXIF.js")
const ExtractLSB = require("../../operations/ExtractLSB.js")
const ExtractRGBA = require("../../operations/ExtractRGBA.js")
const FlipImage = require("../../operations/FlipImage.js")
const GenerateImage = require("../../operations/GenerateImage.js")
const GenerateQRCode = require("../../operations/GenerateQRCode.js")
const ImageBrightnessContrast = require("../../operations/ImageBrightnessContrast.js")
const ImageFilter = require("../../operations/ImageFilter.js")
const ImageHueSaturationLightness = require("../../operations/ImageHueSaturationLightness.js")
const ImageOpacity = require("../../operations/ImageOpacity.js")
const InvertImage = require("../../operations/InvertImage.js")
const NormaliseImage = require("../../operations/NormaliseImage.js")
const ParseQRCode = require("../../operations/ParseQRCode.js")
const RandomizeColourPalette = require("../../operations/RandomizeColourPalette.js")
const RemoveEXIF = require("../../operations/RemoveEXIF.js")
const RenderImage = require("../../operations/RenderImage.js")
const ResizeImage = require("../../operations/ResizeImage.js")
const RotateImage = require("../../operations/RotateImage.js")
const SharpenImage = require("../../operations/SharpenImage.js")
const SplitColourChannels = require("../../operations/SplitColourChannels.js")
const ViewBitPlane = require("../../operations/ViewBitPlane.js")

const OpModules = typeof self === "undefined" ? {} : self.OpModules || {};

OpModules.Image = {
    "Add Text To Image": AddTextToImage,
    "Blur Image": BlurImage,
    "Contain Image": ContainImage,
    "Convert Image Format": ConvertImageFormat,
    "Cover Image": CoverImage,
    "Crop Image": CropImage,
    "Dither Image": DitherImage,
    "Extract EXIF": ExtractEXIF,
    "Extract LSB": ExtractLSB,
    "Extract RGBA": ExtractRGBA,
    "Flip Image": FlipImage,
    "Generate Image": GenerateImage,
    "Generate QR Code": GenerateQRCode,
    "Image Brightness / Contrast": ImageBrightnessContrast,
    "Image Filter": ImageFilter,
    "Image Hue/Saturation/Lightness": ImageHueSaturationLightness,
    "Image Opacity": ImageOpacity,
    "Invert Image": InvertImage,
    "Normalise Image": NormaliseImage,
    "Parse QR Code": ParseQRCode,
    "Randomize Colour Palette": RandomizeColourPalette,
    "Remove EXIF": RemoveEXIF,
    "Render Image": RenderImage,
    "Resize Image": ResizeImage,
    "Rotate Image": RotateImage,
    "Sharpen Image": SharpenImage,
    "Split Colour Channels": SplitColourChannels,
    "View Bit Plane": ViewBitPlane,
};

module.exports = OpModules;
