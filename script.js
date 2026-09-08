// DATA BUKU DENGAN SAMPUL SESUAI & LEBIH BANYAK
const books = [
    // --- JURUSAN TKJ ---
    {
        id: 1,
        title: "Administrasi Infrastruktur Jaringan (Mikrotik & Cisco)",
        author: "Budi Santoso, S.T.",
        category: "TKJ",
        cover: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80",
        description: "Panduan praktis konfigurasi RouterBoard Mikrotik, Routing, Switching, serta Keamanan Jaringan Komputer.",
        isOnline: true,
        available: true,
        rating: 4.8
    },
    {
        id: 2,
        title: "Konstruksi Keamanan Siber & Firewall",
        author: "Ir. Ahmad Fauzi",
        category: "TKJ",
        cover: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80",
        description: "Buku rujukan teknik proteksi jaringan dari serangan malware, DDoS, dan enkripsi data.",
        isOnline: true,
        available: true,
        rating: 4.7
    },

    // --- JURUSAN RPL ---
    {
        id: 3,
        title: "Pemrograman Web Modern (HTML, CSS, JS, & React)",
        author: "Rian Prasetyo, M.Kom",
        category: "RPL",
        cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
        description: "Langkah mudah menguasai pembuatan situs web interaktif dan responsif dari tingkat dasar hingga mahir.",
        isOnline: true,
        available: true,
        rating: 4.9
    },
    {
        id: 4,
        title: "Basis Data Relasional & SQL Masterclass",
        author: "Dewi Kartika",
        category: "RPL",
        cover: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=500&q=80",
        description: "Konsep pemodelan ERD, Query MySQL, serta pengamanan database untuk aplikasi enterprise.",
        isOnline: false,
        available: false,
        rating: 4.6
    },

    // --- JURUSAN TATA BOGA ---
    {
        id: 5,
        title: "Seni Pastry & Bakery Profesional",
        author: "Chef Kadek Wijaya",
        category: "Tata Boga",
        cover: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
        description: "Buku panduan resep, pemanggangan, teknik hiasan roti, pastry, serta standar higiene dapur.",
        isOnline: true,
        available: true,
        rating: 4.9
    },
    {
        id: 6,
        title: "Kuliner Otentik Nusantara",
        author: "Siti Rahma",
        category: "Tata Boga",
        cover: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
        description: "Mengenal berbagai macam bumbu rempah khas Indonesia dan teknik penyajian standar restoran.",
        isOnline: false,
        available: true,
        rating: 4.8
    },

    // --- JURUSAN PERHOTELAN ---
    {
        id: 7,
        title: "Manajemen Front Office & Layanan Tamu",
        author: "Putu Ayu Indah",
        category: "Perhotelan",
        cover: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80",
        description: "Prosedur penanganan reservasi, check-in, etika komunikasi, dan pelayanan prima industri perhotelan.",
        isOnline: true,
        available: true,
        rating: 4.7
    },
    {
        id: 8,
        title: "Housekeeping & Hotel Operasional",
        author: "Made Sukarta",
        category: "Perhotelan",
        cover: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=500&q=80",
        description: "Teknik pemeliharaan kebersihan area hotel, penataan kamar, dan manajemen kebersihan profesional.",
        isOnline: false,
        available: true,
        rating: 4.5
    },

    // --- UMUM / FIKSI ---
    {
        id: 9,
        title: "Sejarah & Kebudayaan Nusantara",
        author: "Prof. Dr. Sartono",
        category: "Umum",
        cover: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=500&q=80",
        description: "Rangkuman perjalanan sejarah bangsa Indonesia dari era kerajaan hingga pergerakan nasional.",
        isOnline: true,
        available: true,
        rating: 4.6
    },
    {
        id: 10,
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        category: "Umum",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
        description: "Novel inspiratif perjuangan anak-anak dalam meraih mimpi melalui pendidikan.",
        isOnline: true,
        available: false,
        rating: 5.0
    }
];

let savedBooks = [];

// DOM ELEMENTS
const bookGrid = document.getElementById('bookGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const typeSelect = document.getElementById('typeSelect');

// MODAL ELEMENTS
const bookModal = document.getElementById('bookModal');
const closeModal = document.getElementById('closeModal');
const modalDetail = document.getElementById('modalDetail');

const borrowModal = document.getElementById('borrowModal');
const closeBorrowModal = document.getElementById('closeBorrowModal');
const borrowForm = document.getElementById('borrowForm');
const borrowBookTitle = document.getElementById('borrowBookTitle');

const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCartModal = document.getElementById('closeCartModal');
const cartList = document.getElementById('cartList');
const cartCount = document.getElementById('cartCount');

// RENDER BUKU
function renderBooks(data) {
    bookGrid.innerHTML = '';
    if (data.length === 0) {
        bookGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b;">Buku tidak ditemukan.</p>`;
        return;
    }

    data.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.innerHTML = `
            <span class="status-badge ${book.available ? 'available' : 'borrowed'}">
                ${book.available ? 'Tersedia' : 'Dipinjam'}
            </span>
            <img src="${book.cover}" alt="${book.title}" class="book-cover">
            <div class="book-info">
                <div class="book-meta">
                    <span class="book-category">${book.category}</span>
                    <span class="book-rating"><i class="fa-solid fa-star"></i> ${book.rating}</span>
                </div>
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div class="book-actions">
                    <button class="btn-detail" onclick="openDetail(${book.id})">Detail</button>
                    ${book.available ? `<button class="btn-borrow" onclick="openBorrowForm('${book.title}')">Pinjam</button>` : `<button class="btn-borrow" style="background:#cbd5e1; cursor:not-allowed;" disabled>Habis</button>`}
                </div>
            </div>
        `;
        bookGrid.appendChild(card);
    });
}

