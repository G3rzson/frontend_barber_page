export const SERVICES = [
  { id: 10, title: "Hajvágás", price: 6000, time: "30 perc" },
  { id: 20, title: "Szakállvágás", price: 4000, time: "20 perc" },
  { id: 30, title: "Hajvágás és szakállvágás", price: 9000, time: "50 perc" },
];

export const BARBERS = [
  {
    id: 100,
    name: "Pali",
    imageUrl: require("../../assets/img/barbers/barber-1.png"),
  },
  {
    id: 200,
    name: "Józsi",
    imageUrl: require("../../assets/img/barbers/barber-2.png"),
  },
  {
    id: 300,
    name: "Laci",
    imageUrl: require("../../assets/img/barbers/barber-3.png"),
  },
];

export const GALLERY_IMAGES = [
  { id: 1000, imageUrl: require("../../assets/img/works/Barber.png") },
  { id: 2000, imageUrl: require("../../assets/img/works/Barber_1.png") },
  { id: 3000, imageUrl: require("../../assets/img/works/Barber_2.png") },
  { id: 4000, imageUrl: require("../../assets/img/works/Barber_3.png") },
  { id: 5000, imageUrl: require("../../assets/img/works/Barber_4.png") },
  { id: 6000, imageUrl: require("../../assets/img/works/Barber_5.png") },
  { id: 7000, imageUrl: require("../../assets/img/works/Barber_6.png") },
];

export const OPENING_HOURS = [
  { id: 10000, day: "Hétfő", hours: "10:00 - 18:00" },
  { id: 20000, day: "Kedd", hours: "10:00 - 18:00" },
  { id: 30000, day: "Szerda", hours: "10:00 - 18:00" },
  { id: 40000, day: "Csütörtök", hours: "10:00 - 18:00" },
  { id: 50000, day: "Péntek", hours: "10:00 - 18:00" },
  { id: 60000, day: "Szombat", hours: "10:00 - 14:00" },
  { id: 70000, day: "Vasárnap", hours: "Zárva" },
];

export const INFOS = [
  {
    id: 100000,
    question: "Milyen fizetési lehetőségek vannak?",
    answer: "Kártyával és készpénzzel egyaránt lehet fizetni.",
  },
  {
    id: 200000,
    question: "Van parkolási lehetőség?",
    answer: "Igen, van parkolási lehetőség a közelben.",
  },
];
