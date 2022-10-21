console.log('testing...')

function setup() {
    console.log('setup form p5.js ready!')
    createCanvas(windowWidth, windowHeight, WEBGL)
    let collectNFTImage = createButton("collect item now")
    collectNFTImage.position((width / 2) - 50, height - 100)
    collectNFTImage.mouseClicked(download)

    background(255)
}


function download() {
    const filename = `nft${~~[Math.random(random(100000)) * random(100000)]}`
    const ext = "png"
    save(filename)
}

function draw() {
    let rotator = millis() / 1000
    // orbitControl()
    // let locX = mouseX - width / 2;
    // let locY = mouseY - height / 2;
    ambientLight(50)

    rotateY(rotator)
    rotateX(rotator)
    
    // fill(random(255), random(255), random(255), random(255))
    pointLight(255, 255,255, 1, 0, 150)
    specularMaterial(random(255), random(255), random(255), 200)
    shininess(50);
    torus(random(175), 50)
    
    fill(random(255), random(255), random(255), random(255))

    
    circle( random(-windowWidth / 2, windowWidth / 2), random(windowHeight / 2, -windowHeight / 2), random(50))
}