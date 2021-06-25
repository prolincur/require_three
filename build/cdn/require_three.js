define('REQUIRE_THREE', ['https://cdn.rawgit.com/mrdoob/three.js/r129/build/three.min.js'], function(THREE) {
    window.THREE = THREE;
    return THREE;
});
require.config({
    "paths": {
        "REQUIRE_THREE/3DMLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/3DMLoader",
        "REQUIRE_THREE/3MFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/3MFLoader",
        "REQUIRE_THREE/AMFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/AMFLoader",
        "REQUIRE_THREE/BVHLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/BVHLoader",
        "REQUIRE_THREE/BasisTextureLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/BasisTextureLoader",
        "REQUIRE_THREE/ColladaLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/ColladaLoader",
        "REQUIRE_THREE/DDSLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/DDSLoader",
        "REQUIRE_THREE/DRACOLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/DRACOLoader",
        "REQUIRE_THREE/EXRLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/EXRLoader",
        "REQUIRE_THREE/FBXLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/FBXLoader",
        "REQUIRE_THREE/GCodeLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/GCodeLoader",
        "REQUIRE_THREE/GLTFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/GLTFLoader",
        "REQUIRE_THREE/HDRCubeTextureLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/HDRCubeTextureLoader",
        "REQUIRE_THREE/KMZLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/KMZLoader",
        "REQUIRE_THREE/KTXLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/KTXLoader",
        "REQUIRE_THREE/LDrawLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/LDrawLoader",
        "REQUIRE_THREE/LUT3dlLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/LUT3dlLoader",
        "REQUIRE_THREE/LUTCubeLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/LUTCubeLoader",
        "REQUIRE_THREE/LWOLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/LWOLoader",
        "REQUIRE_THREE/LottieLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/LottieLoader",
        "REQUIRE_THREE/MD2Loader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/MD2Loader",
        "REQUIRE_THREE/MDDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/MDDLoader",
        "REQUIRE_THREE/MMDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/MMDLoader",
        "REQUIRE_THREE/MTLLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/MTLLoader",
        "REQUIRE_THREE/NRRDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/NRRDLoader",
        "REQUIRE_THREE/OBJLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/OBJLoader",
        "REQUIRE_THREE/PCDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/PCDLoader",
        "REQUIRE_THREE/PDBLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/PDBLoader",
        "REQUIRE_THREE/PLYLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/PLYLoader",
        "REQUIRE_THREE/PRWMLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/PRWMLoader",
        "REQUIRE_THREE/PVRLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/PVRLoader",
        "REQUIRE_THREE/RGBELoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/RGBELoader",
        "REQUIRE_THREE/RGBMLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/RGBMLoader",
        "REQUIRE_THREE/STLLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/STLLoader",
        "REQUIRE_THREE/SVGLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/SVGLoader",
        "REQUIRE_THREE/TDSLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/TDSLoader",
        "REQUIRE_THREE/TGALoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/TGALoader",
        "REQUIRE_THREE/TTFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/TTFLoader",
        "REQUIRE_THREE/TiltLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/TiltLoader",
        "REQUIRE_THREE/VOXLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/VOXLoader",
        "REQUIRE_THREE/VRMLLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/VRMLLoader",
        "REQUIRE_THREE/VRMLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/VRMLoader",
        "REQUIRE_THREE/VTKLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/VTKLoader",
        "REQUIRE_THREE/XYZLoader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/loaders/XYZLoader",
        "REQUIRE_THREE/ColladaExporter": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/exporters/ColladaExporter",
        "REQUIRE_THREE/DRACOExporter": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/exporters/DRACOExporter",
        "REQUIRE_THREE/GLTFExporter": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/exporters/GLTFExporter",
        "REQUIRE_THREE/MMDExporter": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/exporters/MMDExporter",
        "REQUIRE_THREE/OBJExporter": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/exporters/OBJExporter",
        "REQUIRE_THREE/PLYExporter": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/exporters/PLYExporter",
        "REQUIRE_THREE/STLExporter": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/exporters/STLExporter",
        "REQUIRE_THREE/USDZExporter": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/exporters/USDZExporter",
        "REQUIRE_THREE/DeviceOrientationControls": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/controls/DeviceOrientationControls",
        "REQUIRE_THREE/DragControls": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/controls/DragControls",
        "REQUIRE_THREE/FirstPersonControls": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/controls/FirstPersonControls",
        "REQUIRE_THREE/FlyControls": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/controls/FlyControls",
        "REQUIRE_THREE/OrbitControls": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/controls/OrbitControls",
        "REQUIRE_THREE/PointerLockControls": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/controls/PointerLockControls",
        "REQUIRE_THREE/TrackballControls": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/controls/TrackballControls",
        "REQUIRE_THREE/TransformControls": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/controls/TransformControls",
        "REQUIRE_THREE/CSS2DRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/renderers/CSS2DRenderer",
        "REQUIRE_THREE/CSS3DRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/renderers/CSS3DRenderer",
        "REQUIRE_THREE/Projector": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/renderers/Projector",
        "REQUIRE_THREE/SVGRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/renderers/SVGRenderer",
        "REQUIRE_THREE/ACESFilmicToneMappingShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/ACESFilmicToneMappingShader",
        "REQUIRE_THREE/AfterimageShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/AfterimageShader",
        "REQUIRE_THREE/BasicShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/BasicShader",
        "REQUIRE_THREE/BleachBypassShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/BleachBypassShader",
        "REQUIRE_THREE/BlendShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/BlendShader",
        "REQUIRE_THREE/BokehShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/BokehShader",
        "REQUIRE_THREE/BokehShader2": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/BokehShader2",
        "REQUIRE_THREE/BrightnessContrastShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/BrightnessContrastShader",
        "REQUIRE_THREE/ColorCorrectionShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/ColorCorrectionShader",
        "REQUIRE_THREE/ColorifyShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/ColorifyShader",
        "REQUIRE_THREE/ConvolutionShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/ConvolutionShader",
        "REQUIRE_THREE/CopyShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/CopyShader",
        "REQUIRE_THREE/DOFMipMapShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/DOFMipMapShader",
        "REQUIRE_THREE/DepthLimitedBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/DepthLimitedBlurShader",
        "REQUIRE_THREE/DigitalGlitch": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/DigitalGlitch",
        "REQUIRE_THREE/DotScreenShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/DotScreenShader",
        "REQUIRE_THREE/FXAAShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/FXAAShader",
        "REQUIRE_THREE/FilmShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/FilmShader",
        "REQUIRE_THREE/FocusShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/FocusShader",
        "REQUIRE_THREE/FreiChenShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/FreiChenShader",
        "REQUIRE_THREE/FresnelShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/FresnelShader",
        "REQUIRE_THREE/GammaCorrectionShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/GammaCorrectionShader",
        "REQUIRE_THREE/GodRaysShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/GodRaysShader",
        "REQUIRE_THREE/HalftoneShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/HalftoneShader",
        "REQUIRE_THREE/HorizontalBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/HorizontalBlurShader",
        "REQUIRE_THREE/HorizontalTiltShiftShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/HorizontalTiltShiftShader",
        "REQUIRE_THREE/HueSaturationShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/HueSaturationShader",
        "REQUIRE_THREE/KaleidoShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/KaleidoShader",
        "REQUIRE_THREE/LuminosityHighPassShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/LuminosityHighPassShader",
        "REQUIRE_THREE/LuminosityShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/LuminosityShader",
        "REQUIRE_THREE/MirrorShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/MirrorShader",
        "REQUIRE_THREE/NormalMapShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/NormalMapShader",
        "REQUIRE_THREE/ParallaxShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/ParallaxShader",
        "REQUIRE_THREE/PixelShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/PixelShader",
        "REQUIRE_THREE/RGBShiftShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/RGBShiftShader",
        "REQUIRE_THREE/SAOShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/SAOShader",
        "REQUIRE_THREE/SMAAShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/SMAAShader",
        "REQUIRE_THREE/SSAOShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/SSAOShader",
        "REQUIRE_THREE/SSRShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/SSRShader",
        "REQUIRE_THREE/SSRrShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/SSRrShader",
        "REQUIRE_THREE/SepiaShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/SepiaShader",
        "REQUIRE_THREE/SobelOperatorShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/SobelOperatorShader",
        "REQUIRE_THREE/SubsurfaceScatteringShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/SubsurfaceScatteringShader",
        "REQUIRE_THREE/TechnicolorShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/TechnicolorShader",
        "REQUIRE_THREE/ToneMapShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/ToneMapShader",
        "REQUIRE_THREE/ToonShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/ToonShader",
        "REQUIRE_THREE/TriangleBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/TriangleBlurShader",
        "REQUIRE_THREE/UnpackDepthRGBAShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/UnpackDepthRGBAShader",
        "REQUIRE_THREE/VerticalBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/VerticalBlurShader",
        "REQUIRE_THREE/VerticalTiltShiftShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/VerticalTiltShiftShader",
        "REQUIRE_THREE/VignetteShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/VignetteShader",
        "REQUIRE_THREE/VolumeShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/VolumeShader",
        "REQUIRE_THREE/WaterRefractionShader": "https://cdn.rawgit.com/mrdoob/three.js/r129/examples/js/shaders/WaterRefractionShader"
    },
    "shim": {
        "REQUIRE_THREE/3DMLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/3MFLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/AMFLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/BVHLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/BasisTextureLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/ColladaLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/DDSLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/DRACOLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/EXRLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/FBXLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/GCodeLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/GLTFLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/HDRCubeTextureLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/KMZLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/KTXLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/LDrawLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/LUT3dlLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/LUTCubeLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/LWOLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/LottieLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/MD2Loader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/MDDLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/MMDLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/MTLLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/NRRDLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/OBJLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/PCDLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/PDBLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/PLYLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/PRWMLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/PVRLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/RGBELoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/RGBMLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/STLLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/SVGLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/TDSLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/TGALoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/TTFLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/TiltLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/VOXLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/VRMLLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/VRMLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/VTKLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/XYZLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/ColladaExporter": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/DRACOExporter": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/GLTFExporter": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/MMDExporter": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/OBJExporter": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/PLYExporter": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/STLExporter": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/USDZExporter": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/DeviceOrientationControls": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/DragControls": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/FirstPersonControls": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/FlyControls": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/OrbitControls": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/PointerLockControls": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/TrackballControls": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/TransformControls": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/CSS2DRenderer": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/CSS3DRenderer": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/Projector": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/SVGRenderer": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/ACESFilmicToneMappingShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/AfterimageShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/BasicShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/BleachBypassShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/BlendShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/BokehShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/BokehShader2": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/BrightnessContrastShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/ColorCorrectionShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/ColorifyShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/ConvolutionShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/CopyShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/DOFMipMapShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/DepthLimitedBlurShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/DigitalGlitch": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/DotScreenShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/FXAAShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/FilmShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/FocusShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/FreiChenShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/FresnelShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/GammaCorrectionShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/GodRaysShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/HalftoneShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/HorizontalBlurShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/HorizontalTiltShiftShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/HueSaturationShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/KaleidoShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/LuminosityHighPassShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/LuminosityShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/MirrorShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/NormalMapShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/ParallaxShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/PixelShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/RGBShiftShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/SAOShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/SMAAShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/SSAOShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/SSRShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/SSRrShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/SepiaShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/SobelOperatorShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/SubsurfaceScatteringShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/TechnicolorShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/ToneMapShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/ToonShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/TriangleBlurShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/UnpackDepthRGBAShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/VerticalBlurShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/VerticalTiltShiftShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/VignetteShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/VolumeShader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/WaterRefractionShader": {
            "deps": ["REQUIRE_THREE"]
        }
    }
});