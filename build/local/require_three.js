define('GLOBAL_THREE', ['../build/local/three/build/three.min.js'], function(THREE) {
    window.THREE = THREE;
    return THREE;
});
require.config({
    "paths": {
        "3MFLoader": "../build/local/three/examples/js/loaders/3MFLoader",
        "AMFLoader": "../build/local/three/examples/js/loaders/AMFLoader",
        "AssimpLoader": "../build/local/three/examples/js/loaders/AssimpLoader",
        "BVHLoader": "../build/local/three/examples/js/loaders/BVHLoader",
        "BasisTextureLoader": "../build/local/three/examples/js/loaders/BasisTextureLoader",
        "ColladaLoader": "../build/local/three/examples/js/loaders/ColladaLoader",
        "DDSLoader": "../build/local/three/examples/js/loaders/DDSLoader",
        "DRACOLoader": "../build/local/three/examples/js/loaders/DRACOLoader",
        "EXRLoader": "../build/local/three/examples/js/loaders/EXRLoader",
        "FBXLoader": "../build/local/three/examples/js/loaders/FBXLoader",
        "GCodeLoader": "../build/local/three/examples/js/loaders/GCodeLoader",
        "GLTFLoader": "../build/local/three/examples/js/loaders/GLTFLoader",
        "HDRCubeTextureLoader": "../build/local/three/examples/js/loaders/HDRCubeTextureLoader",
        "KMZLoader": "../build/local/three/examples/js/loaders/KMZLoader",
        "KTXLoader": "../build/local/three/examples/js/loaders/KTXLoader",
        "LDrawLoader": "../build/local/three/examples/js/loaders/LDrawLoader",
        "MD2Loader": "../build/local/three/examples/js/loaders/MD2Loader",
        "MMDLoader": "../build/local/three/examples/js/loaders/MMDLoader",
        "MTLLoader": "../build/local/three/examples/js/loaders/MTLLoader",
        "NRRDLoader": "../build/local/three/examples/js/loaders/NRRDLoader",
        "OBJLoader": "../build/local/three/examples/js/loaders/OBJLoader",
        "PCDLoader": "../build/local/three/examples/js/loaders/PCDLoader",
        "PDBLoader": "../build/local/three/examples/js/loaders/PDBLoader",
        "PLYLoader": "../build/local/three/examples/js/loaders/PLYLoader",
        "PRWMLoader": "../build/local/three/examples/js/loaders/PRWMLoader",
        "PVRLoader": "../build/local/three/examples/js/loaders/PVRLoader",
        "RGBELoader": "../build/local/three/examples/js/loaders/RGBELoader",
        "STLLoader": "../build/local/three/examples/js/loaders/STLLoader",
        "SVGLoader": "../build/local/three/examples/js/loaders/SVGLoader",
        "TDSLoader": "../build/local/three/examples/js/loaders/TDSLoader",
        "TGALoader": "../build/local/three/examples/js/loaders/TGALoader",
        "TTFLoader": "../build/local/three/examples/js/loaders/TTFLoader",
        "VRMLLoader": "../build/local/three/examples/js/loaders/VRMLLoader",
        "VRMLoader": "../build/local/three/examples/js/loaders/VRMLoader",
        "VTKLoader": "../build/local/three/examples/js/loaders/VTKLoader",
        "XLoader": "../build/local/three/examples/js/loaders/XLoader",
        "DeviceOrientationControls": "../build/local/three/examples/js/controls/DeviceOrientationControls",
        "DragControls": "../build/local/three/examples/js/controls/DragControls",
        "FirstPersonControls": "../build/local/three/examples/js/controls/FirstPersonControls",
        "FlyControls": "../build/local/three/examples/js/controls/FlyControls",
        "OrbitControls": "../build/local/three/examples/js/controls/OrbitControls",
        "PointerLockControls": "../build/local/three/examples/js/controls/PointerLockControls",
        "TrackballControls": "../build/local/three/examples/js/controls/TrackballControls",
        "TransformControls": "../build/local/three/examples/js/controls/TransformControls",
        "CSS2DRenderer": "../build/local/three/examples/js/renderers/CSS2DRenderer",
        "CSS3DRenderer": "../build/local/three/examples/js/renderers/CSS3DRenderer",
        "Projector": "../build/local/three/examples/js/renderers/Projector",
        "SVGRenderer": "../build/local/three/examples/js/renderers/SVGRenderer",
        "ACESFilmicToneMappingShader": "../build/local/three/examples/js/shaders/ACESFilmicToneMappingShader",
        "AfterimageShader": "../build/local/three/examples/js/shaders/AfterimageShader",
        "BasicShader": "../build/local/three/examples/js/shaders/BasicShader",
        "BleachBypassShader": "../build/local/three/examples/js/shaders/BleachBypassShader",
        "BlendShader": "../build/local/three/examples/js/shaders/BlendShader",
        "BokehShader": "../build/local/three/examples/js/shaders/BokehShader",
        "BokehShader2": "../build/local/three/examples/js/shaders/BokehShader2",
        "BrightnessContrastShader": "../build/local/three/examples/js/shaders/BrightnessContrastShader",
        "ColorCorrectionShader": "../build/local/three/examples/js/shaders/ColorCorrectionShader",
        "ColorifyShader": "../build/local/three/examples/js/shaders/ColorifyShader",
        "ConvolutionShader": "../build/local/three/examples/js/shaders/ConvolutionShader",
        "CopyShader": "../build/local/three/examples/js/shaders/CopyShader",
        "DOFMipMapShader": "../build/local/three/examples/js/shaders/DOFMipMapShader",
        "DepthLimitedBlurShader": "../build/local/three/examples/js/shaders/DepthLimitedBlurShader",
        "DigitalGlitch": "../build/local/three/examples/js/shaders/DigitalGlitch",
        "DotScreenShader": "../build/local/three/examples/js/shaders/DotScreenShader",
        "FXAAShader": "../build/local/three/examples/js/shaders/FXAAShader",
        "FilmShader": "../build/local/three/examples/js/shaders/FilmShader",
        "FocusShader": "../build/local/three/examples/js/shaders/FocusShader",
        "FreiChenShader": "../build/local/three/examples/js/shaders/FreiChenShader",
        "FresnelShader": "../build/local/three/examples/js/shaders/FresnelShader",
        "GammaCorrectionShader": "../build/local/three/examples/js/shaders/GammaCorrectionShader",
        "GodRaysShader": "../build/local/three/examples/js/shaders/GodRaysShader",
        "HalftoneShader": "../build/local/three/examples/js/shaders/HalftoneShader",
        "HorizontalBlurShader": "../build/local/three/examples/js/shaders/HorizontalBlurShader",
        "HorizontalTiltShiftShader": "../build/local/three/examples/js/shaders/HorizontalTiltShiftShader",
        "HueSaturationShader": "../build/local/three/examples/js/shaders/HueSaturationShader",
        "KaleidoShader": "../build/local/three/examples/js/shaders/KaleidoShader",
        "LuminosityHighPassShader": "../build/local/three/examples/js/shaders/LuminosityHighPassShader",
        "LuminosityShader": "../build/local/three/examples/js/shaders/LuminosityShader",
        "MirrorShader": "../build/local/three/examples/js/shaders/MirrorShader",
        "NormalMapShader": "../build/local/three/examples/js/shaders/NormalMapShader",
        "OceanShaders": "../build/local/three/examples/js/shaders/OceanShaders",
        "ParallaxShader": "../build/local/three/examples/js/shaders/ParallaxShader",
        "PixelShader": "../build/local/three/examples/js/shaders/PixelShader",
        "RGBShiftShader": "../build/local/three/examples/js/shaders/RGBShiftShader",
        "SAOShader": "../build/local/three/examples/js/shaders/SAOShader",
        "SMAAShader": "../build/local/three/examples/js/shaders/SMAAShader",
        "SSAOShader": "../build/local/three/examples/js/shaders/SSAOShader",
        "SepiaShader": "../build/local/three/examples/js/shaders/SepiaShader",
        "SobelOperatorShader": "../build/local/three/examples/js/shaders/SobelOperatorShader",
        "SubsurfaceScatteringShader": "../build/local/three/examples/js/shaders/SubsurfaceScatteringShader",
        "TechnicolorShader": "../build/local/three/examples/js/shaders/TechnicolorShader",
        "ToneMapShader": "../build/local/three/examples/js/shaders/ToneMapShader",
        "ToonShader": "../build/local/three/examples/js/shaders/ToonShader",
        "TriangleBlurShader": "../build/local/three/examples/js/shaders/TriangleBlurShader",
        "UnpackDepthRGBAShader": "../build/local/three/examples/js/shaders/UnpackDepthRGBAShader",
        "VerticalBlurShader": "../build/local/three/examples/js/shaders/VerticalBlurShader",
        "VerticalTiltShiftShader": "../build/local/three/examples/js/shaders/VerticalTiltShiftShader",
        "VignetteShader": "../build/local/three/examples/js/shaders/VignetteShader",
        "VolumeShader": "../build/local/three/examples/js/shaders/VolumeShader",
        "WaterRefractionShader": "../build/local/three/examples/js/shaders/WaterRefractionShader"
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