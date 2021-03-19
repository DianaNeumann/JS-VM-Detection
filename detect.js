let canvas = document.createElement('canvas');
let gl = canvas.getContext('webgl');

let debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
let vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
let renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

let ram = navigator.deviceMemory;
let cpu = navigator.hardwareConcurrency
let battery = navigator.battery
let platform = navigator.platform
let userAgent = window.navigator.userAgent

document.getElementById("vendor").innerHTML = vendor
document.getElementById("renderer").innerHTML = renderer
document.getElementById("ram").innerHTML = ram + ' GB RAM'
document.getElementById("cpu").innerHTML = cpu + ' core CPU'
document.getElementById("battery").innerHTML = battery
document.getElementById("platform").innerHTML = platform
document.getElementById("userAgent").innerHTML = userAgent



