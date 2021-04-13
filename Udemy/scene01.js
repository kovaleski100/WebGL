import * as THREE from 'three'

const Geo = new THREE.BoxBufferGeometry();

const material = new THREE.MeshBasicMaterial();

const cube = new THREE.Mesh(
    Geo, material
);
scene.add(cube);
render.render(scene, cam);