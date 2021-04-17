//import * as THREE from 'three'

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial(
         { color: 0x00ff00 } );

//const material = new THREE.MeshBasicMaterial(     { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);
x3.add(cube)
renderer.setAnimationLoop(() => {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    x3.tick();
    x3.fps(()=>{
        renderer.render(scene,camera);
    })
});