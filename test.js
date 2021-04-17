//import * as THREE from 'three'

const option = {
	targetSelector: '#scene',
	width: 800, height:600,
	backgroundColor: 0xFFFFFF
}



const renderer = new THREE.WebGLRenderer(
	{antialias: true}
);

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize( option.width, window.innerHeight );

document.querySelector(
	option.targetSelector
	).appendChild(renderer.domElement)
const scene = new THREE.Scene();
scene.backgroundColor = new THREE.Color(option.backgroundColor);

const camera = new THREE.PerspectiveCamera(
	50, option.width/option.height
);

camera.position.z = 5;


const light = new THREE.HemisphereLight(
	0xFFFFFF,0x000000,2
);

scene.add(light)
const x3 = new THREEx3(
	{
		THREE,
		OrbitControls: THREE.OrbitControls,
		camera,
		renderer,scene
	}
)
x3.add(camera)
x3.add(light)
x3.add(scene)
