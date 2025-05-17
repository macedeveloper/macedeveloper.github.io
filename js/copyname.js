document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('mdev-copy');
    const textToCopy = textElement.textContent.trim() || "Mace Dev";
    const initialCsttData = textElement.getAttribute('data-cstt');

    // Function to handle the copy operation
    function handleCopy() {
        // Copy text to clipboard
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Update cstt data attribute
                const clipboard_check_icon = '\uF28B';  // Hex escape
                textElement.setAttribute('data-cstt', `Скопировано!`);

                // Revert after 2 seconds
                setTimeout(() => {
                    textElement.setAttribute('data-cstt', initialCsttData);
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    // Add click event listeners
    textElement.addEventListener('click', handleCopy);
});