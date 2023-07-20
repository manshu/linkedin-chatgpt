    console.log('I am locked and loaded')
    chrome.runtime.onMessage.addListener(
        function ({listing}, sender, sendResponse) {
            console.log(listing);
            const textArea = document.querySelector('textarea');
            textArea.value = `${listing}\n `;
        }
    )