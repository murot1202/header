/* class Human {
    constructor() {
        this.legs = 2
        this.head = 1
        this.hands = 2
        this.eyes = 2
    }
}

class Man extends Human {
    constructor(obj) {
        super(obj)
        this.gender = obj.gender
    }
}

class Women extends Man {
    constructor(obj) {
        super(obj)
        this.hair = obj.hair
    }
}

let women = new Women({
    gender: 'ayol',
    hair: 'long'
})

let man = new Man({
    gender: 'erkak'
})
console.log(man, women);
 */


class Scroll {
    constructor(config){
        this.el = document.querySelector(config.el)
        this.el.style.position = 'fixed'
        this.top = config.top
        this.unit = config.unit
        this.el.style.top = this.scroll()
        
        
        window.addEventListener('scroll', ()=> this.scroll())
        window.addEventListener('resize', ()=> this.scroll())
    }
    
    scroll() {
        this.elTop = this.scrollNumber()
        if (this.scrollNumber() - pageYOffset > 0) {
            this.el.style.top = this.scrollNumber() - pageYOffset + 'px'
        } else {
            this.el.style.top = '0px'
        }
    }
    
    scrollNumber() {
        if(this.unit == 'px') {
            return this.top > 0 ? this.top : 0
        } else if (this.unit == '%') {
            return window.innerHeight / 100 * this.top - this.el.clientHeight
        }
    }
    calc() {
        
    }
    
}

let nav = new Scroll({
    el: '.header__nav',
    top: 100,
    unit: '%'
})


class Write {
    constructor(config) {
        this.speed = config.speed
        this.el = document.querySelector(config.el)
        this.text = this.el.innerHTML
        this.el.innerHTML = ''
        
        this.write()
    }
    write(i = 0) {
        this.el.innerHTML += this.text[i]
        
        if (this.el.innerHTML != this.text) {
            setTimeout(() => {
                this.write(++i)
            }, this.speed);
        }
    }
}

const write = new Write({
    el: '.header__content h1',
    speed: 100
})
const write1 = new Write({
    el: '.header__content p',
    speed: 70
})


class Mouse{
    constructor(config){
        this.el = document.querySelector(config.el)
        this.header = document.querySelector(config.header)

        this.header.style.position = 'relative'
        this.el.style.position = 'absolute'
        this.el.style.marginTop = window.innerHeight / 2 + 'px'
        this.el.style.marginLeft = window.innerWidth / 2.45 + 'px'
        
        this.el.addEventListener('mouseover', () => {
            this.mouseo()
        })
    }
    mouseo() {
        this.el.style.marginTop = this.mouseHeight() + 'px'
        this.el.style.marginLeft = this.mouseWidth() + 'px'
    }

    randomWidth() {
        return Math.floor(Math.random() * window.innerWidth)
    }
    randomHeight() {
        return Math.floor(Math.random() * window.innerHeight)
    }
    mouseHeight() {
        return this.randomHeight() - this.el.clientHeight
    }
    mouseWidth() {
        return this.randomWidth() - this.el.clientWidth
    }
}
const x = new Mouse({
    el: '.header__content',
    header: '.header',
})

class Menu{
    constructor(config) {
        this.el = document.querySelector(config.el)
        this.headerMenu = document.querySelector(config.headerMenu)
        this.headerClass = document.querySelector(config.headerClass)
        this.close = document.querySelector(config.close)

        this.headerMenu.style.transform = 'translateX(-100%)'
        this.headerMenu.style.background = 'white'
        this.headerMenu.style.flexDirection = 'column'
        this.headerMenu.style.width = '30%'
        this.headerMenu.style.height = window.innerHeight + 'px'
        this.headerMenu.style.borderRadius = '5px'
        this.headerMenu.style.paddingLeft = '15px'
        this.headerMenu.style.paddingTop = '15px'
        this.close.style.paddingLeft = '300px'


        this.headerClass.addEventListener('click', () =>{
            this.headerMenu.style.transform = 'translateX(0%)'
        })

        this.close.addEventListener('click', () => {
            this.headerMenu.style.transform = 'translateX(-100%)'
        })
    }
}

const menyu = new Menu({
    el: '.header',
    headerClass: '.header__menu-class',
    headerMenu: '.header__menu',
    close: '.close',
})