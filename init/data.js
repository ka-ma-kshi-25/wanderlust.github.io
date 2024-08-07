const sampleListing = [
    {
      title: "Jim Corbett National Park",
      description:
        "The largest Corbett Tiger Reserve, The project Tiger lies in the Nainital district of Uttarakhand",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/1487988908/photo/wild-bengal-male-tiger-or-panthera-tigris-side-profile-in-natural-green-scenic-background.jpg?s=612x612&w=0&k=20&c=w7DQW5ne20rsy4hudWNUo-D_iTW0YgEq5cYiCmjN4r4=",
      },
      price: 3350,
      location: "Uttarakhand, NorthWest",
    },
    {
      title: "Great Himalayan National Park",
      description:
        "One of the most revent additions to a huge network of wildlife reserves found in Himalayan region of India",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJbhSri_IWo7HRw4THFrrKaC61oONQA8uBA&s",
      },
      price: 1200,
      location: "Himachal Pradesh, North",
    },
    {
      title: "Valley of Flowers National Park",
      description:
        "With a stunnign backdrop of the mighty Himalayan ranges, The National Park represents an ethereal view and an unforgettable experience.",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBnIKkmxIWcB--CBYoQ9qxbEJzVQtx8v-jw&s",
      },
      price: 1000,
      location: "Uttarakhand, NorthWest",
    },
    {
      title: "Pin Vallery National Park",
      description:
        "This Park is situated in the cold desert area of Spiti Sub-Division of Lahaul & Spiti District of Himachal Pradesh",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQng_CrC3Z29uGMlRlfqUav7AMETO_AR26mPA&s",
      },
      price: 2500,
      location: "Himachal Pradesh, NorthWest",
    },
    {
      title: "Keibul Lamjao National Park",
      description:
        "The only floating national park in the world, and an integral part of Loktak Lake.",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHWjhpzi4EkQLBi6wUa_kH2kb9aXDixM3zw&s",
      },
      price: 800,
      location: "Manipur, North",
    },
    {
      title: "Sirohi National Park",
      description:
        "A heaven for wildlife enthusiasts and bird watchers",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZL4HDEU9FHlz_Uogo0MYux1a6o5S4yUpAJQ&s",
      },
      price: 2000,
      location: "Manipur, North",
    },
    {
      title: "Kaziranga National Park",
      description:
        "The Great Indian one horned rhinoceros",
      image: {
        filename: "listingimage",
        url: "https://www.kaziranga-national-park.com/wp-content/uploads/2019/05/kaziranga-national-park2.jpg",
      },
      price: 900,
      location: "Assam, NorthEast",
    },
    {
      title: "Nameri National Park",
      description:
        "The herds of elephants.",
      image: {
        filename: "listingimage",
        url: "https://static2.tripoto.com/media/filter/tst/img/405714/TripDocument/1547537957_the_blue_kameng_nameri_national_park.jpg",
      },
      price: 3500,
      location: "Assam, NorthEast",
    },
    {
      title: "Orang National Park",
      description:
        "The only stronghold of the rhinoceros on the north bank of Brahmaputra. Rich in flora and fauna",
      image: {
        filename: "listingimage",
        url: "https://www.holidify.com/images/bgImages/ORANG-NATIONAL-PARK.jpg",
      },
      price: 3000,
      location: "Assam, NorthEast",
    },
    {
      title: "Sundarbans National Park",
      description:
        "The core part of tiger reserve and biosphere reserve.",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBUHQwuog6BuqUkL0_CuhosYMuPXq5cEZlZqJ8uC_g5MQC4K6LTIwseSWX5P5wqOM-0g&usqp=CAU",
      },
      price: 4000,
      location: "West bengal, Eastern",
    },
    {
      title: "Simlipal National Park",
      description:
        "A protected area and a part of the UNESCO World Network of Biosphere Reserves",
      image: {
        filename: "listingimage",
        url: "https://mytravelframes.com/wp-content/uploads/2021/04/IMG_0025.jpg",
      },
      price: 1800,
      location: "Odisha, NorthEastern",
    },
    {
      title: "Anshi National Park",
      description:
        "One of the most famous India's picturesque spots.",
      image: {
        filename: "listingimage",
        url: "https://cdn.jlrexplore.com/uploads/2022/05/01-1.jpg",
      },
      price: 10000,
      location: "Karnataka, South",
    },
    {
      title: "Kundremukh National Park",
      description:
        "The second highest peak in Karnataka",
      image: {
        filename: "listingimage",
        url: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/06/Kudremukh-National-Park-cover.jpg",
      },
      price: 1200,
      location: "Karnataka, South",
    },
    {
      title: "Eravikulam National Park",
      description:
        "A former hunting preserve of the British planters",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv10fiIA9vhWaAfjX9Mkeek91-wCQASn6Tyw&s",
      },
      price: 2200,
      location: "Kerala, South",
    },
    {
      title: "Periyar National Park",
      description:
        "One of the most renowned national poarks in South India",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShqtgCGjeS31DJsqyb6iev_Nz62A4-eW7RDg&s",
      },
      price: 1800,
      location: "Kerala, South",
    },
    {
      title: "Mukurthi National Park",
      description:
        "The protection of the endangered Nilgiri Tahr Hemitragus hylocrius",
      image: {
        filename: "listingimage",
        url: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Mukurthi_National_Park_521867f3bd.jpg",
      },
      price: 1500,
      location: "Tamil Nadu, South",
    },
    {
      title: "Guindy National Park",
      description:
        "One of the smallest park situated inside a metropolitan area",
      image: {
        filename: "listingimage",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ae/d7/26/inside-the-park.jpg?w=1200&h=1200&s=1",
      },
      price: 1600,
      location: "Tamil Nadu, South",
    },
    {
      title: "Palani Hills National Park",
      description:
        "One of thr most scared shrines of the Murugan",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOKo4bRxiXjqhanEpo4xGJPPylpAjEO9Q-A&s",
      },
      price: 3000,
      location: "Tamil Nadu, South",
    },
    {
      title: "Mudumalai National Park",
      description:
        "One of the Tiger Reserve in India",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3D5t_K2TqgJ298ResqAjyvLj_HFiX293ig&s",
      },
      price: 4000,
      location: "Tamil Nadu, South",
    },
    {
      title: "Mukundra Hills National Park",
      description:
        "The third tiger reserve od Rajasthan also known Darrah wildlife sanctury.",
      image: {
        filename: "listingimage",
        url: "https://ebnw.net/wp-content/uploads/2022/04/grand-view-of-garadiya.jpg",
      },
      price: 5000,
      location: "Rajasthan, NorthWestern",
    },
    {
      title: "Ranthambore National Park",
      description:
        "One of the best locations in India to see the majestic predators in its nautral habitat",
      image: {
        filename: "listingimage",
        url: "https://assets.cntraveller.in/photos/60ba1a12a1a415b43b10bcfa/master/w_1600%2Cc_limit/Arrows-Girl-Padam-Lake-Ranthambore-1620.jpg",
      },
      price: 1100,
      location: "Rajasthan, NorthWestern",
    },
    {
      title: "Desert National Park",
      description:
        "One of the largest national parks in the Thar Desert",
      image: {
        filename: "listingimage",
        url: "https://static.toiimg.com/img/94416156/Master.jpg",
      },
      price: 2500,
      location: "Rajasthan, NorthWestern",
    },
    {
      title: "Mount Abu Wildlife Sanctuary and National Park",
      description:
        "Located in the Aravalli Range, one of the oldest mountain ranges in India",
      image: {
        filename: "listingimage",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Nakki_Lake_from_Mount_Abu_Wildlife_Sanctuary.JPG",
      },
      price: 750,
      location: "Rajasthan, NorthWest",
    },
    {
      title: "Dachigam National Park",
      description:
        "Best known for the home of the Hangul, or Kashmir stag.",
      image: {
        filename: "listingimage",
        url: "https://images.squarespace-cdn.com/content/v1/5ab61c67ec4eb7ab7a2f40f2/1539264376826-G037S0EROZOF0F8FWCA3/Mt+Mahadev+the+highest+Peak+of+the+Zabarwan+Mountains+overlooks+the+Dachigam+National+Park",
      },
      price: 1600,
      location: "Jammu and Kashmir, North",
    },
    {
      title: "Betla National Park",
      description:
        "Provides superb animal viewing opportunities.",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaF106aM52eQwFTCru03jhFRr7-zJNZUy515FHuQ3ophGjliaLfkzUWusfIuTWxkHmokE&usqp=CAU",
      },
      price: 1200,
      location: "Jammu and Kashmir, North",
    },
    {
      title: "Chilika Wildlife Sanctuary",
      description:
        "Chilika is home to the only known population of Irrawaddy dolphins in India and one of only two lagoons in the world that are home to this species.",
      image: {
        filename: "listingimage",
        url: "https://www.toursorissa.com/wp-content/uploads/2017/07/chilika-lake-bird-sanctuary-1.jpg",
      },
      price: 6000,
      location: "Odisha, NorthEastern",
    },
    {
      title: "Rajiv Gandhi Zoological Park",
      description:
        "Located in Pune's Katraj area, home to around 66 species of wildlife.",
      image: {
        filename: "listingimage",
        url: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68517-Katraj-Snake-Park.jpg",
      },
      price: 4000,
      location: "Maharashtra, West",
    },
    {
      title: "Mysore Zoo",
      description:
        "Mysore Zoo, among the few in India exhibiting African elephant, and the only one to breed them.",
      image: {
        filename: "listingimage",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwPgkILiZof8yTOI0l5gt6WPzSZ_gp06stoQ&s",
      },
      price: 1800,
      location: "Karnataka, South",
    },
  ];
  
  module.exports = { data: sampleListing };

