
// functions

function convertor() {
    window.onload = function () {
        let c = { 'USD': '11000', 'EUR': '12000', 'RUB': '60', 'UZS': '1' }; // Устанавливаем курс валют

        let val = document.getElementById('val'); // Получаем элемент ввода данных
        let currency1 = document.getElementById('cur1'); // Получаем первый селект
        let currency2 = document.getElementById('cur2'); // Получаем второй селект
        let result = document.getElementsByClassName('convert_result')[0]; // Получаем поле куда будем писать результат
        function summ() { // Делаем функцию
            let z = 0;
            if (currency1.value === currency2.value) { // Если оба значения в селектах равны
                result.innerText = val.value; // То просто вписываем данные из поля ввода
            } else {
                if (currency1.value != 'UZS') { // Если не равны uzs, то
                    z = val.value * c[currency1.value]; // Переводим сумму в uzs
                    result.innerHTML = Math.ceil((z / c[currency2.value]) * 100) / 100; // Делим на курс и округляем до сотых
                } else { // Если не равны
                    result.innerHTML = Math.ceil((val.value * c[currency2.value]) * 100) / 100; // Умножаем на курс и округляем до сотых
                }
            }
        }
        val.oninput = function () { // При вводе данных в поле вызываем функцию.
            summ();
        };
        currency1.onchange = function () { // При смене первого селекта вызываем функцию.
            summ();
        };
        currency2.onchange = function () { // При смене второго селекта вызываем функцию.
            summ();
        }
    }
}
convertor()

function offer() {
    const offerBtn = document.querySelectorAll('.main__offer-btn ul li a')
    const offerCon = document.querySelectorAll('.main__offer-con')
    offerBtn?.forEach(el => {
        el.addEventListener('click', () => {
            offerCon.forEach(all => {
                all.classList.remove('active')
            })
            offerBtn.forEach(all => {
                all.classList.remove('active')
            })
            const target = el.getAttribute("slide-number")
            offerCon.forEach(el => {
                let id = el.getAttribute('slide-number')
                if (id == target) {
                    el.classList.add('active')
                }
            })
            el.classList.add('active')
        })
    })
}
offer()

function news() {
    const newsCon = document.querySelectorAll('.news__container')
    const divs = document.querySelectorAll('.main-left .left-wrapper')
    const btns = document.querySelectorAll('.main-news__box-title')
    const closeBtns = document.querySelectorAll('.news-close')

    btns.forEach(el => {
        el.addEventListener('click', () => {
            newsCon.forEach(el => {
                el.classList.add('active')
            })
            divs?.forEach(el => {
                el.style.display = 'none';
            })
        })
    })
    closeBtns?.forEach(el => {
        el.addEventListener('click', () => {
            newsCon.forEach(el => {
                el.classList.remove('active')
            })
            divs?.forEach(el => {
                el.style.display = 'block';
            })
        })
    })
}
news()



// header

const header = document.getElementById('header')
const headerHeight = header.clientHeight
document.getElementById('body').style.marginTop = headerHeight + 'px'

function language() {

    const headerBtn = document.querySelectorAll('.header__lang-toggle-btn')

    headerBtn?.forEach(el => {
        el.addEventListener('click', () => {
            headerBtn?.forEach(all => { all.classList.remove('active') })
            el.classList.add('active')

            const img = el.getAttribute('img-path')
            document.querySelector('.header__lang-title img').setAttribute('src', img)
            document.querySelector('.header__lang-title source').setAttribute('srcset', img)
            const languageText = el.querySelector('p').innerHTML
            document.querySelector('.header__lang-title p').innerHTML = languageText
        })
    })

}
language()

function menu() {

    const menuBtn = document.querySelector('.header__menu')
    const menuSpan = document.querySelector('.header__con-back-btn')
    const menu = document.getElementById('menu')
    const menuCon = document.querySelector('.menu__con')



    menu.style.top = headerHeight + 'px'

    let id = false
    menuBtn.addEventListener('click', () => {
        if (id == false) {
            menu.classList.add('active')
            if (window.matchMedia("(max-width: 768px)").matches) {
                const menuConHeight = menuCon.clientHeight + 40
                menu.style.height = menuConHeight + 'px'
            } else {
                const menuConHeight = menuCon.clientHeight + 80
                menu.style.height = menuConHeight + 'px'
            }
            menuSpan.classList.add('active')
            id = true
        } else {
            menu.classList.remove('active')
            menu.style.height = '0px'
            menuSpan.classList.remove('active')
            id = false
        }
    })


    document.querySelectorAll('.stat')?.forEach(stat => {
        if (stat.innerHTML.charAt(0) == '+') {
            stat.style.color = 'green'
        } else {
            stat.style.color = 'red'
        }
    })
}
menu()

