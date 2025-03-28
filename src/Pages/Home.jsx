import { useContext } from "react";
import EarningChart from "../Components/EarningChart/EarningChart";
import EarningRank from "../Components/EarningChart/EarningRank";
import HomeTabs from "../Components/HomeTabs/HomeTabs";
import Marquee from "../Components/Marquee";
import SliderBanner from "../Components/SliderBanner/SliderBanner";
import WinningInformation from "../Components/WinningInformation/WinningInformation";
import { GameContext } from "../context/GameContext";

const winners = [
  {
    name: "BOS*** YL",
    profilePic: "https://hgzy.org/assets/png/7-00479cfa.png",
    gameImg:
      "https://ossimg.crhhh.com/bdtgame/lotterycategory/lotterycategory_20230725010909y1nq.png",
    amount: 16.0,
  },
  {
    name: "ALI*** VAI",
    profilePic: "https://i.pravatar.cc/100?img=2",
    gameImg:
      "https://ossimg.crhhh.com/bdtgame/lotterycategory/lotterycategory_20230725010909y1nq.png",
    amount: 120.5,
  },
  {
    name: "SAF*** BOY",
    profilePic: "https://i.pravatar.cc/100?img=3",
    gameImg:
      "https://ossimg.crhhh.com/bdtgame/lotterycategory/lotterycategory_20230725010909y1nq.png",
    amount: 75.25,
  },
  {
    name: "BOS*** YL",
    profilePic: "https://hgzy.org/assets/png/7-00479cfa.png",
    gameImg:
      "https://ossimg.crhhh.com/bdtgame/lotterycategory/lotterycategory_20230725010909y1nq.png",
    amount: 160.1,
  },
];

// Static Data Example
const userData = [
  {
    rank: 1,
    image: "https://hgzy.org/assets/png/4-12a0d0c5.png",
    username: "DS******BY",
    amount: 1303640768.36,
  },
  {
    rank: 2,
    image: "https://hgzy.org/assets/png/7-00479cfa.png",
    username: "BOS*** YL",
    amount: 478032240.0,
  },
  {
    rank: 3,
    image: "https://hgzy.org/assets/png/5-ab77b716.png",
    username: "M***vai",
    amount: 378032240.0,
  },
  {
    rank: 4,
    image: "https://hgzy.org/assets/png/1-a6662edb.png",
    username: "Bra***ner",
    amount: 878032240.0,
  },
  {
    rank: 5,
    image: "https://hgzy.org/assets/png/16-cf8e1441.png",
    username: "SHA***DIN",
    amount: 178032240.0,
  },
];
const home = () => {
  const {all_games}=useContext(GameContext)
  return (
    <div className="bg-backgroundWhite">
      <SliderBanner />
{/* Marquee */}
<Marquee/>
      {/* HomeTabs */}
      <HomeTabs />

      {/* Winning Information */}
      <div className="px-2.5 sm:px-4 space-y-2">
        <h2 className="pl-1 text-lg font-medium border-l-2 border-red">
          Winning information
        </h2>
        {winners.map((winner, index) => (
          <WinningInformation key={index} winner={winner} />
        ))}
      </div>

      {/* earning chart */}
      <div className="px-2.5 sm:px-4 space-y-2 pb-20">
        
        <h2 className="pl-1  text-lg font-medium border-l-2 border-red">
          Today{"'"}s earnings chart
        </h2>
        <div className="">

        
        <EarningRank userData={userData}/>
        </div>
        {userData.map((user, index) => (
          <EarningChart key={index} {...user} />
        ))}
      </div>
    </div>
  );
};

export default home;
