import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

import farmImg from "../public/imgs/farm.webp";
import GatheringImg from "../public/imgs/gathering.webp";
import FoodPrep from "../public/imgs/foodPrep.webp";
import Salmon from "../public/imgs/salmon.webp";
import Mignon from "../public/imgs/mignon.webp";
import Mousse from "../public/imgs/mousse.webp";
import Pasta from "../public/imgs/pasta.webp";

import HeadMeta from "../Components/HeadComp/HeadMeta";
import Btn from "../Components/btn";

import MidSection from "../Components/midSection";

import SampleHighlight from "../Components/highlightSection/sampleHighlight";

const info = [
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

const sampleHighlightInfo = [
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

const Home: NextPage = () => {
  const router = useRouter();
  const onNavigate = () => {
    router.push("/reservation");
  };
  return (
    <>
      <HeadMeta title="Dine" description="This is the dine app home page" />

      <header className={styles.header}>
        <p className={styles.header_title}>dine</p>
        <section className={styles.header_text}>
          <p className={styles.header_text_subTitle}>
            Exquisite dining <br />
            since 1989
          </p>
          <p className={styles.header_text_description}>
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
          <Btn
            btnName="Book a Table"
            exCSS={styles.headerBtn}
            onToggle={() => onNavigate()}
          />
        </section>

        <div className={styles.header_ImgCon}>
          <Image src={Pasta} alt="pasta" layout="fill" objectFit="cover" />
        </div>
      </header>

      <main className="mainC">
        <section className={styles.midSection}>
          {info.map((section) => (
            <MidSection
              key={section.id}
              subHeader={section.subHeader}
              description={section.description}
              imgTitle={section.imgTitle}
              switched={section.switched}
            />
          ))}
        </section>

        <section className={styles.highlightSection}>
          <div className={styles.highlight_Text}>
            <p className={styles.highlight_Text_subHeader}>
              A few highlights from our menu
            </p>
            <p className={styles.highlight_Text_Description}>
              We cater for all dietary requirements. but heres a glimpse at some
              of our diner favourites. Our menu is revamped every season.
            </p>
          </div>
          <div className={styles.highlight_SampleDish}>
            {sampleHighlightInfo.map((highlight) => (
              <SampleHighlight
                key={highlight.id}
                headerTitle={highlight.headerTitle}
                description={highlight.description}
                imgTitle={highlight.imgTitle}
              />
            ))}
          </div>
        </section>

        <section className={styles.gatheringSection}>
          <div className={styles.gathering_ImgCon}>
            <Image
              src={GatheringImg}
              alt="FarmImg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.gathering_Text}>
            <p className={styles.gathering_Text_Header}>Family Gathering</p>
            <p className={styles.gathering_Text_Description}>
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We will provide a
              memorable experience for all.
            </p>
            <Btn
              btnName="book table"
              exCSS={styles.gathering_Text_btn}
              onToggle={() => onNavigate()}
            />
          </div>
          <div className={styles.gathering_Options}>
            <p className={styles.gathering_Options_optionText}>
              Family Gathering
            </p>
            <p className={styles.gathering_Options_optionText}>Special Event</p>
            <p className={styles.gathering_Options_optionText}>Social Event</p>
          </div>
        </section>

        <section className={styles.orderingSection}>
          <p className={styles.orderText}>Ready to make a reservation?</p>
          <Btn
            btnName="book a table"
            exCSS={styles.order_Btn}
            onToggle={() => onNavigate()}
          />
        </section>
      </main>
    </>
  );
};

export default Home;
