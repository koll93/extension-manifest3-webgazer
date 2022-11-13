chrome.runtime.onMessage.addListener( data => {
	if ( data.type === 'notification' ) {
		chrome.action.setIcon({ path: "/assets/icons/64-active.png" }); // Not sure that it must be here
	}
});

