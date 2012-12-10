/*
Index:
0 : Bahasa Indonesia
1 : English
*/
// intro

	var intro = [
	[
	"Selamat datang di Pulau Bus. Aku adalah Chief di pulau ini. Di kepulauan ini hutannya dihuni oleh banyak hewan mematikan. ",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Kamu harus melewati jalan yang telah dibuat untuk pergi ke suatu tempat. Cara menghubungkan rumah-rumah di pulau ini disebut sebagai Topologi.",
	""
	],
	[
	"Setiap pulau memiliki karakteristik yang berbeda, sehingga hanya ada satu Topologi yang cocok untuk suatu pulau. Jika salah menentukan topologi, hewan buas akan menantimu disana.",
	""
	],
	[
	"Sebenarnya ada banyak macam Topologi, tetapi hanya tiga topologi yang akan aku ajarkan padamu yaitu Topologi Bus, Topologi Ring, dan Topologi Star",
	""
	],
	[
	"Pulau ini terkenal dengan jalan besar yang menghubungkan rumah satu dengan lainnya yang sering disebut sebagai Backbone. Untuk itu, kamu harus menggunakan topologi bus di pulau ini.",
	""
	],
	[
	"Di Pulau ini, kamu akan mendapatkan latihan dasar sebagai Pejuang Topo. Mereka adalah mantan pejuang topo yang terkenal, Woody, Thai, dan Saibara.",
	""
	],
	[
	"Aku sangat berharap kau bisa membantu kami membersihkan jalan dari penghalang dan membuat topologi Bus untuk pulau ini. Semoga berhasil.",
	""]
	];

// tutorial
	
	var tuts = [
	[
	"Click pohon untuk mulai menebang. Ingat, tebanglah pohon yang telah diberi tanda sebelumnya. Jangan menebang pohon yang lain!",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Kamu tidak bisa menebang pohon lain saat kamu sedang proses menebang pohon tertentu. Menebang pohon membutuhkan waktu tertentu, tergantung dari Tingkat Keahlian Kapakmu. Tebanglah juga pohon ini!",
	""
	],
	[
	"Jika sudah mengerti, mari kita lihat kemampuanmu. TEBANGLAH SEMUA POHON yang menghalangi jalan.",
	""]
	];
	
// stage 2

	var stage2 = [
	[
	"Kerja bagus, tetapi menggunakan kapak saja belum cukup. Sekarang mari kita lihat seberapa mahir kau menggunakan Palu.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Bersihkan batu yang menghadang jalan di pulau ini. Gunakan palu ini untuk menghancurkannya.",
	""
	],
	[
	"Cara kerjanya hampir sama ketika kamu memotong kayu, waktu yang dibutuhkan untuk menghancurkan batu tergantung Tingkat Keahlian Palumu.",
	""]
	];
	
// stage 3
	var stage3 = [
	[
	"Hmmm... Desamu pasti bangga telah mengirimkan pejuang sepertimu ke Pulau ini. Ok, sekarang kita akan lihat keahlian menggunakan Sabitmu.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Bersihkan semua semak yang menghadang jalan di pulau ini. Gunakan sabit ini untuk membersihkannya.",
	""
	],
	[
	"Waktu yang dibutuhkan untuk membersihkan semak tergantung Tingkat Keahlian Sabitmu.",
	""]
	];
	
// stage 4
	var stage4 = [
	[
	"Kerja yang sangat bagus teman, sekarang penduduk pulau bus bisa dengan bebas berkunjung ke rumah tetangganya. Ini semua karena kerja kerasmu.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Oh ya, aku telah berjanji akan mengajarkanmu tentang topologi ring bukan? Sekarang pergilah ke Pulau Ring, pulau ring adalah pulau diseberang pulau ini.",
	""
	],
	[
	"Di pulau ring, kau akan disambut oleh temanku Doug. Jangan khawatir, Doug adalah orang yang baik. Selamat tinggal...",
	""]
	];
	
