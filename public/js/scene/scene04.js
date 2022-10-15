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
shadowLight.position.x = 0
shadowLight.position.y = 4
shadowLight.position.z = 0

shadowLight.castShadow = true
scene.add(shadowLight)
x3.add(cube)
x3.add(shadowLight)

var count = 0

renderer.setAnimationLoop(() => {

    var x = shadowLight.position.x*shadowLight.position.x - 0
    var y = shadowLight.position.y*shadowLight.position.y - 0
    var z = shadowLight.position.z*shadowLight.position.z - 0

    x = Math.sqrt(x)
    y = Math.sqrt(y)
    z = Math.sqrt(z)

    if(count>600)
    {
        console.log(x,y,z)
    }

    var yaw = 0.01;
    var pitch = 0;
    var roll = 0;

    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 60 );
    
//    console.log(quaternion)

    const vector = new THREE.Vector3( x, y, z );
    vector.applyQuaternion( quaternion );    
    
    shadowLight.position.x = vector.x
    shadowLight.position.y = vector.y
    shadowLight.position.z = vector.z

    if(count > 600)
    {
        console.log(vector)
        count =0
    }

    count++
    //alert("")
    //shadowLight.position.z = z


    cube.rotateY(0.01)
    cube.rotateX(0.01)
    cube.rotateZ(0.01)
    //x3.tick();
    x3.fps(()=>{
        renderer.render(scene,camera);
    });
});