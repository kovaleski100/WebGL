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
x3.add(cube)
x3.add(shadowLight)

renderer.setAnimationLoop(() => {

    var x = shadowLight.position.x    
    var y = shadowLight.position.y
    var z = shadowLight.position.z

    var yaw = 0.02;
    var pitch = 0;
    var roll = 0;

    var cosa = Math.cos(yaw);
    var sina = Math.sin(yaw);

    var cosb = Math.cos(pitch);
    var sinb = Math.sin(pitch);

    var cosc = Math.cos(roll);
    var sinc = Math.sin(roll);

    var Axx = cosa*cosb;
    var Axy = cosa*sinb*sinc - sina*cosc;
    var Axz = cosa*sinb*cosc + sina*sinc;

    var Ayx = sina*cosb;
    var Ayy = sina*sinb*sinc + cosa*cosc;
    var Ayz = sina*sinb*cosc - cosa*sinc;

    var Azx = -sinb;
    var Azy = cosb*sinc;
    var Azz = cosb*cosc;

    x = Axx*x + Axy*y + Axz*z;
    y = Ayx*x + Ayy*y + Ayz*z;
    z = Azx*x + Azy*y + Azz*z;
    
    shadowLight.position.x = x
    shadowLight.position.y = y
    shadowLight.position.z = z


    cube.rotateY(0.01)
    cube.rotateX(0.01)
    cube.rotateZ(0.01)
    //x3.tick();
    x3.fps(()=>{
        renderer.render(scene,camera);
    });
});