import { phys2x2x2x2v1 } from "./puzzlesvgs/phys2x2x2x2v1";
import { phys2x2x2x2v2 } from "./puzzlesvgs/phys2x2x2x2v2";

export const melindas_physical_2x2x2x2_canonical = {
  titletext: "Melinda's 2×2×2×2 Physical Hypercube 2D Projection (Canonical Moveset)",
  subtitletext:
    'Code repurposed from <a href="https://2x2x2x2scrambler.github.io/">Grant\'s Physical 2^4 Scrambler</a>',
  controlstext:
    'Controls: <i>(Canonical Moves for Melinda\'s Physical 2^4)</i><br />Lx &nbsp;&nbsp; -> "KeyR"&nbsp;&nbsp;&nbsp;&nbsp; Rx&nbsp;&nbsp;&nbsp; -> "KeyU" <br />Lx\' &nbsp; -> "KeyF"&nbsp;&nbsp;&nbsp;&nbsp; Rx\'&nbsp;&nbsp; -> "KeyJ" <br />Ly &nbsp;&nbsp; -> "KeyE"&nbsp;&nbsp;&nbsp;&nbsp; Ry&nbsp;&nbsp;&nbsp; -> "KeyK" <br />Ly\' &nbsp; -> "KeyD"&nbsp;&nbsp;&nbsp;&nbsp; Ry\'&nbsp;&nbsp; -> "KeyI" <br />Lz &nbsp;&nbsp; -> "KeyW"&nbsp;&nbsp;&nbsp;&nbsp; Rz&nbsp;&nbsp;&nbsp; -> "KeyL" <br />Lz\' &nbsp; -> "KeyS"&nbsp;&nbsp;&nbsp;&nbsp; Rz\'&nbsp;&nbsp; -> "KeyO" <br />Uy2 &nbsp; -> "KeyQ"&nbsp;&nbsp;&nbsp;&nbsp; Dy2&nbsp;&nbsp; -> "KeyP" <br />Ix &nbsp;&nbsp; -> "KeyT"&nbsp;&nbsp;&nbsp;&nbsp; Ix&nbsp;&nbsp;&nbsp; -> "KeyY" <br />Ix\'&nbsp;&nbsp; -> "KeyG"&nbsp;&nbsp;&nbsp;&nbsp; Ix\'&nbsp;&nbsp;&nbsp;-> "KeyH" <br />gyro_z &nbsp;-> "KeyA"&nbsp;&nbsp;&nbsp;&nbsp; gyro_z\'&nbsp;-> "Semicolon"</br>',
  svgversions: [
    phys2x2x2x2v1,
    phys2x2x2x2v2,
  ],
  linkedtris: [
    ['tri0', 'tri1', 'tri2', 'tri3', 'tri72', 'tri73', 'tri74', 'tri75'],
    ['tri8', 'tri9', 'tri10', 'tri11', 'tri56', 'tri57', 'tri58', 'tri59'],
    ['tri16', 'tri17', 'tri18', 'tri19', 'tri64', 'tri65', 'tri66', 'tri67'],
    ['tri24', 'tri25', 'tri26', 'tri27', 'tri48', 'tri49', 'tri50', 'tri51'],
    ['tri32', 'tri33', 'tri34', 'tri35', 'tri88', 'tri89', 'tri90', 'tri91'],
    ['tri40', 'tri41', 'tri42', 'tri43', 'tri80', 'tri81', 'tri82', 'tri83'],
    ['tri4', 'tri5', 'tri6', 'tri7', 'tri44', 'tri45', 'tri46', 'tri47'],
    ['tri52', 'tri53', 'tri54', 'tri55', 'tri76', 'tri77', 'tri78', 'tri79'],
  ],
  cubies: [
    ["tri8",  "tri1",  "tri5",  "tri12", "tri34", "tri39"],
    ["tri9",  "tri13", "tri38", "tri44", "tri35", "tri40"],
    ["tri10", "tri3",  "tri15", "tri6",  "tri20", "tri16"],
    ["tri11", "tri14", "tri47", "tri21", "tri17", "tri42"],
    ["tri24", "tri28", "tri45", "tri37", "tri33", "tri41"],
    ["tri25", "tri0",  "tri29", "tri36", "tri4",  "tri32"],
    ["tri26", "tri19", "tri31", "tri46", "tri22", "tri43"],
    ["tri27", "tri2",  "tri18", "tri30", "tri7",  "tri23"],

    ["tri56", "tri60", "tri85", "tri95", "tri81", "tri90"],
    ["tri57", "tri61", "tri76", "tri94", "tri72", "tri91"],
    ["tri58", "tri63", "tri68", "tri86", "tri64", "tri83"],
    ["tri59", "tri62", "tri69", "tri79", "tri65", "tri74"],
    ["tri48", "tri52", "tri93", "tri77", "tri73", "tri89"],
    ["tri49", "tri53", "tri84", "tri92", "tri80", "tri88"],
    ["tri50", "tri55", "tri78", "tri70", "tri67", "tri75"],
    ["tri51", "tri54", "tri87", "tri71", "tri66", "tri82"],
  ],
  colors: [
    'orange',
    'red',
    'yellow',
    'linen',
    'rebeccapurple',
    'fuchsia',
    'limegreen',
    'dodgerblue',
  ],
  puzzleState: [
    [
      [0, 7, 2, 5],
      [0, 7, 2, 4],
      [0, 7, 3, 4],
      [0, 7, 3, 5],
      [0, 6, 2, 5],
      [0, 6, 2, 4],
      [0, 6, 3, 4],
      [0, 6, 3, 5],
    ],
    [
      [1, 7, 2, 4],
      [1, 7, 2, 5],
      [1, 7, 3, 5],
      [1, 7, 3, 4],
      [1, 6, 2, 4],
      [1, 6, 2, 5],
      [1, 6, 3, 5],
      [1, 6, 3, 4],
    ],
  ],
  keys: [
    // Canonical Moves for Melinda's Physical 2^4 Hypercube:
    'KeyR', // Lx
    'KeyF', // Lx'
    'KeyE', // Ly
    'KeyD', // Ly'
    'KeyW', // Lz
    'KeyS', // Lz'
    'KeyU', // Rx
    'KeyJ', // Rx'
    'KeyK', // Ry
    'KeyI', // Ry'
    'KeyL', // Rz
    'KeyO', // Rz'
    'KeyQ', // Uy2
    'KeyP', // Dy2
    'KeyT', // Ix
    'KeyY', // Ix
    'KeyG', // Ix'
    'KeyH', // Ix'
    'KeyA', // gyro
    'Semicolon', // gyro'
  ],
  move: {
    Lx: function (p) {
      return [
        [
          [p[0][3][0], p[0][3][2], p[0][3][1], p[0][3][3]],
          [p[0][2][0], p[0][2][2], p[0][2][1], p[0][2][3]],
          [p[0][6][0], p[0][6][2], p[0][6][1], p[0][6][3]],
          [p[0][7][0], p[0][7][2], p[0][7][1], p[0][7][3]],
          [p[0][0][0], p[0][0][2], p[0][0][1], p[0][0][3]],
          [p[0][1][0], p[0][1][2], p[0][1][1], p[0][1][3]],
          [p[0][5][0], p[0][5][2], p[0][5][1], p[0][5][3]],
          [p[0][4][0], p[0][4][2], p[0][4][1], p[0][4][3]],
        ],
        p[1],
      ];
    },
    Lx_prime: function (p) {
      return [
        [
          [p[0][4][0], p[0][4][2], p[0][4][1], p[0][4][3]],
          [p[0][5][0], p[0][5][2], p[0][5][1], p[0][5][3]],
          [p[0][1][0], p[0][1][2], p[0][1][1], p[0][1][3]],
          [p[0][0][0], p[0][0][2], p[0][0][1], p[0][0][3]],
          [p[0][7][0], p[0][7][2], p[0][7][1], p[0][7][3]],
          [p[0][6][0], p[0][6][2], p[0][6][1], p[0][6][3]],
          [p[0][2][0], p[0][2][2], p[0][2][1], p[0][2][3]],
          [p[0][3][0], p[0][3][2], p[0][3][1], p[0][3][3]],
        ],
        p[1],
      ];
    },
    Ly: function (p) {
      return [
        [
          [p[0][3][0], p[0][3][1], p[0][3][3], p[0][3][2]],
          [p[0][0][0], p[0][0][1], p[0][0][3], p[0][0][2]],
          [p[0][1][0], p[0][1][1], p[0][1][3], p[0][1][2]],
          [p[0][2][0], p[0][2][1], p[0][2][3], p[0][2][2]],
          [p[0][7][0], p[0][7][1], p[0][7][3], p[0][7][2]],
          [p[0][4][0], p[0][4][1], p[0][4][3], p[0][4][2]],
          [p[0][5][0], p[0][5][1], p[0][5][3], p[0][5][2]],
          [p[0][6][0], p[0][6][1], p[0][6][3], p[0][6][2]],
        ],
        p[1],
      ];
    },
    Ly_prime: function (p) {
      return [
        [
          [p[0][1][0], p[0][1][1], p[0][1][3], p[0][1][2]],
          [p[0][2][0], p[0][2][1], p[0][2][3], p[0][2][2]],
          [p[0][3][0], p[0][3][1], p[0][3][3], p[0][3][2]],
          [p[0][0][0], p[0][0][1], p[0][0][3], p[0][0][2]],
          [p[0][5][0], p[0][5][1], p[0][5][3], p[0][5][2]],
          [p[0][6][0], p[0][6][1], p[0][6][3], p[0][6][2]],
          [p[0][7][0], p[0][7][1], p[0][7][3], p[0][7][2]],
          [p[0][4][0], p[0][4][1], p[0][4][3], p[0][4][2]],
        ],
        p[1],
      ];
    },
    Lz: function (p) {
      return [
        [
          [p[0][4][0], p[0][4][3], p[0][4][2], p[0][4][1]],
          [p[0][0][0], p[0][0][3], p[0][0][2], p[0][0][1]],
          [p[0][3][0], p[0][3][3], p[0][3][2], p[0][3][1]],
          [p[0][7][0], p[0][7][3], p[0][7][2], p[0][7][1]],
          [p[0][5][0], p[0][5][3], p[0][5][2], p[0][5][1]],
          [p[0][1][0], p[0][1][3], p[0][1][2], p[0][1][1]],
          [p[0][2][0], p[0][2][3], p[0][2][2], p[0][2][1]],
          [p[0][6][0], p[0][6][3], p[0][6][2], p[0][6][1]],
        ],
        p[1],
      ];
    },
    Lz_prime: function (p) {
      return [
        [
          [p[0][1][0], p[0][1][3], p[0][1][2], p[0][1][1]],
          [p[0][5][0], p[0][5][3], p[0][5][2], p[0][5][1]],
          [p[0][6][0], p[0][6][3], p[0][6][2], p[0][6][1]],
          [p[0][2][0], p[0][2][3], p[0][2][2], p[0][2][1]],
          [p[0][0][0], p[0][0][3], p[0][0][2], p[0][0][1]],
          [p[0][4][0], p[0][4][3], p[0][4][2], p[0][4][1]],
          [p[0][7][0], p[0][7][3], p[0][7][2], p[0][7][1]],
          [p[0][3][0], p[0][3][3], p[0][3][2], p[0][3][1]],
        ],
        p[1],
      ];
    },
    Rx: function (p) {
      return [
        p[0],
        [
          [p[1][3][0], p[1][3][2], p[1][3][1], p[1][3][3]],
          [p[1][2][0], p[1][2][2], p[1][2][1], p[1][2][3]],
          [p[1][6][0], p[1][6][2], p[1][6][1], p[1][6][3]],
          [p[1][7][0], p[1][7][2], p[1][7][1], p[1][7][3]],
          [p[1][0][0], p[1][0][2], p[1][0][1], p[1][0][3]],
          [p[1][1][0], p[1][1][2], p[1][1][1], p[1][1][3]],
          [p[1][5][0], p[1][5][2], p[1][5][1], p[1][5][3]],
          [p[1][4][0], p[1][4][2], p[1][4][1], p[1][4][3]],
        ],
      ];
    },
    Rx_prime: function (p) {
      return [
        p[0],
        [
          [p[1][4][0], p[1][4][2], p[1][4][1], p[1][4][3]],
          [p[1][5][0], p[1][5][2], p[1][5][1], p[1][5][3]],
          [p[1][1][0], p[1][1][2], p[1][1][1], p[1][1][3]],
          [p[1][0][0], p[1][0][2], p[1][0][1], p[1][0][3]],
          [p[1][7][0], p[1][7][2], p[1][7][1], p[1][7][3]],
          [p[1][6][0], p[1][6][2], p[1][6][1], p[1][6][3]],
          [p[1][2][0], p[1][2][2], p[1][2][1], p[1][2][3]],
          [p[1][3][0], p[1][3][2], p[1][3][1], p[1][3][3]],
        ],
      ];
    },
    Ry: function (p) {
      return [
        p[0],
        [
          [p[1][3][0], p[1][3][1], p[1][3][3], p[1][3][2]],
          [p[1][0][0], p[1][0][1], p[1][0][3], p[1][0][2]],
          [p[1][1][0], p[1][1][1], p[1][1][3], p[1][1][2]],
          [p[1][2][0], p[1][2][1], p[1][2][3], p[1][2][2]],
          [p[1][7][0], p[1][7][1], p[1][7][3], p[1][7][2]],
          [p[1][4][0], p[1][4][1], p[1][4][3], p[1][4][2]],
          [p[1][5][0], p[1][5][1], p[1][5][3], p[1][5][2]],
          [p[1][6][0], p[1][6][1], p[1][6][3], p[1][6][2]],
        ],
      ];
    },
    Ry_prime: function (p) {
      return [
        p[0],
        [
          [p[1][1][0], p[1][1][1], p[1][1][3], p[1][1][2]],
          [p[1][2][0], p[1][2][1], p[1][2][3], p[1][2][2]],
          [p[1][3][0], p[1][3][1], p[1][3][3], p[1][3][2]],
          [p[1][0][0], p[1][0][1], p[1][0][3], p[1][0][2]],
          [p[1][5][0], p[1][5][1], p[1][5][3], p[1][5][2]],
          [p[1][6][0], p[1][6][1], p[1][6][3], p[1][6][2]],
          [p[1][7][0], p[1][7][1], p[1][7][3], p[1][7][2]],
          [p[1][4][0], p[1][4][1], p[1][4][3], p[1][4][2]],
        ],
      ];
    },
    Rz: function (p) {
      return [
        p[0],
        [
          [p[1][4][0], p[1][4][3], p[1][4][2], p[1][4][1]],
          [p[1][0][0], p[1][0][3], p[1][0][2], p[1][0][1]],
          [p[1][3][0], p[1][3][3], p[1][3][2], p[1][3][1]],
          [p[1][7][0], p[1][7][3], p[1][7][2], p[1][7][1]],
          [p[1][5][0], p[1][5][3], p[1][5][2], p[1][5][1]],
          [p[1][1][0], p[1][1][3], p[1][1][2], p[1][1][1]],
          [p[1][2][0], p[1][2][3], p[1][2][2], p[1][2][1]],
          [p[1][6][0], p[1][6][3], p[1][6][2], p[1][6][1]],
        ],
      ];
    },
    Rz_prime: function (p) {
      return [
        p[0],
        [
          [p[1][1][0], p[1][1][3], p[1][1][2], p[1][1][1]],
          [p[1][5][0], p[1][5][3], p[1][5][2], p[1][5][1]],
          [p[1][6][0], p[1][6][3], p[1][6][2], p[1][6][1]],
          [p[1][2][0], p[1][2][3], p[1][2][2], p[1][2][1]],
          [p[1][0][0], p[1][0][3], p[1][0][2], p[1][0][1]],
          [p[1][4][0], p[1][4][3], p[1][4][2], p[1][4][1]],
          [p[1][7][0], p[1][7][3], p[1][7][2], p[1][7][1]],
          [p[1][3][0], p[1][3][3], p[1][3][2], p[1][3][1]],
        ],
      ];
    },
    Ix: function (p) {
      return [
        [
          p[0][0],
          [p[0][2][0], p[0][2][2], p[0][2][1], p[0][2][3]],
          [p[0][6][0], p[0][6][2], p[0][6][1], p[0][6][3]],
          p[0][3],
          p[0][4],
          [p[0][1][0], p[0][1][2], p[0][1][1], p[0][1][3]],
          [p[0][5][0], p[0][5][2], p[0][5][1], p[0][5][3]],
          p[0][7],
        ],
        [
          [p[1][3][0], p[1][3][2], p[1][3][1], p[1][3][3]],
          p[1][1],
          p[1][2],
          [p[1][7][0], p[1][7][2], p[1][7][1], p[1][7][3]],
          [p[1][0][0], p[1][0][2], p[1][0][1], p[1][0][3]],
          p[1][5],
          p[1][6],
          [p[1][4][0], p[1][4][2], p[1][4][1], p[1][4][3]],
        ],
      ];
    },
    Ix_prime: function (p) {
      return [
        [
          p[0][0],
          [p[0][5][0], p[0][5][2], p[0][5][1], p[0][5][3]],
          [p[0][1][0], p[0][1][2], p[0][1][1], p[0][1][3]],
          p[0][3],
          p[0][4],
          [p[0][6][0], p[0][6][2], p[0][6][1], p[0][6][3]],
          [p[0][2][0], p[0][2][2], p[0][2][1], p[0][2][3]],
          p[0][7],
        ],
        [
          [p[1][4][0], p[1][4][2], p[1][4][1], p[1][4][3]],
          p[1][1],
          p[1][2],
          [p[1][0][0], p[1][0][2], p[1][0][1], p[1][0][3]],
          [p[1][7][0], p[1][7][2], p[1][7][1], p[1][7][3]],
          p[1][5],
          p[1][6],
          [p[1][3][0], p[1][3][2], p[1][3][1], p[1][3][3]],
        ],
      ];
    },
    Ox: function (p) {
      return [
        [
          [p[0][3][0], p[0][3][2], p[0][3][1], p[0][3][3]],
          p[0][1],
          p[0][2],
          [p[0][7][0], p[0][7][2], p[0][7][1], p[0][7][3]],
          [p[0][0][0], p[0][0][2], p[0][0][1], p[0][0][3]],
          p[0][5],
          p[0][6],
          [p[0][4][0], p[0][4][2], p[0][4][1], p[0][4][3]],
        ],
        [
          p[1][0],
          [p[1][2][0], p[1][2][2], p[1][2][1], p[1][2][3]],
          [p[1][6][0], p[1][6][2], p[1][6][1], p[1][6][3]],
          p[1][3],
          p[1][4],
          [p[1][1][0], p[1][1][2], p[1][1][1], p[1][1][3]],
          [p[1][5][0], p[1][5][2], p[1][5][1], p[1][5][3]],
          p[1][7],
        ],
      ];
    },
    Ox_prime: function (p) {
      return [
        [
          [p[0][4][0], p[0][4][2], p[0][4][1], p[0][4][3]],
          p[0][1],
          p[0][2],
          [p[0][0][0], p[0][0][2], p[0][0][1], p[0][0][3]],
          [p[0][7][0], p[0][7][2], p[0][7][1], p[0][7][3]],
          p[0][5],
          p[0][6],
          [p[0][3][0], p[0][3][2], p[0][3][1], p[0][3][3]],
        ],
        [
          p[1][0],
          [p[1][5][0], p[1][5][2], p[1][5][1], p[1][5][3]],
          [p[1][1][0], p[1][1][2], p[1][1][1], p[1][1][3]],
          p[1][3],
          p[1][4],
          [p[1][6][0], p[1][6][2], p[1][6][1], p[1][6][3]],
          [p[1][2][0], p[1][2][2], p[1][2][1], p[1][2][3]],
          p[1][7],
        ],
      ];
    },
    gyro_x: function (p) {
      return [
        [
          [p[0][3][0], p[0][3][2], p[0][3][1], p[0][3][3]],
          [p[0][2][0], p[0][2][2], p[0][2][1], p[0][2][3]],
          [p[0][6][0], p[0][6][2], p[0][6][1], p[0][6][3]],
          [p[0][7][0], p[0][7][2], p[0][7][1], p[0][7][3]],
          [p[0][0][0], p[0][0][2], p[0][0][1], p[0][0][3]],
          [p[0][1][0], p[0][1][2], p[0][1][1], p[0][1][3]],
          [p[0][5][0], p[0][5][2], p[0][5][1], p[0][5][3]],
          [p[0][4][0], p[0][4][2], p[0][4][1], p[0][4][3]],
        ],
        [
          [p[1][3][0], p[1][3][2], p[1][3][1], p[1][3][3]],
          [p[1][2][0], p[1][2][2], p[1][2][1], p[1][2][3]],
          [p[1][6][0], p[1][6][2], p[1][6][1], p[1][6][3]],
          [p[1][7][0], p[1][7][2], p[1][7][1], p[1][7][3]],
          [p[1][0][0], p[1][0][2], p[1][0][1], p[1][0][3]],
          [p[1][1][0], p[1][1][2], p[1][1][1], p[1][1][3]],
          [p[1][5][0], p[1][5][2], p[1][5][1], p[1][5][3]],
          [p[1][4][0], p[1][4][2], p[1][4][1], p[1][4][3]],
        ],
      ];
    },
    gyro_x_prime: function (p) {
      return [
        [
          [p[0][4][0], p[0][4][2], p[0][4][1], p[0][4][3]],
          [p[0][5][0], p[0][5][2], p[0][5][1], p[0][5][3]],
          [p[0][1][0], p[0][1][2], p[0][1][1], p[0][1][3]],
          [p[0][0][0], p[0][0][2], p[0][0][1], p[0][0][3]],
          [p[0][7][0], p[0][7][2], p[0][7][1], p[0][7][3]],
          [p[0][6][0], p[0][6][2], p[0][6][1], p[0][6][3]],
          [p[0][2][0], p[0][2][2], p[0][2][1], p[0][2][3]],
          [p[0][3][0], p[0][3][2], p[0][3][1], p[0][3][3]],
        ],
        [
          [p[1][4][0], p[1][4][2], p[1][4][1], p[1][4][3]],
          [p[1][5][0], p[1][5][2], p[1][5][1], p[1][5][3]],
          [p[1][1][0], p[1][1][2], p[1][1][1], p[1][1][3]],
          [p[1][0][0], p[1][0][2], p[1][0][1], p[1][0][3]],
          [p[1][7][0], p[1][7][2], p[1][7][1], p[1][7][3]],
          [p[1][6][0], p[1][6][2], p[1][6][1], p[1][6][3]],
          [p[1][2][0], p[1][2][2], p[1][2][1], p[1][2][3]],
          [p[1][3][0], p[1][3][2], p[1][3][1], p[1][3][3]],
        ],
      ];
    },
    gyro_y: function (p) {
      return [
        [
          [p[0][3][2], p[0][3][1], p[0][3][0], p[0][3][3]],
          [p[0][2][2], p[0][2][1], p[0][2][0], p[0][2][3]],
          [p[1][3][2], p[1][3][1], p[1][3][0], p[1][3][3]],
          [p[1][2][2], p[1][2][1], p[1][2][0], p[1][2][3]],
          [p[0][7][2], p[0][7][1], p[0][7][0], p[0][7][3]],
          [p[0][6][2], p[0][6][1], p[0][6][0], p[0][6][3]],
          [p[1][7][2], p[1][7][1], p[1][7][0], p[1][7][3]],
          [p[1][6][2], p[1][6][1], p[1][6][0], p[1][6][3]],
        ],
        [
          [p[0][1][2], p[0][1][1], p[0][1][0], p[0][1][3]],
          [p[0][0][2], p[0][0][1], p[0][0][0], p[0][0][3]],
          [p[1][1][2], p[1][1][1], p[1][1][0], p[1][1][3]],
          [p[1][0][2], p[1][0][1], p[1][0][0], p[1][0][3]],
          [p[0][5][2], p[0][5][1], p[0][5][0], p[0][5][3]],
          [p[0][4][2], p[0][4][1], p[0][4][0], p[0][4][3]],
          [p[1][5][2], p[1][5][1], p[1][5][0], p[1][5][3]],
          [p[1][4][2], p[1][4][1], p[1][4][0], p[1][4][3]],
        ],
      ];
    },
    gyro_y_prime: function (p) {
      return [
        [
          [p[1][1][2], p[1][1][1], p[1][1][0], p[1][1][3]],
          [p[1][0][2], p[1][0][1], p[1][0][0], p[1][0][3]],
          [p[0][1][2], p[0][1][1], p[0][1][0], p[0][1][3]],
          [p[0][0][2], p[0][0][1], p[0][0][0], p[0][0][3]],
          [p[1][5][2], p[1][5][1], p[1][5][0], p[1][5][3]],
          [p[1][4][2], p[1][4][1], p[1][4][0], p[1][4][3]],
          [p[0][5][2], p[0][5][1], p[0][5][0], p[0][5][3]],
          [p[0][4][2], p[0][4][1], p[0][4][0], p[0][4][3]],
        ],
        [
          [p[1][3][2], p[1][3][1], p[1][3][0], p[1][3][3]],
          [p[1][2][2], p[1][2][1], p[1][2][0], p[1][2][3]],
          [p[0][3][2], p[0][3][1], p[0][3][0], p[0][3][3]],
          [p[0][2][2], p[0][2][1], p[0][2][0], p[0][2][3]],
          [p[1][7][2], p[1][7][1], p[1][7][0], p[1][7][3]],
          [p[1][6][2], p[1][6][1], p[1][6][0], p[1][6][3]],
          [p[0][7][2], p[0][7][1], p[0][7][0], p[0][7][3]],
          [p[0][6][2], p[0][6][1], p[0][6][0], p[0][6][3]],
        ],
      ];
    },
    gyro_z: function (p) {
      return [
        [
          [p[0][4][1], p[0][4][0], p[0][4][2], p[0][4][3]],
          [p[0][5][1], p[0][5][0], p[0][5][2], p[0][5][3]],
          [p[0][6][1], p[0][6][0], p[0][6][2], p[0][6][3]],
          [p[0][7][1], p[0][7][0], p[0][7][2], p[0][7][3]],
          [p[1][5][1], p[1][5][0], p[1][5][2], p[1][5][3]],
          [p[1][4][1], p[1][4][0], p[1][4][2], p[1][4][3]],
          [p[1][7][1], p[1][7][0], p[1][7][2], p[1][7][3]],
          [p[1][6][1], p[1][6][0], p[1][6][2], p[1][6][3]],
        ],
        [
          [p[0][1][1], p[0][1][0], p[0][1][2], p[0][1][3]],
          [p[0][0][1], p[0][0][0], p[0][0][2], p[0][0][3]],
          [p[0][3][1], p[0][3][0], p[0][3][2], p[0][3][3]],
          [p[0][2][1], p[0][2][0], p[0][2][2], p[0][2][3]],
          [p[1][0][1], p[1][0][0], p[1][0][2], p[1][0][3]],
          [p[1][1][1], p[1][1][0], p[1][1][2], p[1][1][3]],
          [p[1][2][1], p[1][2][0], p[1][2][2], p[1][2][3]],
          [p[1][3][1], p[1][3][0], p[1][3][2], p[1][3][3]],
        ],
      ];
    },
    gyro_z_prime: function (p) {
      return [
        [
          [p[1][1][1], p[1][1][0], p[1][1][2], p[1][1][3]],
          [p[1][0][1], p[1][0][0], p[1][0][2], p[1][0][3]],
          [p[1][3][1], p[1][3][0], p[1][3][2], p[1][3][3]],
          [p[1][2][1], p[1][2][0], p[1][2][2], p[1][2][3]],
          [p[0][0][1], p[0][0][0], p[0][0][2], p[0][0][3]],
          [p[0][1][1], p[0][1][0], p[0][1][2], p[0][1][3]],
          [p[0][2][1], p[0][2][0], p[0][2][2], p[0][2][3]],
          [p[0][3][1], p[0][3][0], p[0][3][2], p[0][3][3]],
        ],
        [
          [p[1][4][1], p[1][4][0], p[1][4][2], p[1][4][3]],
          [p[1][5][1], p[1][5][0], p[1][5][2], p[1][5][3]],
          [p[1][6][1], p[1][6][0], p[1][6][2], p[1][6][3]],
          [p[1][7][1], p[1][7][0], p[1][7][2], p[1][7][3]],
          [p[0][5][1], p[0][5][0], p[0][5][2], p[0][5][3]],
          [p[0][4][1], p[0][4][0], p[0][4][2], p[0][4][3]],
          [p[0][7][1], p[0][7][0], p[0][7][2], p[0][7][3]],
          [p[0][6][1], p[0][6][0], p[0][6][2], p[0][6][3]],
        ],
      ];
    },
    Uy2: function (p) {
      return [
        [
          p[1][2],
          p[1][3],
          p[1][0],
          p[1][1],
          p[0][4],
          p[0][5],
          p[0][6],
          p[0][7],
        ],
        [
          p[0][2],
          p[0][3],
          p[0][0],
          p[0][1],
          p[1][4],
          p[1][5],
          p[1][6],
          p[1][7],
        ],
      ];
    },
    Dy2: function (p) {
      return [
        [
          p[0][0],
          p[0][1],
          p[0][2],
          p[0][3],
          p[1][6],
          p[1][7],
          p[1][4],
          p[1][5],
        ],
        [
          p[1][0],
          p[1][1],
          p[1][2],
          p[1][3],
          p[0][6],
          p[0][7],
          p[0][4],
          p[0][5],
        ],
      ];
    },
    Fz2: function (p) {
      return [
        [p[0][0], p[0][1], p[1][7], p[1][6], p[0][4], p[0][5], p[1][3], p[1][2]],
        [p[1][0], p[1][1], p[0][7], p[0][6], p[1][4], p[1][5], p[0][3], p[0][2]]
      ];
    },
    Bz2: function (p) {
      return [
        [p[1][5], p[1][4], p[0][2], p[0][3], p[1][1], p[1][0], p[0][6], p[0][7]],
        [p[0][5], p[0][4], p[1][2], p[1][3], p[0][1], p[0][0], p[1][6], p[1][7]]
      ];
    },
    LRx: function (c) {
      return [
        [c[3][0], c[3][2], c[3][1], c[3][3]],
        [c[2][0], c[2][2], c[2][1], c[2][3]],
        [c[6][0], c[6][2], c[6][1], c[6][3]],
        [c[7][0], c[7][2], c[7][1], c[7][3]],
        [c[0][0], c[0][2], c[0][1], c[0][3]],
        [c[1][0], c[1][2], c[1][1], c[1][3]],
        [c[5][0], c[5][2], c[5][1], c[5][3]],
        [c[4][0], c[4][2], c[4][1], c[4][3]],
      ];
    },
    LRy: function (c) {
      return [
        [c[3][0], c[3][1], c[3][3], c[3][2]],
        [c[0][0], c[0][1], c[0][3], c[0][2]],
        [c[1][0], c[1][1], c[1][3], c[1][2]],
        [c[2][0], c[2][1], c[2][3], c[2][2]],
        [c[7][0], c[7][1], c[7][3], c[7][2]],
        [c[4][0], c[4][1], c[4][3], c[4][2]],
        [c[5][0], c[5][1], c[5][3], c[5][2]],
        [c[6][0], c[6][1], c[6][3], c[6][2]],
      ];
    },
    LRz: function (c) {
      return [
        [c[4][0], c[4][3], c[4][2], c[4][1]],
        [c[0][0], c[0][3], c[0][2], c[0][1]],
        [c[3][0], c[3][3], c[3][2], c[3][1]],
        [c[7][0], c[7][3], c[7][2], c[7][1]],
        [c[5][0], c[5][3], c[5][2], c[5][1]],
        [c[1][0], c[1][3], c[1][2], c[1][1]],
        [c[2][0], c[2][3], c[2][2], c[2][1]],
        [c[6][0], c[6][3], c[6][2], c[6][1]],
      ];
    },
    hashtag: function (p) {
      return [
        [
          [p[1][3][3], p[1][3][2], p[1][3][1], p[1][3][0]],
          [p[0][2][3], p[0][2][2], p[0][2][1], p[0][2][0]],
          [p[0][1][3], p[0][1][2], p[0][1][1], p[0][1][0]],
          [p[1][0][3], p[1][0][2], p[1][0][1], p[1][0][0]],
          [p[0][5][3], p[0][5][2], p[0][5][1], p[0][5][0]],
          [p[1][4][3], p[1][4][2], p[1][4][1], p[1][4][0]],
          [p[1][7][3], p[1][7][2], p[1][7][1], p[1][7][0]],
          [p[0][6][3], p[0][6][2], p[0][6][1], p[0][6][0]],
        ],
        [
          [p[0][3][3], p[0][3][2], p[0][3][1], p[0][3][0]],
          [p[1][2][3], p[1][2][2], p[1][2][1], p[1][2][0]],
          [p[1][1][3], p[1][1][2], p[1][1][1], p[1][1][0]],
          [p[0][0][3], p[0][0][2], p[0][0][1], p[0][0][0]],
          [p[1][5][3], p[1][5][2], p[1][5][1], p[1][5][0]],
          [p[0][4][3], p[0][4][2], p[0][4][1], p[0][4][0]],
          [p[0][7][3], p[0][7][2], p[0][7][1], p[0][7][0]],
          [p[1][6][3], p[1][6][2], p[1][6][1], p[1][6][0]],
        ],
      ];
    },
  },
  handleKeydown: function (e) {
    const m = this.move;
    switch (e.code) {
      case this.keys[0]:
        this.puzzleState = m.Lx(this.puzzleState);
        break;
      case this.keys[1]:
        this.puzzleState = m.Lx_prime(this.puzzleState);
        break;
      case this.keys[2]:
        this.puzzleState = m.Ly(this.puzzleState);
        break;
      case this.keys[3]:
        this.puzzleState = m.Ly_prime(this.puzzleState);
        break;
      case this.keys[4]:
        this.puzzleState = m.Lz(this.puzzleState);
        break;
      case this.keys[5]:
        this.puzzleState = m.Lz_prime(this.puzzleState);
        break;
      case this.keys[6]:
        this.puzzleState = m.Rx(this.puzzleState);
        break;
      case this.keys[7]:
        this.puzzleState = m.Rx_prime(this.puzzleState);
        break;
      case this.keys[8]:
        this.puzzleState = m.Ry(this.puzzleState);
        break;
      case this.keys[9]:
        this.puzzleState = m.Ry_prime(this.puzzleState);
        break;
      case this.keys[10]:
        this.puzzleState = m.Rz(this.puzzleState);
        break;
      case this.keys[11]:
        this.puzzleState = m.Rz_prime(this.puzzleState);
        break;
      case this.keys[12]:
        this.puzzleState = m.Uy2(this.puzzleState);
        break;
      case this.keys[13]:
        this.puzzleState = m.Dy2(this.puzzleState);
        break;
      case this.keys[14]:
        this.puzzleState = m.Ix(this.puzzleState);
        break;
      case this.keys[15]:
        this.puzzleState = m.Ix(this.puzzleState);
        break;
      case this.keys[16]:
        this.puzzleState = m.Ix_prime(this.puzzleState);
        break;
      case this.keys[17]:
        this.puzzleState = m.Ix_prime(this.puzzleState);
        break;
      case this.keys[18]:
        this.puzzleState = m.gyro_z(this.puzzleState);
        break;
      case this.keys[19]:
        this.puzzleState = m.gyro_z_prime(this.puzzleState);
        break;
    }
    this.permuteCube(this.puzzleState);
  },
  handleKeyup: function (_e) {},
  permuteCube: function (p) {
    let orderedtris = [
      p[0][0][3],
      p[0][3][3],
      p[0][4][3],
      p[0][7][3],
      p[0][0][0],
      p[0][3][0],
      p[0][7][0],
      p[0][4][0],
      p[0][3][2],
      p[0][2][2],
      p[0][7][2],
      p[0][6][2],
      p[0][3][0],
      p[0][2][0],
      p[0][6][0],
      p[0][7][0],
      p[0][7][1],
      p[0][6][1],
      p[0][4][1],
      p[0][5][1],
      p[0][7][0],
      p[0][6][0],
      p[0][5][0],
      p[0][4][0],
      p[0][1][2],
      p[0][0][2],
      p[0][5][2],
      p[0][4][2],
      p[0][1][0],
      p[0][0][0],
      p[0][4][0],
      p[0][5][0],
      p[0][0][1],
      p[0][1][1],
      p[0][3][1],
      p[0][2][1],
      p[0][0][0],
      p[0][1][0],
      p[0][2][0],
      p[0][3][0],
      p[0][2][3],
      p[0][1][3],
      p[0][6][3],
      p[0][5][3],
      p[0][2][0],
      p[0][1][0],
      p[0][5][0],
      p[0][6][0],
      p[1][1][2],
      p[1][0][2],
      p[1][5][2],
      p[1][4][2],
      p[1][1][0],
      p[1][0][0],
      p[1][4][0],
      p[1][5][0],
      p[1][3][2],
      p[1][2][2],
      p[1][7][2],
      p[1][6][2],
      p[1][3][0],
      p[1][2][0],
      p[1][6][0],
      p[1][7][0],
      p[1][7][1],
      p[1][6][1],
      p[1][4][1],
      p[1][5][1],
      p[1][7][0],
      p[1][6][0],
      p[1][5][0],
      p[1][4][0],
      p[1][2][3],
      p[1][1][3],
      p[1][6][3],
      p[1][5][3],
      p[1][2][0],
      p[1][1][0],
      p[1][5][0],
      p[1][6][0],
      p[1][0][3],
      p[1][3][3],
      p[1][4][3],
      p[1][7][3],
      p[1][0][0],
      p[1][3][0],
      p[1][7][0],
      p[1][4][0],
      p[1][0][1],
      p[1][1][1],
      p[1][3][1],
      p[1][2][1],
      p[1][0][0],
      p[1][1][0],
      p[1][2][0],
      p[1][3][0],
    ]; /* LR UD FB IO */

    for (let i = 0; i < orderedtris.length; i++) {
      let tri = document.getElementById(`tri${i}`);
      if (tri) {
        tri.setAttribute('fill', this.colors[orderedtris[i]]);
      }
    }
  },
  reset: function () {
    for (let i = 0; i < 96; i++) {
      let tri = document.getElementById(`tri${i}`);
      if (tri) {
        tri.setAttribute('stroke', 'black');
        tri.setAttribute('stroke-linecap', 'round');
        tri.setAttribute('stroke-linejoin', 'round');
      }
    }
    this.puzzleState = [
      [
        [0, 7, 2, 5],
        [0, 7, 2, 4],
        [0, 7, 3, 4],
        [0, 7, 3, 5],
        [0, 6, 2, 5],
        [0, 6, 2, 4],
        [0, 6, 3, 4],
        [0, 6, 3, 5],
      ],
      [
        [1, 7, 2, 4],
        [1, 7, 2, 5],
        [1, 7, 3, 5],
        [1, 7, 3, 4],
        [1, 6, 2, 4],
        [1, 6, 2, 5],
        [1, 6, 3, 5],
        [1, 6, 3, 4],
      ],
    ];
    this.permuteCube(this.puzzleState);
  },
  resetHighlights: function () {
    for (let i = 0; i < 96; i++) {
      let tri = document.getElementById(`tri${i}`);
      if (tri) {
        tri.setAttribute('stroke-width', '0.33');
      let parent = tri.parentNode;
        parent.insertBefore(tri, parent.firstChild);
      }
    }
  },
  getPermutation: function () {
    let perm = [];
    for (let i = 0; i < 96; i++) {
      let tri = document.getElementById(`tri${i}`);
      if (tri) {
        perm.push(tri.getAttribute('fill'));
      } else {
        perm.push(null);
      }
    }
    return perm;
  },
  updateHighlights: function (oldPerm) {
    const newPerm = this.getPermutation();
    for (let i = 0; i < this.cubies.length; i++) {
      const cubie = this.cubies[i];
      let changed = false;
      for (let j = 0; j < cubie.length; j++) {
        if (oldPerm[cubie[j]] !== newPerm[cubie[j]]) {
          changed = true;
          break;
        }
      }
      if (changed) {
        for (let k = 0; k < cubie.length; k++) {
          let tri = document.getElementById(cubie[k]);
          if (tri) {
            tri.setAttribute('stroke-width', '1.75');
            let parent = tri.parentNode;
            parent.appendChild(tri);
          }
        }
      }
    }
  },
  LorRTurn: function (p, num) {
    const m = this.move;
    if (num == 0) {
      return m.LRy(p);
    } else if (num == 1) {
      return m.LRy(m.LRy(m.LRy(p)));
    } else if (num == 2) {
      return m.LRy(m.LRy(p));
    } else if (num == 3) {
      return m.LRx(m.LRx(p));
    } else if (num == 4) {
      return m.LRz(m.LRz(p));
    } else if (num == 5) {
      return m.LRy(m.LRx(m.LRx(p)));
    } else if (num == 6) {
      return m.LRy(m.LRy(m.LRy(m.LRx(m.LRx(p)))));
    } else if (num == 7) {
      return m.LRx(p);
    } else if (num == 8) {
      return m.LRy(m.LRx(p));
    } else if (num == 9) {
      return m.LRy(m.LRy(m.LRy(m.LRx(p))));
    } else if (num == 10) {
      return m.LRy(m.LRy(m.LRx(p)));
    } else if (num == 11) {
      return m.LRx(m.LRx(m.LRx(p)));
    } else if (num == 12) {
      return m.LRy(m.LRx(m.LRx(m.LRx(p))));
    } else if (num == 13) {
      return m.LRy(m.LRy(m.LRy(m.LRx(m.LRx(m.LRx(p))))));
    } else if (num == 14) {
      return m.LRy(m.LRy(m.LRx(m.LRx(m.LRx(p)))));
    } else if (num == 15) {
      return m.LRz(p);
    } else if (num == 16) {
      return m.LRy(m.LRz(p));
    } else if (num == 17) {
      return m.LRy(m.LRy(m.LRy(m.LRz(p))));
    } else if (num == 18) {
      return m.LRy(m.LRy(m.LRz(p)));
    } else if (num == 19) {
      return m.LRz(m.LRz(m.LRz(p)));
    } else if (num == 20) {
      return m.LRy(m.LRz(m.LRz(m.LRz(p))));
    } else if (num == 21) {
      return m.LRy(m.LRy(m.LRy(m.LRz(m.LRz(m.LRz(p))))));
    } else if (num == 22) {
      return m.LRy(m.LRy(m.LRz(m.LRz(m.LRz(p)))));
    } else {
      return p;
    }
  },
  randomize: function () {
    /* Generates a random scramble sequence and draws the resulting 4D Rubik's cube, based on the scrambling algorithm from https://2x2x2x2scrambler.github.io/ */
    const physmoves = [
      'y',
      "y'",
      'y2',
      'x2',
      'z2',
      'x2,y',
      "x2,y'",
      'x',
      'x,y',
      "x,y'",
      'x,y2',
      "x'",
      "x',y",
      "x',y'",
      "x',y2",
      'z',
      'z,y',
      "z,y'",
      'z,y2',
      "z'",
      "z',y",
      "z',y'",
      "z',y2",
      '',
    ];
    const scrambleLength = [16, 14, 12];
    let str = '<br>Scramble Notation: ';
    let scrambleLen = scrambleLength[Math.floor(Math.random() * 3)];
    for (let i = 0; i < scrambleLen; i++) {
      let Lrand = Math.floor(Math.random() * 24);
      this.puzzleState[0] = this.LorRTurn(this.puzzleState[0], Lrand);
      let Rrand = Math.floor(Math.random() * 24);
      this.puzzleState[1] = this.LorRTurn(this.puzzleState[1], Rrand);
      this.puzzleState = this.move.hashtag(this.puzzleState);
      let Lrandstr = '';
      let Rrandstr = '';
      if (Lrand !== 24) {
        Lrandstr = 'L' + physmoves[Lrand] + ' ';
      }
      if (Rrand !== 24) {
        Rrandstr = 'R' + physmoves[Rrand] + ' ';
      }
      str += Lrandstr + Rrandstr + '# ';
    }
    str.replace('# # ', '');
    document.getElementById('scramblenotation').innerHTML = str;
    this.permuteCube(this.puzzleState);
  },
};

