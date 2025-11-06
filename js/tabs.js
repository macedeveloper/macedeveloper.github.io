document.addEventListener('DOMContentLoaded', function() {
    const navbtns = document.querySelectorAll('.nav-btn');
    const contents = document.querySelectorAll('.tab');

    // Функция для активации вкладки
    function activateTab(tabId) {
        // Скрываем все контенты
        contents.forEach(content => {
            content.classList.remove('active');
        });
        // Показываем нужный контент
        const contentId = tabId.replace('nav-', 'tab-');
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            contentElement.classList.add('active');
        }

        // Обновляем активный класс на вкладках
        navbtns.forEach(tab => {
            tab.classList.remove('active');
            if (tab.id === tabId) {
                tab.classList.add('active');
            }
        });
    }

    // Проверяем хэш в URL при загрузке страницы
    let hash = window.location.hash;
    if (hash) {
        const tabId = `tab-${hash.slice(1)}`; // Преобразуем хэш в ID вкладки
        activateTab(tabId);
    } else {
        // Если хэша нет, активируем первую вкладку по умолчанию
        activateTab('tab-home');
    }

    // Добавляем обработчики событий для вкладок
    navbtns.forEach(tab => {
        tab.addEventListener('click', function() {
            activateTab(tab.id);
        });
    });
});
