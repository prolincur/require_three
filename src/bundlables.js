define('REQUIRE_THREE', ['three/build/three.min.js'], function(THREE) {
    window.THREE = THREE;
    return THREE;
});
define([
    "../build/local/three/examples/js/loaders/3MFLoader",
    "../build/local/three/examples/js/loaders/AMFLoader",
    "../build/local/three/examples/js/loaders/AssimpLoader",
    "../build/local/three/examples/js/loaders/BVHLoader",
    "../build/local/three/examples/js/loaders/BasisTextureLoader",
    "../build/local/three/examples/js/loaders/ColladaLoader",
    "../build/local/three/examples/js/loaders/DDSLoader",
    "../build/local/three/examples/js/loaders/DRACOLoader",
    "../build/local/three/examples/js/loaders/EXRLoader",
    "../build/local/three/examples/js/loaders/FBXLoader",
    "../build/local/three/examples/js/loaders/GCodeLoader",
    "../build/local/three/examples/js/loaders/GLTFLoader",
    "../build/local/three/examples/js/loaders/HDRCubeTextureLoader",
    "../build/local/three/examples/js/loaders/KMZLoader",
    "../build/local/three/examples/js/loaders/KTXLoader",
    "../build/local/three/examples/js/loaders/LDrawLoader",
    "../build/local/three/examples/js/loaders/MD2Loader",
    "../build/local/three/examples/js/loaders/MMDLoader",
    "../build/local/three/examples/js/loaders/MTLLoader",
    "../build/local/three/examples/js/loaders/NRRDLoader",
    "../build/local/three/examples/js/loaders/OBJLoader",
    "../build/local/three/examples/js/loaders/PCDLoader",
    "../build/local/three/examples/js/loaders/PDBLoader",
    "../build/local/three/examples/js/loaders/PLYLoader",
    "../build/local/three/examples/js/loaders/PRWMLoader",
    "../build/local/three/examples/js/loaders/PVRLoader",
    "../build/local/three/examples/js/loaders/RGBELoader",
    "../build/local/three/examples/js/loaders/STLLoader",
    "../build/local/three/examples/js/loaders/SVGLoader",
    "../build/local/three/examples/js/loaders/TDSLoader",
    "../build/local/three/examples/js/loaders/TGALoader",
    "../build/local/three/examples/js/loaders/TTFLoader",
    // "../build/local/three/examples/js/loaders/VRMLLoader",
    "../build/local/three/examples/js/loaders/VTKLoader",
    "../build/local/three/examples/js/loaders/XLoader",
    "../build/local/three/examples/js/exporters/ColladaExporter",
    "../build/local/three/examples/js/exporters/DRACOExporter",
    "../build/local/three/examples/js/exporters/GLTFExporter",
    "../build/local/three/examples/js/exporters/MMDExporter",
    "../build/local/three/examples/js/exporters/OBJExporter",
    "../build/local/three/examples/js/exporters/PLYExporter",
    "../build/local/three/examples/js/exporters/STLExporter",
    "../build/local/three/examples/js/controls/DeviceOrientationControls",
    "../build/local/three/examples/js/controls/DragControls",
    "../build/local/three/examples/js/controls/FirstPersonControls",
    "../build/local/three/examples/js/controls/FlyControls",
    "../build/local/three/examples/js/controls/OrbitControls",
    "../build/local/three/examples/js/controls/PointerLockControls",
    "../build/local/three/examples/js/controls/TrackballControls",
    "../build/local/three/examples/js/controls/TransformControls",
    "../build/local/three/examples/js/renderers/CSS2DRenderer",
    "../build/local/three/examples/js/renderers/CSS3DRenderer",
    "../build/local/three/examples/js/renderers/Projector",
    "../build/local/three/examples/js/renderers/SVGRenderer",
    "../build/local/three/examples/js/shaders/ACESFilmicToneMappingShader",
    "../build/local/three/examples/js/shaders/AfterimageShader",
    "../build/local/three/examples/js/shaders/BasicShader",
    "../build/local/three/examples/js/shaders/BleachBypassShader",
    "../build/local/three/examples/js/shaders/BlendShader",
    "../build/local/three/examples/js/shaders/BokehShader",
    "../build/local/three/examples/js/shaders/BokehShader2",
    "../build/local/three/examples/js/shaders/BrightnessContrastShader",
    "../build/local/three/examples/js/shaders/ColorCorrectionShader",
    "../build/local/three/examples/js/shaders/ColorifyShader",
    "../build/local/three/examples/js/shaders/ConvolutionShader",
    "../build/local/three/examples/js/shaders/CopyShader",
    "../build/local/three/examples/js/shaders/DOFMipMapShader",
    "../build/local/three/examples/js/shaders/DepthLimitedBlurShader",
    "../build/local/three/examples/js/shaders/DigitalGlitch",
    "../build/local/three/examples/js/shaders/DotScreenShader",
    "../build/local/three/examples/js/shaders/FXAAShader",
    "../build/local/three/examples/js/shaders/FilmShader",
    "../build/local/three/examples/js/shaders/FocusShader",
    "../build/local/three/examples/js/shaders/FreiChenShader",
    "../build/local/three/examples/js/shaders/FresnelShader",
    "../build/local/three/examples/js/shaders/GammaCorrectionShader",
    "../build/local/three/examples/js/shaders/GodRaysShader",
    "../build/local/three/examples/js/shaders/HalftoneShader",
    "../build/local/three/examples/js/shaders/HorizontalBlurShader",
    "../build/local/three/examples/js/shaders/HorizontalTiltShiftShader",
    "../build/local/three/examples/js/shaders/HueSaturationShader",
    "../build/local/three/examples/js/shaders/KaleidoShader",
    "../build/local/three/examples/js/shaders/LuminosityHighPassShader",
    "../build/local/three/examples/js/shaders/LuminosityShader",
    "../build/local/three/examples/js/shaders/MirrorShader",
    "../build/local/three/examples/js/shaders/NormalMapShader",
    "../build/local/three/examples/js/shaders/OceanShaders",
    "../build/local/three/examples/js/shaders/ParallaxShader",
    "../build/local/three/examples/js/shaders/PixelShader",
    "../build/local/three/examples/js/shaders/RGBShiftShader",
    "../build/local/three/examples/js/shaders/SAOShader",
    "../build/local/three/examples/js/shaders/SMAAShader",
    "../build/local/three/examples/js/shaders/SSAOShader",
    "../build/local/three/examples/js/shaders/SepiaShader",
    "../build/local/three/examples/js/shaders/SobelOperatorShader",
    "../build/local/three/examples/js/shaders/SubsurfaceScatteringShader",
    "../build/local/three/examples/js/shaders/TechnicolorShader",
    "../build/local/three/examples/js/shaders/ToneMapShader",
    "../build/local/three/examples/js/shaders/ToonShader",
    "../build/local/three/examples/js/shaders/TriangleBlurShader",
    "../build/local/three/examples/js/shaders/UnpackDepthRGBAShader",
    "../build/local/three/examples/js/shaders/VerticalBlurShader",
    "../build/local/three/examples/js/shaders/VerticalTiltShiftShader",
    "../build/local/three/examples/js/shaders/VignetteShader",
    "../build/local/three/examples/js/shaders/VolumeShader",
    "../build/local/three/examples/js/shaders/WaterRefractionShader"
  ], function() {});