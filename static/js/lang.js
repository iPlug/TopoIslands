/*
Index:
0 : Bahasa Indonesia
1 : English
*/
// intro

	var intro = [
	[
	"Akhirnya kau datang juga. Aku dengar kau sangat jenius. Tetapi akan aku jelaskan mengapa kau di panggil kesini.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Ini adalah Pulau Topo dimana hutan nya dihuni oleh banyak hewan mematikan. Jika salah menebang pohon, maka akibatnya sangat fatal. ",
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
	"Pulau ini adalah Pulau Bus. Kau bisa lihat Rute nya kan? Terdiri dari satu jalur besar yang disebut Backbone, dan banyak jalur kecil yang bercabang darinya.",
	""
	],
	[
	"Untuk saat ini, mari coba kita lihat seberapa jenius keahlianmu menggunakan kapak ini. Tebanglah pohon dari rumah ini hingga ke Backbone.",
	""]
	];

// tutorial
	
	var tuts = [
	[
	"Click pohon untuk mulai menebang. Menebang pohon memakan waktu tertentu, tergantung dari Tingkat Keahlian Kapakmu.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Ingat, tebanglah pohon yang telah diberi tanda sebelumnya. Jangan menebang pohon yang lain!",
	""
	],
	[
	"Kamu hanya bisa menebang 1 pohon sekaligus, semakin cepat kamu menyelesaikan tugas ini, semakin tinggi score yang didapat.",
	""]
	];
	
// stage 2

	var stage2 = [
	[
	"Kerja bagus, walaupun jenius adalah kata-kata yang berlebihan untukmu. Sekarang mari kita lihat seberapa mahir kau menggunakan Palu.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Bersihkan jalan dari Backbone ke Pabrik Kayu. Jangan salah tebang, atau kau tanggung sendiri akibatnya.",
	""
	],
	[
	"Cara kerja nya hampir sama ketika kamu memotong kayu, waktu yang dibutuhkan untuk menghancurkan batu tergantung Tingkat Keahlian Palumu.",
	""]
	];
	
// stage 3
	var stage3 = [
	[
	"Hmmm... Desamu pasti bangga telah mengirimkan pejuang sepertimu ke Pulau ini. Ok, sekarang kita akan lihat keahlian menggunakan Sabitmu.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Bersihkan jalan dari Backbone ke Toko. Manfaatkanlah waktu sebaik mungkin. Waktu adalah Score!",
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
	"Setelah ini aku akan mengenalkanmu dengan Rute selanjutnya yaitu Rute Ring. Kita akan pergi ke Pulau Ring untuk latihan disana.",
	""
	],
	[
	"Siapkan bekal secukupnya, karena kita akan berangkat secepatnya. Apakah kau sudah siap?",
	""]
	];
	
// stage 4
	var ringIntro = [
	[
	"Ini adalah Pulau Ring. Bangunan disini dihubungkan oleh Jalan Besar yang menyambung membentuk lingkaran. Dan banyak jalan kecil bercabang dari jalan besar tersebut.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Di pulau ini, aku ingin mengenalkanmu dengan fitur lain game ini yaitu Guild. Guild adalah tempat kamu berkumpul dan berjuang bersama dengan teman-teman mu melawan Guild lain.",
	""
	],
	[
	"Kamu bisa membuat Guild sendiri, atau bergabung dengan Guild lain. Kembali ke latihan kita sebelumnya, aku ingin kau membersihkan jalan menurut Rute di Pulau ini.",
	""],
	[
	"Ingat, jika kau salah menebang pohon, maka akan berakibat fatal bagimu dan teman-teman disekitarmu. Rute Ring terdiri dari jalan besar membentuk lingkaran yang bercabang.",
	""]
	];
	
// stage 4
	var ringFinish = [
	[
	"Bagus sekali... Rute Ring ini sebenarnya hampir sama denan Rute Bus, tetapi Rute ini Jalan besarnya menyambung sedangkan Rute Bus tidak.",
	"Welcome to TopoIslands, now you are on Bus Islands."
	],
	[
	"Setelah ini akan ku kenalkan dengan Rute yang ketiga Yaitu Rute Star. Kita akan pergi ke Pulau Star untuk berlatih disana.",
	""
	],
	[
	"Rute Star adalah rute terakhir yang akan ku ajarkan. Jadi perhatikanlah baik-baik.",
	""],
	[
	"Berbicaralah padaku kapanpun kamu siap untuk pergi ke Pulau Star.",
	""]
	];
	
	var starIntro = [
	[
	"Selamat datang di Pulau Star. Ku ingatkan sekali lagi, ini adalah latihan terakhirmu, setelah ini kamu akan berjuang sendiri demi pulau mu.",
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
	"Mulailah berlatih, setelah ini aku akan menunjukan padamu inti dari latian kita selama ini, yaitu untuk memperebutkan Pulau-pulau yang ada di Kepulauan Topo ini.",
	""]
	];
	
	var starFinish = [
	[
	"Setiap pertemuan pasti ada perpisahan, dan disinilah kita harus berpisah... Kau sudah punya semua yang kau butuhkan untuk menjadi Pejuang Topo.",
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
	"Selamat Berjuang...",
	""]
	];