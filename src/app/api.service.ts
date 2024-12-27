import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  states = [
      {
        "id": 1,
        "name": "Andhra Pradesh",
        "image": "https://cdn.britannica.com/82/144382-050-981C1E3E/harbour-Visakhapatnam-Andhra-Pradesh-India.jpg",
        "description": "Known for its rich cultural heritage, Tirupati Temple, and pristine beaches."
      },
      {
        "id": 2,
        "name": "Arunachal Pradesh",
        "image": "https://s7ap1.scene7.com/is/image/incredibleindia/giant-budhha-statue-tawang-arunachal-pradesh-2-attr-hero?qlt=82&ts=1726743111236",
        "description": "The 'Land of the Rising Sun,' famous for its scenic beauty and monasteries."
      },
      {
        "id": 3,
        "name": "Assam",
        "image": "https://www.andbeyond.com/wp-content/uploads/sites/5/assam-tea-plantations.jpg",
        "description": "Known for its tea gardens, wildlife sanctuaries, and the mighty Brahmaputra River."
      },
      {
        "id": 4,
        "name": "Bihar",
        "image": "https://media.istockphoto.com/id/530927704/photo/mahabodhi-temple-bodhgaya.jpg?s=612x612&w=0&k=20&c=MeuSoIquuLhsQB5JNv3zDn8G6IPuNRlbcIW9EZd4o3o=",
        "description": "Rich in ancient history, famous for Bodh Gaya and Nalanda."
      },
      {
        "id": 5,
        "name": "Chhattisgarh",
        "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-kutaghat-dam-bilaspur-chhattisgarh-khutaghat-attr-hero?qlt=82&ts=1727011181193",
        "description": "Known for its tribal culture, waterfalls, and natural beauty."
      },
      {
        "id": 6,
        "name": "Goa",
        "image": "https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg=",
        "description": "Famous for its beaches, vibrant nightlife, and Portuguese heritage."
      },
      {
        "id": 7,
        "name": "Gujarat",
        "image": "https://s7ap1.scene7.com/is/image/incredibleindia/dwarika-dhish-main-temple-dwarka-gujarat-1-attr-hero?qlt=82&ts=1726734672385",
        "description": "Known for Gir lions, white desert of Kutch, and cultural festivals."
      },
      {
        "id": 8,
        "name": "Haryana",
        "image": "https://media.istockphoto.com/id/1071726926/photo/tomb-of-sheikh-chilli.jpg?s=612x612&w=0&k=20&c=SUaZdQ2nhofBPdEjRJOVeDcUa-i0H9jNJlzvuf8VKLw=",
        "description": "Known for its agricultural prosperity and vibrant cultural heritage."
      },
      {
        "id": 9,
        "name": "Himachal Pradesh",
        "image": "https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=",
        "description": "A Himalayan state known for its picturesque landscapes and hill stations."
      },
      {
        "id": 10,
        "name": "Jharkhand",
        "image": "https://s7ap1.scene7.com/is/image/incredibleindia/jonha-falls-ranchi-jharkhand-new?qlt=82&ts=1727010871094",
        "description": "Rich in mineral resources and known for its waterfalls and wildlife."
      },
      {
        "id": 11,
        "name": "Karnataka",
        "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-vitthala-temple-complex-hampi-karnataka-city-hero?qlt=82&ts=1726721012585",
        "description": "Known for Bengaluru, Mysuru Palace, and historical architecture."
      },
      {
        "id": 12,
        "name": "Kerala",
        "image": "https://s3.india.com/wp-content/uploads/2024/08/Kerala-Travel-Guide_-Discover-Gods-Own-Country-On-A-Budget.jpg",
        "description": "Famous for its backwaters, spices, and cultural heritage."
      },
      {
        "id": 13,
        "name": "Madhya Pradesh",
        "image": "https://assets.architecturaldigest.in/photos/6008504b54beb9e516da913b/4:3/w_1024,h_768,c_limit/madhya-pradesh-monuments-1366x768.jpg",
        "description": "Known for its temples, wildlife, and ancient heritage sites."
      },
      {
        "id": 14,
        "name": "Maharashtra",
        "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-gateway-of-india-state-hero?qlt=82&ts=1726670249199",
        "description": "India's financial hub, known for Mumbai, Bollywood, and hill stations."
      },
      {
        "id": 15,
        "name": "Manipur",
        "image": "https://static.toiimg.com/photo/64977073.cms",
        "description": "Known for Loktak Lake and rich cultural traditions."
      },
      {
        "id": 16,
        "name": "Meghalaya",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU89VmpH2EZKhhHBAqChWMAWLkPTR7oUSmNA&s",
        "description": "Famous for its living root bridges and beautiful landscapes."
      },
      {
        "id": 17,
        "name": "Mizoram",
        "image": "https://static.toiimg.com/photo/msid-84244923,width-96,height-65.cms",
        "description": "Known for its hills, bamboo forests, and vibrant festivals."
      },
      {
        "id": 18,
        "name": "Nagaland",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYIBHqFdhdJZbwyKEW1cQXztC2HkUN2uwfQ&s",
        "description": "Famous for its tribal culture and the Hornbill Festival."
      },
      {
        "id": 19,
        "name": "Odisha",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg",
        "description": "Known for Konark Sun Temple, Puri Beach, and Chilika Lake."
      },
      {
        "id": 20,
        "name": "Punjab",
        "image": "https://cdn.britannica.com/53/176353-050-5B854179/Harmandir-Sahib-Amritsar-Punjab-India.jpg",
        "description": "Known for the Golden Temple, agriculture, and vibrant culture."
      },
      {
        "id": 21,
        "name": "Rajasthan",
        "image": "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=612x612&w=0&k=20&c=MeF2Dl4ya1NVOWM_I_xo3EPd8E-iazBghYhjiyRaTcU=",
        "description": "Famous for its desert, palaces, and forts showcasing rich cultural heritage."
      },
      {
        "id": 22,
        "name": "Sikkim",
        "image": "https://s3.india.com/wp-content/uploads/2024/10/Sikkim_-The-Hidden-Gem-Of-Northeast-India-You-Need-To-Visit-Now.jpg",
        "description": "Known for its monasteries, Kanchenjunga, and scenic landscapes."
      },
      {
        "id": 23,
        "name": "Tamil Nadu",
        "image": "https://www.tourmyindia.com/states/tamilnadu/image/tamilnadu-banner.webp",
        "description": "Famous for its temples, cultural heritage, and classical arts."
      },
      {
        "id": 24,
        "name": "Telangana",
        "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar-hyderabad-telangana-state-hero?qlt=82&ts=1726653487606",
        "description": "Known for Hyderabad, Charminar, and historical landmarks."
      },
      {
        "id": 25,
        "name": "Tripura",
        "image": "https://media.istockphoto.com/id/1292258648/photo/agartala-in-tripura-india.jpg?s=612x612&w=0&k=20&c=iJAeCeIhgE44719znNGp535AQPfk0_YoDymAWCX5-Yk=",
        "description": "Rich in tribal culture and natural beauty."
      },
      {
        "id": 26,
        "name": "Uttar Pradesh",
        "image": "https://s7ap1.scene7.com/is/image/incredibleindia/dashashwamedh-ghat-varanasi-uttar-pradesh-city-hero?qlt=82&ts=1726649273578",
        "description": "Famous for the Taj Mahal, Varanasi, and historical landmarks."
      },
      {
        "id": 27,
        "name": "Uttarakhand",
        "image": "https://static.toiimg.com/photo/52360554.cms",
        "description": "Known for its spiritual significance and the Himalayas."
      },
      {
        "id": 28,
        "name": "West Bengal",
        "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-howrah-bridge-kolkata-west-bengal-city-hero?qlt=82&ts=1726642884073",
        "description": "Famous for Kolkata, Darjeeling tea, and literary heritage."
      }
  
    ]
   constructor() { }
   getstates()
  {
    return this.states;
  }
  getstate(id: number){
    return this.states.find(state => state.id==id);
  }
}