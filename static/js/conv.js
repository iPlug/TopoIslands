// legendary
// "+" mean Next Phase
// "=" mean Same Phase
// "_" mean End Conversation

function initConv(){
	var h=0;
	May[h] = "ヽ（´３`）ﾉ Oh, kau sudah bangun nak? Sudah dua hari kau tak sadarkan diri...";
	aMay1[h]="+ Umm........ (´･ω･`)"; aMay2[h]="+ Err... Siapa Kamu? (ノ `Д´)ノ"; aMay3[h]="";
	
	h++; //1
	May[h] = "ヾ(´ー｀)ノ Namaku Thomas, Aku walikota disini... Ini adalah Kota Bus, karena kota ini dihubungkan oleh jembatan panjang yang menyerupai Bus. Siapa namamu?";
	aMay1[h]="+ Namaku " + uname + ", Aku ingin pulang pak Thomas... (Ｔ▽Ｔ)"; aMay2[h]="= Apa kau bilang? Suaramu pelan sekali.. (―˛―“)."; aMay3[h]="";
	
	h++;//2
	May[h]="（￣ー￣） Hmmm... Itu tidaklah mudah " + uname + "..., Kamu harus membuktikan kebaikan mu dengan membantu warga disini terlebih dahulu, karena ini adalah hal yang sangat rahasia.";
	aMay1[h]="+ Baiklah, kalau itu jalan satu-satunya... (✖╭╮✖)"; aMay2[h]="+ Tidak bisa, orang tuaku pasti sedang mencariku... ╰(◣﹏◢)╯"; aMay3[h]="";
	
	h++;//3
	May[h]="(.⌣__⌣.) Maaf " + uname + ", tapi itulah kesepakatan yang telah kami buat. Tugas pertamamu adalah, <code> Berkenalan dengan Penduduk Kota Bus </code>. Datanglah padaku jika tugasmu telah selesai.";
	aMay1[h]="_ Hanya berkenalan kan? Ok. Bye Pak Thomas. ( ˘ з˘ )♬♪"; aMay2[h]=""; aMay3[h]="";
	
	h++;//4
	May[h]="Kau pasti " + uname + " kan? Namaku adalah <code> Woody - Penebang Kayu </code>. Datanglah padaku jika kau ingin <code> Menebang Kayu </code>.";
	aMay1[h]="_ Senang bertemu Anda, Pak Woody."; aMay2[h]="x Maaf, salah masuk rumah (==')."; aMay3[h]="";
	
	h++;//5
	May[h]="Kau pasti " + uname + " kan? Namaku adalah <code> Saibara - Penambang Logam </code>. Datanglah padaku jika kau ingin <code> Menambang Logam </code>.";
	aMay1[h]="_ Senang bertemu Anda, Pak Saibara."; aMay2[h]="x Maaf, salah masuk rumah (==')."; aMay3[h]="";
	
	h++;//6
	May[h]="Kau pasti " + uname + " kan? Namaku adalah <code> Thai - Pengumpul Batu </code>. Datanglah padaku jika kau ingin <code> Mengumpulkan Batu </code>.";
	aMay1[h]="_ Senang bertemu Anda, Pak Thai."; aMay2[h]="x Maaf, salah masuk rumah (==')."; aMay3[h]="";
	
	h++;//7
	May[h]="Kau pasti " + uname + " kan? Namaku adalah <code> Doug - Pemilik Penginapan </code>. Datanglah padaku jika kau ingin <code> Beristirahat </code>.";
	aMay1[h]="_ Senang bertemu Anda, Pak Doug."; aMay2[h]="x Maaf, salah masuk rumah (==')."; aMay3[h]="";
	
	h++;//8
	May[h]="Kau pasti " + uname + " kan? Namaku adalah <code> Gourmetchef - Pemilik Toko </code>. Datanglah padaku jika kau ingin <code> Berbelanja </code>.";
	aMay1[h]="_ Senang bertemu Anda, Pak Gourmetchef."; aMay2[h]="x Maaf, salah masuk rumah (==')."; aMay3[h]="";
	
	h++;//9
	May[h]="（＾_＾） Aku telah mendengar dari penduduk, kau telah berkenalan dengan mereka semua. Kerja bagus " + uname + ". Tapi masih banyak yang harus kau lakukan untuk <code>Kota Bus</code> ini.";
	aMay1[h]="+ Apapun akan kulakukan, asal aku bisa pulang."; aMay2[h]="+ Terserahlah..."; aMay3[h]="";
	
	h++;//10
	May[h]="(⌣_ ⌣!!) " + uname + ", kau harus bekerja untuk bertahan hidup disini. Tugasmu selanjutnya adalah <code>Bekerja - Menebang Pohon</code>";
	aMay1[h]="+ Dimana aku bisa menebang pohon? ƪ(‾.‾“)┐"; aMay2[h]=""; aMay3[h]="";
	
	h++;//11
	May[h]="Pergilah ke <code>Woody - Penebang Pohon</code> untuk bekerja menebang pohon. Kau akan mendapat Uang saat selesai bekerja. Bekerjalah yang rajin!";
	aMay1[h]="_ Baiklah, Tuan Mayor yang terhormat... Huh... (~‾ ▽‾)~"; aMay2[h]=""; aMay3[h]="";
}