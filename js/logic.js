
        const body = document.body;
        const modeToggle = document.getElementById('dark-mode');
        
        modeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
        });