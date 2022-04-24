//import * as THREE from 'three'


const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshLambertMaterial(
        {
            color: 0xFFFFFF
        }
    )
)

cube.position.x = 1
cube.position.y = 1

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10,10),
    new THREE.MeshLambertMaterial(
        {
            color: 0xffff00,
            side: THREE.DoubleSide
        }
    )
)

floor.rotation.x = THREE.MathUtils.degToRad(-90)

scene.add(floor)
scene.add(cube)

renderer.setAnimationLoop(() => {

    x3.tick();
    x3.fps(()=>{
        renderer.render(scene,camera);
    });
});