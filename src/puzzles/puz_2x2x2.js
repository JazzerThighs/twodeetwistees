export const rubiks_junior_2x2x2 = {
    titletext: "2×2×2 Rubik's Junior 2D Projection",
    subtitletext: "",
    controlstext: "",
    svgversions: [],
    linkedtris: [
        ["LQ3F", "LQ4F", "LQ2F", "LQ1F"], //Front
        ["RQ3F", "RQ4F", "RQ2F", "RQ1F"], //Back
        ["LQ2U", "LQ1U", "RQ2U", "RQ1U"], //Up
        ["LQ3U", "LQ4U", "RQ3U", "RQ4U"], //Down
        ["LQ4S", "LQ1S", "RQ3S", "RQ2S"], //Right
        ["LQ3S", "LQ2S", "RQ4S", "RQ1S"] //Left
    ],
    cubies: [
        ["LQ1F", "LQ1S", "LQ1U"],
        ["LQ2F", "LQ2S", "LQ2U"],
        ["LQ3F", "LQ3S", "LQ3U"],
        ["LQ4F", "LQ4S", "LQ4U"],
        ["RQ1F", "RQ1S", "RQ1U"],
        ["RQ2F", "RQ2S", "RQ2U"],
        ["RQ3F", "RQ3S", "RQ3U"],
        ["RQ4F", "RQ4S", "RQ4U"]
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
        ["LQ3S", "LQ2U"]
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
        ["RQ2U", "RQ3S"]
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
        ["LQ1F", "LQ2S"]
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
        ["LQ3S", "LQ4F"]
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
        ["LQ4F", "LQ1U"]
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
        ["LQ2U", "LQ3F"]
    ], //L
    
    
}
