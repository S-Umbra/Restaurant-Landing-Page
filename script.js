// NAV scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // MENU data
  const menuData = {
    entrantes: [
      { emoji: '🥗', name: 'Ensalada de tomate murciano', desc: 'Tomate corazón de buey, aceite de la Sierra Espuña, sal Maldon y albahaca fresca', price: '12 €' },
      { emoji: '🐙', name: 'Pulpo a la brasa', desc: 'Con crema de pimiento rojo asado, aceite de pimentón de la Vera y cebolleta encurtida', price: '18 €' },
      { emoji: '🧀', name: 'Croquetas de cocido de la abuela', desc: 'Crujientes por fuera, fundentes por dentro. Elaboradas con caldo casero de 8 horas', price: '9 €' },
      { emoji: '🥩', name: 'Tataki de atún rojo', desc: 'Con vinagreta de naranja de la Huerta, sésamo tostado y jengibre encurtido', price: '22 €' },
      { emoji: '🥕', name: 'Verduras de temporada', desc: 'Selección de la huerta murciana a la brasa con romesco artesano y aceite de hierbas', price: '14 €' },
      { emoji: '🍤', name: 'Gambas al ajillo', desc: 'Gambas del Mar Menor, ajo confitado, guindilla y aceite de oliva virgen extra', price: '16 €' },
    ],
    principales: [
      { emoji: '🍚', name: 'Arroz meloso de bogavante', desc: 'Con caldo de marisco de elaboración propia, azafrán del Bajo Aragón y alioli de ajo negro', price: '34 €' },
      { emoji: '🐟', name: 'Dorada salvaje a la sal', desc: 'Capturada en el Mediterráneo, servida con pil-pil de ajo y pimiento verde confitado', price: '28 €' },
      { emoji: '🥩', name: 'Secreto ibérico a la brasa', desc: 'De cerdo ibérico de bellota, con patata rota y mojo rojo de la casa', price: '24 €' },
      { emoji: '🍝', name: 'Fideuà de sepia y langostinos', desc: 'Fideos caldosos con sofrito de hora y alioli casero suave', price: '22 €' },
      { emoji: '🫘', name: 'Michirones guisados', desc: 'La receta tradicional murciana: habas secas, chorizo, morcilla y laurel', price: '16 €' },
      { emoji: '🐑', name: 'Cordero a baja temperatura', desc: 'Paletilla entera cocinada 12 horas, con jugo de asado y cuscús de verduras', price: '32 €' },
    ],
    postres: [
      { emoji: '🍮', name: 'Paparajote tradicional', desc: 'Hoja de limonero rebozada con azúcar y canela. La esencia de Murcia en cada bocado', price: '7 €' },
      { emoji: '🍦', name: 'Helado de turrón de Alicante', desc: 'Artesanal, con crumble de almendra marcona y miel de romero', price: '8 €' },
      { emoji: '🍫', name: 'Coulant de chocolate negro 70%', desc: 'Con corazón líquido y helado de vainilla bourbon de Madagascar', price: '9 €' },
      { emoji: '🍋', name: 'Sorbete de limón de Murcia', desc: 'Con espuma de albahaca, menta fresca y un toque de limoncello', price: '7 €' },
      { emoji: '🧁', name: 'Buñuelos de viento', desc: 'Rellenos de crema pastelera de naranja, azúcar glas y coulis de frutos rojos', price: '8 €' },
      { emoji: '🍓', name: 'Fresas de la huerta', desc: 'Con nata montada casera, ralladura de limón y vinagre de módena envejecido', price: '9 €' },
    ]
  };

  function renderMenu(tab) {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = menuData[tab].map(item => `
      <div class="menu-card">
        <span class="dish-emoji">${item.emoji}</span>
        <div class="dish-name">${item.name}</div>
        <div class="dish-desc">${item.desc}</div>
        <div class="dish-price">${item.price}</div>
      </div>
    `).join('');
  }

  document.getElementById('menuTabs').addEventListener('click', e => {
    if (e.target.classList.contains('menu-tab')) {
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      renderMenu(e.target.dataset.tab);
    }
  });

  renderMenu('entrantes');

  // Reservation submit
  document.querySelector('.form-submit').addEventListener('click', () => {
    alert('¡Reserva solicitada! Nos pondremos en contacto contigo para confirmarla. ¡Hasta pronto!');
  });

  // Intersection observer for fade-in
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.menu-card, .intro-visual, .intro-copy, .ambiance-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .7s ease, transform .7s ease';
    observer.observe(el);
  });