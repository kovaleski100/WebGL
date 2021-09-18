//import * as THREE from 'three'

const path = new THREE.Path();

path.moveTo(1,3);
path.lineTo(3,3);

const geometry = new THREE.BufferGeometry();
geometry.setFromPoints(path.getPoints());

const material = new THREE.MeshLambertMaterial(
    { color: 0xFFffFF//, 
       //side: THREE.DoubleSide
   }  
);

const draw = new THREE.Line(geometry, material);

scene.add(draw);

renderer.setAnimationLoop(() => {

    x3.tick();
    x3.fps(()=>{
        renderer.render(scene,camera);
    });
});