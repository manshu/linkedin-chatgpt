// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//     console.log(response);
// })

// chrome.storage.local.set({ name: 'Rudra' }).then(() => {
//   console.log("Value is set");
// });

// chrome.storage.local.get(["name"]).then((result) => {
//   console.log("Value currently is " + result.name);
// });

// (async () => {



// })()


    function handleLocationChange() {
    if (window.location.pathname.startsWith('/jobs/collections/recommended/')) {
            console.log('Handle Location Change Locked and Loaded')

            const listingEl = document.querySelector('#job-details').textContent;

            if (listingEl === null) {
                console.log('Listing not found');
                return
            }

            if(listingEl !== null) {
                console.log('Listing found');
                createButton(listingEl);
            }

         }

    }

    function createButton(listingEl) {
        const buttonEl = document.querySelector(".jobs-unified-top-card__content--two-pane > div:nth-child(4) > div")
        let button = document.createElement('button')
        button.className = 'jobs-save-button artdeco-button artdeco-button--3 artdeco-button--secondary'
        button.textContent = 'Send to OpenAI'
        buttonEl.append(button)

        button.addEventListener('click', () => {
            chrome.runtime.sendMessage({ listing: listingEl }, function (response) {
                console.log(response);
            })
        })
    }

    function removeButton() {
        const buttonEl = document.querySelector(".jobs-unified-top-card__content--two-pane > div:nth-child(4) > div")
        buttonEl.removeChild(buttonEl.lastChild)
    }

    let currentHref = window.location.href;

    function checkLocationChange() {
        if (window.location.href !== currentHref) {
            currentHref = window.location.href;
            removeButton()
            console.log('Content Script locked and loaded')
            handleLocationChange();
        }
    }

    setInterval(checkLocationChange, 1000);