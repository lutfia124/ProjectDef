<script type="text/javascript">
	var temp = "";
	var nobrg = 1;
	var nlbrg = 0;
	var hrgbrg = "";
	var jmlhbrg = '';

	function hasil(){ //dibagian pembayaran cash
		var barang = document.getElementById('barang').value;
		var jumlah = document.getElementById('jumlah').value;
		if (barang == ""){
			window.alert("barang kosong");
		}
		else if (barang == "kemeja"){
			temp = temp + nobrg + ". Kemeja" + "<br>";
			nlbrg = nlbrg + (50000 * jumlah);
			hrgbrg = hrgbrg + "Rp 50.000" + "<br>";
			jmlhbrg = jmlhbrg + jumlah + "<br>";
			nobrg = nobrg + 1;
			document.getElementById('barang').value = "";
		}
		else if (barang == "celana panjang"){
			temp = temp + nobrg + ". Celana panjang" + "<br>";
			nlbrg = nlbrg + (40000 * jumlah);
			jmlhbrg = jmlhbrg + jumlah + "<br>";
			hrgbrg = hrgbrg + "Rp 40.000" + "<br>";
			nobrg = nobrg + 1;
			document.getElementById('barang').value = "";
		}
        else if (barang == "jaket"){
			temp = temp + nobrg + ". Jaket" + "<br>";
			nlbrg = nlbrg + (50000 * jumlah);
			jmlhbrg = jmlhbrg + jumlah + "<br>";
			hrgbrg = hrgbrg + "Rp 50.000" + "<br>";
			nobrg = nobrg + 1;
			document.getElementById('barang').value = "";
		}
        else if (barang == "gaun"){
			temp = temp + nobrg + ". Gaun" + "<br>";
			nlbrg = nlbrg + (100000 * jumlah);
			jmlhbrg = jmlhbrg + jumlah + "<br>";
			hrgbrg = hrgbrg + "Rp 100.000" + "<br>";
			nobrg = nobrg + 1;
			document.getElementById('barang').value = "";
		}
        else if (barang == "celana pendek"){
			temp = temp + nobrg + ". Celana pendek" + "<br>";
			nlbrg = nlbrg + (30000 * jumlah);
			jmlhbrg = jmlhbrg + jumlah + "<br>";
			hrgbrg = hrgbrg + "Rp 30.000" + "<br>";
			nobrg = nobrg + 1;
			document.getElementById('barang').value = "";
		}
		else{
			window.alert("barang tidak ditemukan!");
		}
		document.getElementById('namabarang').innerHTML = temp;
		document.getElementById('jumlahbarang').innerHTML = jmlhbrg;
		document.getElementById('hargabarang').innerHTML = hrgbrg;
		document.getElementById('totalbarang').innerHTML = "Rp. " + nlbrg;
	}

	function total(){//dibagian pembayaran cash
		var diskon = document.getElementById('diskon').value;
		var uang = document.getElementById('uang').value;
		document.getElementById('uangplg').innerHTML = "Rp. " + uang;
		var sisa = uang - (nlbrg - (nlbrg * (diskon/100)));
		document.getElementById("kembalian").innerHTML = "Rp. " + sisa;
		document.getElementById('diskonh').innerHTML = "Rp. " + nlbrg * (diskon/100);
		// kenota
		document.getElementById('diskonp').innerHTML = diskon + " %"
		document.getElementById('notanamabarang').innerHTML = temp;
		document.getElementById('notajumlahbarang').innerHTML = jmlhbrg;
		document.getElementById('notahargabarang').innerHTML = hrgbrg;
		document.getElementById('notatotalbarang').innerHTML = "Rp. " + nlbrg;
		document.getElementById('notauangplg').innerHTML = "Rp. " + uang;
		document.getElementById("notakembalian").innerHTML = "Rp. " + sisa;

	}
