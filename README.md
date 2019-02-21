# Fullscreen on iOS

You can send the player to fullscreen with `videoEl.webkitEnterFullscreen()`. Then you can listen for the `webkitendfullscreen` event to present a "Resume" UX becuase the player will stop playing on ext and cannot be resumed by javascript without a user interaction.

Also of note, the `webkitbeginfullscreen` and `webkitenterfullscreen` events that can indicate when iOS begins and ends fullscreen for the video.


# Running the sample

1. `npm run dev`
2. Go to http://localhost:8080
