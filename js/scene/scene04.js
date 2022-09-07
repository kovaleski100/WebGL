//import * as THREE from 'three'

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(),
    new THREE.MeshPhongMaterial(
        {
            color: 0xFFFFFF
        }
    )
)

cube.position.x = 1
cube.position.y = 1
cube.castShadow = true

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10,10),
    new THREE.MeshPhongMaterial(
        {
            color: 0xffff00,
            side: THREE.DoubleSide
        }
    )
)

floor.rotation.x += THREE.MathUtils.degToRad(-90)
floor.receiveShadow = true

scene.add(floor)
scene.add(cube)

const shadowLight = new THREE.DirectionalLight(
    0xFFFFFF, 1
)
shadowLight.position.y = 4

shadowLight.castShadow = true
scene.add(shadowLight)

x3.add(shadowLight)

renderer.setAnimationLoop(() => {

    cube.rotateY(0.01)
    cube.rotateX(0.01)
    cube.rotateZ(0.01)
    x3.tick();
    x3.fps(()=>{
        renderer.render(scene,camera);
    });
});