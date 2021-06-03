function savedebit(){
		var barang = document.getElementById('barangdebit').value;
		var jumlah = document.getElementById('jumlahdebit').value;
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
		document.getElementById('namabarangdebit').innerHTML = temp;
		document.getElementById('jumlahbarangdebit').innerHTML = jmlhbrg;
		document.getElementById('hargabarangdebit').innerHTML = hrgbrg;
		document.getElementById('totalbarangdebit').innerHTML = "Rp. " + nlbrg;

		document.getElementById('notanamabarangkartumandiri').innerHTML = temp;
		document.getElementById('notajumlahbarangkartumandiri').innerHTML = jmlhbrg;
		document.getElementById('notahargabarangkartumandiri').innerHTML = hrgbrg;
		document.getElementById('notatotalbarangkartumandiri').innerHTML = "Rp. " + nlbrg;

		document.getElementById('notanamabarangbri').innerHTML = temp;
		document.getElementById('notajumlahbarangbri').innerHTML = jmlhbrg;
		document.getElementById('notahargabarangbri').innerHTML = hrgbrg;
		document.getElementById('notatotalbarangbri').innerHTML = "Rp. " + nlbrg;

		document.getElementById('notanamabarangbca').innerHTML = temp;
		document.getElementById('notajumlahbarangbca').innerHTML = jmlhbrg;
		document.getElementById('notahargabarangbca').innerHTML = hrgbrg;
		document.getElementById('notatotalbarangbca').innerHTML = "Rp. " + nlbrg;
	 	document.getElementById('barangdebit').value = " ";
	
	}

	function totaldebit(){
		diskondebit = document.getElementById("diskondebit").value;
		total = nlbrg - (nlbrg - (nlbrg * (diskondebit/100)));
		nlbrgdbt = nlbrg - total;
		document.getElementById("diskonbarangdebit").innerHTML = "Rp. " +total;
		document.getElementById("sisabarangdebit").innerHTML = "Rp. " + (nlbrg - total);

	}

	function kartubca(){
		document.getElementById('pajakbca').innerHTML = "Rp. " + (nlbrg * 10/100);
		document.getElementById('notatotalbca').innerHTML = "Rp. " + (nlbrgdbt + (nlbrg * 10/100));
		document.getElementById("diskonbca").innerHTML = diskondebit + "%"
		document.getElementById("notabca").style.display = "block";
		document.getElementById('debit').style.display = "none";
	}

	function kartubri(){
		document.getElementById('pajakbri').innerHTML = "Rp. " + (nlbrg * 10/100);
		document.getElementById('notatotalbri').innerHTML = "Rp. " + (nlbrgdbt + (nlbrg * 10/100));
		document.getElementById("diskonbri").innerHTML = diskondebit + "%"
		document.getElementById("notabri").style.display = "block";
		document.getElementById('debit').style.display = "none";
	}

	function kartumandiri(){
		document.getElementById('pajakmandiri').innerHTML = "Rp. " + (nlbrg * 10/100);
		document.getElementById('notatotalmandiri').innerHTML = "Rp. " + (nlbrgdbt + (nlbrg * 10/100));
		document.getElementById("diskonmandiri").innerHTML = diskondebit + "%"
		document.getElementById("notamandiri").style.display = "block";
		document.getElementById('debit').style.display = "none";
	}
	function cetak(){
		window.print();
	}
</script>
