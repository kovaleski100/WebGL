import * as THREE from 'three'

const options = {
    targetSelector : '#scene', width: 800, height: 600, background: 222222
}

const render = new THREE.WebGLRenderer();

render.setSize(options.width, options.height);

document.querySelector(options.targetSelector).appendChild(render.domElement)

const scene = new THREE.Scene();
scene.background = new THREE.Color(options.background);
const cam = new THREE.PerspectiveCamera(50, options.width/options.width);

cam.position.z = 5;