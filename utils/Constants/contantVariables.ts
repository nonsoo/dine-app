import farmImg from "../../public/imgs/farm.webp";
import FoodPrep from "../../public/imgs/foodPrep.webp";
import Salmon from "../../public/imgs/salmon.webp";
import Mignon from "../../public/imgs/mignon.webp";
import Mousse from "../../public/imgs/mousse.webp";

export const info = [
  {
    id: 1,
    subHeader: "Enjoyable place for all the family",
    description: `Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.`,
    imgTitle: farmImg,
    switched: false,
  },
  {
    id: 2,
    subHeader: "The most locally sourced food",
    description: `All ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.`,
    imgTitle: FoodPrep,
    switched: true,
  },
];

export const sampleHighlightInfo = [
  {
    id: 1,
    headerTitle: "seared salmon filet",
    description:
      "our locally sourced salmon served with a refreshing buckwheat summer salad.",
    imgTitle: Salmon,
  },
  {
    id: 2,
    headerTitle: "Rosemary Filet Miganon",
    description:
      "Our prime beef served to your tase with a delicious choice of seasonal sides.",
    imgTitle: Mignon,
  },
  {
    id: 3,
    headerTitle: "Summer Fruit Chocolate Mousse",
    description:
      "Creamy mousse combined with summer fruits and dark chocolate shavings.",
    imgTitle: Mousse,
  },
];
