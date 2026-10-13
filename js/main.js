// 仿小米官网 - 全站交互与渲染
(function () {
  'use strict';

  // ============================ 占位图配色轮换 ============================
  var PH_CLASSES = [
    'ph-orange', 'ph-dark', 'ph-blue', 'ph-purple',
    'ph-green', 'ph-red', 'ph-teal', 'ph-pink'
  ];
  function phClass(index) {
    return PH_CLASSES[index % PH_CLASSES.length];
  }

  // ============================ 产品卡片模板 ============================
  function productCardHTML(p, index) {
    var old = p.oldPrice ? '<span class="old">¥' + p.oldPrice + '</span>' : '';
    var tag = p.tag ? '<span class="tag">' + p.tag + '</span>' : '';
    return (
      '<div class="product-card" data-id="' + p.id + '">' +
        '<div class="product-ph-wrap">' +
          '<div class="product-ph ' + phClass(index) + '">' + p.emoji +
            '<span>' + p.name + '</span>' +
          '</div>' + tag +
        '</div>' +
        '<div class="product-body">' +
          '<div class="product-name">' + p.name + '</div>' +
          '<div class="product-desc">' + p.desc + '</div>' +
          '<div class="product-price">¥' + p.price + old + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  // ============================ 渲染商品列表 ============================
  window.renderProducts = function (list, containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = list.map(function (p, i) {
      return productCardHTML(p, PRODUCTS.indexOf(p));
    }).join('');
    // 点击跳转详情
    container.querySelectorAll('.product-card').forEach(function (card) {
      card.addEventListener('click', function () {
        location.href = 'product.html?id=' + card.getAttribute('data-id');
      });
    });
  };

  // ============================ 渲染详情页 ============================
  window.renderDetail = function (id) {
    var p = PRODUCTS.find(function (item) { return item.id === id; });
    if (!p) {
      document.body.innerHTML =
        '<div style="text-align:center;padding:80px;font-size:18px;color:#757575;">' +
        '商品不存在,<a href="products.html" style="color:#ff6700;">返回商城</a></div>';
      return;
    }
    var idx = PRODUCTS.indexOf(p);
    var old = p.oldPrice ? '<span class="old">¥' + p.oldPrice + '</span>' : '';
    var specs = p.specs.map(function (s) {
      return '<li><b>' + s + '</b></li>';
    }).join('');

    document.getElementById('detail-ph').className = 'detail-ph ' + phClass(idx);
    document.getElementById('detail-ph').innerHTML = p.emoji + '<span>' + p.name + '</span>';
    document.getElementById('detail-title').textContent = p.name;
    document.getElementById('detail-desc').textContent = p.desc;
    document.getElementById('detail-price').innerHTML = '¥' + p.price + old;
    document.getElementById('detail-specs').innerHTML = specs;
    document.title = p.name + ' - 小米商城';
    document.getElementById('detail-buy').dataset.name = p.name;
  };

  // ============================ 轮播 ============================
  function initCarousel() {
    var slides = document.querySelectorAll('.slide');
    if (!slides.length) return;
    var dots = document.querySelectorAll('.hero-dots span');
    var current = 0;
    var timer = null;

    function go(index) {
      slides[current].classList.remove('active');
      if (dots.length) dots[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dots.length) dots[current].classList.add('active');
    }
    function next() { go(current + 1); }
    function prev() { go(current - 1); }
    function start() { timer = setInterval(next, 4000); }
    function stop() { clearInterval(timer); }

    var prevBtn = document.querySelector('.hero-arrow.prev');
    var nextBtn = document.querySelector('.hero-arrow.next');
    if (prevBtn) prevBtn.addEventListener('click', function () { stop(); prev(); start(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { stop(); next(); start(); });
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { stop(); go(i); start(); });
    });

    start();
  }

  // ============================ 顶部导航激活态 ============================
  function initNav() {
    var path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  // ============================ 搜索 ============================
  function initSearch() {
    document.querySelectorAll('.search-box').forEach(function (box) {
      var input = box.querySelector('input');
      var btn = box.querySelector('button');
      function doSearch() {
        var q = (input.value || '').trim();
        location.href = 'products.html' + (q ? '?q=' + encodeURIComponent(q) : '');
      }
      if (btn) btn.addEventListener('click', doSearch);
      if (input) input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') doSearch();
      });
    });
  }

  // ============================ 购物车计数 ============================
  function initCart() {
    var count = parseInt(localStorage.getItem('mi_cart') || '0', 10) || 0;
    function update() {
      document.querySelectorAll('[data-cart-count]').forEach(function (el) {
        el.textContent = count;
      });
    }
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-add-cart]');
      if (!btn) return;
      count += 1;
      localStorage.setItem('mi_cart', count);
      update();
      showToast('已加入购物车:' + (btn.dataset.name || '商品'));
    });
    update();
  }

  // ============================ Toast ============================
  var toastEl = null;
  function showToast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function () {
      toastEl.classList.remove('show');
    }, 1800);
  }
  window.showToast = showToast;

  // ============================ 启动 ============================
  document.addEventListener('DOMContentLoaded', function () {
    initCarousel();
    initNav();
    initSearch();
    initCart();
  });
})();
