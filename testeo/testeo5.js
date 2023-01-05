
    uniformVertical = 32
    poleVertical = 4
    vertical = poleVertical + uniformVertical
    geometrySide = 10.0
    horizontal = 64
    positionOffset = [0,0,0]
    
    let vertexPositionsX = [];
    let vertexPositionsY = [];
    let vertexPositionsZ = [];
    const radius = geometrySide / 2.0;

    for (let y = 0; y <= vertical; y++) {
        let yf;
        
        if (y <= poleVertical) {
            yf = y / (poleVertical + 1) / uniformVertical;
            
        } else if (y >= vertical - poleVertical) {
            const a = y - (vertical - poleVertical - 1);
            const b = a / (poleVertical + 1);

            yf = (uniformVertical - 1 + b) / uniformVertical;
        } else {
            yf = (y - poleVertical) / uniformVertical;
        }

        const lat = (yf - 0.5) * Math.PI;
        
        const cosLat = Math.cos(lat);

        for (let x = 0; x <= horizontal; x++) {
            const xf = x / horizontal;
            const lon = (0.5 + xf) * Math.PI * 2;
            console.log(lon)
            const index = y * (horizontal + 1) + x;

            const posX = ((radius * Math.sin(lon) * cosLat) +
                positionOffset[0]);
            const posY = -((radius * Math.sin(lat)) +
                positionOffset[1]);
            const posZ = ((radius * Math.cos(lon) * cosLat) +
                positionOffset[2]);


            vertexPositionsX.push(posX)
            vertexPositionsY.push(posY)
            vertexPositionsZ.push(posZ)
            
        }
    }



    let testeo =  {
            opacity: 0.5,
            color: 'rgba(255,127,80,0.7)',
            type: 'mesh3d',
            x: vertexPositionsX,
            y: vertexPositionsY,
            z: vertexPositionsZ,
            scene: "scene1"
        };

        var layout = {
            scene1: {
                domain: {
                    x: [0.0,  2],
                    y: [0, 2]
                },},
                width:1920,
          height: 1080,
           margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
            pad: 0
          },
        }    
    
    
        Plotly.newPlot('tester', [testeo], layout);
console.log(vertexPositionsX,vertexPositionsY,vertexPositionsZ)
