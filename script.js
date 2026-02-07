function nextPage() {
    window.location.href = "letter.html";
}

function goToGallery() {
    window.location.href = "gallery.html";
}

function missingOut() {
    alert("Trust me, you don't want to miss this! 😉");
}

// Logic for the unclickable 'No' button
const noBtn = document.getElementById('noBtn');

if (noBtn) {
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('click', moveButton); // For mobile taps
}

function moveButton(e) {
    if(e.type === 'click') {
        // Prevent default click behavior if they manage to click it
        e.preventDefault();
    }
    
    // Get button dimensions
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;
    
    // Get viewport dimensions
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;
    
    // Generate random position
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Make sure we're applying absolute position to move it freely
    noBtn.style.position = 'fixed'; // Use fixed to position relative to viewport
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}
