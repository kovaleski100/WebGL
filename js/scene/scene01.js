import * as THREE from 'three'
////light define
const material = new THREE.MeshLambertMaterial(
         { color: 0x00ff00, 
            side: THREE.DoubleSide
        }  
);

const materialCone = new THREE.MeshLambertMaterial(
    { color: 0xFF0000, 
       side: THREE.DoubleSide
   }  
);

////creating 3dobjects
const cube = new THREE.Mesh( 
    new THREE.BoxBufferGeometry(1,1,1),
    material 
    );
cube.position.x = 2;
cube.position.y = 0.5

const circle = new THREE.Mesh(

    new THREE.CircleBufferGeometry(1,20),
    material
);

circle.rotation.x = THREE.MathUtils.degToRad(-90);
circle.position.x = -2;

const cone = new THREE.Mesh(
    new THREE.ConeBufferGeometry(1,1,20,20),
    materialCone
);
cone.position.x = -2;
cone.position.y = 3;

const Cylinder = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(1,1,1,30),
    material
);
Cylinder.position.x = -2;
Cylinder.position.y = 2;

const sphere = new THREE.Mesh(
    new THREE.SphereBufferGeometry(1,60,60),
    material
);
sphere.position.x = 0;
sphere.position.y = 1.0


///add objects to scene
scene.add(cone);
scene.add(circle);
scene.add(sphere);
scene.add(cube);
scene.add(Cylinder);

//////add controls
x3.add(cube, {label: 'cube'});
x3.add(cone, {label: 'cone'});
x3.add(sphere, {label: 'sphere'});
x3.add(circle, {label: 'circle'});


///render objects with animations
renderer.setAnimationLoop(() => {

    x3.tick();
    x3.fps(()=>{
        renderer.render(scene,camera);
    });
});