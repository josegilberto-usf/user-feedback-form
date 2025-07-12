const form = document.getElementById('feedback-form');
const commentBox = document.getElementById('comments');
const charCount = document.getElementById('char-count');
const feedbackDisplay = document.getElementById('feedback-display');

commentBox.addEventListener('input', () => {
    charCount.textContent = `Characters: ${commentBox.value.length}`;
});

form.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Please fill out the ${e.target.name}';
        tooltip.className = 'tooltip';
        e.target.parentElement.appendChild(tooltip);
    }
});

form.addEventListener('mouseout', (e) => {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(t => t.remove());
});

form.addEventListener('click', (e) => {
    e.stopPropagation();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = commentBox.value.trim();

    if (!name || !email || !comments) {
        alert('Please fill out all fields.');
        return;
    }

    const entry = document.createElement('div');
    entry.textContent = `Name: ${name}, Email: ${email}, Comments: ${comments}`;
    feedbackDisplay.appendChild(entry);

    form.reset();
    charCount.textContent = 'Characters: 0';
});

