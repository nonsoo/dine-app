import type { NextPage } from "next";
import Image from "next/image";

import styles from "../styles/Home.module.css";

import farmImg from "../public/imgs/farm.jpg";
import GatheringImg from "../public/imgs/gathering.jpg";

import HeadMeta from "../Components/HeadComp/HeadMeta";
import Btn from "../Components/btn";

import MidSection from "../Components/midSection";

import SampleHighlight from "../Components/highlightSection/sampleHighlight";

const info = {
  subHeader: "Enjoyable place for all the family",
  description: `Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.`,
  imgTitle: farmImg,
};

const info2 = {
  subHeader: "The most locally sourced food",
  description: `All ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.`,
  imgTitle: farmImg,
};

const sampleHighlight1 = {
  headerTitle: "seared salmon filet",
  description:
    "our locally sourced salmon served with a refreshing buckwheat summer salad.",
  imgTitle: farmImg,
};

const Home: NextPage = () => {
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
          <Btn btnName="Book a Table" exCSS={styles.headerBtn} />
        </section>
      </header>

      <main className="mainC">
        <section className={styles.midSection}>
          <MidSection
            subHeader={info.subHeader}
            description={info.description}
            imgTitle={info.imgTitle}
            switched={false}
          />
          <MidSection
            subHeader={info2.subHeader}
            description={info2.description}
            imgTitle={info2.imgTitle}
            switched={true}
          />
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
            <SampleHighlight
              headerTitle={sampleHighlight1.headerTitle}
              description={sampleHighlight1.description}
              imgTitle={sampleHighlight1.imgTitle}
            />
            <SampleHighlight
              headerTitle={sampleHighlight1.headerTitle}
              description={sampleHighlight1.description}
              imgTitle={sampleHighlight1.imgTitle}
            />
            <SampleHighlight
              headerTitle={sampleHighlight1.headerTitle}
              description={sampleHighlight1.description}
              imgTitle={sampleHighlight1.imgTitle}
            />
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
            <Btn btnName="book table" exCSS={styles.gathering_Text_btn} />
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
          <Btn btnName="book table" exCSS={styles.order_Btn} />
        </section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footer_Title}>dine</p>
        <div className={styles.footer_Location}>
          <p className={styles.footer_Location_Text}>marthwaite, sedbergh</p>
          <p className={styles.footer_Location_Text}>cumbria</p>
          <p className={styles.footer_Location_Text}>+00 44 123 4567</p>
        </div>
        <div className={styles.footer_Time}>
          <p className={styles.footer_Time_Text}>open times</p>
          <p className={styles.footer_Time_Text}>mon - fri 09:00 am - 10 pm</p>
          <p className={styles.footer_Time_Text}>
            sat - sun: 09:00 am - 11:30 pm
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
