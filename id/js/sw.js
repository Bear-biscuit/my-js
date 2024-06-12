document.addEventListener('DOMContentLoaded', (event) => {
    const pages = document.querySelectorAll('.id-web');
    let currentPage = 0;

    function showPage(pageIndex) {
        pages.forEach((page, index) => {
            page.style.display = (index === pageIndex) ? 'block' : 'none';
        });
    }

    document.getElementById('next-page').addEventListener('click', () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showPage(currentPage);
        }
    });

    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // 初始化显示第一页
    showPage(currentPage);
});
