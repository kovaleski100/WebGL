const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(0.5,60,60),
    new THREE.MeshPhongMaterial(
        {
            color: 0xFFFFFF
        }
    )
);

sphere.position.x = 1
sphere.position.y = 1
sphere.castShadow = true
scene.add(sphere)

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10,10),
    new THREE.MeshPhongMaterial(
        {
            color: 0xFFFFFF,
            side: THREE.DoubleSide
        }
    )
)

floor.rotation.x += THREE.MathUtils.degToRad(-90)
floor.receiveShadow = true
scene.add(floor)

const shadowLight = new THREE.PointLight(
    0xFFFFFF, 0.75
)

shadowLight.position.y = 4
shadowLight.castShadow = true
shadowLight.target = sphere


scene.add(shadowLight)
x3.add(sphere)
x3.add(floor)
x3.add(shadowLight)

renderer.setAnimationLoop(() => {

    sphere.rotateY(0.01)
    sphere.rotateX(0.01)
    sphere.rotateZ(0.01)
    x3.tick();
    x3.fps(()=>{
        renderer.render(scene,camera);
    });
});