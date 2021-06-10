define('REQUIRE_THREE', ['../build/local/three/build/three.min.js'], function(THREE) {
    window.THREE = THREE;
    return THREE;
});
require.config({
    "paths": {
        "REQUIRE_THREE/3MFLoader": "../build/local/three/examples/js/loaders/3MFLoader",
        "REQUIRE_THREE/AMFLoader": "../build/local/three/examples/js/loaders/AMFLoader",
        "REQUIRE_THREE/AssimpLoader": "../build/local/three/examples/js/loaders/AssimpLoader",
        "REQUIRE_THREE/BVHLoader": "../build/local/three/examples/js/loaders/BVHLoader",
        "REQUIRE_THREE/BasisTextureLoader": "../build/local/three/examples/js/loaders/BasisTextureLoader",
        "REQUIRE_THREE/ColladaLoader": "../build/local/three/examples/js/loaders/ColladaLoader",
        "REQUIRE_THREE/DDSLoader": "../build/local/three/examples/js/loaders/DDSLoader",
        "REQUIRE_THREE/DRACOLoader": "../build/local/three/examples/js/loaders/DRACOLoader",
        "REQUIRE_THREE/EXRLoader": "../build/local/three/examples/js/loaders/EXRLoader",
        "REQUIRE_THREE/FBXLoader": "../build/local/three/examples/js/loaders/FBXLoader",
        "REQUIRE_THREE/GCodeLoader": "../build/local/three/examples/js/loaders/GCodeLoader",
        "REQUIRE_THREE/GLTFLoader": "../build/local/three/examples/js/loaders/GLTFLoader",
        "REQUIRE_THREE/HDRCubeTextureLoader": "../build/local/three/examples/js/loaders/HDRCubeTextureLoader",
        "REQUIRE_THREE/KMZLoader": "../build/local/three/examples/js/loaders/KMZLoader",
        "REQUIRE_THREE/KTXLoader": "../build/local/three/examples/js/loaders/KTXLoader",
        "REQUIRE_THREE/LDrawLoader": "../build/local/three/examples/js/loaders/LDrawLoader",
        "REQUIRE_THREE/MD2Loader": "../build/local/three/examples/js/loaders/MD2Loader",
        "REQUIRE_THREE/MMDLoader": "../build/local/three/examples/js/loaders/MMDLoader",
        "REQUIRE_THREE/MTLLoader": "../build/local/three/examples/js/loaders/MTLLoader",
        "REQUIRE_THREE/NRRDLoader": "../build/local/three/examples/js/loaders/NRRDLoader",
        "REQUIRE_THREE/OBJLoader": "../build/local/three/examples/js/loaders/OBJLoader",
        "REQUIRE_THREE/PCDLoader": "../build/local/three/examples/js/loaders/PCDLoader",
        "REQUIRE_THREE/PDBLoader": "../build/local/three/examples/js/loaders/PDBLoader",
        "REQUIRE_THREE/PLYLoader": "../build/local/three/examples/js/loaders/PLYLoader",
        "REQUIRE_THREE/PRWMLoader": "../build/local/three/examples/js/loaders/PRWMLoader",
        "REQUIRE_THREE/PVRLoader": "../build/local/three/examples/js/loaders/PVRLoader",
        "REQUIRE_THREE/RGBELoader": "../build/local/three/examples/js/loaders/RGBELoader",
        "REQUIRE_THREE/STLLoader": "../build/local/three/examples/js/loaders/STLLoader",
        "REQUIRE_THREE/SVGLoader": "../build/local/three/examples/js/loaders/SVGLoader",
        "REQUIRE_THREE/TDSLoader": "../build/local/three/examples/js/loaders/TDSLoader",
        "REQUIRE_THREE/TGALoader": "../build/local/three/examples/js/loaders/TGALoader",
        "REQUIRE_THREE/TTFLoader": "../build/local/three/examples/js/loaders/TTFLoader",
        "REQUIRE_THREE/VRMLLoader": "../build/local/three/examples/js/loaders/VRMLLoader",
        "REQUIRE_THREE/VRMLoader": "../build/local/three/examples/js/loaders/VRMLoader",
        "REQUIRE_THREE/VTKLoader": "../build/local/three/examples/js/loaders/VTKLoader",
        "REQUIRE_THREE/XLoader": "../build/local/three/examples/js/loaders/XLoader",
        "REQUIRE_THREE/DeviceOrientationControls": "../build/local/three/examples/js/controls/DeviceOrientationControls",
        "REQUIRE_THREE/DragControls": "../build/local/three/examples/js/controls/DragControls",
        "REQUIRE_THREE/FirstPersonControls": "../build/local/three/examples/js/controls/FirstPersonControls",
        "REQUIRE_THREE/FlyControls": "../build/local/three/examples/js/controls/FlyControls",
        "REQUIRE_THREE/OrbitControls": "../build/local/three/examples/js/controls/OrbitControls",
        "REQUIRE_THREE/PointerLockControls": "../build/local/three/examples/js/controls/PointerLockControls",
        "REQUIRE_THREE/TrackballControls": "../build/local/three/examples/js/controls/TrackballControls",
        "REQUIRE_THREE/TransformControls": "../build/local/three/examples/js/controls/TransformControls",
        "REQUIRE_THREE/CSS2DRenderer": "../build/local/three/examples/js/renderers/CSS2DRenderer",
        "REQUIRE_THREE/CSS3DRenderer": "../build/local/three/examples/js/renderers/CSS3DRenderer",
        "REQUIRE_THREE/Projector": "../build/local/three/examples/js/renderers/Projector",
        "REQUIRE_THREE/SVGRenderer": "../build/local/three/examples/js/renderers/SVGRenderer",
        "REQUIRE_THREE/ACESFilmicToneMappingShader": "../build/local/three/examples/js/shaders/ACESFilmicToneMappingShader",
        "REQUIRE_THREE/AfterimageShader": "../build/local/three/examples/js/shaders/AfterimageShader",
        "REQUIRE_THREE/BasicShader": "../build/local/three/examples/js/shaders/BasicShader",
        "REQUIRE_THREE/BleachBypassShader": "../build/local/three/examples/js/shaders/BleachBypassShader",
        "REQUIRE_THREE/BlendShader": "../build/local/three/examples/js/shaders/BlendShader",
        "REQUIRE_THREE/BokehShader": "../build/local/three/examples/js/shaders/BokehShader",
        "REQUIRE_THREE/BokehShader2": "../build/local/three/examples/js/shaders/BokehShader2",
        "REQUIRE_THREE/BrightnessContrastShader": "../build/local/three/examples/js/shaders/BrightnessContrastShader",
        "REQUIRE_THREE/ColorCorrectionShader": "../build/local/three/examples/js/shaders/ColorCorrectionShader",
        "REQUIRE_THREE/ColorifyShader": "../build/local/three/examples/js/shaders/ColorifyShader",
        "REQUIRE_THREE/ConvolutionShader": "../build/local/three/examples/js/shaders/ConvolutionShader",
        "REQUIRE_THREE/CopyShader": "../build/local/three/examples/js/shaders/CopyShader",
        "REQUIRE_THREE/DOFMipMapShader": "../build/local/three/examples/js/shaders/DOFMipMapShader",
        "REQUIRE_THREE/DepthLimitedBlurShader": "../build/local/three/examples/js/shaders/DepthLimitedBlurShader",
        "REQUIRE_THREE/DigitalGlitch": "../build/local/three/examples/js/shaders/DigitalGlitch",
        "REQUIRE_THREE/DotScreenShader": "../build/local/three/examples/js/shaders/DotScreenShader",
        "REQUIRE_THREE/FXAAShader": "../build/local/three/examples/js/shaders/FXAAShader",
        "REQUIRE_THREE/FilmShader": "../build/local/three/examples/js/shaders/FilmShader",
        "REQUIRE_THREE/FocusShader": "../build/local/three/examples/js/shaders/FocusShader",
        "REQUIRE_THREE/FreiChenShader": "../build/local/three/examples/js/shaders/FreiChenShader",
        "REQUIRE_THREE/FresnelShader": "../build/local/three/examples/js/shaders/FresnelShader",
        "REQUIRE_THREE/GammaCorrectionShader": "../build/local/three/examples/js/shaders/GammaCorrectionShader",
        "REQUIRE_THREE/GodRaysShader": "../build/local/three/examples/js/shaders/GodRaysShader",
        "REQUIRE_THREE/HalftoneShader": "../build/local/three/examples/js/shaders/HalftoneShader",
        "REQUIRE_THREE/HorizontalBlurShader": "../build/local/three/examples/js/shaders/HorizontalBlurShader",
        "REQUIRE_THREE/HorizontalTiltShiftShader": "../build/local/three/examples/js/shaders/HorizontalTiltShiftShader",
        "REQUIRE_THREE/HueSaturationShader": "../build/local/three/examples/js/shaders/HueSaturationShader",
        "REQUIRE_THREE/KaleidoShader": "../build/local/three/examples/js/shaders/KaleidoShader",
        "REQUIRE_THREE/LuminosityHighPassShader": "../build/local/three/examples/js/shaders/LuminosityHighPassShader",
        "REQUIRE_THREE/LuminosityShader": "../build/local/three/examples/js/shaders/LuminosityShader",
        "REQUIRE_THREE/MirrorShader": "../build/local/three/examples/js/shaders/MirrorShader",
        "REQUIRE_THREE/NormalMapShader": "../build/local/three/examples/js/shaders/NormalMapShader",
        "REQUIRE_THREE/OceanShaders": "../build/local/three/examples/js/shaders/OceanShaders",
        "REQUIRE_THREE/ParallaxShader": "../build/local/three/examples/js/shaders/ParallaxShader",
        "REQUIRE_THREE/PixelShader": "../build/local/three/examples/js/shaders/PixelShader",
        "REQUIRE_THREE/RGBShiftShader": "../build/local/three/examples/js/shaders/RGBShiftShader",
        "REQUIRE_THREE/SAOShader": "../build/local/three/examples/js/shaders/SAOShader",
        "REQUIRE_THREE/SMAAShader": "../build/local/three/examples/js/shaders/SMAAShader",
        "REQUIRE_THREE/SSAOShader": "../build/local/three/examples/js/shaders/SSAOShader",
        "REQUIRE_THREE/SepiaShader": "../build/local/three/examples/js/shaders/SepiaShader",
        "REQUIRE_THREE/SobelOperatorShader": "../build/local/three/examples/js/shaders/SobelOperatorShader",
        "REQUIRE_THREE/SubsurfaceScatteringShader": "../build/local/three/examples/js/shaders/SubsurfaceScatteringShader",
        "REQUIRE_THREE/TechnicolorShader": "../build/local/three/examples/js/shaders/TechnicolorShader",
        "REQUIRE_THREE/ToneMapShader": "../build/local/three/examples/js/shaders/ToneMapShader",
        "REQUIRE_THREE/ToonShader": "../build/local/three/examples/js/shaders/ToonShader",
        "REQUIRE_THREE/TriangleBlurShader": "../build/local/three/examples/js/shaders/TriangleBlurShader",
        "REQUIRE_THREE/UnpackDepthRGBAShader": "../build/local/three/examples/js/shaders/UnpackDepthRGBAShader",
        "REQUIRE_THREE/VerticalBlurShader": "../build/local/three/examples/js/shaders/VerticalBlurShader",
        "REQUIRE_THREE/VerticalTiltShiftShader": "../build/local/three/examples/js/shaders/VerticalTiltShiftShader",
        "REQUIRE_THREE/VignetteShader": "../build/local/three/examples/js/shaders/VignetteShader",
        "REQUIRE_THREE/VolumeShader": "../build/local/three/examples/js/shaders/VolumeShader",
        "REQUIRE_THREE/WaterRefractionShader": "../build/local/three/examples/js/shaders/WaterRefractionShader"
    },
    "shim": {
        "REQUIRE_THREE/3MFLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/AMFLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/AssimpLoader": {
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
        "REQUIRE_THREE/MD2Loader": {
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
        "REQUIRE_THREE/VRMLLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/VRMLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/VTKLoader": {
            "deps": ["REQUIRE_THREE"]
        },
        "REQUIRE_THREE/XLoader": {
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
        "REQUIRE_THREE/OceanShaders": {
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