// FILTER COMBINED (SEARCH, KATEGORI, & TIPE)
function filterData() {
    const keyword = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-category');
    const selectedType = typeSelect.value;

    const filtered = books.filter(b => {
        const matchSearch = b.title.toLowerCase().includes(keyword) || 
                            b.author.toLowerCase().includes(keyword) || 
                            b.category.toLowerCase().includes(keyword);

        const matchCategory = (activeCategory === 'all') || (b.category === activeCategory);

        let matchType = true;
        if(selectedType === 'online') matchType = b.isOnline;
        if(selectedType === 'physical') matchType = !b.isOnline;

        return matchSearch && matchCategory && matchType;
    });

    renderBooks(filtered);
}

// EVENT LISTENERS FILTER
searchInput.addEventListener('input', filterData);
typeSelect.addEventListener('change', filterData);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        filterData();
    });
});

// DETAIL MODAL & UNGGULAN
window.openDetail = function(id) {
    const book = books.find(b => b.id === id);
    modalDetail.innerHTML = `
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            <img src="${book.cover}" style="width: 160px; height: 230px; object-fit: cover; border-radius:8px;">
            <div style="flex: 1; min-width: 250px;">
                <h2>${book.title}</h2>
                <p style="color:#64748b; margin-bottom: 8px;">Oleh: <strong>${book.author}</strong></p>
                <p style="margin-bottom: 5px;"><strong>Kategori:</strong> ${book.category}</p>
                <p style="margin-bottom: 5px;"><strong>Rating:</strong> <i class="fa-solid fa-star" style="color:#f59e0b;"></i> ${book.rating} / 5.0</p>
                <p style="margin-bottom: 15px;"><strong>Status Fisik:</strong> ${book.available ? '<span style="color:#22c55e;">Tersedia di Perpustakaan</span>' : '<span style="color:#ef4444;">Sedang Dipinjam</span>'}</p>
                <p style="font-size:0.9rem; line-height: 1.5; color:#334155; margin-bottom: 15px;">${book.description}</p>
                
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    ${book.isOnline ? `<button onclick="readOnline('${book.title}')" style="background:#22c55e; color:white; border:none; padding:9px 15px; border-radius:6px; cursor:pointer; font-weight:600;"><i class="fa-solid fa-book-open"></i> Baca Online (E-Book)</button>` : '<button style="background:#e2e8f0; color:#64748b; border:none; padding:9px 15px; border-radius:6px; cursor:not-allowed;" disabled><i class="fa-solid fa-lock"></i> E-Book Tidak Tersedia</button>'}
                    <button onclick="bookmarkBook('${book.title}')" style="background:#f59e0b; color:white; border:none; padding:9px 15px; border-radius:6px; cursor:pointer; font-weight:600;"><i class="fa-solid fa-bookmark"></i> Simpan</button>
                </div>
            </div>
        </div>
    `;
    bookModal.style.display = 'flex';
}

// BACA ONLINE (SIMULASI)
window.readOnline = function(title) {
    alert(`Membuka Reader Digital untuk buku: "${title}".\n\nSelamat membaca E-Book!`);
}

// SIMPAN BUKU (BOOKMARK)
window.bookmarkBook = function(title) {
    if(!savedBooks.includes(title)) {
        savedBooks.push(title);
        cartCount.innerText = savedBooks.length;
        alert(`Buku "${title}" dimasukkan ke daftar simpanan!`);
    } else {
        alert("Buku sudah ada di simpanan Anda.");
    }
}

// FORM PEMINJAMAN
window.openBorrowForm = function(title) {
    borrowBookTitle.value = title;
    borrowModal.style.display = 'flex';
}

borrowForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const studentClass = document.getElementById('studentClass').value;
    const date = document.getElementById('borrowDate').value;

    alert(`Permintaan Peminjaman Berhasil Ditambahkan!\n\nNama Siswa: ${name}\nKelas/NISN: ${studentClass}\nJudul Buku: ${borrowBookTitle.value}\nTanggal Ambil: ${date}\n\nSilakan ambil fisik buku di meja sirkulasi Perpustakaan SMK Wira Harapan.`);
    borrowModal.style.display = 'none';
    borrowForm.reset();
});

// CLOSE MODAL EVENTS
closeModal.onclick = () => bookModal.style.display = 'none';
closeBorrowModal.onclick = () => borrowModal.style.display = 'none';
closeCartModal.onclick = () => cartModal.style.display = 'none';

cartBtn.onclick = () => {
    cartList.innerHTML = savedBooks.length 
        ? savedBooks.map(item => `<p style="padding:10px 0; border-bottom:1px solid #e2e8f0; display:flex; align-items:center; gap:10px;"><i class="fa-solid fa-book" style="color:var(--primary-color)"></i> ${item}</p>`).join('') 
        : '<p style="color:#64748b;">Belum ada buku yang disimpan.</p>';
    cartModal.style.display = 'flex';
}

window.onclick = (e) => {
    if (e.target == bookModal) bookModal.style.display = 'none';
    if (e.target == borrowModal) borrowModal.style.display = 'none';
    if (e.target == cartModal) cartModal.style.display = 'none';
}

// INITIAL RENDER
renderBooks(books);