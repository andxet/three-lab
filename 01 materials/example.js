
function Init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    camera.position.z = 5;

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshPhongMaterial({color: 0x00ff00});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    var light = new THREE.HemisphereLight( 0xffffff, 0.5 );
    scene.add(light );
}

function Update(){
    requestAnimationFrame( Update );
    renderer.render( scene, camera );
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}