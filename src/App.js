import * as THREE from 'three'

export default class App{
    constructor(){
        this.run = false;
    }

    destructor(){
        if(typeof this.renderer !== 'undefined'){
            this.renderer.dispose();
        }
    }

    Run(){
        this.run = true;
        console.log("I'm running ^__^");
        this.Init();
        this.Update();
    }

    Stop(){

    }

    Init(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.camera.position.z = 5;

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
    }

    Update(){
        requestAnimationFrame( this.Update.bind(this) );
        this.renderer.render( this.scene, this.camera );
        
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }
};