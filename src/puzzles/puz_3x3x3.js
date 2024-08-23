export const rubiks_cube_3x3x3 = {
  titletext: "3×3×3 Rubik's Cube 2D Projection",
  subtitletext: '',
  controlstext: '',
  svgversions: [
    '<svg class="cube" viewbox="0 0 2500 1000" width="100%" height="auto" preserveAspectRatio="xMidYMid meet" style="display: block; max-width: 95%; height: auto; padding: 1rem"><polygon id="yC" points="410,990 590,990 590,810 410,810" /><polygon id="RQ4F" points="1510.000,610.000 1410.000,610.000 1410.000,710.000 1488.900,688.900" /><polygon id="RQ4U" points="1410.000,710.000 1460.000,796.600 1546.600,746.600 1488.900,688.900" /><polygon id="RQ4S" points="1546.600,746.600 1596.600,660.000 1510.000,610.000 1488.900,688.900" /><polygon id="ryF" points="1210.000,610.000 1390.000,610.000 1390.000,700.000 1210.000,700.000" /><polygon id="ryS" points="1210.000,700.000 1390.000,700.000 1390.000,790.000 1210.000,790.000" /><polygon id="RQ3F" points="1090.000,610.000 1190.000,610.000 1190.000,710.000 1111.100,688.900" /><polygon id="RQ3U" points="1190.000,710.000 1140.000,796.600 1053.400,746.600 1111.100,688.900" /><polygon id="RQ3S" points="1053.400,746.600 1003.400,660.000 1090.000,610.000 1111.100,688.900" /><polygon id="gyF" points="810.000,610.000 990.000,610.000 990.000,700.000 810.000,700.000" /><polygon id="gyS" points="810.000,700.000 990.000,700.000 990.000,790.000 810.000,790.000" /><polygon id="LQ4F" points="710.000,610.000 610.000,610.000 610.000,710.000 688.900,688.900" /><polygon id="LQ4U" points="610.000,710.000 660.000,796.600 746.600,746.600 688.900,688.900" /><polygon id="LQ4S" points="746.600,746.600 796.600,660.000 710.000,610.000 688.900,688.900" /><polygon id="oyF" points="410.000,610.000 590.000,610.000 590.000,700.000 410.000,700.000" /><polygon id="oyS" points="410.000,700.000 590.000,700.000 590.000,790.000 410.000,790.000" /><polygon id="LQ3F" points="290.000,610.000 390.000,610.000 390.000,710.000 311.100,688.900" /><polygon id="LQ3U" points="390.000,710.000 340.000,796.600 253.400,746.600 311.100,688.900" /><polygon id="LQ3S" points="253.400,746.600 203.400,660.000 290.000,610.000 311.100,688.900" /><polygon id="byF" points="10,610 190,610 190,700 10,700" /><polygon id="byS" points="10,700 190,700 190,790 10,790" /><polygon id="rbF" points="1410.000,410.000 1410.000,590.000 1500.000,590.000 1500.000,410.000" /><polygon id="rbS" points="1500.000,410.000 1500.000,590.000 1590.000,590.000 1590.000,410.000" /><polygon id="rC" points="1210.000,590.000 1390.000,590.000 1390.000,410.000 1210.000,410.000" /><polygon id="rgS" points="1010.000,410.000 1010.000,590.000 1100.000,590.000 1100.000,410.000" /><polygon id="rgF" points="1100.000,410.000 1100.000,590.000 1190.000,590.000 1190.000,410.000" /><polygon id="gC" points="810.000,590.000 990.000,590.000 990.000,410.000 810.000,410.000" /><polygon id="ogF" points="610.000,410.000 610.000,590.000 700.000,590.000 700.000,410.000" /><polygon id="ogS" points="700.000,410.000 700.000,590.000 790.000,590.000 790.000,410.000" /><polygon id="oC" points="410.000,590.000 590.000,590.000 590.000,410.000 410.000,410.000" /><polygon id="obS" points="210.000,410.000 210.000,590.000 300.000,590.000 300.000,410.000" /><polygon id="obF" points="300.000,410.000 300.000,590.000 390.000,590.000 390.000,410.000" /><polygon id="bC" points="10,590 190,590 190,410 10,410" /><polygon id="RQ1F" points="1510.000,390.000 1410.000,390.000 1410.000,290.000 1488.900,311.100" /><polygon id="RQ1U" points="1410.000,290.000 1460.000,203.400 1546.600,253.400 1488.900,311.100" /><polygon id="RQ1S" points="1546.600,253.400 1596.600,340.000 1510.000,390.000 1488.900,311.100" /><polygon id="rwF" points="1210.000,300.000 1390.000,300.000 1390.000,390.000 1210.000,390.000" /><polygon id="rwS" points="1210.000,210.000 1390.000,210.000 1390.000,300.000 1210.000,300.000" /><polygon id="RQ2F" points="1090.000,390.000 1190.000,390.000 1190.000,290.000 1111.100,311.100" /><polygon id="RQ2U" points="1190.000,290.000 1140.000,203.400 1053.400,253.400 1111.100,311.100" /><polygon id="RQ2S" points="1053.400,253.400 1003.400,340.000 1090.000,390.000 1111.100,311.100" /><polygon id="gwF" points="810.000,300.000 990.000,300.000 990.000,390.000 810.000,390.000" /><polygon id="gwS" points="810.000,210.000 990.000,210.000 990.000,300.000 810.000,300.000" /><polygon id="LQ1F" points="710.000,390.000 610.000,390.000 610.000,290.000 688.900,311.100" /><polygon id="LQ1U" points="610.000,290.000 660.000,203.400 746.600,253.400 688.900,311.100" /><polygon id="LQ1S" points="746.600,253.400 796.600,340.000 710.000,390.000 688.900,311.100" /><polygon id="owF" points="410.000,300.000 590.000,300.000 590.000,390.000 410.000,390.000" /><polygon id="owS" points="410.000,210.000 590.000,210.000 590.000,300.000 410.000,300.000" /><polygon id="LQ2F" points="290.000,390.000 390.000,390.000 390.000,290.000 311.100,311.100" /><polygon id="LQ2U" points="390.000,290.000 340.000,203.400 253.400,253.400 311.100,311.100" /><polygon id="LQ2S" points="253.400,253.400 203.400,340.000 290.000,390.000 311.100,311.100" /><polygon id="bwF" points="10,300 190,300 190,390 10,390" /><polygon id="bwS" points="10,210 190,210 190,300 10,300" /><polygon id="wC" points="410,190 590,190 590,10 410,10" /></svg>',
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

    'KeyT', // E-Slice      //12
    'KeyY', // E-Sliceprime //13
    'KeyG', // M-Slice      //14
    'KeyH', // M-Sliceprime //15
    'KeyB', // S-Slice      //16
    'KeyN', // S-Sliceprime //17
    'KeyV', // X            //18
    'KeyM', // Xprime       //19
    'KeyC', // Y            //20
    'Comma', // Yprime       //21
    'KeyX', // Z            //22
    'Period', // Zprime       //23
  ],
  linkedtris: [
    ['LQ3F', 'LQ4F', 'LQ2F', 'LQ1F', 'oC', 'ogF', 'obF', 'owF', 'oyF'], //Front
    ['RQ3F', 'RQ4F', 'RQ2F', 'RQ1F', 'rC', 'rgF', 'rbF', 'rwF', 'ryF'], //Back
    ['LQ2U', 'LQ1U', 'RQ2U', 'RQ1U', 'wC', 'owS', 'rwS', 'gwS', 'bwS'], //Up
    ['LQ3U', 'LQ4U', 'RQ3U', 'RQ4U', 'yC', 'oyS', 'ryS', 'gyS', 'byS'], //Down
    ['LQ4S', 'LQ1S', 'RQ3S', 'RQ2S', 'gC', 'ogS', 'rgS', 'gwF', 'gyF'], //Right
    ['LQ3S', 'LQ2S', 'RQ4S', 'RQ1S', 'bC', 'obS', 'rbS', 'bwF', 'byF'], //Left
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
    ['owF', 'owS'],
    ['oyF', 'oyS'],
    ['obF', 'obS'],
    ['ogF', 'ogS'],
    ['rwF', 'rwS'],
    ['ryF', 'ryS'],
    ['rbF', 'rbS'],
    ['rgF', 'rgS'],
    ['gwF', 'gwS'],
    ['gyF', 'gyS'],
    ['bwF', 'bwS'],
    ['byF', 'byS'],
  ],
  slices: [
    ['oC', 'owF', 'owS', 'oyF', 'oyS'],
    ['oC', 'obF', 'obS', 'ogF', 'ogS'],
    ['rC', 'rwF', 'rwS', 'ryF', 'ryS'],
    ['rC', 'rbF', 'rbS', 'rgF', 'rgS'],
    ['bC', 'bwF', 'bwS', 'byF', 'byS'],
    ['bC', 'obF', 'obS', 'rbF', 'rbS'],
    ['gC', 'gwF', 'gwS', 'gyF', 'gyS'],
    ['gC', 'ogF', 'ogS', 'rgF', 'rgS'],
    ['wC', 'owF', 'owS', 'rwF', 'rwS'],
    ['wC', 'bwF', 'bwS', 'gwF', 'gwS'],
    ['yC', 'oyF', 'oyS', 'ryF', 'ryS'],
    ['yC', 'byF', 'byS', 'gyF', 'gyS'],
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
    ['owF', 'ogF'],
    ['ogF', 'oyF'],
    ['oyF', 'obF'],
    ['obF', 'owF'],
    ['owS', 'ogS'],
    ['ogS', 'oyS'],
    ['oyS', 'obS'],
    ['obS', 'owS'],
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
    ['rwF', 'rgF'],
    ['rgF', 'ryF'],
    ['ryF', 'rbF'],
    ['rbF', 'rwF'],
    ['rwS', 'rgS'],
    ['rgS', 'ryS'],
    ['ryS', 'rbS'],
    ['rbS', 'rwS'],
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
    ['rwF', 'gwF'],
    ['gwF', 'owF'],
    ['owF', 'bwF'],
    ['bwF', 'rwF'],
    ['rwS', 'gwS'],
    ['gwS', 'owS'],
    ['owS', 'bwS'],
    ['bwS', 'rwS'],
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
    ['ryF', 'byF'],
    ['byF', 'oyF'],
    ['oyF', 'gyF'],
    ['gyF', 'ryF'],
    ['ryS', 'byS'],
    ['byS', 'oyS'],
    ['oyS', 'gyS'],
    ['gyS', 'ryS'],
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
    ['gwF', 'rgS'],
    ['rgS', 'gyF'],
    ['gyF', 'ogS'],
    ['ogS', 'gwF'],
    ['gwS', 'rgF'],
    ['rgF', 'gyS'],
    ['gyS', 'ogF'],
    ['ogF', 'gwS'],
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
    ['bwF', 'obS'],
    ['obS', 'byF'],
    ['byF', 'rbS'],
    ['rbS', 'bwF'],
    ['bwS', 'obF'],
    ['obF', 'byS'],
    ['byS', 'rbF'],
    ['rbF', 'bwS'],
  ], //L
  ESlice: [
    ['bC', 'oC'],
    ['oC', 'gC'],
    ['gC', 'rC'],
    ['rC', 'bC'],
    ['obF', 'ogS'],
    ['ogS', 'rgF'],
    ['rgF', 'rbS'],
    ['rbS', 'obF'],
    ['obS', 'ogF'],
    ['ogF', 'rgS'],
    ['rgS', 'rbF'],
    ['rbF', 'obS'],
  ], //E
  MSlice: [
    ['oC', 'yC'],
    ['yC', 'rC'],
    ['rC', 'wC'],
    ['wC', 'oC'],
    ['owF', 'oyS'],
    ['oyS', 'ryF'],
    ['ryF', 'rwS'],
    ['rwS', 'owF'],
    ['owS', 'oyF'],
    ['oyF', 'ryS'],
    ['ryS', 'rwF'],
    ['rwF', 'owS'],
  ], //M
  SSlice: [
    ['wC', 'gC'],
    ['gC', 'yC'],
    ['yC', 'bC'],
    ['bC', 'wC'],
    ['bwF', 'gwS'],
    ['gwS', 'gyF'],
    ['gyF', 'byS'],
    ['byS', 'bwF'],
    ['bwS', 'gwF'],
    ['gwF', 'gyS'],
    ['gyS', 'byF'],
    ['byF', 'bwS'],
  ], //S
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
    let perm = [[], []];
    for (let i = 0; i < this.cubies.length; i++) {
      perm[0].push([]);
      for (let j = 0; j < this.cubies[i].length; j++) {
        let tri = document.getElementById(this.cubies[i][j]);
        perm[0][i].push(tri.getAttribute('fill'));
      }
    }
    for (let i = 0; i < this.slices.length; i++) {
      perm[1].push([]);
      for (let j = 0; j < this.slices[i].length; j++) {
        let tri = document.getElementById(this.slices[i][j]);
        perm[1][i].push(tri.getAttribute('fill'));
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
          tri.setAttribute('stroke-width', '5');
        }
      }
    }

    for (let i = 0; i < this.slices.length; i++) {
      if (
        (c2[i][1] !== oldPerm[1][i][1] || c2[i][2] !== oldPerm[1][i][2]) &&
        (c2[i][3] !== oldPerm[1][i][3] || c2[i][4] !== oldPerm[1][i][4])
      ) {
        for (let k = 0; k < this.slices[i].length; k++) {
          let tri = document.getElementById(this.slices[i][k]);
          tri.setAttribute('stroke-width', '5');
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
  handleKeydown: function (e) {
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
        this.permuteCube(this.ESlice, false);
        break;
      case this.keys[13]:
        this.permuteCube(this.ESlice, true);
        break;
      case this.keys[14]:
        this.permuteCube(this.MSlice, false);
        break;
      case this.keys[15]:
        this.permuteCube(this.MSlice, true);
        break;
      case this.keys[16]:
        this.permuteCube(this.SSlice, false);
        break;
      case this.keys[17]:
        this.permuteCube(this.SSlice, true);
        break;
      case this.keys[18]:
        this.permuteCube(this.RIGHT, false);
        this.permuteCube(this.LEFT, true);
        this.permuteCube(this.MSlice, true);
        break;
      case this.keys[19]:
        this.permuteCube(this.RIGHT, true);
        this.permuteCube(this.LEFT, false);
        this.permuteCube(this.MSlice, false);
        break;
      case this.keys[20]:
        this.permuteCube(this.UP, false);
        this.permuteCube(this.DOWN, true);
        this.permuteCube(this.ESlice, true);
        break;
      case this.keys[21]:
        this.permuteCube(this.UP, true);
        this.permuteCube(this.DOWN, false);
        this.permuteCube(this.ESlice, false);
        break;
      case this.keys[22]:
        this.permuteCube(this.FRONT, false);
        this.permuteCube(this.BACK, false);
        this.permuteCube(this.SSlice, false);
        break;
      case this.keys[23]:
        this.permuteCube(this.FRONT, true);
        this.permuteCube(this.BACK, true);
        this.permuteCube(this.SSlice, true);
        break;
    }
  },
  handleKeyup: function (_e) {},
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
