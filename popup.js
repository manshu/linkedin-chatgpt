// alert('Hello Popup!')


// chrome.action.setBadgeText({text: 'ON'})
// chrome.action.setBadgeTextColor({color: '#fff'})

// chrome.action.getBadgeText({}, (result) => {
//     console.log(result)
// })
const btn = document.getElementById('btn')
const msg = document.getElementById('output')


btn.addEventListener('click', () => {
    // chrome.runtime.sendMessage({data: ['apple', 'oranges']}, (response) => {
    //     console.log(response)
    //     msg.innerText = response.message
    // })
})
