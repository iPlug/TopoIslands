/*
Index:
0 : Bahasa Indonesia
1 : English
*/
// intro

	var intro = [
	[
	"Akhirnya kau datang juga. Selamat datang di kepulauan topo. Aku adalah Chief di pulau ini.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Di kepulauan ini hutannya dihuni oleh banyak hewan mematikan. Jika salah menebang pohon, maka akibatnya sangat fatal. ",
	""
	],
	[
	"Tetapi kau tenang saja, karena jika mengikuti Rute yang harus ditebang, kau akan selamat. Rute ini dinamakan Topologi.",
	""
	],
	[
	"Ada beberapa Rute, tetapi secara garis besar ada 3 Rute yang akan aku ajarkan padamu. Rute Bus, Rute Ring, dan Rute Star",
	""
	],
	[
	"Di Pulau ini, kamu akan mendapatkan latihan dasar sebagai Pejuang Topo. Mereka adalah mantan pejuang topo yang terkenal.",
	""
	],
	[
	"Woody akan meltihmu menggunakan kapak, Thai melatihmu menggunakan palu, dan Saibara akan melatihmu menggunakan sabit. Berlatihlah dengan Semangat!",
	""]
	];

// tutorial
	
	var tuts = [
	[
	"Click pohon untuk mulai menebang. Ingat, tebanglah pohon yang telah diberi tanda sebelumnya. Jangan menebang pohon yang lain!",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Kamu tidak bisa menebang pohon lain saat kamu sedang menebang pohon tertentu. Menebang pohon memakan waktu tertentu, tergantung dari Tingkat Keahlian Kapakmu.",
	""
	],
	[
	"Jika sudah mengerti, mari kita lihat kemampuanmu. Tebanglah pohon yang menghalangi rute Bus.",
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
	"Ok, dengan ini aku yakin kalau kamu siap untuk memperebutkan pulau-pulau yang ada di kepulauan topo ini dengan petarung lain.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Setelah ini aku akan mengenalkanmu dengan Rute selanjutnya yaitu Rute Ring. Pergilah ke Pulau Ring untuk latihan disana.",
	""
	],
	[
	"Di pulau ring, kau akan disambut oleh temanku Doug. Jangan khawatir, Doug adalah orang yang baik.",
	""]
	];
	
// stage 4
	var ringIntro = [
	[
	"Oh, jadi kau orangnya, perkenalkan namaku Doug. Ini adalah Pulau Ring.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Bangunan disini dihubungkan oleh Jalan Besar yang menyambung membentuk lingkaran. Dan banyak jalan kecil bercabang dari jalan besar tersebut.",
	""
	],
	[
	"Aku ingin kau membersihkan jalan menurut Rute di Pulau ini. Lihatlah, jalan disini dipenuhi dengan pohon, batu, dan semak. Tolong bersihkan semua, ok?",
	""],
	[
	"Ingat, jika kau salah menebang pohon, maka akan berakibat fatal bagimu. Apa kamu sudah siap?",
	""]
	];
	
// stage 4
	var ringFinish = [
	[
	"Bagus sekali... Rute Ring ini sebenarnya hampir sama denan Rute Bus, tetapi Rute ini Jalan besarnya menyambung sedangkan Rute Bus tidak.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Setelah ini akan Aku kenalkan dengan Rute yang ketiga yaitu Rute Star. Pergilah ke Pulau Star untuk berlatih disana.",
	""
	],
	[
	"Rute Star adalah rute terakhir yang akan ku ajarkan. Jadi perhatikanlah baik-baik. Temanku bernama Gourmet akan melatihmu disana.",
	""],
	[
	"Pergilah kapanpun saat kau siap. Berlatihlah yang giat, semoga sukses!",
	""]
	];
	
	var starIntro = [
	[
	"Selamat datang di Pulau Star. Namaku Gourmet, ini adalah latihan terakhirmu, setelah ini kamu akan berjuang sendiri demi pulaumu.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Sepintas Rute Star memiliki desain yang sama dengan Rute Ring, tapi sebenarnya sangat berbeda. Rute Star tidak memiliki Jalan Pusat (Backbone).",
	""
	],
	[
	"Tetapi Rute ini memiliki Bangunan Pusat yang biasa disebut dengan Hub. Setiap orang yang ingin berkunjung ke rumah orang lain harus melewati Hub terebih dahulu.",
	""],
	[
	"Jadi, tugasmu adalah membersihkan jalan dari Hub ke bangunan-bangunan lain yang mengelilinginya. Itulah mengapa Rute ini dikenal sebagai Rute Star (Bintang).",
	""],
	[
	"Bersihkan jalanya secepat yang kamu bisa, karena lebih cepat kamu menyelesaikan, lebih banyak score yang kamu dapatkan.",
	""]
	];
	
	var starFinish = [
	[
	"Terimakasih atas bantuannya. Kini kau sudah punya semua yang kau butuhkan untuk menjadi Pejuang Topo.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Akan kuberikan Point Keahlian padamu. Poin ini dapat digunakan untuk menambah Keahlian mu sehingga lebih cepat dalam membersihkan pohon, batu, atau semak.",
	""
	],
	[
	"Untuk mendapatkan Poin Keahlian hanya dapat dilakukan dengan memenuhi Poin Pengalaman mu. Saat poin pengalaman penuh, kamu mendapatkan 1 Poin Keahlian.",
	""],
	[
	"Ada dua cara untuk mendapatkan Poin Pengalaman (EXP) yaitu dengan PVP (Player versus Player) di Arena atau COOP (bekerja sama dengan Player lain).",
	""],
	[
	"Itu adalah pilihanmu sendiri, Menang PVP mendapat EXP+150, Kalah PVP mendapat EXP+50, sedangkan COOP pasti akan memberimu EXP+100.",
	""],
	[
	"Selamat Berjuang. Cobalah mengetest kemampuanmu di Arena PVP (Pulau dengan Pedang dan Tengkorak) atau mencari teman di Coop (Pulau dengan Pedang dan Hati).",
	""]
	];