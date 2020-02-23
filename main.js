let n 
初始化()
let timer = setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n+1))
    n += 1
}, 3000)

document.addEventListener('visibilitychange', function () {
    console.log(document.hidden)
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
       timer =  setInterval(() => {
            makeLeave(getImage(n))
                .one('transitionend', (e) => {
                    makeEnter($(e.currentTarget))
                })
            makeCurrent(getImage(n+1))
            n += 1
        }, 3000)
    }
})














// 下面可以不看
function getImage(n) {
   return $(`.images>img:nth-child(${x(n)})`)
}

function x(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        } // n = 1 2 3
    }
    return n
}

function 初始化() {
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function makeCurrent($node) {
    $node.removeClass('enter leave').addClass('current')
}
function makeEnter($node) {
    $node.removeClass('leave current').addClass('enter')
}
function makeLeave($node) {
    $node.removeClass('enter current').addClass('leave')
    return $node
}