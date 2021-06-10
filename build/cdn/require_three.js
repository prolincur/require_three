define('GLOBAL_THREE', ['https://cdn.rawgit.com/mrdoob/three.js/r124/build/three.min.js'], function(THREE) {
    window.THREE = THREE;
    return THREE;
});
require.config({
    "paths": {
        "3MFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/3MFLoader",
        "AMFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/AMFLoader",
        "AssimpLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/AssimpLoader",
        "BVHLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/BVHLoader",
        "BasisTextureLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/BasisTextureLoader",
        "ColladaLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/ColladaLoader",
        "DDSLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/DDSLoader",
        "DRACOLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/DRACOLoader",
        "EXRLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/EXRLoader",
        "FBXLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/FBXLoader",
        "GCodeLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/GCodeLoader",
        "GLTFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/GLTFLoader",
        "HDRCubeTextureLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/HDRCubeTextureLoader",
        "KMZLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/KMZLoader",
        "KTXLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/KTXLoader",
        "LDrawLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/LDrawLoader",
        "MD2Loader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/MD2Loader",
        "MMDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/MMDLoader",
        "MTLLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/MTLLoader",
        "NRRDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/NRRDLoader",
        "OBJLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/OBJLoader",
        "PCDLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/PCDLoader",
        "PDBLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/PDBLoader",
        "PLYLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/PLYLoader",
        "PRWMLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/PRWMLoader",
        "PVRLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/PVRLoader",
        "RGBELoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/RGBELoader",
        "STLLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/STLLoader",
        "SVGLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/SVGLoader",
        "TDSLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/TDSLoader",
        "TGALoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/TGALoader",
        "TTFLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/TTFLoader",
        "VRMLLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/VRMLLoader",
        "VRMLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/VRMLoader",
        "VTKLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/VTKLoader",
        "XLoader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/loaders/XLoader",
        "DeviceOrientationControls": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/controls/DeviceOrientationControls",
        "DragControls": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/controls/DragControls",
        "FirstPersonControls": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/controls/FirstPersonControls",
        "FlyControls": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/controls/FlyControls",
        "OrbitControls": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/controls/OrbitControls",
        "PointerLockControls": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/controls/PointerLockControls",
        "TrackballControls": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/controls/TrackballControls",
        "TransformControls": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/controls/TransformControls",
        "CSS2DRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/renderers/CSS2DRenderer",
        "CSS3DRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/renderers/CSS3DRenderer",
        "Projector": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/renderers/Projector",
        "SVGRenderer": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/renderers/SVGRenderer",
        "ACESFilmicToneMappingShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/ACESFilmicToneMappingShader",
        "AfterimageShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/AfterimageShader",
        "BasicShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/BasicShader",
        "BleachBypassShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/BleachBypassShader",
        "BlendShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/BlendShader",
        "BokehShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/BokehShader",
        "BokehShader2": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/BokehShader2",
        "BrightnessContrastShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/BrightnessContrastShader",
        "ColorCorrectionShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/ColorCorrectionShader",
        "ColorifyShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/ColorifyShader",
        "ConvolutionShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/ConvolutionShader",
        "CopyShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/CopyShader",
        "DOFMipMapShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/DOFMipMapShader",
        "DepthLimitedBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/DepthLimitedBlurShader",
        "DigitalGlitch": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/DigitalGlitch",
        "DotScreenShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/DotScreenShader",
        "FXAAShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/FXAAShader",
        "FilmShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/FilmShader",
        "FocusShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/FocusShader",
        "FreiChenShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/FreiChenShader",
        "FresnelShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/FresnelShader",
        "GammaCorrectionShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/GammaCorrectionShader",
        "GodRaysShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/GodRaysShader",
        "HalftoneShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/HalftoneShader",
        "HorizontalBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/HorizontalBlurShader",
        "HorizontalTiltShiftShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/HorizontalTiltShiftShader",
        "HueSaturationShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/HueSaturationShader",
        "KaleidoShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/KaleidoShader",
        "LuminosityHighPassShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/LuminosityHighPassShader",
        "LuminosityShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/LuminosityShader",
        "MirrorShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/MirrorShader",
        "NormalMapShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/NormalMapShader",
        "OceanShaders": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/OceanShaders",
        "ParallaxShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/ParallaxShader",
        "PixelShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/PixelShader",
        "RGBShiftShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/RGBShiftShader",
        "SAOShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/SAOShader",
        "SMAAShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/SMAAShader",
        "SSAOShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/SSAOShader",
        "SepiaShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/SepiaShader",
        "SobelOperatorShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/SobelOperatorShader",
        "SubsurfaceScatteringShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/SubsurfaceScatteringShader",
        "TechnicolorShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/TechnicolorShader",
        "ToneMapShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/ToneMapShader",
        "ToonShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/ToonShader",
        "TriangleBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/TriangleBlurShader",
        "UnpackDepthRGBAShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/UnpackDepthRGBAShader",
        "VerticalBlurShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/VerticalBlurShader",
        "VerticalTiltShiftShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/VerticalTiltShiftShader",
        "VignetteShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/VignetteShader",
        "VolumeShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/VolumeShader",
        "WaterRefractionShader": "https://cdn.rawgit.com/mrdoob/three.js/r124/examples/js/shaders/WaterRefractionShader"
    },
    "shim": {
        "3MFLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "AMFLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "AssimpLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "BVHLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "BasisTextureLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "ColladaLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "DDSLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "DRACOLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "EXRLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "FBXLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "GCodeLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "GLTFLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "HDRCubeTextureLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "KMZLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "KTXLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "LDrawLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "MD2Loader": {
            "deps": ["GLOBAL_THREE"]
        },
        "MMDLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "MTLLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "NRRDLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "OBJLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "PCDLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "PDBLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "PLYLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "PRWMLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "PVRLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "RGBELoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "STLLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "SVGLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "TDSLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "TGALoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "TTFLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "VRMLLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "VRMLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "VTKLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "XLoader": {
            "deps": ["GLOBAL_THREE"]
        },
        "DeviceOrientationControls": {
            "deps": ["GLOBAL_THREE"]
        },
        "DragControls": {
            "deps": ["GLOBAL_THREE"]
        },
        "FirstPersonControls": {
            "deps": ["GLOBAL_THREE"]
        },
        "FlyControls": {
            "deps": ["GLOBAL_THREE"]
        },
        "OrbitControls": {
            "deps": ["GLOBAL_THREE"]
        },
        "PointerLockControls": {
            "deps": ["GLOBAL_THREE"]
        },
        "TrackballControls": {
            "deps": ["GLOBAL_THREE"]
        },
        "TransformControls": {
            "deps": ["GLOBAL_THREE"]
        },
        "CSS2DRenderer": {
            "deps": ["GLOBAL_THREE"]
        },
        "CSS3DRenderer": {
            "deps": ["GLOBAL_THREE"]
        },
        "Projector": {
            "deps": ["GLOBAL_THREE"]
        },
        "SVGRenderer": {
            "deps": ["GLOBAL_THREE"]
        },
        "ACESFilmicToneMappingShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "AfterimageShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "BasicShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "BleachBypassShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "BlendShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "BokehShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "BokehShader2": {
            "deps": ["GLOBAL_THREE"]
        },
        "BrightnessContrastShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "ColorCorrectionShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "ColorifyShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "ConvolutionShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "CopyShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "DOFMipMapShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "DepthLimitedBlurShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "DigitalGlitch": {
            "deps": ["GLOBAL_THREE"]
        },
        "DotScreenShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "FXAAShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "FilmShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "FocusShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "FreiChenShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "FresnelShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "GammaCorrectionShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "GodRaysShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "HalftoneShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "HorizontalBlurShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "HorizontalTiltShiftShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "HueSaturationShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "KaleidoShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "LuminosityHighPassShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "LuminosityShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "MirrorShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "NormalMapShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "OceanShaders": {
            "deps": ["GLOBAL_THREE"]
        },
        "ParallaxShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "PixelShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "RGBShiftShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "SAOShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "SMAAShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "SSAOShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "SepiaShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "SobelOperatorShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "SubsurfaceScatteringShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "TechnicolorShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "ToneMapShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "ToonShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "TriangleBlurShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "UnpackDepthRGBAShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "VerticalBlurShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "VerticalTiltShiftShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "VignetteShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "VolumeShader": {
            "deps": ["GLOBAL_THREE"]
        },
        "WaterRefractionShader": {
            "deps": ["GLOBAL_THREE"]
        }
    }
});