import JerryHome from "$lib/assets/locations/JerryHome.svg"
import GeorgeHome from "$lib/assets/locations/GeorgeHome.svg";
import ElaineHome from "$lib/assets/locations/ElaineHome.svg";
import KramerHome from "$lib/assets/locations/KramerHome.svg";
import FamilyHome from "$lib/assets/locations/FamilyHome.svg";
import Diner from "$lib/assets/locations/Diner.svg";
import PlaceOfLeisure from "$lib/assets/locations/PlaceOfLeisure.svg";
import Workplace from "$lib/assets/locations/Workplace.svg";
import Transport from "$lib/assets/locations/Transport.svg";
import Outside from "$lib/assets/locations/Outside.svg";
import OtherLocation from "$lib/assets/locations/OtherLocation.svg";

export const getLocationIconPath = (id: string) => {
  switch (id) {
    case "Jerry's home":
      return JerryHome;
    case "George's home":
      return GeorgeHome;
    case "Elaine's home":
      return ElaineHome;
    case "Kramer's home":
      return KramerHome;
    case "Other family home":
      return FamilyHome;
    case "Diner":
      return Diner;
    case "Place of leisure":
      return PlaceOfLeisure;
    case "Workplace":
      return Workplace;
    case "Transport":
      return Transport;
    case "Outside":
      return Outside;
    default:
      return OtherLocation;
  }
}