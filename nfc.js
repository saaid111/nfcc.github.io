// Check if the browser supports Web NFC
if ("NDEFReader" in window) {
    const readButton = document.getElementById("read-button");
    const nfcContent = document.getElementById("nfc-content");
  
    // Add an event listener to the "Read NFC tag" button
    readButton.addEventListener("click", async () => {
      try {
        // Get a reference to the NFC reader
        const reader = new NDEFReader();
        // Wait for the reader to become ready
        await reader.scan();
        // Wait for an NFC tag to be detected
        const tag = await reader.read();
        // Get the message from the tag
        const message = tag.message;
        // Convert the message to a string and display it on the page
        nfcContent.textContent = message.data;
      } catch (error) {
        // Display an error message if there was a problem reading the NFC tag
        console.error(error);
        alert("There was a problem reading the NFC tag. Please try again.");
      }
    });
  } else {
    // Display an error message if the browser does not support Web NFC
    alert("Your browser does not support Web NFC. Please use a compatible browser.");
  }
  