// Your code here.
const cubes = document.querySelectorAll('.item');
const container = document.querySelector('.items');
let activeCube = null;
let offsetX, offsetY;

cubes.forEach(cube => {
    cube.addEventListener('mousedown', (e) => {
        activeCube = cube;
        offsetX = e.clientX - cube.getBoundingClientRect().left;
        offsetY = e.clientY - cube.getBoundingClientRect().top;
        document.addEventListener('mousemove', onMouseMove);
    });
});

document.addEventListener('mouseup', () => {
    activeCube = null;
    document.removeEventListener('mousemove', onMouseMove);
});

function onMouseMove(e) {
    if (!activeCube) return;

    let newX = e.clientX - offsetX;
    let newY = e.clientY - offsetY;

    // Boundary checks
    const containerRect = container.getBoundingClientRect();
    const cubeRect = activeCube.getBoundingClientRect();

    if (newX < containerRect.left) newX = containerRect.left;
    if (newY < containerRect.top) newY = containerRect.top;
    if (newX + cubeRect.width > containerRect.right) newX = containerRect.right - cubeRect.width;
    if (newY + cubeRect.height > containerRect.bottom) newY = containerRect.bottom - cubeRect.height;

    activeCube.style.left = newX - containerRect.left + 'px';
    activeCube.style.top = newY - containerRect.top + 'px';
}