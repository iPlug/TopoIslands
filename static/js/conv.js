// legendary
// "+" mean Next Phase
// "=" mean Same Phase
// "_" mean End Conversation

function initConv(){
	var h=0;
	May[h] = "Oh, kau sudah bangun nak? Sudah dua hari kau tak sadarkan diri...";
	aMay1[h]="+ Umm........"; aMay2[h]="+ Err... Siapa Kamu?"; aMay3[h]="";
	
	h++;
	May[h] = "Namaku Thomas, Aku walikota disini... Ini adalah Kota Bus, karena kota ini dihubungkan oleh jembatan panjang yang menyerupai Bus. Siapa namamu?";
	aMay1[h]="+ Namaku " + uname + ", Aku ingin pulang pak Thomas... T_T"; aMay2[h]="= Apa kau bilang? Suaramu pelan sekali.. (==')."; aMay3[h]="";
	
	h++;
	May[h]="Hmmm... Itu tidaklah mudah " + uname + "..., Kamu harus membuktikan kebaikan mu dengan membantu warga disini terlebih dahulu, karena ini adalah hal yang sangat rahasia.";
	aMay1[h]="+ Baiklah, kalau itu jalan satu-satunya..."; aMay2[h]="+ Tidak bisa, orang tuaku pasti sedang mencariku..."; aMay3[h]="";
	
	h++;
	May[h]="Maaf " + uname + ", tapi itulah kesepakatan yang telah kami buat. Tugas pertamamu adalah, <code> Berkenalan dengan Penduduk Kota Bus </code>. Datanglah padaku jika tugasmu telah selesai.";
	aMay1[h]="_ Hanya berkenalan kan? Ok. Bye Pak Thomas."; aMay2[h]=""; aMay3[h]="";
	
	h++;
	May[h]="Kau pasti " + uname + " kan? Namaku adalah <code> Woody - Penebang Kayu </code>. Datanglah padaku jika kau ingin <code> Menebang Kayu </code>.";
	aMay1[h]="_ Senang bertemu Anda, Pak Woody."; aMay2[h]="x Maaf, salah masuk rumah (==')."; aMay3[h]="";
}