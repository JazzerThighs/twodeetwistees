export const rubiks_junior_2x2x2 = {
  titletext: "2×2×2 Rubik's Junior 2D Projection",
  subtitletext: '',
  controlstext: '',
  svgversions: [
    '<svg width="800" height="400"><polygon id="LQ3F" points="90.000,210.000 190.000,210.000 190.000,310.000 111.100,288.900" fill="orange" /><polygon id="LQ3U" points="190.000,310.000 140.000,396.600 53.400,346.600 111.100,288.900" fill="yellow" /><polygon id="LQ3S" points="53.400,346.600 3.400,260.000 90.000,210.000 111.100,288.900" fill="blue" /><polygon id="LQ4F" points="310.000,210.000 210.000,210.000 210.000,310.000 288.900,288.900" fill="orange" /><polygon id="LQ4U" points="210.000,310.000 260.000,396.600 346.600,346.600 288.900,288.900" fill="yellow" /><polygon id="LQ4S" points="346.600,346.600 396.600,260.000 310.000,210.000 288.900,288.900" fill="green" /><polygon id="LQ2F" points="90.000,190.000 190.000,190.000 190.000,90.000 111.100,111.100" fill="orange" /><polygon id="LQ2U" points="190.000,90.000 140.000,3.400 53.400,53.400 111.100,111.100" fill="white" /><polygon id="LQ2S" points="53.400,53.400 3.400,140.000 90.000,190.000 111.100,111.100" fill="blue" /><polygon id="LQ1F" points="310.000,190.000 210.000,190.000 210.000,90.000 288.900,111.100" fill="orange" /><polygon id="LQ1U" points="210.000,90.000 260.000,3.400 346.600,53.400 288.900,111.100" fill="white" /><polygon id="LQ1S" points="346.600,53.400 396.600,140.000 310.000,190.000 288.900,111.100" fill="green" /><polygon id="RQ3F" points="490.000,210.000 590.000,210.000 590.000,310.000 511.100,288.900" fill="red" /><polygon id="RQ3U" points="590.000,310.000 540.000,396.600 453.400,346.600 511.100,288.900" fill="yellow" /><polygon id="RQ3S" points="453.400,346.600 403.400,260.000 490.000,210.000 511.100,288.900" fill="green" /><polygon id="RQ4F" points="710.000,210.000 610.000,210.000 610.000,310.000 688.900,288.900" fill="red" /><polygon id="RQ4U" points="610.000,310.000 660.000,396.600 746.600,346.600 688.900,288.900" fill="yellow" /><polygon id="RQ4S" points="746.600,346.600 796.600,260.000 710.000,210.000 688.900,288.900" fill="blue" /><polygon id="RQ2F" points="490.000,190.000 590.000,190.000 590.000,90.000 511.100,111.100" fill="red" /><polygon id="RQ2U" points="590.000,90.000 540.000,3.400 453.400,53.400 511.100,111.100" fill="white" /><polygon id="RQ2S" points="453.400,53.400 403.400,140.000 490.000,190.000 511.100,111.100" fill="green" /><polygon id="RQ1F" points="710.000,190.000 610.000,190.000 610.000,90.000 688.900,111.100" fill="red" /><polygon id="RQ1U" points="610.000,90.000 660.000,3.400 746.600,53.400 688.900,111.100" fill="white" /><polygon id="RQ1S" points="746.600,53.400 796.600,140.000 710.000,190.000 688.900,111.100" fill="blue" /></svg>',
  ],
  keys: [
    'KeyE', // FRONT
    'KeyD', // FRONTprime
    'KeyI', // BACK
    'KeyK', // BACKprime
    'KeyU', // UP
    'KeyJ', // UPprime
    'KeyR', // DOWN
    'KeyF', // DOWNprime
    'KeyO', // RIGHT
    'KeyL', // RIGHTprime
    'KeyW', // LEFT
    'KeyS', // LEFTprime
    'KeyV', // X
    'KeyM', // Xprime
    'KeyC', // Y
    'Comma', // Yprime
    'KeyX', // Z
    'Period', // Zprime
  ],
  linkedtris: [
    ['LQ3F', 'LQ4F', 'LQ2F', 'LQ1F'], //Front
    ['RQ3F', 'RQ4F', 'RQ2F', 'RQ1F'], //Back
    ['LQ2U', 'LQ1U', 'RQ2U', 'RQ1U'], //Up
    ['LQ3U', 'LQ4U', 'RQ3U', 'RQ4U'], //Down
    ['LQ4S', 'LQ1S', 'RQ3S', 'RQ2S'], //Right
    ['LQ3S', 'LQ2S', 'RQ4S', 'RQ1S'], //Left
  ],
  cubies: [
    ['LQ1F', 'LQ1S', 'LQ1U'],
    ['LQ2F', 'LQ2S', 'LQ2U'],
    ['LQ3F', 'LQ3S', 'LQ3U'],
    ['LQ4F', 'LQ4S', 'LQ4U'],
    ['RQ1F', 'RQ1S', 'RQ1U'],
    ['RQ2F', 'RQ2S', 'RQ2U'],
    ['RQ3F', 'RQ3S', 'RQ3U'],
    ['RQ4F', 'RQ4S', 'RQ4U'],
  ],
  colors: ['orange', 'red', 'linen', 'yellow', 'limegreen', 'dodgerblue'],
  FRONT: [
    ['LQ2F', 'LQ1F'],
    ['LQ1F', 'LQ4F'],
    ['LQ4F', 'LQ3F'],
    ['LQ3F', 'LQ2F'],
    ['LQ2S', 'LQ1U'],
    ['LQ1U', 'LQ4S'],
    ['LQ4S', 'LQ3U'],
    ['LQ3U', 'LQ2S'],
    ['LQ2U', 'LQ1S'],
    ['LQ1S', 'LQ4U'],
    ['LQ4U', 'LQ3S'],
    ['LQ3S', 'LQ2U'],
  ], //F
  BACK: [
    ['RQ1F', 'RQ2F'],
    ['RQ4F', 'RQ1F'],
    ['RQ3F', 'RQ4F'],
    ['RQ2F', 'RQ3F'],
    ['RQ1U', 'RQ2S'],
    ['RQ4S', 'RQ1U'],
    ['RQ3U', 'RQ4S'],
    ['RQ2S', 'RQ3U'],
    ['RQ1S', 'RQ2U'],
    ['RQ4U', 'RQ1S'],
    ['RQ3S', 'RQ4U'],
    ['RQ2U', 'RQ3S'],
  ], //B
  UP: [
    ['LQ2F', 'RQ1S'],
    ['RQ1S', 'RQ2F'],
    ['RQ2F', 'LQ1S'],
    ['LQ1S', 'LQ2F'],
    ['LQ2U', 'RQ1U'],
    ['RQ1U', 'RQ2U'],
    ['RQ2U', 'LQ1U'],
    ['LQ1U', 'LQ2U'],
    ['LQ2S', 'RQ1F'],
    ['RQ1F', 'RQ2S'],
    ['RQ2S', 'LQ1F'],
    ['LQ1F', 'LQ2S'],
  ], //U
  DOWN: [
    ['RQ4S', 'LQ3F'],
    ['RQ3F', 'RQ4S'],
    ['LQ4S', 'RQ3F'],
    ['LQ3F', 'LQ4S'],
    ['RQ4U', 'LQ3U'],
    ['RQ3U', 'RQ4U'],
    ['LQ4U', 'RQ3U'],
    ['LQ3U', 'LQ4U'],
    ['RQ4F', 'LQ3S'],
    ['RQ3S', 'RQ4F'],
    ['LQ4F', 'RQ3S'],
    ['LQ3S', 'LQ4F'],
  ], //D
  RIGHT: [
    ['LQ1S', 'RQ2S'],
    ['RQ2S', 'RQ3S'],
    ['RQ3S', 'LQ4S'],
    ['LQ4S', 'LQ1S'],
    ['LQ1F', 'RQ2U'],
    ['RQ2U', 'RQ3F'],
    ['RQ3F', 'LQ4U'],
    ['LQ4U', 'LQ1F'],
    ['LQ1U', 'RQ2F'],
    ['RQ2F', 'RQ3U'],
    ['RQ3U', 'LQ4F'],
    ['LQ4F', 'LQ1U'],
  ], //R
  LEFT: [
    ['RQ1S', 'LQ2S'],
    ['RQ4S', 'RQ1S'],
    ['LQ3S', 'RQ4S'],
    ['LQ2S', 'LQ3S'],
    ['RQ1U', 'LQ2F'],
    ['RQ4F', 'RQ1U'],
    ['LQ3U', 'RQ4F'],
    ['LQ2F', 'LQ3U'],
    ['RQ1F', 'LQ2U'],
    ['RQ4U', 'RQ1F'],
    ['LQ3F', 'RQ4U'],
    ['LQ2U', 'LQ3F'],
  ], //L
  resetHighlights: function () {
    for (let i = 0; i < this.linkedtris.length; i++) {
      for (let j = 0; j < this.linkedtris[i].length; j++) {
        let tri = document.getElementById(this.linkedtris[i][j]);
        tri.setAttribute('stroke-width', '1');
      }
    }
  },
  reset: function () {
    for (let i = 0; i < this.linkedtris.length; i++) {
      for (let j = 0; j < this.linkedtris[i].length; j++) {
        let tri = document.getElementById(this.linkedtris[i][j]);
        tri.setAttribute('fill', this.colors[i]);
        tri.setAttribute('stroke', 'black');
        tri.setAttribute('stroke-linecap', 'round');
        tri.setAttribute('stroke-linejoin', 'round');
      }
    }
  },
  getPermutation: function () {
    let perm = [];
    for (let i = 0; i < this.cubies.length; i++) {
      perm.push([]);
      for (let j = 0; j < this.cubies[i].length; j++) {
        let tri = document.getElementById(this.cubies[i][j]);
        perm[i].push(tri.getAttribute('fill'));
      }
    }
    return perm;
  },
  updateHighlights: function (oldPerm) {
    const currPerm = this.getPermutation();
    for (let i = 0; i < this.cubies.length; i++) {
      let changed = false;
      for (let j = 0; j < this.cubies[i].length; j++) {
        if (currPerm[i][j] !== oldPerm[i][j]) {
          changed = true;
          break;
        }
      }
      if (changed) {
        for (let k = 0; k < this.cubies[i].length; k++) {
          let tri = document.getElementById(this.cubies[i][k]);
          tri.setAttribute('stroke-width', '7');
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
        colors[to] = elements[from].getAttribute('fill');
      });
    } else {
      swaps.forEach(([to, from]) => {
        elements[from] = document.getElementById(from);
        elements[to] = document.getElementById(to);
      });
      swaps.forEach(([to, from]) => {
        colors[to] = elements[from].getAttribute('fill');
      });
    }

    Object.keys(colors).forEach((key) => {
      elements[key].setAttribute('fill', colors[key]);
    });
  },
  updateCube: function (e) {
    switch (e.code) {
      case this.keys[0]:
        this.permuteCube(this.FRONT, false);
        break;
      case this.keys[1]:
        this.permuteCube(this.FRONT, true);
        break;
      case this.keys[2]:
        this.permuteCube(this.BACK, false);
        break;
      case this.keys[3]:
        this.permuteCube(this.BACK, true);
        break;
      case this.keys[4]:
        this.permuteCube(this.UP, false);
        break;
      case this.keys[5]:
        this.permuteCube(this.UP, true);
        break;
      case this.keys[6]:
        this.permuteCube(this.DOWN, false);
        break;
      case this.keys[7]:
        this.permuteCube(this.DOWN, true);
        break;
      case this.keys[8]:
        this.permuteCube(this.RIGHT, false);
        break;
      case this.keys[9]:
        this.permuteCube(this.RIGHT, true);
        break;
      case this.keys[10]:
        this.permuteCube(this.LEFT, false);
        break;
      case this.keys[11]:
        this.permuteCube(this.LEFT, true);
        break;
      case this.keys[12]:
        this.permuteCube(this.RIGHT, false);
        this.permuteCube(this.LEFT, true);
        break;
      case this.keys[13]:
        this.permuteCube(this.RIGHT, true);
        this.permuteCube(this.LEFT, false);
        break;
      case this.keys[14]:
        this.permuteCube(this.UP, false);
        this.permuteCube(this.DOWN, true);
        break;
      case this.keys[15]:
        this.permuteCube(this.UP, true);
        this.permuteCube(this.DOWN, false);
        break;
      case this.keys[16]:
        this.permuteCube(this.FRONT, false);
        this.permuteCube(this.BACK, false);
        break;
      case this.keys[17]:
        this.permuteCube(this.FRONT, true);
        this.permuteCube(this.BACK, true);
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
      const event = new KeyboardEvent('keydown', { code: key });
      document.dispatchEvent(event);
    });
  },
};
