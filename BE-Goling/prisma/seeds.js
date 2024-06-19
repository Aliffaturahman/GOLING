const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { v4: uuidv4 } = require("uuid");

async function main() {
  const DanauToba = await prisma.destination.create({
    data: {
      id: uuidv4(),
      name: "Danau Toba",
      description:
        "Danau Toba adalah sebuah keajaiban alam yang sangat menakjubkan. Danau ini diperkirakan terbentuk dari letusan dahsyat sebuah gunung api, Gunung Toba, yang terjadi sekitar 74.000 tahun yang lalu. Dengan luas lebih dari 1.145 kilometer persegi dan kedalaman 450 meter, Danau Toba sebenarnya lebih mirip lautan daripada danau. Di tengah danau vulkanik terbesar di dunia ini juga terdapat sebuah pulau yang berukuran cukup besar, yaitu Pulau Samosir. <br> Danau Toba menjadi tempat yang sempurna untuk bersantai, karena udaranya sangat sejuk dan suasananya pun amat tenang. Tentu saja, sebab letak Danau Toba berada di 900 meter di atas permukaan laut. Selain panorama danau yang memukau, Sobat Pesona juga akan disuguhkan keindahan pemandangan deretan pegunungan dan pepohonan hijau yang menyegarkan mata. Pokoknya, cocok jadi tempat untuk melepas penat, deh",
      hero_image:
        "https://storage.googleapis.com/kzquandary/goling/toba-header.avif",
      image_url: {
        create: [
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/danau_toba1.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/danau_toba2.jpg",
          },
        ],
      },
    },
  });
  const CandiBorobudur = await prisma.destination.create({
    data: {
      id: uuidv4(),
      name: "Candi Borobudur",
      description:
        "Sobat Pesona pastinya sudah tidak asing kan dengan Candi Borobudur? Terletak di Kabupaten Magelang, Jawa Tengah, candi yang sangat megah dan rupawan ini telah dikenal oleh wisatawan lokal maupun mancanegara sebagai kuil Buddha terbesar di dunia. Wajar saja, karena Candi Borobudur memiliki luas sekitar 2500 meter persegi, dengan panjang 121,66 meter, lebar 121,38 meter, dan tinggi 35,40 meter.<br>Terjadinya erupsi Gunung Merapi yang dahsyat pada sekitar tahun 1006 menyebabkan Candi Borobudur tertimbun oleh debu vulkanik selama ratusan tahun lamanya. Beberapa abad kemudian, Candi Borobudur akhirnya ditemukan kembali pada tahun 1814 oleh seorang insinyur Belanda bernama Hermanus Christiaan Cornelius, ketika kerajaan Inggris yang diwakili oleh Thomas Stamford Raffles menduduki beberapa bagian pulau Jawa, termasuk Jawa Tengah. Setelah Indonesia merdeka, pada akhir tahun 60-an pemerintah bekerja sama dengan UNESCO untuk merenovasi Candi Borobudur selama bertahun-tahun, sampai akhirnya UNESCO menetapkan mahakarya agung tersebut sebagai Situs Warisan Dunia di tahun 1991.",
      hero_image:
        "https://storage.googleapis.com/kzquandary/goling/headerborobudur.avif",
      image_url: {
        create: [
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/danau_toba1.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/brobudur2.jpg",
          },
        ],
      },
    },
  });
  const Mandalika = await prisma.destination.create({
    data: {
      id: uuidv4(),
      name: "Mandalika",
      description:
        "Membentang luas dari Sabang hingga Merauke, mengulas pesona destinasi wisata #DiIndonesiaAja emang enggak akan ada habisnya. Bener enggak, Sobat Pesona? Nah, salah satu kepingan surga tersembunyi di Bumi Ibu Pertiwi ini bisa ditemukan di NTB. Tepatnya di Lombok Tengah dan jadi primadona para pencinta wisata olahraga, apalagi kalau bukan Mandalika!<br>Ternyata nih, bukan cuma ikon Sirkuit Mandalika kelas dunia yang bakal memanjakan Sobat Pesona saat main ke daerah yang punya kain tenun indah ini. Tapi, ada juga destinasi wisata alam, kuliner, hingga kekayaan budaya. Yuk, cari tahu info selengkapnya di bawah ini!<br>Ada sebuah legenda atau cerita rakyat terkenal di Mandalika, yaitu legenda Putri Mandalika yang jadi asal-usul nama daerah tersebut. Dirinya merupakan seorang putri cantik dari tokoh suku Sasak terkemuka dan pesonanya menghipnotis semua lelaki, bahkan hingga luar Lombok. Lalu, suatu ketika Putri Mandalika kewalahan menerima banyak pinangan para pelamar dan memutuskan untuk menenangkan diri dengan bersemedi. Keesokan harinya, Putri Mandalika mengumpulkan seluruh para lelaki yang menyukainya di Bukit Seger.<br>Alih-alih memilih satu lamaran, ternyata putri jelita tersebut justru menghempaskan badannya ke dalam gulungan ombak Pantai Seger dan menghilang tanpa ada jejak. Uniknya, setelah sang putri menghilang, Pantai Seger kemudian dipenuhi oleh cacing laut berwarna-warni. Masyarakat lokal pun mempercayai cacing laut itu sebagai bentuk lain dari Putri Mandalika.<br>Dengan legenda Putri Mandalika, hadirlah perayaan upacara Bau Nyale yang selalu diadakan setiap tahunnya dan menarik perhatian wisatawan lokal hingga mancanegara. Bau Nyale sendiri merupakan ritual mencari cacing laut yang diyakini sebagai jelmaan Putri Mandalika yang menghilang setelah terjun dari atas Bukit Seger ke Pantai Seger. Sobat Pesona juga bisa melihat langsung monumen Putri Mandalika di Pantai Seger lho!",
      hero_image:
        "https://storage.googleapis.com/kzquandary/goling/headermandalika.avif",
      image_url: {
        create: [
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/mandalika1.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/mandalika2.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/mandalika3.jpg",
          },
        ],
      },
    },
  });
  const LabuanBajo = await prisma.destination.create({
    data: {
      id: uuidv4(),
      name: "Labuan Bajo",
      description:
        "Labuan Bajo merupakan sebuah surga tersembunyi yang ada di Indonesia bagian timur. Desa ini terletak di Kecamatan Komodo, Kabupaten Manggarai Barat, Provinsi Nusa Tenggara Timur yang berbatasan langsung dengan Nusa Tenggara Barat dan dipisahkan oleh Selat Sape. Labuan Bajo adalah salah satu dari lima Destinasi Super Prioritas yang sedang dikembangkan di Indonesia.<br> Destinasi ini merupakan gerbang menuju Taman Nasional Komodo yang menyimpan keindahan alam yang menakjubkan dan hewan purba yang mendunia. Mulai dari hewan endemik komodo di Pulau Rinca dan Pulau Komodo, deretan pulau eksotis, keragaman hayati bawah laut, hingga pantai aduhai, semua bisa Sobat Pesona temukan dengan memulai perjalanan di Labuan Bajo.<br> Menikmati pemandangan langit senja juga bisa menjadi cara lain menikmati Labuan Bajo. Spot strategis untuk menikmati keindahan senja ini berada tak jauh dari Bandar Udara Internasional Komodo. Sobat Pesona dapat memilih destinasi Bukit Cinta, Puncak Amelia, dan Puncak Silvia, untuk mengabadikan langit senja yang menentramkan jiwa. Ada juga Gua Rangko yang memiliki pesona bak oasis dengan kolam air asinnya yang begitu menyejukkan.<br> Kalau Sobat Pesona ingin berpetualang di Labuan Bajo, trekking singkat ke Air Terjun Cunca Wulang bisa jadi pilihan. Jangan lewatkan juga pengalaman seru menjajal live-on-board, yaitu mencoba tinggal di kapal pinisi selama beberapa hari sambil berlayar mengunjungi pulau-pulau yang indah, dan bisa juga menyelam untuk melihat keindahan bawah laut Labuan Bajo yang istimewa.",
      hero_image:
        "https://storage.googleapis.com/kzquandary/goling/headerlb.avif",
      image_url: {
        create: [
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/lb.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/lb2.jpg",
          },
        ],
      },
    },
  });
  const PantaiLikupang = await prisma.destination.create({
    data: {
      id: uuidv4(),
      name: "Pantai Likupang",
      description:
        "Sulawesi Utara merupakan provinsi di Indonesia yang terkenal dengan destinasi wisata alamnya yang menakjubkan. Pantai, pegunungan, serta hutan yang rimbun wajib Sobat Pesona kunjungi ketika berada di provinsi tersebut. Salah satu tempat terbaik yang dapat Sobat Pesona temukan di sini adalah Pantai Likupang. Pantai ini terletak di bagian paling utara pulau Sulawesi dan hanya berjarak 48 km dari kota Manado, tepatnya berada di kabupaten Likupang.<br> Sejak pertama kali Sobat Pesona memandang Pantai Likupang maka pasti mata akan dibuat terpana oleh hamparan pantai berpasir putih yang indah dan luas. Tidak hanya itu, Pantai Likupang juga memiliki air laut yang sangat jernih dan menawan, serta menawarkan berbagai tempat dan kegiatan wisata lainnya. Lebih lanjut, Sobat Pesona juga bisa menikmati pemandangan bawah laut  dengan menyelam langsung ke dalam lautan biru yang pasti akan membuat anda takjub. Likupang juga memiliki beberapa tujuan wisata lainnya seperti Pantai Pal dan Pantai Pulisan. Tidak jauh dari Likupang terdapat beberapa Pulau yang juga memiliki keindahan bawah laut yang luar biasa, yaitu Pulau Lihaga dan Pulau Gangga.<br> Bila Sobat Pesona berangkat dari Manado, untuk mencapai Likupang, Sobat Pesona dapat menggunakan transportasi umum Bus dari terminal Paal. Bus tersebut akan membawa Sobat Pesona langsung ke Terminal Bus Likupang. Jika Sobat Pesona berangkat bersama keluarga atau teman-teman, disarankan untuk membawa kendaraan sendiri atau menyewa mobil dari rental, karena pantai ini berjarak cukup jauh dari pusat kota.",
      hero_image:
        "https://storage.googleapis.com/kzquandary/goling/likupangH.avif",
      image_url: {
        create: [
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/likupang1.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/likupang2.jpg",
          },
        ],
      },
    },
  });
  const Bali = await prisma.destination.create({
    data: {
      id: uuidv4(),
      name: "Bali",
      description:
        "Siapa pun tak ada yang bisa menyangkal keindahan yang ditawarkan Pulau Dewata. Baru-baru ini, Bali didapuk menjadi destinasi paling populer di dunia versi Tripadvisor Travellers’ Choice tahun 2021. Tentu saja, bentangan alamnya yang indah berpadu sempurna dengan kearifan lokalnya yang istimewa menjadikan Bali sebagai destinasi #DiIndonesiaAja yang patut Sobat kunjungi setidaknya sekali seumur hidup!<br> Daya tarik utama Pulau Bali tentu saja terdapat pada wisata pantainya. Hampir semua wisatawan yang berlibur di Bali memasukkan pantai ke dalam daftar kunjungannya. Deretan pantai yang ada di Bali punya keunikan dan pesonanya tersendiri, lho!<br> Salah satu pantai yang paling populer di Bali adalah Pantai Kuta. Pantai berpasir putih ini terkenal berkat ombaknya yang besar sekaligus menjadi surga bagi para peselancar. Karena lokasinya yang strategis, berbagai hotel, restoran, toko, dan kafe juga dapat dengan mudah Sobat Pesona temukan di sepanjang jalan Pantai Kuta.<br> Jika Sobat Pesona lebih suka suasana pantai yang tenang, datang saja ke berbagai pilihan pantai tersembunyi yang ada di selatan Pulau Bali! Sebut saja Pantai Balangan, Pantai Dreamland, Pantai Melasti, dan deretan pantai lainnya yang masih relatif sepi.<br> Lain halnya jika Sobat Pesona ingin menjajal sensasi berselancar atau menyelam di lautan lepas. Sobat Pesona bisa datang ke tiga pulau di sebelah tenggara Pulau Bali, yaitu Nusa Lembongan, Nusa Ceningan, dan Nusa Penida. Para peselancar dari seluruh penjuru dunia datang ke tiga kawasan ini untuk menaklukan ombaknya yang menantang.",
      hero_image: "https://storage.googleapis.com/kzquandary/goling/baliH.avif",
      image_url: {
        create: [
          { image_url: "https://storage.googleapis.com/kzquandary/goling/bali1.jpg" },
          { image_url: "https://storage.googleapis.com/kzquandary/goling/bali2.jpg" }
        ]
      },
    },
  });
  const RajaAmpat = await prisma.destination.create({
    data: {
      id: uuidv4(),
      name: "Raja Ampat",
      description:
        "Kepulauan Raja Ampat berada di bagian paling barat Papua dan membentang di area seluas kurang lebih 4,6 juta hektar. Kabupaten Raja Ampat terdiri dari 4 pulau besar yaitu Pulau Waigeo, Batanta, Salawati dan Misool, dan 1.847 pulau-pulau kecil lainnya. Nah, nama Raja Ampat sendiri diyakini berasal dari legenda masyarakat setempat yang percaya bahwa zaman dahulu kala ada seorang wanita yang menemukan tujuh telur, empat telur tersebut menetas menjadi raja-raja yang berkuasa di empat pulau utama. Tersisa tiga lainnya, satu menjadi batu, satu menjadi wanita, dan satu lagi menjadi makhluk gaib atau hantu.Terlepas legenda yang dipercayai masyarakat setempat, keindahan yang disuguhkan oleh Raja Ampat merupakan fakta yang tak bisa diganggu gugat.<br> Bagi Sobat Pesona yang gemar diving dan snorkeling, wilayah perairan Raja Ampat adalah salah satu destinasi diving terbaik di dunia. Menurut laporan sebuah organisasi sosial lingkungan internasional, The Nature Conservancy and Conservation International, sekitar 75% spesies karang di dunia hidup di kepulauan Raja Ampat. Destinasi ini memiliki kekayaan dan keunikan spesies yang tinggi dengan ditemukannya 1.318 jenis ikan, 699 jenis moluska (hewan lunak), dan 537 jenis terumbu karang. Rasakan sendiri sensasi menyelam dan bertemu dengan ragam jenis biota laut yang unik, seperti kuda laut kerdil (pygmy seahorse), ikan kelelawar, hingga dugong bisa kamu temukan di wilayah perairan Raja Ampat..<br> Beberapa spot menyelam terbaik dan paling terkenal di Raja Ampat di antaranya  adalah Kabui Passage, di sekitar Dermaga Pulau Arborek, Sauwandarek, Yenbuba, Dinding Friwen, dan banyak lagi! Tak heran ya, jika banyak sekali wisatawan mancanegara yang rela jauh-jauh datang ke Indonesia untuk menikmati pesona bawah lautnya yang memesona. Kamu jangan mau kalah, yuk, masukkan Raja Ampat ke daftar kunjunganmu nanti, Sobat Pesona!.<br> Tak hanya keindahan bawah lautnya yang luar biasa, pemandangan di atas permukaan juga tak kalah memesona. Panorama deretan pulau-pulau batu di tengah gradasi air biru terlihat begitu surgawi saat dilihat dari atas bukit. Siapkan fisik yang kuat dan lakukan trekking ke atas puncak bukitnya untuk melihat pemandangan indah seperti ini, ya!",
      hero_image:
        "https://storage.googleapis.com/kzquandary/goling/rajaampatH.avif",
      image_url: {
        create: [
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/rajaampat1.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/rajaampat2.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/rajaampat3.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/rajaampat4.jpg",
          },
        ],
      },
    },
  });
  const Morotai = await prisma.destination.create({
    data: {
      id: uuidv4(),
      name: "Morotai",
      description:
        "Sobat Pesona ada yang sudah kenal belum sama Pulau Morotai? Pulau yang tersembunyi di ujung Maluku Utara ini ternyata kaya akan pemandangan yang luar biasa, lho! Selain itu, Pulau Morotai juga pun menyimpan sebuah sejarah yang cukup menarik di masa lalu. Enggak cuma punya pemandangan cantik sama sejarah unik, pulau yang dijadikan sebagai salah satu Destinasi Pariwisata Prioritas ini juga punya kuliner khas yang bisa bikin Sobat Pesona tergiur Mau tau lebih lengkap tentang pulau yang satu ini? Simak aja ulasan lengkapnya di bawah ini!<br> Pulau yang terletak di utara pulau Halmahera ini ternyata memiliki masa lalu yang menarik, lho! Masyarakat lokal yang masih mengingat Perang Dunia ke-2 seringkali menceritakan kisah tentang Pulau Morotai pada saat itu, di mana pulau tersebut pernah menjadi sarang dari berbagai macam aktivitas militer, dari serangan mendadak, hentakan ribuan pasukan tentara, sampai kapal-kapal angkatan laut yang pernah berlabuh di sana.<br> Nah, salah satu sejarah yang melekat di kalangan masyarakat lokal Morotai adalah peristiwa 15 September 1944, tepatnya ketika pasukan Sekutu dari Amerika Serikat dan Australia yang dipimpin oleh Jenderal Douglas MacArthur, mendarat di ujung barat daya Pulau Morotai untuk mengambil alih pulau tersebut dari kekuasaan pasukan Jepang. Setelah memenangkan pertempuran, Jenderal MacArthur memutuskan untuk membangun pangkalan militer di Pulau Morotai dengan lebih dari 50.000 personil tentara. Jenderal MacArthur dipercaya telah berhasil membangun beberapa lapangan terbang, sebuah rumah sakit, juga pangkalan laut di Pulau Morotai dalam waktu yang cukup singkat, lho!<br> Kini, Pulau Morotai telah memiliki 53.000 penduduk dan kembali menjadi surga tropis yang tenang. Saat ini, pemerintah Indonesia berencana untuk mengembangkan Pulau Morotai menjadi pusat perikanan, pariwisata, serta jasa.",
      hero_image:
        "https://storage.googleapis.com/kzquandary/goling/header-morotai.avif",
      image_url: {
        create: [
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/morotai.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/morotai1.jpg",
          },
        ],
      },
    },
  });
  const TanjungKelayang = await prisma.destination.create({
    data: {
      id: uuidv4(),
      name: "Tanjung Kelayang",
      description:
        "Diapit oleh Selat Gaspar dan Karimata, di lepas pantai timur Sumatera, terletak Pulau Belitung yang diberi anugerah pantai memukau dan pemandangan yang luar biasa. Tahu enggak sih, Sob? Pantai Tanjung Kelayang, di bagian utara pulau, adalah jantung dari kemegahan Pulau Belitung. Di sini, Sobat Pesona dapat memanjakan mata dengan pemandangan alam yang indah memukau.<br> Bermula dari sebuah pulau yang dihuni oleh beberapa kerajaan yang berkembang, pada tahun 2000, Pulau Belitung dan Pulau Bangka bersatu menjadi provinsi ke-31 di Indonesia dengan nama Provinsi Kepulauan Bangka Belitung. Banyak pilihan destinasi wisata yang menarik di sini, salah satunya adalah Tanjung Kelayang. Meski letaknya terpencil, destinasi ini berkembang menjadi resor terpadu yang luas mengikuti kebijakan pemerintah yang menetapkan kawasan tersebut sebagai Kawasan Ekonomi Khusus (KEK) dan ditetapkan sebagai 10 Destinasi Pariwisata Prioritas. Sobat Pesona sudah tahu belum, nih? Berkat keindahan yang sangat menakjubkan, Tanjung Kelayang dinobatkan sebagai destinasi wisata yang sangat diunggulkan di Kepulauan Bangka Belitung, lho!<br> Saat Sobat Pesona berlibur ke Tanjung Kelayang bersiaplah untuk terpesona berbagai spot wisata yang menakjubkan. Mau lihat pulau ciamik? Yuk, mampir ke berbagai pulau yang ada di sana. Sobat Pesona dapat mengunjungi Pulau Lengkuas, Pulau Batu Berlayar, Pantai Tanjung Tinggi, dan Pulau Kepayang. Jarak antar pulau yang berdekatan memudahkan Sobat Pesona yang ingin island hopping dalam satu perjalanan. Panorama pantai khas Tanjung Kelayang dengan pasir putih, batuan granit besar, dan jernihnya air laut berwarna hijau kebiruan siap memikat setiap mata yang berkunjung. Selain itu, Tanjung Kelayang juga memiliki Desa Nelayan Tanjung Binga bagi Sobat Pesona yang ingin tahu seputar keseharian nelayan, memancing, dan berinteraksi bersama penduduk lokal.",
      hero_image:
        "https://storage.googleapis.com/kzquandary/goling/tanjungkelayangheader.avif",
      image_url: {
        create: [
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/tanjunglengkayang.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/tanjunglengkayang2.jpg",
          },
        ],
      },
    },
  });
  const Jakarta = await prisma.destination.create({
    data: {
      id: uuidv4(),
      name: "Jakarta",
      description:
        "Sebagai ibu kota negara Republik Indonesia, Jakarta adalah kota metropolitan luas yang terdiri dari sekitar 10 juta penduduk yang memiliki beragam latar belakang suku bangsa dari seluruh penjuru Indonesia. Pada siang hari, keramaian akan bertambah seiring dengan mobilitas penduduk yang beraktifitas di ibu kota dan akan kembali pulang ke rumah menjelang senja hari.<br> Terletak di barat laut Pulau Jawa, Jakarta banyak berkembang pesat hingga melibatkan banyak desa yang disulap menjadi bagian dari kota Jakarta. Bahkan Jakarta sekarang terkenal dengan konglomerasi desa, dimana jalan kampung tak lagi setapak namun berubah menjadi jalan utama dan jalan raya yang besar.<br> Saat Sobat Pesona berkendara di jalanan Jakarta, jangan terkejut bila tiba-tiba terjebak diantara kerumunan motor dan mobil yang merajai jalanan di Jakarta. Kota megapolitan ini akan membuat Sobat Pesona sering menggunakan bantuan GPS sebagai navigasi saat berkendara di jalanan Jakarta yang ramai.<br> Tak hanya menjadi pusat pemerintahan nasional dan pemerintahan provinsi, Jakarta juga menjadi pusat politik Indonesia serta pusat keuangan dan perdagangan nasional. Itu yang membuat Jakarta menjadi kota yang dinamis dan membuat hampir semua aktivitas penduduk Jakarta berlangsung sepanjang waktu.<br> Dibagi menjadi 5 kabupaten, Jakarta Pusat, Jakarta Utara, Jakarta Barat, Jakarta Timur dan Jakarta Selatan, Jakarta juga punya 5 kota-kota besar yang ada sekitar wilayah ibu kota dengan istilah Jabodetabek atau Jakarta, Bogor, Depok, Tangerang dan Bekasi.",
      hero_image:
        "https://storage.googleapis.com/kzquandary/goling/jakartaH.avif",
      image_url: {
        create: [
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/jkt1.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/jkt2.jpg",
          },
          {
            image_url:
              "https://storage.googleapis.com/kzquandary/goling/jkt3.jpg",
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
