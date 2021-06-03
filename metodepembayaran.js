}

	function kedebit(){ //untuk masuk ke tampilan debit
		document.getElementById("debit").style.display = "block";
		document.getElementById('metodepembayaran').style.display = "none";
	}

	function kecash(){ //untuk masuk ke tampilan cash
		document.getElementById("kasir").style.display = "block";
		document.getElementById('metodepembayaran').style.display = "none";
	}

	function kemetode(){
		var nama = document.getElementById('username').value;
		var tanggal = document.getElementById('tanggal').value;
		var alamat = document.getElementById('alamat').value;
		var telp = document.getElementById('telp').value;
		if (nama == ""){
			window.alert("Nama Pembeli Tidak Terisi!");
		}
		else if(tanggal == ""){
			window.alert("Tanggal Pembelian Tidak Terisi!");
		}
		else if (alamat == ""){
			window.alert("Alamat Pembeli Tidak Terisi!");
		}
		else if (telp == ""){
			window.alert("Nomor Telepon Pembeli Tidak Terisi!")
		}
		else{
			document.getElementById('tanggalpembelimandiri').innerHTML = tanggal;
			document.getElementById('namapembelimandiri').innerHTML = nama;
			document.getElementById('alamatpembelimandiri').innerHTML = alamat;
			document.getElementById('telppembelimandiri').innerHTML = telp;

			document.getElementById('tanggalpembelibri').innerHTML = tanggal;
			document.getElementById('namapembelibri').innerHTML = nama;
			document.getElementById('alamatpembelibri').innerHTML = alamat;
			document.getElementById('telppembelibri').innerHTML = telp;

			document.getElementById('tanggalpembelibca').innerHTML = tanggal;
			document.getElementById('namapembelibca').innerHTML = nama;
			document.getElementById('alamatpembelibca').innerHTML = alamat;
			document.getElementById('telppembelibca').innerHTML = telp;

			document.getElementById('tanggalpembeli').innerHTML = tanggal;
			document.getElementById('namapembeli').innerHTML = nama;
			document.getElementById('alamatpembeli').innerHTML = alamat;
			document.getElementById('telppembeli').innerHTML = telp;
		}
		document.getElementById('metodepembayaran').style.display = "block";
		document.getElementById('datapembeli').style.display = "none";
	}
