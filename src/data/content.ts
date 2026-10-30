export const asset = (name: string) => `/assets/${name}`;

export interface Space {
  name: string;
  image: string;
  type: string;
  people: string;
  daily: string;
  hourly: string;
}

export const spaces: Space[] = [
  { name: "AXA Tower Meeting Room", image: "1-24374-imgRectangle1.png", type: "Meeting Room", people: "4 People", daily: "Rp2,880,000", hourly: "Rp480,000" },
  { name: "AXA Tower Meeting Room", image: "1-24374-imgRectangle2.png", type: "Meeting Room", people: "4 People", daily: "Rp1,200,000", hourly: "Rp200,000" },
  { name: "Suite 7 View", image: "1-24374-imgRectangle3.png", type: "Office", people: "8 People", daily: "Rp3,480,000", hourly: "Rp600,000" },
  { name: "Suite VIP 5 Non View", image: "1-24374-imgRectangle4.png", type: "Co-Working Space", people: "1 People", daily: "Rp150,000", hourly: "Rp750,000 / week" },
];

export const promotions = [
  { image: "1-24599-imgUnsplashU2Bi3GMnSse.png", title: "Discount 20% for all co-working space booking!", description: "Limited time offer! Don't miss out on this incredible deal." },
  { image: "1-24599-imgUnsplashEHd8Y1Znfpk.png", title: "Exclusive 30% discount on monthly co-working space subscriptions!", description: "Limited time offer! Don't miss out on this incredible deal." },
  { image: "1-24599-imgUnsplash0ST9YhNgSEs.png", title: "Special offer: Get 25% off any meeting room booking!", description: "Don't miss out on this exclusive deal! Limited time only." },
];

export const partnerOffers = [
  { image: "1-24694-imgUnsplashEHd8Y1Znfpk.png", title: "Exclusive Corporate Rate | Bank Mandiri", description: "Enjoy substantial savings on meeting rooms, event spaces, and other business solutions when you partner with us." },
  { image: "1-24694-imgLayer0Copy1.png", title: "Exclusive Member Benefits", description: "As a valued member, you'll enjoy a range of benefits designed to enhance your experience and provide exceptional value." },
  { image: "1-24694-imgUnsplashYWwob8KwOCk.png", title: "10% Offer for DBS Credit Card Holder", description: "Exclusive to DBS Credit Card holders: Get a 10% discount on your next booking." },
];

export const questions = [
  { question: "What types of office spaces does CEO SUITE offer?", answer: "We provide a variety of office spaces including private offices, co-working spaces, meeting rooms, and virtual offices. Whether you need a dedicated workspace or flexible hot-desking options, we have a solution to fit your needs." },
  { question: "What amenities are included with a CEO SUITE membership?" },
  { question: "Can I customize my office space?" },
  { question: "How do I book meeting rooms?" },
  { question: "Are there any additional costs for using meeting rooms or other facilities?" },
  { question: "What is included in the administrative support services?" },
  { question: "How can I access CEO SUITE’s high-speed internet?" },
  { question: "Can I use CEO SUITE’s facilities for events?" },
  { question: "What are the operating hours for CEO SUITE locations?" },
  { question: "How can I contact CEO SUITE for more information or support?" },
];

export const productPhotos = [
  "1-15587-imgUnsplashGWe0DlVd9E0.png",
  "1-15587-imgUnsplash0ST9YhNgSEs.png",
  "1-15587-imgUnsplashU2Bi3GMnSse.png",
  "1-15587-imgUnsplashEHd8Y1Znfpk.png",
  "1-15587-imgUnsplashDyFjxmHt3Es.png",
];

export const addOns = [
  { name: "Corkage Fee", price: "Rp270,000", unit: "/event" },
  { name: "Lunch Package - Executive", price: "Rp110,000", unit: "/pax" },
  { name: "Lunch Package - Standard", price: "Rp85,000", unit: "/pax" },
  { name: "Coffee Break - Executive", price: "Rp75,000", unit: "/pax" },
  { name: "Coffee Break - Standard", price: "Rp50,000", unit: "/pax" },
  { name: "Flip Chart", price: "Rp85,000", unit: "/event" },
  { name: "LCD Projector", price: "Rp250,000", unit: "/hour" },
  { name: "LCD Projector", price: "Rp1,500,000", unit: "/day" },
];
