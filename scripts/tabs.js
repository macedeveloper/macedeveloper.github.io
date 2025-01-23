document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.intab');

    // Функция для активации вкладки
    function activateTab(tabId) {
        // Скрываем все контенты
        contents.forEach(content => {
            content.classList.remove('active');
        });
        // Показываем нужный контент
        const contentId = `intab-${tabId.replace('tab-', '')}`;
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            contentElement.classList.add('active');
        }

        // Обновляем активный класс на вкладках
        tabs.forEach(tab => {
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
        activateTab('tab-games');
    }

    // Добавляем обработчики событий для вкладок
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            activateTab(tab.id);
        });
    });
});
