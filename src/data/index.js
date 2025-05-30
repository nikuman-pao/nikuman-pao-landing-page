import ImageOne from "../images/nikuman.webp";
import ImageTwo from "../images/gomokuman.webp";
import ImageThree from "../images/mara-man.webp";
import ImageFour from "../images/tamanegiman.webp";
import ImageFive from "../images/kiriboshi.webp";
import ImageSix from "../images/cheeseman.webp";
import ImageSeven from "../images/anko.webp";
import ImageEight from "../images/roastedPorkFillet.webp";
import ImageNine from "../images/ShrimpChili.webp";
import ImageTen from "../images/SweetAndSourPork.webp";
import ImageEleven from "../images/ebiabokadoba-ga-.webp";
import ImageTwelve from "../images/koumitoriba-ga-.webp";
import ImageThirteen from "../images/tamagoba-ga-.webp";
import LunchNikuman from "../images/lunch-nikuman.webp";
import LunchYakisoba from "../images/lunch-yakisoba.webp";
import LunchChukadon from "../images/lunch-chukadon.webp";
import LunchAnkakemen from "../images/lunch-ankakemen.webp";
import LunchRebanira from "../images/lunch-rebanira.webp";

export const MenuData = [
  {
    id: "001",
    name: "肉まん",
    price: "350",
    recommendation: "on",
    hard: "off",
    image: ImageOne,
    descriptionLine1: "肉汁たっぷり、",
    descriptionLine2: "当店イチオシ！！",
    alt: "肉まん",
  },
  {
    id: "2",
    name: "五目まん",
    price: "450",
    recommendation: "on",
    hard: "off",
    image: ImageTwo,
    descriptionLine1: "豚肉、エビ、人参、青菜、",
    descriptionLine2: "たけのこ等の彩り♫",
    alt: "五目まん",
  },
  {
    id: "3",
    name: "麻辣まん",
    ruby: "マーラー",
    price: "350",
    recommendation: "off",
    hard: "on",
    image: ImageThree,
    descriptionLine1: "辛味を効かせた",
    descriptionLine2: "特製そぼろ豆腐。",
    alt: "麻辣まん",
  },
  {
    id: "4",
    name: "玉ねぎまん",
    price: "350",
    recommendation: "off",
    hard: "off",
    image: ImageFour,
    descriptionLine1: "玉ねぎとお肉の",
    descriptionLine2: "絶妙なハーモニー。",
    alt: "玉ねぎまん",
  },
  {
    id: "5",
    nameLine1: "切り干し",
    nameLine2: "大根まん",
    price: "350",
    recommendation: "off",
    hard: "off",
    image: ImageFive,
    descriptionLine1: "コリコリ食感の",
    descriptionLine2: "和風お惣菜まん。",
    alt: "切り干し大根まん",
  },
  {
    id: "6",
    name: "チーズまん",
    price: "350",
    recommendation: "off",
    hard: "off",
    image: ImageSix,
    descriptionLine1: "どこを食べてもチーズ！",
    descriptionLine2: "チーズ！チーズ！",
    alt: "チーズまん",
  },
  {
    id: "7",
    name: "あんまん",
    price: "350",
    recommendation: "off",
    hard: "off",
    image: ImageSeven,
    descriptionLine1: "あんこは練ごま入りで",
    descriptionLine2: "程よい甘さ♫",
    alt: "あんまん",
  },
  {
    id: "8",
    nameLine1: "チャーシュー",
    nameLine2: "バーガー",
    price: "450",
    recommendation: "on",
    hard: "off",
    image: ImageEight,
    descriptionLine1: "厚切り焼豚が",
    descriptionLine2: "食べ応え抜群！",
    alt: "チャーシューバーガー",
  },
];

export const BurgerMenuData = [
  {
    id: "8",
    nameLine1: "チャーシュー",
    nameLine2: "バーガー",
    price: "450",
    recommendation: "on",
    hard: "off",
    image: ImageEight,
    descriptionLine1: "厚切り焼豚が",
    descriptionLine2: "食べ応え抜群！",
    alt: "チャーシューバーガー",
  },
  {
    id: "9",
    nameLine1: "エビチリ",
    nameLine2: "バーガー",
    price: "450",
    recommendation: "on",
    hard: "off",
    image: ImageNine,
    descriptionLine1: "プリップリの",
    descriptionLine2: "エビを甘辛ダレで。",
    alt: "エビチリバーガー",
  },
  {
    id: "10",
    nameLine1: "酢豚",
    nameLine2: "バーガー",
    price: "450",
    recommendation: "off",
    hard: "off",
    image: ImageTen,
    descriptionLine1: "黒酢でマイルドに仕上",
    descriptionLine2: "げた豚肉が旨し！",
    alt: "酢豚バーガー",
  },
];
export const ExclusiveMenuData = [
  {
    id: "11",
    nameLine1: "海老アボカド",
    nameLine2: "バーガー",
    price: "430",
    recommendation: "off",
    hard: "off",
    image: ImageEleven,
    descriptionLine1: "特製マヨで",
    descriptionLine2: "ヘルシーに！",
    alt: "海老アボカドバーガー",
  },
  {
    id: "12",
    nameLine1: "香味とり",
    nameLine2: "バーガー",
    price: "390",
    recommendation: "off",
    hard: "on",
    image: ImageTwelve,
    descriptionLine1: "よだれ鶏が",
    descriptionLine2: "ピリ辛旨い！",
    alt: "香味とりバーガー",
  },
  {
    id: "13",
    nameLine1: "たまご",
    nameLine2: "バーガー",
    price: "250",
    recommendation: "off",
    hard: "off",
    image: ImageThirteen,
    descriptionLine1: "卵と生地の",
    descriptionLine2: "相性バツグン！",
    alt: "たまごバーガー",
  },
];

export const LunchMenuData = [
  {
    id: "1",
    name: "肉まん(2個)セット",
    price: "980",
    tax: "(税込)",
    img: LunchNikuman,
    setContents: ["日替わりサラダ", "日替わりスープ", "デザート"],
  },
  {
    id: "2",
    name: "あんかけ焼きそばセット",
    price: "980",
    tax: "(税込)",
    img: LunchYakisoba,
    setContents: ["日替わりサラダ", "日替わりスープ", "デザート"],
  },
  {
    id: "3",
    name: "中華丼セット",
    price: "980",
    tax: "(税込)",
    img: LunchChukadon,
    setContents: ["日替わりサラダ", "日替わりスープ", "デザート"],
  },
  {
    id: "4",
    name: "五目あんかけ麺セット",
    price: "1,180",
    tax: "(税込)",
    img: LunchAnkakemen,
    setContents: ["小籠包2個", "デザート"],
  },
  {
    id: "5",
    name: "レバニラ炒めセット",
    price: "1,180",
    tax: "(税込)",
    img: LunchRebanira,
    setContents: ["日替わりサラダ", "日替わりスープ", "ごはん", "デザート"],
  },
];
