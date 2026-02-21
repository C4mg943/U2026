document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const studentCards = document.querySelectorAll('.student-card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        studentCards.forEach(card => {
            const studentName = card.querySelector('h3').textContent.toLowerCase();

            if (studentName.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
