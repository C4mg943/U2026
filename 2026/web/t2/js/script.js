document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const studentCards = document.querySelectorAll('.student-card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        studentCards.forEach(card => {
            const studentName = card.querySelector('h3').textContent.toLowerCase();
            
            if (studentName.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