// stage 4
	var ringIntro = [
	[
	"Oh, jadi kau orangnya, perkenalkan namaku Doug. Ini adalah Pulau Ring. Pulau dengan jalan yang mirip dengan cincin.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Bangunan disini dihubungkan oleh Jalan Besar yang menyambung membentuk lingkaran. Dan banyak jalan kecil bercabang dari jalan besar tersebut.",
	""
	],
	[
	"Aku ingin kau membersihkan jalan menurut topologi yang ada di Pulau ini. Lihatlah, jalan disini dipenuhi dengan pohon, batu, dan semak. Tolong bersihkan semua, ok?",
	""],
	[
	"Ingat, jika kau salah menebang pohon, maka akan berakibat fatal bagimu. Apa kamu sudah siap?",
	""]
	];
	
// stage 4
	var ringFinish = [
	[
	"Bagus sekali... Topologi Ring ini sebenarnya hampir sama dengan Topologi Bus, tetapi pada Topologi ini Jalan besarnya menyambung sedangkan Topologi Bus tidak.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Setelah ini akan Aku kenalkan dengan Topologi yang ketiga yaitu Topologi Star. Pergilah ke Pulau Star untuk berlatih disana.",
	""
	],
	[
	"Topologi Star adalah Topologi terakhir yang akan kau pelajari. Jadi perhatikanlah baik-baik. Temanku bernama Gourmet akan melatihmu disana.",
	""],
	[
	"Pergilah kapanpun saat kau siap. Terimakasih atas kerja kerasmu penduduk disini bebas keluar rumah. Berlatihlah yang giat, semoga sukses!",
	""]
	];
	
	var starIntro = [
	[
	"Selamat datang di Pulau Star. Namaku Gourmet, ini adalah latihan terakhirmu, setelah ini kamu akan berjuang sendiri untuk menjadi Raja PVP ataupun Raja Coop.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Sepintas Topologi Star memiliki desain yang sama dengan Topologi Ring, tapi sebenarnya sangat berbeda. Topologi Star tidak memiliki Jalan Pusat (Backbone).",
	""
	],
	[
	"Tetapi Topologi ini memiliki Bangunan Pusat yang biasa disebut dengan Hub. Setiap orang yang ingin berkunjung ke rumah orang lain harus melewati Hub terebih dahulu.",
	""],
	[
	"Jadi, tugasmu adalah membersihkan jalan dari Hub ke bangunan-bangunan lain yang mengelilinginya. Itulah mengapa Topologi ini dikenal sebagai Topologi Bintang.",
	""],
	[
	"Bersihkan jalannya secepat yang kamu bisa, karena lebih cepat kamu menyelesaikan, lebih banyak score yang kamu dapatkan.",
	""]
	];
	
	var starFinish = [
	[
	"Terimakasih atas bantuannya. Penduduk disini berterimakasi padamu, mereka sangat senang jalan di pulau star kembali bersih.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Akan kuberikan Point Keahlian padamu. Poin ini dapat digunakan untuk menambah Keahlianmu sehingga lebih cepat dalam membersihkan pohon, batu, atau semak.",
	""
	],
	[
	"Untuk mendapatkan Poin Keahlian hanya dapat dilakukan dengan memenuhi Poin Pengalamanmu. Saat poin pengalaman penuh, kamu mendapatkan 1 Poin Keahlian.",
	""],
	[
	"Ada dua cara untuk mendapatkan Poin Pengalaman (EXP) yaitu dengan PVP (Player versus Player) di Arena atau COOP (bekerja sama dengan Player lain).",
	""],
	[
	"Itu adalah pilihanmu sendiri, Menang PVP mendapat EXP+150, Kalah PVP mendapat EXP+50, sedangkan COOP pasti akan memberimu EXP+100.",
	""],
	[
	"Wujudkan impianmu menjadi Raja PVP dan Raja Coop. Selamat Berjuang dan terus berlatih! Selamat tinggal...",
	""]
	];