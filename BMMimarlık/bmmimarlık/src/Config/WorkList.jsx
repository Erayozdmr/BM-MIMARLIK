import { FaHardHat, FaPencilRuler } from "react-icons/fa";
import { TbClockHour10Filled } from "react-icons/tb";
import { IoDocumentText } from "react-icons/io5";
const workslist = [
  {
    name: "Tasarım ve Projelendirme",
    desch1: "Mimari Tasarım",
    desc: "Mimari Tasarım: Konut, ticari yapılar, ofisler, oteller vb. için özgün tasarımlar oluşturur. 3D Modelleme ve Görselleştirme: Tasarımın dijital ortamda üç boyutlu sunumu. İç Mekan Tasarımı: Estetik ve fonksiyonel iç mekan planlaması. Dış Cephe Tasarımı: Binaların estetik ve dayanıklı dış görünümünü planlama.",
    image: <FaPencilRuler />,
  },
  {
    name: "Ruhsatlandırma ve Yasal Süreçler",
    desch1: "İmar Planına Uygunluk",
    desc: "İmar Planına Uygunluk: Yapının imar yönetmeliklerine uygun olup olmadığını kontrol eder. Belediye Ruhsat İşlemleri: İnşaat ruhsatı ve diğer yasal izinler için projeler hazırlar.",
    image: <IoDocumentText />,
  },
  {
    name: "Uygulama ve İnşaat Yönetimi",
    desch1: "Şantiye Takibi",
    desc: "Şantiye Takibi: Projenin sahada uygulanmasını denetler. Malzeme Seçimi: Estetik, dayanıklılık ve bütçeye uygun malzemelerin belirlenmesi. Maliyet Analizi: Proje için bütçe planlaması yapılması.",
    image: <FaHardHat />,
  },
  {
    name: "Sürdürülebilir ve Akıllı Bina Tasarımları",
    desch1: "Yeşil Bina Tasarımı",
    desc: "Enerji verimli ve çevre dostu yapılar tasarlama. Akıllı Ev ve Bina Sistemleri: Teknolojik çözümlerle donatılmış yapılar planlama.",
    image: <TbClockHour10Filled />,
  },
];
export default workslist;
