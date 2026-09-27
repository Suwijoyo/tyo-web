'use client';

import Link from 'next/link';

const services = [
  {
    icon: '🏥',
    title: 'Pemeriksaan Umum',
    description: 'Layanan pemeriksaan kesehatan umum oleh dokter berpengalaman',
  },
  {
    icon: '👶',
    title: 'Kesehatan Ibu & Anak',
    description: 'Pelayanan KIA, imunisasi, dan tumbuh kembang anak',
  },
  {
    icon: '🦷',
    title: 'Kesehatan Gigi',
    description: 'Pemeriksaan dan perawatan gigi oleh dokter gigi profesional',
  },
  {
    icon: '💊',
    title: 'Farmasi',
    description: 'Pelayanan obat-obatan dengan harga terjangkau',
  },
  {
    icon: '🔬',
    title: 'Laboratorium',
    description: 'Pemeriksaan laboratorium lengkap dan akurat',
  },
  {
    icon: '🚑',
    title: 'Gawat Darurat',
    description: 'Penanganan kasus darurat 24 jam',
  },
];

const announcements = [
  {
    date: '25 Sep 2026',
    title: 'Jadwal Posyandu Bulan Oktober 2026',
    category: 'Pengumuman',
  },
  {
    date: '20 Sep 2026',
    title: 'Vaksinasi Gratis untuk Balita',
    category: 'Program',
  },
  {
    date: '15 Sep 2026',
    title: 'Pemeriksaan Kesehatan Gratis Hari Lansia',
    category: 'Kegiatan',
  },
];

const stats = [
  { value: '500+', label: 'Pasien Per Bulan' },
  { value: '15+', label: 'Tenaga Medis' },
  { value: '10+', label: 'Tahun Pengalaman' },
  { value: '98%', label: 'Kepuasan Pasien' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navbar */}
      <header className="bg-green-700 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-700 text-xl font-bold">P</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight">Puskesmas Sehati</h1>
              <p className="text-green-200 text-xs">Pelayanan Kesehatan Prima</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#layanan" className="hover:text-green-200 transition-colors">Layanan</a>
            <a href="#pengumuman" className="hover:text-green-200 transition-colors">Pengumuman</a>
            <a href="#kontak" className="hover:text-green-200 transition-colors">Kontak</a>
            <Link
              href="/pendaftaran"
              className="bg-white text-green-700 px-4 py-1.5 rounded-full font-semibold hover:bg-green-50 transition-colors"
            >
              Daftar Online
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-teal-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-green-500 bg-opacity-40 text-green-100 text-sm font-medium px-3 py-1 rounded-full mb-4">
              🏥 Puskesmas Terpercaya
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Kesehatan Anda,<br />
              <span className="text-green-200">Prioritas Kami</span>
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-lg">
              Puskesmas Sehati hadir memberikan pelayanan kesehatan berkualitas, terjangkau, dan mudah diakses oleh seluruh lapisan masyarakat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="/pendaftaran"
                className="bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg"
              >
                Daftar Sekarang
              </Link>
              <a
                href="#layanan"
                className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-green-700 transition-colors"
              >
                Lihat Layanan
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 bg-white bg-opacity-10 rounded-full flex items-center justify-center border-4 border-white border-opacity-20">
              <span className="text-9xl">🏥</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-800 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats?.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-green-300">{stat?.value}</div>
              <div className="text-green-200 text-sm mt-1">{stat?.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="layanan" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Layanan Kami</h3>
            <p className="text-gray-500 max-w-xl mx-auto">
              Kami menyediakan berbagai layanan kesehatan komprehensif untuk memenuhi kebutuhan kesehatan Anda dan keluarga.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services?.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-4">{service?.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{service?.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{service?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section id="pengumuman" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-3">Pengumuman Terbaru</h3>
            <p className="text-gray-500">Informasi terkini dari Puskesmas Sehati</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {announcements?.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-green-200 transition-colors"
              >
                <div className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap mt-0.5">
                  {item?.category}
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-gray-800">{item?.title}</h5>
                  <p className="text-gray-400 text-sm mt-1">{item?.date}</p>
                </div>
                <span className="text-gray-300 text-xl">›</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Butuh Layanan Kesehatan?</h3>
          <p className="text-green-100 mb-8">
            Daftarkan diri Anda sekarang dan dapatkan pelayanan kesehatan terbaik dari tim medis profesional kami.
          </p>
          <Link
            href="/pendaftaran"
            className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition-colors shadow-lg"
          >
            Daftar Online Sekarang
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-white font-bold">Puskesmas Sehati</span>
            </div>
            <p className="text-sm leading-relaxed">
              Memberikan pelayanan kesehatan prima untuk masyarakat dengan penuh dedikasi dan profesionalisme.
            </p>
          </div>
          <div>
            <h6 className="text-white font-semibold mb-4">Jam Operasional</h6>
            <ul className="space-y-2 text-sm">
              <li>Senin – Jumat: 07.30 – 16.00</li>
              <li>Sabtu: 07.30 – 12.00</li>
              <li>Minggu & Libur: Tutup</li>
              <li className="text-green-400">UGD: 24 Jam</li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-semibold mb-4">Kontak</h6>
            <ul className="space-y-2 text-sm">
              <li>📍 Jl. Kesehatan No. 1, Kota Sehat</li>
              <li>📞 (021) 1234-5678</li>
              <li>✉️ info@puskesmassehati.id</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          © 2026 Puskesmas Sehati. Hak Cipta Dilindungi.
        </div>
      </footer>
    </div>
  );
}
