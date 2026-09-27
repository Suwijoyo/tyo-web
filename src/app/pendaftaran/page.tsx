'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  nama: string;
  nik: string;
  tanggalLahir: string;
  jenisKelamin: string;
  noTelp: string;
  alamat: string;
  layanan: string;
  keluhan: string;
}

const layananOptions = [
  'Pemeriksaan Umum',
  'Kesehatan Ibu & Anak',
  'Kesehatan Gigi',
  'Farmasi',
  'Laboratorium',
  'Gawat Darurat',
];

export default function PendaftaranPage() {
  const [form, setForm] = useState<FormData>({
    nama: '',
    nik: '',
    tanggalLahir: '',
    jenisKelamin: '',
    noTelp: '',
    alamat: '',
    layanan: '',
    keluhan: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [nomorAntrian, setNomorAntrian] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const antrian = `A-${Math.floor(Math.random() * 900) + 100}`;
    setNomorAntrian(antrian);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Pendaftaran Berhasil!</h2>
          <p className="text-gray-500 mb-6">Nomor antrian Anda adalah:</p>
          <div className="bg-green-50 border-2 border-green-500 rounded-xl py-6 mb-6">
            <span className="text-5xl font-bold text-green-700">{nomorAntrian}</span>
          </div>
          <p className="text-sm text-gray-500 mb-8">
            Silakan datang ke Puskesmas Sehati dan tunjukkan nomor antrian ini kepada petugas.
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => { setSubmitted(false); setForm({ nama: '', nik: '', tanggalLahir: '', jenisKelamin: '', noTelp: '', alamat: '', layanan: '', keluhan: '' }); }}
              className="bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Daftar Lagi
            </button>
            <Link href="/" className="text-green-600 font-medium hover:underline">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/" className="text-green-200 hover:text-white transition-colors">
            ← Kembali
          </Link>
          <div>
            <h1 className="text-lg font-bold">Pendaftaran Online</h1>
            <p className="text-green-200 text-xs">Puskesmas Sehati</p>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Form Pendaftaran Pasien</h2>
          <p className="text-gray-500 text-sm mb-8">Isi data diri Anda dengan lengkap dan benar</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap *</label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                required
                placeholder="Masukkan nama lengkap"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">NIK (Nomor Induk Kependudukan) *</label>
              <input
                type="text"
                name="nik"
                value={form.nik}
                onChange={handleChange}
                required
                maxLength={16}
                placeholder="16 digit NIK"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir *</label>
                <input
                  type="date"
                  name="tanggalLahir"
                  value={form.tanggalLahir}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin *</label>
                <select
                  name="jenisKelamin"
                  value={form.jenisKelamin}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Pilih</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">No. Telepon *</label>
              <input
                type="tel"
                name="noTelp"
                value={form.noTelp}
                onChange={handleChange}
                required
                placeholder="Contoh: 08123456789"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Alamat *</label>
              <textarea
                name="alamat"
                value={form.alamat}
                onChange={handleChange}
                required
                rows={2}
                placeholder="Masukkan alamat lengkap"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Layanan yang Dibutuhkan *</label>
              <select
                name="layanan"
                value={form.layanan}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Pilih layanan</option>
                {layananOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Keluhan / Keterangan</label>
              <textarea
                name="keluhan"
                value={form.keluhan}
                onChange={handleChange}
                rows={3}
                placeholder="Ceritakan keluhan atau keterangan tambahan (opsional)"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-sm mt-2"
            >
              Daftar Sekarang
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
