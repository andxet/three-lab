
function Init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    camera.position.z = 5;

    
    var emissionMap = new THREE.TextureLoader().load( './img/earth.jpg' );
    var bumpMap = new THREE.TextureLoader().load( './img/earthbump.jpg' );
    var specularMap = new THREE.TextureLoader().load( './img/earthspecular.jpg');
    var geometry = new THREE.SphereBufferGeometry( 2, 32, 32 );
    var material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    material.map = emissionMap;
    material.bumpMap = bumpMap;
    material.bumpScale = 0.3;
    material.specularMap = specularMap;
    sphere = new THREE.Mesh( geometry, material );
    sphere.rotation.x = THREE.Math.degToRad(23);
    scene.add( sphere );

    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set(6,0,5);
    light.target = sphere;
    scene.add(light );
}

function Update(){
    requestAnimationFrame( Update );
    renderer.render( scene, camera );
    
    sphere.rotation.y += 0.01;
}