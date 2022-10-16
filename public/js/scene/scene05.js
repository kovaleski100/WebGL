function newSphere()
{
    return new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.5,60,60),
        new THREE.MeshPhysicalMaterial(
            {
                color: 0xFFFFFF
            }
        )
    );
}

const sphere = newSphere()

sphere.position.x = 1
sphere.position.y = 1
sphere.castShadow = true
scene.add(sphere)

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10,10),
    new THREE.MeshPhysicalMaterial(
        {
            color: 0xFF0000,
            side: THREE.DoubleSide
        }
    )
)

floor.rotation.x += THREE.MathUtils.degToRad(-90)
floor.receiveShadow = true
scene.add(floor)

const shadowLight = new THREE.PointLight(
    0xFFFFFF, 10
)

shadowLight.position.y = 4
shadowLight.castShadow = true
shadowLight.target = sphere


scene.add(shadowLight)
x3.add(sphere, {label : 'Sphere'})
x3.add(floor, {label : 'floar'})
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