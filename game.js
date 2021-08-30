kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0,0,0,1]
})

loadRoot('sprites/')
loadSprite('coin', 'coin.png');
loadSprite('evil-shroom', 'coin.png');
loadSprite('brick', 'brick.png');
loadSprite('surprise-brick', 'question-brick.png');
loadSprite('block', 'block.png');
loadSprite('mario', 'mario.png');
loadSprite('mushroom', 'mushroom.png');
loadSprite('pipe-top-left', 'pipe-top-left.png');
loadSprite('pipe-top-right', 'pipe-top-right.png');
loadSprite('pipe-bottom-left', 'pipe-bottom-left.png');
loadSprite('pipe-bottom-right', 'pipe-bottom-right.png');

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        '                                                     ',
        '                                                     ',
        '             %                    *                  ',
        '                                 ====                ',
        '    ?     n?n?n                                      ',
        '                       -+                            ',
        '                       1!                            ',
        '=========================   =========================',
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block', solid())],
        '%': [sprite('coin')],
        '?': [sprite('surprise-brick', solid())],
        '*': [sprite('mushroom', solid())],
        'n': [sprite('brick', solid())],
        '-': [sprite('pipe-top-left', solid()), scale(0.5)],
        '+': [sprite('pipe-top-right', solid()), scale(0.5)],
        '1': [sprite('pipe-bottom-left', solid()), scale(0.5)],
        '!': [sprite('pipe-bottom-right', solid()), scale(0.5)],
    }

    const gameLevel = addLevel(map, levelCfg);

    const player = add([
        sprite('mario'), 
        pos(30,140),  
        origin('bot'),

    ])
})

go("game");
