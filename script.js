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
    },

    // --- ILMU PENGETAHUAN ALAM (IPA) ---
    {
        id: 11,
        title: "Fisika untuk SMA/MA Kelas X-XII",
        author: "Dr. Yohanes Surya",
        category: "IPA",
        cover: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=80",
        description: "Pembahasan lengkap mekanika, termodinamika, gelombang, listrik, dan fisika modern dengan latihan soal UN.",
        isOnline: true,
        available: true,
        rating: 4.7
    },
    {
        id: 12,
        title: "Kimia Dasar & Terapan",
        author: "Prof. Dr. Ir. M. Ghozali",
        category: "IPA",
        cover: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=500&q=80",
        description: "Konsep atom, ikatan kimia, larutan, elektrolisis, kimia organik, dan penerapan dalam industri.",
        isOnline: false,
        available: true,
        rating: 4.5
    },
    {
        id: 13,
        title: "Biologi: Kehidupan & Ekosistem",
        author: "Dra. Siti Aminah, M.Si",
        category: "IPA",
        cover: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=500&q=80",
        description: "Struktur sel, genetika, evolusi, ekologi, dan keanekaragaman hayati dengan ilustrasi warna lengkap.",
        isOnline: true,
        available: true,
        rating: 4.8
    },
    {
        id: 14,
        title: "Matematika Lanjutan: Kalkulus & Statistika",
        author: "Bambang Supriadi, M.Pd",
        category: "IPA",
        cover: "https://images.unsplash.com/photo-1635070041078-e363d200cdac?auto=format&fit=crop&w=500&q=80",
        description: "Limit, turunan, integral, peluang, statistika inferensial, dan penerapan dalam analisis data.",
        isOnline: true,
        available: false,
        rating: 4.6
    },

    // --- NOVEL & SASTRA ---
    {
        id: 15,
        title: "Bumi Manusia",
        author: "Pramoedya Ananta Toer",
        category: "Novel",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80",
        description: "Klasik sastra Indonesia tentang perjuangan Minke di era kolonial, mengangkat rasa ingin tahu & keadilan.",
        isOnline: false,
        available: true,
        rating: 4.9
    },
    {
        id: 16,
        title: "Negeri 5 Menara",
        author: "Ahmad Fuadi",
        category: "Novel",
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&q=80",
        description: "Kisah inspiratif 6 santri Pondok Modern Gontor mengejar cita-cita di 5 benua berbeda.",
        isOnline: true,
        available: true,
        rating: 4.8
    },
    {
        id: 17,
        title: "Filosofi Teras",
        author: "Henry Manampiring",
        category: "Novel",
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
        description: "Panduan praktis filsafat Stoa untuk menghadapi kecemasan, mengendalikan emosi, & menemukan kedamaian.",
        isOnline: true,
        available: true,
        rating: 4.7
    },
    {
        id: 18,
        title: "Laut Bercerita",
        author: "Leila S. Chudori",
        category: "Novel",
        cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=500&q=80",
        description: "Novel sejarah tentang eksil politik Indonesia 1965, mengisahkan perjuangan, cinta, & harapan.",
        isOnline: false,
        available: true,
        rating: 4.8
    },

    // --- PENGEMBANGAN DIRI & MOTIVASI ---
    {
        id: 19,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Pengembangan Diri",
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
        description: "Cara membangun kebiasaan baik & menghapus kebiasaan buruk melalui perubahan kecil yang berkelanjutan.",
        isOnline: true,
        available: true,
        rating: 4.9
    },
    {
        id: 20,
        title: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        category: "Pengembangan Diri",
        cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&q=80",
        description: "Perbedaan growth mindset vs fixed mindset dan bagaimana cara mengembangkan potensi maksimal.",
        isOnline: true,
        available: true,
        rating: 4.8
    },
    {
        id: 21,
        title: "7 Kebiasaan Orang-Efektif",
        author: "Stephen R. Covey",
        category: "Pengembangan Diri",
        cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80",
        description: "Prinsip-prinsip keefektifan pribadi & interpersonal: proaktif, begin with end in mind, win-win.",
        isOnline: false,
        available: true,
        rating: 4.7
    },

    // --- TEKNOLOGI & INFORMATIKA UMUM ---
    {
        id: 22,
        title: "Dasar-Dasar Kecerdasan Buatan (AI)",
        author: "Andri Wijaya, M.Kom",
        category: "Teknologi",
        cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=500&q=80",
        description: "Konsep machine learning, deep learning, neural network, dan etika AI untuk pemula.",
        isOnline: true,
        available: true,
        rating: 4.8
    },
    {
        id: 23,
        title: "Keamanan Siber untuk Pemula",
        author: "Rizki Pratama, S.Kom",
        category: "Teknologi",
        cover: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80",
        description: "Dasar cybersecurity: ancaman umum, proteksi data pribadi, safe browsing, & digital hygiene.",
        isOnline: true,
        available: true,
        rating: 4.6
    },
    {
        id: 24,
        title: "Pemrograman Python untuk Pemula",
        author: "Dian Permata, M.T",
        category: "Teknologi",
        cover: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=500&q=80",
        description: "Syntax dasar, struktur data, OOP, file handling, dan mini project otomatisasi & data analysis.",
        isOnline: true,
        available: false,
        rating: 4.9
    },

    // --- AGAMA & SPIRITUALITAS ---
    {
        id: 25,
        title: "Tafsir Ringkas Al-Quran 30 Juz",
        author: "Tim Ahli Tafsir",
        category: "Agama",
        cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=500&q=80",
        description: "Tafsir ayat per ayat dengan bahasa Indonesia yang mudah dipahami, dilengkapi asbabun nuzul.",
        isOnline: false,
        available: true,
        rating: 4.9
    },
    {
        id: 26,
        title: "Pendidikan Karakter Islami",
        author: "Ustadz Abdul Somad, Lc., MA",
        category: "Agama",
        cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=500&q=80",
        description: "Membangun akhlak mulia berdasarkan Al-Quran & Hadits untuk generasi emas Indonesia.",
        isOnline: true,
        available: true,
        rating: 4.8
    },

    // --- BAHASA & SASTRA ---
    {
        id: 27,
        title: "Kamus Besar Bahasa Indonesia (Edisi Ke-5)",
        author: "Badan Pengembangan Bahasa",
        category: "Bahasa",
        cover: "https://images.unsplash.com/photo-1598617939892-5b3a4b3b3e3d?auto=format&fit=crop&w=500&q=80",
        description: "Referensi resmi kosakata baku Indonesia dengan >100.000 entri, contoh kalimat, & etimologi.",
        isOnline: false,
        available: true,
        rating: 5.0
    },
    {
        id: 28,
        title: "English for SMK: Hospitality & Tourism",
        author: "Jane Smith, S.Pd",
        category: "Bahasa",
        cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=500&q=80",
        description: "Bahasa Inggris spesifik industri perhotelan: reservasi, check-in, complaint handling, & telephone English.",
        isOnline: true,
        available: true,
        rating: 4.7
    },
    {
        id: 29,
        title: "Mandarin Praktis untuk Pariwisata",
        author: "Li Wei & Budi Hartono",
        category: "Bahasa",
        cover: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&q=80",
        description: "Frasa percakapan dasar, kosakata hotel/restoran, budaya China, & latihan listening untuk pelayanan tamu.",
        isOnline: true,
        available: true,
        rating: 4.5
    },

    // --- KARIR & KEWIRAUSAHAAN ---
    {
        id: 30,
        title: "Memulai Bisnis Kecil dari Nol",
        author: "Robert Kiyosaki (Terj.)",
        category: "Karir",
        cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=500&q=80",
        description: "Langkah praktis mendirikan UMKM: ide, modal, legalitas, pemasaran digital, & manajemen keuangan.",
        isOnline: true,
        available: true,
        rating: 4.8
    },
    {
        id: 31,
        title: "CV & Interview Menang: Panduan Lulus Kerja",
        author: "HRD Practitioner Indonesia",
        category: "Karir",
        cover: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=500&q=80",
        description: "Template CV ATS-friendly, teknik STAR interview, negosiasi gaji, & personal branding LinkedIn.",
        isOnline: true,
        available: true,
        rating: 4.7
    }
];

