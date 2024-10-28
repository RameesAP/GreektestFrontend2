
import Munnar from "../assets/cardsimages/dd.png"
import Kashmir from "../assets/cardsimages/ee.png"
import Cochin from "../assets/cardsimages/ff.png"
import MunnarTea from "../assets/cardsimages/aa.jpg"
import JeepTrekking from "../assets/cardsimages/bb.jpg"
import SunRiseMunnar from "../assets/cardsimages/cc.jpg"

export interface TravelPackage {
  image: string;
  title: string;
  duration: string;
  pickup: string;
  price: string;
}

export const travelData: TravelPackage[] = [
  {
    image: Munnar,
    title: "Munnar Thekkady Alleppey and Kovalam Tour",
    duration: "6 Days | 5 Nights",
    pickup: "Pickup: Cochin Airport / Railway Station",
    price: "₹25,800",
  },
  {
    image: Kashmir,
    title: "Discover Kashmir and Lakes of Jammu Tour",
    duration: "6 Days | 5 Nights",
    pickup: "Pickup: Srinagar Airport",
    price: "₹25,800",
  },
  {
    image: Cochin,
    title: "Cochin Munnar Thekkady and Alleppey Tour",
    duration: "5 Days | 4 Nights",
    pickup: "Pickup: Cochin Airport",
    price: "₹25,800",
  },
  {
    image: MunnarTea,
    title: "Munnar Tea Plantation Tour",
    duration: "5 Days | 4 Nights",
    pickup: "Pickup: Cochin Airport",
    price: "₹25,800",
  },
  {
    image: JeepTrekking,
    title: "Jeep Trekking Munnar Tour",
    duration: "5 Days | 4 Nights",
    pickup: "Pickup: Cochin Airport",
    price: "₹25,800",
  },
  {
    image: SunRiseMunnar,
    title: "SunRiseMunnar Tour",
    duration: "5 Days | 4 Nights",
    pickup: "Pickup: Cochin Airport",
    price: "₹25,800",
  },
];
