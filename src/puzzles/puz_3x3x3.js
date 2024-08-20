export const rubiks_cube_3x3x3 = {
    titletext: "3×3×3 Rubik's Cube 2D Projection",
    subtitletext: "",
    controlstext: "",
    svgversions: [],
    keys: [
        "KeyE", // FRONT
        "KeyD", // FRONTprime
        "KeyI", // BACK
        "KeyK", // BACKprime
        "KeyU", // UP
        "KeyJ", // UPprime
        "KeyR", // DOWN
        "KeyF", // DOWNprime
        "KeyO", // RIGHT
        "KeyL", // RIGHTprime
        "KeyW", // LEFT
        "KeyS", // LEFTprime
      
        "KeyT", // E-Slice      //12
        "KeyY", // E-Sliceprime //13
        "KeyG", // M-Slice      //14
        "KeyH", // M-Sliceprime //15
        "KeyB", // S-Slice      //16
        "KeyN", // S-Sliceprime //17
        "KeyV", // X            //18
        "KeyM", // Xprime       //19
        "KeyC", // Y            //20
        "Comma", // Yprime       //21
        "KeyX", // Z            //22
        "Period" // Zprime       //23
    ],
    linkedtris: [
        ["LQ3F", "LQ4F", "LQ2F", "LQ1F", "oC", "ogF", "obF", "owF", "oyF"], //Front
        ["RQ3F", "RQ4F", "RQ2F", "RQ1F", "rC", "rgF", "rbF", "rwF", "ryF"], //Back
        ["LQ2U", "LQ1U", "RQ2U", "RQ1U", "wC", "owS", "rwS", "gwS", "bwS"], //Up
        ["LQ3U", "LQ4U", "RQ3U", "RQ4U", "yC", "oyS", "ryS", "gyS", "byS"], //Down
        ["LQ4S", "LQ1S", "RQ3S", "RQ2S", "gC", "ogS", "rgS", "gwF", "gyF"], //Right
        ["LQ3S", "LQ2S", "RQ4S", "RQ1S", "bC", "obS", "rbS", "bwF", "byF"] //Left
    ],
    cubies: [
        ["LQ1F", "LQ1S", "LQ1U"],
        ["LQ2F", "LQ2S", "LQ2U"],
        ["LQ3F", "LQ3S", "LQ3U"],
        ["LQ4F", "LQ4S", "LQ4U"],
        ["RQ1F", "RQ1S", "RQ1U"],
        ["RQ2F", "RQ2S", "RQ2U"],
        ["RQ3F", "RQ3S", "RQ3U"],
        ["RQ4F", "RQ4S", "RQ4U"],
        ["owF", "owS"],
        ["oyF", "oyS"],
        ["obF", "obS"],
        ["ogF", "ogS"],
        ["rwF", "rwS"],
        ["ryF", "ryS"],
        ["rbF", "rbS"],
        ["rgF", "rgS"],
        ["gwF", "gwS"],
        ["gyF", "gyS"],
        ["bwF", "bwS"],
        ["byF", "byS"]
    ],
    slices: [
        ["oC", "owF", "owS", "oyF", "oyS"],
        ["oC", "obF", "obS", "ogF", "ogS"],
        ["rC", "rwF", "rwS", "ryF", "ryS"],
        ["rC", "rbF", "rbS", "rgF", "rgS"],
        ["bC", "bwF", "bwS", "byF", "byS"],
        ["bC", "obF", "obS", "rbF", "rbS"],
        ["gC", "gwF", "gwS", "gyF", "gyS"],
        ["gC", "ogF", "ogS", "rgF", "rgS"],
        ["wC", "owF", "owS", "rwF", "rwS"],
        ["wC", "bwF", "bwS", "gwF", "gwS"],
        ["yC", "oyF", "oyS", "ryF", "ryS"],
        ["yC", "byF", "byS", "gyF", "gyS"]
    ],
    colors: [
        "orange",
        "red",
        "linen",
        "yellow",
        "limegreen",
        "dodgerblue"
    ],
    FRONT: [
        ["LQ2F", "LQ1F"],
        ["LQ1F", "LQ4F"],
        ["LQ4F", "LQ3F"],
        ["LQ3F", "LQ2F"],
        ["LQ2S", "LQ1U"],
        ["LQ1U", "LQ4S"],
        ["LQ4S", "LQ3U"],
        ["LQ3U", "LQ2S"],
        ["LQ2U", "LQ1S"],
        ["LQ1S", "LQ4U"],
        ["LQ4U", "LQ3S"],
        ["LQ3S", "LQ2U"],
        ["owF", "ogF"],
        ["ogF", "oyF"],
        ["oyF", "obF"],
        ["obF", "owF"],
        ["owS", "ogS"],
        ["ogS", "oyS"],
        ["oyS", "obS"],
        ["obS", "owS"]
    ], //F
    BACK: [
        ["RQ1F", "RQ2F"],
        ["RQ4F", "RQ1F"],
        ["RQ3F", "RQ4F"],
        ["RQ2F", "RQ3F"],
        ["RQ1U", "RQ2S"],
        ["RQ4S", "RQ1U"],
        ["RQ3U", "RQ4S"],
        ["RQ2S", "RQ3U"],
        ["RQ1S", "RQ2U"],
        ["RQ4U", "RQ1S"],
        ["RQ3S", "RQ4U"],
        ["RQ2U", "RQ3S"],
        ["rwF", "rgF"],
        ["rgF", "ryF"],
        ["ryF", "rbF"],
        ["rbF", "rwF"],
        ["rwS", "rgS"],
        ["rgS", "ryS"],
        ["ryS", "rbS"],
        ["rbS", "rwS"]
    ], //B
    UP: [
        ["LQ2F", "RQ1S"],
        ["RQ1S", "RQ2F"],
        ["RQ2F", "LQ1S"],
        ["LQ1S", "LQ2F"],
        ["LQ2U", "RQ1U"],
        ["RQ1U", "RQ2U"],
        ["RQ2U", "LQ1U"],
        ["LQ1U", "LQ2U"],
        ["LQ2S", "RQ1F"],
        ["RQ1F", "RQ2S"],
        ["RQ2S", "LQ1F"],
        ["LQ1F", "LQ2S"],
        ["rwF", "gwF"],
        ["gwF", "owF"],
        ["owF", "bwF"],
        ["bwF", "rwF"],
        ["rwS", "gwS"],
        ["gwS", "owS"],
        ["owS", "bwS"],
        ["bwS", "rwS"]
    ], //U
    DOWN: [
        ["RQ4S", "LQ3F"],
        ["RQ3F", "RQ4S"],
        ["LQ4S", "RQ3F"],
        ["LQ3F", "LQ4S"],
        ["RQ4U", "LQ3U"],
        ["RQ3U", "RQ4U"],
        ["LQ4U", "RQ3U"],
        ["LQ3U", "LQ4U"],
        ["RQ4F", "LQ3S"],
        ["RQ3S", "RQ4F"],
        ["LQ4F", "RQ3S"],
        ["LQ3S", "LQ4F"],
        ["ryF", "byF"],
        ["byF", "oyF"],
        ["oyF", "gyF"],
        ["gyF", "ryF"],
        ["ryS", "byS"],
        ["byS", "oyS"],
        ["oyS", "gyS"],
        ["gyS", "ryS"]
    ], //D
    RIGHT: [
        ["LQ1S", "RQ2S"],
        ["RQ2S", "RQ3S"],
        ["RQ3S", "LQ4S"],
        ["LQ4S", "LQ1S"],
        ["LQ1F", "RQ2U"],
        ["RQ2U", "RQ3F"],
        ["RQ3F", "LQ4U"],
        ["LQ4U", "LQ1F"],
        ["LQ1U", "RQ2F"],
        ["RQ2F", "RQ3U"],
        ["RQ3U", "LQ4F"],
        ["LQ4F", "LQ1U"],
        ["gwF", "rgS"],
        ["rgS", "gyF"],
        ["gyF", "ogS"],
        ["ogS", "gwF"],
        ["gwS", "rgF"],
        ["rgF", "gyS"],
        ["gyS", "ogF"],
        ["ogF", "gwS"]
    ], //R
    LEFT: [
        ["RQ1S", "LQ2S"],
        ["RQ4S", "RQ1S"],
        ["LQ3S", "RQ4S"],
        ["LQ2S", "LQ3S"],
        ["RQ1U", "LQ2F"],
        ["RQ4F", "RQ1U"],
        ["LQ3U", "RQ4F"],
        ["LQ2F", "LQ3U"],
        ["RQ1F", "LQ2U"],
        ["RQ4U", "RQ1F"],
        ["LQ3F", "RQ4U"],
        ["LQ2U", "LQ3F"],
        ["bwF", "obS"],
        ["obS", "byF"],
        ["byF", "rbS"],
        ["rbS", "bwF"],
        ["bwS", "obF"],
        ["obF", "byS"],
        ["byS", "rbF"],
        ["rbF", "bwS"]
    ], //L
    ESlice: [
        ["bC", "oC"],
        ["oC", "gC"],
        ["gC", "rC"],
        ["rC", "bC"],
        ["obF", "ogS"],
        ["ogS", "rgF"],
        ["rgF", "rbS"],
        ["rbS", "obF"],
        ["obS", "ogF"],
        ["ogF", "rgS"],
        ["rgS", "rbF"],
        ["rbF", "obS"]
    ], //E
    MSlice: [
        ["oC", "yC"],
        ["yC", "rC"],
        ["rC", "wC"],
        ["wC", "oC"],
        ["owF", "oyS"],
        ["oyS", "ryF"],
        ["ryF", "rwS"],
        ["rwS", "owF"],
        ["owS", "oyF"],
        ["oyF", "ryS"],
        ["ryS", "rwF"],
        ["rwF", "owS"]
    ], //M
    SSlice: [
        ["wC", "gC"],
        ["gC", "yC"],
        ["yC", "bC"],
        ["bC", "wC"],
        ["bwF", "gwS"],
        ["gwS", "gyF"],
        ["gyF", "byS"],
        ["byS", "bwF"],
        ["bwS", "gwF"],
        ["gwF", "gyS"],
        ["gyS", "byF"],
        ["byF", "bwS"]
    ], //S
    resetHighlights: function () {
        for (let i = 0; i < this.linkedtris.length; i++) {
            for (let j = 0; j < this.linkedtris[i].length; j++) {
                let tri = document.getElementById(this.linkedtris[i][j]);
                tri.setAttribute("stroke-width", "1");
            }
        }
    },
    reset: function () {
        for (let i = 0; i < this.linkedtris.length; i++) {
            for (let j = 0; j < this.linkedtris[i].length; j++) {
                let tri = document.getElementById(this.linkedtris[i][j]);
                tri.setAttribute("fill", this.colors[i]);
                tri.setAttribute("stroke", "black");
                tri.setAttribute("stroke-linecap", "round");
                tri.setAttribute("stroke-linejoin", "round");
            }
        }
    },
    getPermutation: function () {
        let perm = [[], []];
        for (let i = 0; i < this.cubies.length; i++) {
            perm[0].push([]);
            for (let j = 0; j < this.cubies[i].length; j++) {
                let tri = document.getElementById(this.cubies[i][j]);
                perm[0][i].push(tri.getAttribute("fill"));
            }
        }
        for (let i = 0; i < this.slices.length; i++) {
            perm[1].push([]);
            for (let j = 0; j < this.slices[i].length; j++) {
                let tri = document.getElementById(this.slices[i][j]);
                perm[1][i].push(tri.getAttribute("fill"));
            }
        }
        return perm;
    },
    updateHighlights: function (oldPerm) {
        const [c1, c2] = this.getPermutation();
        for (let i = 0; i < this.cubies.length; i++) {
            let changed = false;
            for (let j = 0; j < this.cubies[i].length; j++) {
                if (c1[i][j] !== oldPerm[0][i][j]) {
                    changed = true;
                    break;
                }
            }
            if (changed) {
                for (let k = 0; k < this.cubies[i].length; k++) {
                    let tri = document.getElementById(this.cubies[i][k]);
                    tri.setAttribute("stroke-width", "5");
                }
            }
        }
        
        for (let i = 0; i < this.slices.length; i++) {
            if (( c2[i][1] !== oldPerm[1][i][1] ||
                c2[i][2] !== oldPerm[1][i][2] ) && 
                ( c2[i][3] !== oldPerm[1][i][3] ||
                c2[i][4] !== oldPerm[1][i][4] )) 
            {
                for (let k = 0; k < this.slices[i].length; k++) {
                    let tri = document.getElementById(this.slices[i][k]);
                    tri.setAttribute("stroke-width", "5");
                }
            }
        }
    },
    permuteCube: function (swaps, prime) {
        const elements = {};
        const colors = {};

        if (prime === false) {
            swaps.forEach(([from, to]) => {
                elements[from] = document.getElementById(from);
                elements[to] = document.getElementById(to);
            });
            swaps.forEach(([from, to]) => {
                colors[to] = elements[from].getAttribute("fill");
            });
        } else {
            swaps.forEach(([to, from]) => {
                elements[from] = document.getElementById(from);
                elements[to] = document.getElementById(to);
            });
            swaps.forEach(([to, from]) => {
                colors[to] = elements[from].getAttribute("fill");
            });
        }
    
        Object.keys(colors).forEach((key) => {
            elements[key].setAttribute("fill", colors[key]);
        });
    },
    updateCube: function (e) {
        switch (e.code) {
            case keys[0]:
              this.permuteCube(this.FRONT, false);
              break;
            case keys[1]:
              this.permuteCube(this.FRONT, true);
              break;
            case keys[2]:
              this.permuteCube(this.BACK, false);
              break;
            case keys[3]:
              this.permuteCube(this.BACK, true);
              break;
            case keys[4]:
              this.permuteCube(this.UP, false);
              break;
            case keys[5]:
              this.permuteCube(this.UP, true);
              break;
            case keys[6]:
              this.permuteCube(this.DOWN, false);
              break;
            case keys[7]:
              this.permuteCube(this.DOWN, true);
              break;
            case keys[8]:
              this.permuteCube(this.RIGHT, false);
              break;
            case keys[9]:
              this.permuteCube(this.RIGHT, true);
              break;
            case keys[10]:
              this.permuteCube(this.LEFT, false);
              break;
            case keys[11]:
              this.permuteCube(this.LEFT, true);
              break;
            case keys[12]:
              this.permuteCube(this.ESlice, false);
              break;
            case keys[13]:
              this.permuteCube(this.ESlice, true);
              break;
            case keys[14]:
              this.permuteCube(this.MSlice, false);
              break;
            case keys[15]:
              this.permuteCube(this.MSlice, true);
              break;
            case keys[16]:
              this.permuteCube(this.SSlice, false);
              break;
            case keys[17]:
              this.permuteCube(this.SSlice, true);
              break;
            case keys[18]:
              this.permuteCube(this.RIGHT, false);
              this.permuteCube(this.LEFT, true);
              this.permuteCube(this.MSlice, true);
              break;
            case keys[19]:
              this.permuteCube(this.RIGHT, true);
              this.permuteCube(this.LEFT, false);
              this.permuteCube(this.MSlice, false);
              break;
            case keys[20]:
              this.permuteCube(this.UP, false);
              this.permuteCube(this.DOWN, true);
              this.permuteCube(this.ESlice, true);
              break;
            case keys[21]:
              this.permuteCube(this.UP, true);
              this.permuteCube(this.DOWN, false);
              this.permuteCube(this.ESlice, false);
              break;
            case keys[22]:
              this.permuteCube(this.FRONT, false);
              this.permuteCube(this.BACK, false);
              this.permuteCube(this.SSlice, false);
              break;
            case keys[23]:
              this.permuteCube(this.FRONT, true);
              this.permuteCube(this.BACK, true);
              this.permuteCube(this.SSlice, true);
              break;
          }
    },
    randomize: function () {
        let sequence = [];
        while (sequence.length < 25) {
          const randomKey = this.keys[Math.floor(Math.random() * 18)];
          if (
            sequence.length < 2 ||
            !(
              sequence[sequence.length - 1] === randomKey &&
              sequence[sequence.length - 2] === randomKey
            )
          ) {
            sequence.push(randomKey);
          }
        }
        sequence.forEach((key) => {
          const event = new KeyboardEvent("keydown", { code: key });
          document.dispatchEvent(event);
        });
    }
}
