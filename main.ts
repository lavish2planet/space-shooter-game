controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . 1 9 9 9 9 9 9 9 9 9 9 9 1 . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.destroy()
    scene.cameraShake(4, 500)
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
    info.startCountdown(60)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
let enemyShip: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . f f f f . . . 
    . . . . . . . . f f f f f . . . 
    . . . . . . . f f d d d f . . . 
    . . . . . . f f 4 4 4 4 f . . . 
    . . . . . f f 5 5 5 5 5 f . . . 
    . . . . f f 2 2 2 2 2 2 f . . . 
    . . . . f f 2 2 2 2 2 2 f . . . 
    . . . . . f f 5 5 5 5 5 f . . . 
    . . . . . . f f 4 4 4 4 f . . . 
    . . . . . . . f f d d d f . . . 
    . . . . . . . . f f f f f . . . 
    . . . . . . . . . f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
game.onUpdateInterval(2000, function () {
    enemyShip = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . 2 2 f f 2 . . . . . . 
        . . . 2 2 f f f f 2 . . . . . . 
        . . 2 9 9 9 9 9 9 2 . . . . . . 
        . . 2 9 9 9 9 9 9 2 . . . . . . 
        . . . 2 2 f f f f 2 . . . . . . 
        . . . . . 2 2 f f 2 . . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemyShip.x = scene.screenWidth()
    enemyShip.vx = -20
    enemyShip.y = randint(10, scene.screenHeight() - 10)
})
