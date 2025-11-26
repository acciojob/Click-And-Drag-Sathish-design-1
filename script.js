const cubes = document.querySelectorAll('.cube');
const container = document.querySelector('.container');

cubes.forEach(cube => {
    cube.addEventListener('mousedown', (e) => {
        let offsetX = e.clientX - cube.getBoundingClientRect().left;
        let offsetY = e.clientY - cube.getBoundingClientRect().top;

        const onMouseMove = (e) => {
            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            // Boundary conditions
            if (newX < 0) newX = 0;
            if (newY < 0) newY = 0;
            if (newX + cube.offsetWidth > container.offsetWidth) 
                newX = container.offsetWidth - cube.offsetWidth;
            if (newY + cube.offsetHeight > container.offsetHeight) 
                newY = container.offsetHeight - cube.offsetHeight;

            cube.style.left = newX + 'px';
            cube.style.top = newY + 'px';
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
});