export type Area = {
  slug: string
  nama: string
  deskripsi: string
  keyword: string
}

export const areaList: Area[] = [
  {
    slug: "jakarta-selatan",
    nama: "Jakarta Selatan",
    deskripsi: "Melayani seluruh kecamatan di Jakarta Selatan: Kebayoran Baru, Cilandak, Pasar Minggu, Mampang, Tebet, dan sekitarnya.",
    keyword: "jasa sedot wc jakarta selatan",
  },
  {
    slug: "jakarta-pusat",
    nama: "Jakarta Pusat",
    deskripsi: "Melayani area Jakarta Pusat: Menteng, Gambir, Senen, Cempaka Putih, Johar Baru, dan sekitarnya.",
    keyword: "jasa sedot wc jakarta pusat",
  },
  {
    slug: "jakarta-barat",
    nama: "Jakarta Barat",
    deskripsi: "Melayani wilayah Jakarta Barat: Grogol, Kebon Jeruk, Cengkareng, Tambora, Kembangan, dan sekitarnya.",
    keyword: "jasa sedot wc jakarta barat",
  },
  {
    slug: "jakarta-timur",
    nama: "Jakarta Timur",
    deskripsi: "Melayani area Jakarta Timur: Cakung, Duren Sawit, Jatinegara, Kramat Jati, Matraman, dan sekitarnya.",
    keyword: "jasa sedot wc jakarta timur",
  },
  {
    slug: "jakarta-utara",
    nama: "Jakarta Utara",
    deskripsi: "Melayani wilayah Jakarta Utara: Penjaringan, Pluit, Tanjung Priok, Kelapa Gading, Cilincing, dan sekitarnya.",
    keyword: "jasa sedot wc jakarta utara",
  },
  {
    slug: "bekasi",
    nama: "Bekasi",
    deskripsi: "Melayani Bekasi Kota dan Bekasi Kabupaten: Bekasi Timur, Bekasi Barat, Bekasi Utara, Bekasi Selatan, Tambun, Cikarang, dan sekitarnya.",
    keyword: "jasa sedot wc bekasi",
  },
  {
    slug: "depok",
    nama: "Depok",
    deskripsi: "Melayani seluruh Kota Depok: Beji, Pancoran Mas, Sukmajaya, Cilodong, Cimanggis, Sawangan, dan sekitarnya.",
    keyword: "jasa sedot wc depok",
  },
  {
    slug: "tangerang",
    nama: "Tangerang",
    deskripsi: "Melayani Kota Tangerang dan Tangerang Selatan: Serpong, Ciputat, Pamulang, Bintaro, Alam Sutera, dan sekitarnya.",
    keyword: "jasa sedot wc tangerang",
  },
  {
    slug: "bogor",
    nama: "Bogor",
    deskripsi: "Melayani Kota Bogor dan Kabupaten Bogor: Bogor Tengah, Bogor Selatan, Cibinong, Citereup, Parung, dan sekitarnya.",
    keyword: "jasa sedot wc bogor",
  },
]

export const areaChip = [
  "Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Timur", "Jakarta Utara",
  "Bekasi Kota", "Bekasi Kabupaten", "Depok", "Tangerang Kota", "Tangerang Selatan",
  "Bogor Kota", "Bogor Kabupaten", "Cikarang", "Karawang", "Serpong",
]

export function findAreaSlug(chipName: string): string | null {
  const exact = areaList.find(
    (a) => a.nama.toLowerCase() === chipName.toLowerCase()
  )
  if (exact) return exact.slug
  const partial = areaList.find((a) =>
    chipName.toLowerCase().startsWith(a.nama.toLowerCase())
  )
  return partial ? partial.slug : null
}
