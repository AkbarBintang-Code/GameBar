// app.js
document.addEventListener("alpine:init", () => {
  // Data Produk
  Alpine.data("products", () => ({
    itemsConsole: [
      { id: 1, name: "Nintendo DS", img: "nintendods.png", detail:"Console genggam dua layar yang jadi teman setia saat perjalanan. Game klasik seperti Pokémon, Mario Kart, dan Nintendogs siap hidup kembali di tanganmu.",  price: 297000},
      { id: 2, name: "Nintendo 64", img: "nintendo64.png", detail:"Buat kamu yang tumbuh di era 90-an, inilah console ikonik dari masa keemasan game 3D. Super Mario 64, Zelda: Ocarina of Time, hingga GoldenEye 007 hadir dengan rasa nostalgia yang utuh.",  price: 1485000},
      { id: 3, name: "Sega Dreamcast", img: "segadreamcast.png", detail:"Konsol visioner yang jauh melampaui zamannya. Cocok untuk kamu yang suka eksplorasi game klasik dengan desain unik dan pengalaman khas 128-bit.",  price: 2722500},
      { id: 4, name: "Sega Genesis", img: "segagenesis.png", detail:"Legendanya para gamer. Sonic the Hedgehog, Streets of Rage, dan banyak judul lawas lainnya siap membangkitkan memori indah masa kecilmu.",  price: 1155000},
      { id: 5, name: "Xbox", img: "xbox.png", detail:"Konsol generasi awal dari Microsoft dengan game eksklusif yang punya tempat tersendiri di hati para gamer sejati.",  price: 2475000},
      { id: 6, name: "Xbox 360 S 64", img: "xbox360s.png", detail:"Era baru game multiplayer online dimulai di sini. Main ulang Gears of War, Halo 3, atau Forza Motorsport dan rasakan hype masa itu.",  price: 2062500},
      { id: 7, name: "Xbox 1", img: "xbox1.png", detail:"Konsol canggih dengan performa kuat, cocok buat kamu yang ingin nostalgia tapi tetap dengan kenyamanan modern.",  price: 1980000},
      { id: 8, name: "Playstation 1", img: "ps1.png", detail:"Console legendaris yang memulai semuanya. Suara booting-nya saja bisa bikin merinding. Cocok untuk yang ingin kembali ke masa kecil yang penuh tawa.",  price: 1650000},
      { id: 9, name: "Playstation 2 Fat", img: "ps2fat.png", detail:"Console paling laris sepanjang masa. Dari GTA San Andreas, PES 6, sampai Final Fantasy — semua terasa lebih hidup di PS2.",  price: 2500000},
      { id: 10, name: "Playstation 2 Slim", img: "ps2slim.png", detail:"Console paling laris sepanjang masa. Dari GTA San Andreas, PES 6, sampai Final Fantasy — semua terasa lebih hidup di PS2.",  price: 2500000},
      { id: 11, name: "Playstation 3 Slim", img: "ps3slim.png", detail:"Untuk yang ingin nostalgia dengan cita rasa HD. Koleksi gamenya berlimpah dan tetap memikat.",  price: 3465000},
      { id: 12, name: "Playstation 4 Slim", img: "ps4slim.png", detail:"Nostalgia dengan kenyamanan modern. Desain ramping, performa stabil, dan tetap seru untuk semua kalangan.",  price: 4125000},
      { id: 13, name: "Playstation Portable", img: "psp.png", detail:"Kecil, simpel, tapi penuh kenangan. Game seperti God of War dan Monster Hunter dulu setia menemani waktu luangmu.",  price: 1650000},
      { id: 14, name: "Playstation Vita", img: "psvita.png", detail:"Console genggam dengan grafis menawan dan kontrol responsif. Cocok buat kamu yang rindu sensasi game portable berkualitas tinggi.",  price: 1500000},
    ],
    itemsGame: [
      { id: 1, name: "Pokemon Diamond Version (Nintendo DS)", img: "pokemonds.jpeg", detail:"Game Menjelajah Sinnoh dengan nostalgia di setiap langkah.",  price: 25000},
      { id: 2, name: "Zelda Phantom Hourglass (Nintendo DS)", img: "zeldads.jpg", detail:"Game Petualangan magis dalam genggaman.",  price: 30000},
      { id: 3, name: "Golden Eye 007 (Nintendo 64)", img: "goldeneyen64.jpg", detail:"Game FPS klasik yang tak tergantikan.",  price: 75000},
      { id: 4, name: "Mario Kart (Nintendo 64)", img: "mariokartn64.jpg", detail:"Game Balapan penuh tawa dan serangan tak terduga!",  price: 80000},
      { id: 5, name: "Sonic Adventure (Sega Dreamcast)", img: "sonicdreamc.jpg", detail:"Rasakan kecepatan legendaris dari landak biru kesayangan semua orang!.",  price: 90000},
      { id: 6, name: "Crazy Taxi (Sega Dreamcast)", img: "taxidreamc.jpeg", detail:"Game Ngantarin penumpang dengan gaya paling gila!",  price: 95000},
      { id: 7, name: "Mortal Kombat (Sega Genesis)", img: "mortalgen.jpg", detail:"Game Tarung klasik, jurus mematikan, dan nostalgia arcade.",  price: 100000},
      { id: 8, name: "Mortal Kombat 2 (Sega Genesis)", img: "mortal2gen.jpg", detail:"Game Tarung klasik, jurus mematikan, dan nostalgia arcade.",  price: 105000},
      { id: 9, name: "Halo Combat Evolved (Xbox)", img: "haloxbox.jpg", detail:"Game Perang luar angkasa dengan cerita epik.",  price: 125000},
      { id: 10, name: "Halo 2 (Xbox)", img: "halo2xbox.jpg", detail:"Game Perang luar angkasa dengan cerita epik.",  price: 130000},
      { id: 11, name: "Call Of Duty Black Ops 1 (Xbox 360)", img: "codxbox360.jpg", detail:"Game Aksi penuh strategi dan ketegangan.",  price: 150000},
      { id: 12, name: "Call Of Duty Black Ops 2 (Xbox 360)", img: "cod2xbox360.jpeg", detail:"Game Aksi penuh strategi dan ketegangan.",  price: 155000},
      { id: 13, name: "Destiny (Xbox 1)", img: "destinyxbox1.jpg", detail:"Dunia luas dan petualangan luar angkasa yang imersif.",  price: 175000},
      { id: 14, name: "GTA V (Xbox 1)", img: "gtaxbox1.jpg", detail:"Game Berisi Kota besar, tiga karakter, dan kebebasan penuh aksi.",  price: 180000},
      { id: 15, name: "Final Fantasy 7 (Playstation 1)", img: "finalfantasy7ps1.jpg", detail:"Game Tentang Dua kisah RPG legendaris yang membentuk sejarah game dunia.",  price: 190000},
      { id: 16, name: "Final Fantasy 8 (Playstation 1)", img: "finalfantasy8ps1.jpeg", detail:"Game Tentan Dua kisah RPG legendaris yang membentuk sejarah game dunia.",  price: 195000},
      { id: 17, name: "Need For Speed Underground (Playstation 2)", img: "nfsups2.jpg", detail:"Game Balapan malam penuh neon dan modifikasi.",  price: 200000},
      { id: 18, name: "Need For Speed Underground 2(Playstation 2)", img: "nfsu2ps2.jpeg", detail:"Game Balapan malam penuh neon dan modifikasi.",  price: 205000},
      { id: 19, name: "Need For Speed Most Wanted (Playstation 2)", img: "nfsmwps2.jpeg", detail:"Game Kejar-kejaran Dengan Polisi yang tak terlupakan.",  price: 210000},
      { id: 20, name: "Uncharted (Playstation 3)", img: "unchartedps3.jpg", detail:"Game Aksi dan misteri penuh sinematika yang bikin jantung berdebar.",  price: 220000},
      { id: 21, name: "Uncharted 2 (Playstation 3)", img: "uncharted2ps3.jpg", detail:"Game Aksi dan misteri penuh sinematika yang bikin jantung berdebar.",  price: 220000},
      { id: 22, name: "Spiderman (Playstation 4)", img: "spidermanps4.jpg", detail:"Game Ayunan di antara gedung tinggi yang tak pernah terasa membosankan.",  price: 250000},
      { id: 23, name: "Red Dead Redemption 2 (Playstation 4)", img: "rdr2ps4.jpg", detail:"Game Kisah koboi penuh emosi dan grafis yang memanjakan mata.",  price: 255000},
      { id: 24, name: "Lego Starwars 2 (Playstation Portable)", img: "starwars2psp.jpg", detail:"Game Petualangan seru penuh humor khas Lego.",  price: 120000},
      { id: 25, name: "Lego Starwars 3 (Playstation Portable)", img: "starwars3psp.jpg", detail:"Game Petualangan seru penuh humor khas Lego.",  price: 125000},
      { id: 26, name: "Ninjago (Playstation Vita)", img: "ninjagopsvita.jpg", detail:"Game aksi untuk semua usia dengan karakter favorit anak-anak.",  price: 105000},
      { id: 27, name: "Madden 13 (Playstation Vita)", img: "madden13psvita.jpg", detail:"Game Untuk kamu yang rindu adrenalin sepak bola Amerika.",  price: 100000},
    ],
  }));

  // Store Product Detail Modal
  Alpine.store("product", {
    detail: null,

    openModal(item) {
      this.detail = item;
      document.getElementById("item-detail-modal").style.display = "flex";
    },

    closeModal() {
      document.getElementById("item-detail-modal").style.display = "none";
    },
  });
});

// Konversi ke format Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};


const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80; // sesuaikan dengan tinggi nav jika fixed
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLink?.classList.add("active-link");
    } else {
      navLink?.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);



