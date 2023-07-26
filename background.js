// console.log('I am from background script')
// console.log(this)

// chrome.runtime.onInstalled.addListener(() => {
//     chrome.tabs.create({
//         url: 'https://chat.openai.com'
//     })
// })

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log(request)
//     console.log(sender)
//     console.log(sendResponse)
//     sendResponse({farewell: "goodbye"})
// })

// chrome.runtime.onInstalled.addListener(({reason}) => {
//     console.log(reason);
//   if (reason === 'update') {
//     chrome.tabs.create({
//       url: "myPage.html"
//     });
//   }
// });


// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     console.log(tabId);
//     console.log(changeInfo);
//     console.log(tab);
//     // chrome.tabs.group({tabIds: tabId}, (group) => {
//     //     console.log(group)
//     // })
// })

// chrome.alarms.create('myAlarm', {
//     delayInMinutes: 1 / 60, // 0.1 minutes = 6 seconds
//     periodInMinutes: 1 / 60 // 0.1 minutes = 6 seconds
// });

// chrome.alarms.onAlarm.addListener(function(alarm) {
//     if (alarm.name === 'myAlarm') {
//         // Perform the action when the alarm fires
//         console.log('Alarm fired! - Do something...' + new Date().getSeconds());
//     }
// });


// chrome.alarms.create('myAlarm', {
//     periodInMinutes: 1 / 60
// });

// chrome.alarms.onAlarm.addListener(function(alarm) {
//     if (alarm.name === 'myAlarm') {
//         // Perform the action when the alarm fires
//         console.log('Alarm fired! - Do something...' + new Date().getSeconds());
//     }
// })

// chrome.contextMenus.create({
//     id: 'myContextMenu',
//     title: 'My Context Menu',
//     contexts: ['page', 'selection', 'image', 'link']
// })

// chrome.contextMenus.create({
//     id: 'myContextMenu1',
//     title: 'My Context Menu 1',
//     contexts: ['page', 'selection', 'image', 'link']
// })

// chrome.contextMenus.create({
//     id: 'myContextMenu2',
//     title: 'My Context Menu 2',
//     contexts: ['page', 'selection', 'image', 'link']
// })

// chrome.contextMenus.remove('myContextMenu2', () => {
//     console.log('Context Menu 2 removed')
// })

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//     console.log(info)
//     console.log(tab)
//     chrome.tabs.sendMessage(tab.id, {data: info.selectionText}, (response) => {
//         console.log(response)
//     })
// })

// chrome.contextMenus.create({
//     id: 'myContextMenu',
//     title: 'My Context Menu',
//     contexts: ['all']
// })

// chrome.contextMenus.create({
//     id: 'myContextMenu1',
//     title: 'My Context Menu 1',
//     contexts: ['all']
// })

// chrome.contextMenus.create({
//     id: 'myContextMenu2',
//     title: 'My Context Menu 2',
//     contexts: ['all']
// })

// chrome.contextMenus.remove('myContextMenu2')

// chrome.contextMenus.onClicked.addListener((info, tab) => {
//     console.log(info)
//     console.log(tab)
//     // chrome.tabs.sendMessage(tab.id, {data: info.selectionText}, (response) => {
//     //     console.log(response)
//     // })
// })

// chrome.runtime.onInstalled.addListener(() => {
//     // chrome.tabs.create({
//     //     url: 'https://chat.openai.com'
//     // })

//     chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//         console.log(tabs[0])
//     })
// })

// chrome.tabs.onCreated.addListener(function (tab) {
//     console.log("Tab Created");
//     console.log(tab);
//     chrome.tabs.sendMessage(tab.id, { message: "New tab created" });
// })

// chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
//     console.log("Tab Removed");
//     console.log(tabId);
//     console.log(removeInfo);
//     chrome.tabs.sendMessage(tabId, { message: "New tab removed" });
// })

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     console.log("Tab Updated");
//     console.log(tabId);
//     console.log(changeInfo);
//     console.log(tab);
// })

// chrome.tabs.onActivated.addListener(function (activeInfo) {
//     console.log("Tab Activated");
//     console.log(activeInfo);
// })

// chrome.tabs.onHighlighted.addListener(function (highlightInfo) {
//     console.log("Tab Highlighted");
//     console.log(highlightInfo);
// })

// chrome.tabs.onMoved.addListener(function (tabId, moveInfo) {
//     console.log("Tab Moved");
//     console.log(tabId);
//     console.log(moveInfo);
// })

// chrome.tabs.onCreated.addListener(function (tab) {
//     console.log("Tab Created");
//     console.log(tab);
//     // chrome.tabs.sendMessage(tab.id, { message: "New tab created" });
// })


// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     console.log("Tab Updated");
//     console.log(tabId);
//     console.log(changeInfo);
//     console.log(tab);
// })

// chrome.tabs.onActivated.addListener(function (activeInfo) {
//     console.log("Tab Activated");
//     console.log(activeInfo);
// })

// chrome.tabs.onHighlighted.addListener(function (highlightInfo) {
//     console.log("Tab Highlighted");
//     console.log(highlightInfo);
// })

// chrome.tabs.onDetached.addListener(function (tabId, moveInfo) {
//     console.log("Tab Moved");
//     console.log(tabId);
//     console.log(moveInfo);
// })



// (async () => {


// })()

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // console.log(message);
    // console.log(sender);
    chrome.tabs.query({ url: 'https://chat.openai.com/' }, function (tabs) {
        const tab = tabs[0]
        // console.log(tab.id);
        if (!tab) {
            chrome.tabs.create({ url: 'https://chat.openai.com/' }, function (tab) {
               setTimeout(() => {
                 chrome.tabs.sendMessage(tab.id, message)
               }, 2000);
                console.log(message);
            })
        } else {
            chrome.tabs.sendMessage(tab.id, message)
            console.log(tab.id);
        }

    })

    sendResponse("From the background Script");
});