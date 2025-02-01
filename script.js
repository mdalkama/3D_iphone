const iphone = document.getElementById('cube');
        let isDragging = false;
        let startX, startY;
        let rotateX = -15;
        let rotateY = -25;

        iphone.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            rotateY += deltaX * 0.5;
            rotateX -= deltaY * 0.5;

            iphone.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            
            startX = e.clientX;
            startY = e.clientY;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        iphone.addEventListener('dblclick', () => {
            rotateX = -15;
            rotateY = -25;
            iphone.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });