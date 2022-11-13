
(function () {
    window.onload = async function () {
        console.log('webgazer start')
        await webgazer
            .setRegression('ridge') /* currently must set regression and tracker */
            .setTracker('TFFacemesh')
            .begin();

        document.getElementById('webgazerVideoContainer').style.zIndex = '9999'
    }
})()
