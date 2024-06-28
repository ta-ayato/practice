// メニューボタンの要素を取得
const hamburgerMenus = document.querySelectorAll('.menuPlus');

// 各メニューボタンに対してイベントリスナーを設定
hamburgerMenus.forEach(function(hamburgerMenu) {
    hamburgerMenu.addEventListener('click', function() {
        // クリックされたメニューボタンの隣接する隠れたメニューを取得
        const menuItems = this.nextElementSibling;

        // 隠れたメニューの表示状態を切り替える
        if (menuItems.classList.contains('hiddenText')) {
            menuItems.classList.toggle('show');
        }
    });
});


