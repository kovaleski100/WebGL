//import * as THREE from 'three'

const option = {
	targetSelector: '#scene',
	width: 1920, height:1080,
	backgroundColor: 0x000000
}

const renderer = new THREE.WebGLRenderer(
	{antialias: true}
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize( option.width, option.height);

document.querySelector(
	option.targetSelector
	).appendChild(renderer.domElement);
const scene = new THREE.Scene();

scene.background = new THREE.Color(option.backgroundColor);

const camera = new THREE.PerspectiveCamera(
	50, option.width/option.height
);


camera.position.x = 9;
camera.position.y = 9;
camera.position.z = 9;



//  const light = new THREE.HemisphereLight(
//  	0xFFFFFF,0x000000,0.2
// );

// light.position.y = 3

//scene.add(light)
const x3 = new THREEx3(
	{
		THREE,
		OrbitControls: THREE.OrbitControls,
		camera,
		renderer,scene
	},
	{
		grid: {visible: false},
		axes: {visible: false}
	}
)

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.physicallyCorrectLights = true
renderer.toneMapping = THREE.CineonToneMapping;
x3.add(camera)
x3.add(scene)
