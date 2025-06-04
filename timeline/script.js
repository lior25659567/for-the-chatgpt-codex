document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline');

    timeline.addEventListener('click', (e) => {
        const target = e.target.closest('.cell');
        if (!target) return;

        // Remove selected from other cells
        document.querySelectorAll('.cell.selected').forEach(cell => {
            cell.classList.remove('selected');
        });

        // Toggle selected on target
        target.classList.add('selected');
        // Optionally scroll to make the selected cell fully visible
        target.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });
});
