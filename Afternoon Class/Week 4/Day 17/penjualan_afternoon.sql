-- CREATE DATABASE
CREATE DATABASE penjualan_afternoon;

-- USE DATABASE
USE penjualan_afternoon;

/* CREATE TABLE */
CREATE TABLE pemasok (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL
);

CREATE TABLE barang (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL,
     harga DECIMAL NOT NULL,
     id_pemasok BIGINT UNSIGNED NOT NULL,
     FOREIGN KEY (id_pemasok) REFERENCES pemasok(id)
);

CREATE TABLE pelanggan (
     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
     nama VARCHAR(255) NOT NULL
);

CREATE TABLE transaksi (
    id BIGINT UNSIGNED auto_increment NOT NULL PRIMARY KEY,
    id_barang BIGINT UNSIGNED NOT NULL,
    id_pelanggan BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (id_barang) REFERENCES barang(id),
    FOREIGN KEY (id_pelanggan) REFERENCES pelanggan(id),
    waktu DATETIME DEFAULT now() NOT NULL,
    jumlah INT NOT NULL,
    total DECIMAL NOT NULL
);
/* END CREATE TABLE */

/* INSERT INTO (CREATE DATA ON TABLE) */
INSERT INTO pelanggan(nama) VALUES 
	("Risa"),
	("Dedi"),
	("Abi");

INSERT INTO pelanggan(nama) VALUES
	("Riko");

INSERT INTO pemasok(nama) VALUES
	("Jhorgi"),
	("Kamal"),
	("Amril");

INSERT INTO pemasok(id, nama) VALUES 
	(1112, "FIkri");

INSERT INTO barang(nama, harga, id_pemasok) VALUES
	("Pepsodent", 14500, 1),
	("Clear", 24600, 2),
	("Close Up", 15700, 3);

INSERT INTO transaksi(id_barang, id_pelanggan, jumlah, total) VALUES 
	(1, 1, 1, 14500),
	(2, 2, 2, 49200),
	(3, 3, 3, 47100);
	
/* END INSERT INTO */

/* SELECT */
SELECT * FROM pelanggan;

SELECT * FROM pemasok;

SELECT * FROM barang;

SELECT * FROM transaksi;

SELECT * FROM pelanggan WHERE id = 2;

SELECT * FROM transaksi WHERE id = 3;

/* END SELECT */

/* SELECT ORDER BY */
SELECT * FROM pelanggan ORDER BY nama;

SELECT * FROM pemasok ORDER BY nama DESC;

/* END SELECT ORDER BY */

/* DELETE DATA */
DELETE FROM pelanggan WHERE id = 117;

DELETE FROM pelanggan WHERE nama = "Lia";

DELETE FROM pelanggan WHERE id = 1;

/* END DELETE DATA */

/* DROP TABLE */
DROP TABLE pemasok;

/* END DROP TABLE*/

/* UPDATE DATA */
UPDATE pelanggan SET nama = "Najmul" WHERE id = 2;

UPDATE barang SET nama = "Ronaldo", harga = 50000 WHERE id = 3;

/* END UPDATE DATA */

/* SELECT LIMIT */
SELECT * FROM pelanggan ORDER BY nama DESC LIMIT 2;

/* END SELECT LINIT */

/* JOIN */
SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, pem.nama as nama_pemasok, b.harga, t.waktu, t.jumlah, t.total 
FROM transaksi t
JOIN barang b ON t.id_barang = b.id
JOIN pelanggan p ON p.id = t.id_pelanggan
JOIN pemasok pem ON b.id_pemasok = pem.id

/* END JOIN */

/* SELECT LIKE */
SELECT * FROM pelanggan WHERE nama LIKE '%bayu%';

/* END SELECT LIKE */