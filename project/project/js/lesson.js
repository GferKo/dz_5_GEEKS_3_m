// PHONE CHECKER

const phoneInput = document.querySelector('#phone-input');
const phoneButton = document.querySelector('#phone-button');
const phoneResult = document.querySelector('#phone-result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.innerHTML = 'OK'
//         phoneResult.style.color = 'green';
//     } else {
//         phoneResult.innerHTML = 'ERROR'
//         phoneResult.style.color = 'red';
//     }
// }

//tab slider

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    });
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    });
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}


// DZ 3 task 1
let currentIndex = 0;

const autoSlide = () => {
    currentIndex = (currentIndex + 1) % tabContentBlocks.length;
    hideTabContent();
    showTabContent(currentIndex);
}

setInterval(autoSlide, 3000);


//CONVERTER

const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');

const converter = (element) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            const usdToSom = 1 / data.usd
            const eurToSom = 1 / data.eur

            if (element.id === 'som') {
                const somValue = parseFloat(element.value) || 0
                usdInput.value = (somValue * usdToSom).toFixed(2)
                eurInput.value = (somValue * eurToSom).toFixed(2)
            }
            if (element.id === 'usd') {
                const usdValue = parseFloat(element.value) || 0
                somInput.value = (usdValue * data.usd).toFixed(2)
                eurInput.value = (usdValue * (data.usd / data.eur)).toFixed(2)
            }
            if (element.id === 'eur') {
                const eurValue = parseFloat(element.value) || 0
                somInput.value = (eurValue * data.eur).toFixed(2)
                usdInput.value = (eurValue * (data.eur / data.usd)).toFixed(2)
            }
            if (element.value === '') {
                somInput.value = ''
                usdInput.value = ''
                eurInput.value = ''
            }
        }
    }
}

converter(somInput);
converter(usdInput);
converter(eurInput);

// DRY - don't repeat yourself
// KISS - keep it simple, stupid - делай это проще, идиот