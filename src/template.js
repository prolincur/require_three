define('GLOBAL_THREE', ['{cdnurl}build/three.min.js'], function (THREE) {
    window.THREE = THREE;
    return THREE;
});
require.config({config});