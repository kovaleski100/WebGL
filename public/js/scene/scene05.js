function newSphere(polyester)
{
    return new THREE.Mesh(
        new THREE.SphereBufferGeometry(1.0,60,60),
        polyester
    );
}

function newTexture(map, normalmap)
{
    const loader = new THREE.TextureLoader();

    const material = new THREE.MeshStandardMaterial({
        map: loader.load(map),
        normalMap : loader.load(normalmap)
    })

    return material;
}

function newTexture1(map, normal, alpha, metalic, emissive, ao, roughness)
{
    const loader = new THREE.TextureLoader();

    const material = new THREE.MeshStandardMaterial({
        transparent: true, side: THREE.DoubleSide,
        map: loader.load(map),
        normalMap: loader.load(normal),
        alphaMap: loader.load(alpha),
        metalnessMap: loader.load(metalic),
        emissiveMap: loader.load(emissive),
        aoMap: loader.load(ao),
        roughnessMap: loader.load(roughness)
    })

    return material;
}

const polyester = newTexture('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/basecolor.jpg','https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/polyester/normal.jpg')
const wood = newTexture('https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/basecolor.jpg', 'https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/wood/normal.jpg')
const map = 'https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/basecolor.jpg'
const norma = 'https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/normal.jpg'
const alpha = 'https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/opacity.jpg'
const metalness = 'https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/metallic.jpg'
const emissive = 'https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/emissive.jpg'
const ao = 'https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/occlusion.jpg'
const roughness = 'https://gbaptista.s3-sa-east-1.amazonaws.com/threejs/metal/roughness.jpg'
const metal = newTexture1(map, norma, alpha, metalness, emissive, ao, roughness)


const sphere = newSphere(polyester)

sphere.position.x = 1
sphere.position.y = 1
sphere.castShadow = true
scene.add(sphere)

const floor = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(10,10),
    metal
)

floor.rotation.x += THREE.MathUtils.degToRad(-90)
floor.receiveShadow = true
scene.add(floor)

const shadowLight = new THREE.PointLight(
    0xFFFFFF, 10
)

shadowLight.position.y = 5
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