// Load saved books from localStorage
let savedBooks = JSON.parse(localStorage.getItem('elib_savedBooks')) || [];

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
        localStorage.setItem('elib_savedBooks', JSON.stringify(savedBooks));
        cartCount.innerText = savedBooks.length;
        alert(`Buku "${title}" dimasukkan ke daftar simpanan!`);
    } else {
        alert("Buku sudah ada di simpanan Anda.");
    }
}

// FORM PEMINJAMAN
window.openBorrowForm = function(title) {
    borrowBookTitle.value = title;
    
    // Set default borrow date to today
    const today = new Date();
    const borrowDateInput = document.getElementById('borrowDate');
    const returnDateInput = document.getElementById('returnDate');
    
    borrowDateInput.value = today.toISOString().split('T')[0];
    borrowDateInput.min = today.toISOString().split('T')[0];
    
    // Auto-set return date to 7 days later
    const returnDate = new Date(today);
    returnDate.setDate(returnDate.getDate() + 7);
    returnDateInput.value = returnDate.toISOString().split('T')[0];
    returnDateInput.min = borrowDateInput.value;
    
    // Update return date min when borrow date changes
    borrowDateInput.onchange = () => {
        returnDateInput.min = borrowDateInput.value;
        const selectedBorrow = new Date(borrowDateInput.value);
        const autoReturn = new Date(selectedBorrow);
        autoReturn.setDate(autoReturn.getDate() + 7);
        returnDateInput.value = autoReturn.toISOString().split('T')[0];
    };
    
    borrowModal.style.display = 'flex';
}

borrowForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const studentClass = document.getElementById('studentClass').value;
    const borrowDate = document.getElementById('borrowDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const reminder = document.getElementById('reminderCheck').checked;
    
    const reminderText = reminder 
        ? '\n✅ Pengingat pengembalian DIAKTIFKAN (Notifikasi 1 hari sebelum jatuh tempo)' 
        : '\n⚠️ Pengingat pengembalian TIDAK aktif';
    
    alert(`Permintaan Peminjaman Berhasil Ditambahkan!\n\nNama Siswa: ${name}\nKelas/NISN: ${studentClass}\nJudul Buku: ${borrowBookTitle.value}\nTanggal Ambil: ${borrowDate}\nTanggal Kembali: ${returnDate}${reminderText}\n\nSilakan ambil fisik buku di meja sirkulasi Perpustakaan SMK Wira Harapan.`);
    borrowModal.style.display = 'none';
    borrowForm.reset();
});

// CLOSE MODAL EVENTS
closeModal.onclick = () => bookModal.style.display = 'none';
closeBorrowModal.onclick = () => borrowModal.style.display = 'none';
closeCartModal.onclick = () => cartModal.style.display = 'none';

// Initialize cart count on page load
cartCount.innerText = savedBooks.length;

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
