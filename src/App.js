import * as THREE from 'three'

export default class App{
    constructor(){

    }

    Run(){
        console.log("I'm running ^__^");
        this.Init();
    }

    Stop(){

    }

    Init(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth, window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        
    }
};