// import * as GaussianSplats3D from './build/demo/lib/gaussian-splats-3d.module.js';
// import * as THREE from './build/demo/lib/three.module.js';

import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';
import * as THREE from 'three';

const threeScene = new THREE.Scene();
const boxColor = 0xBBBBBB;
const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
const boxMesh = new THREE.Mesh(boxGeometry, new THREE.MeshBasicMaterial({'color': boxColor}));
boxMesh.position.set(3, 2, 2);
threeScene.add(boxMesh);

const viewer = new GaussianSplats3D.Viewer({
    'threeScene': threeScene,
});
viewer.addSplatScene('public/nike.splat')
.then(() => {
    viewer.start();
});