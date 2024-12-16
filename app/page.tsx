
import Navigation from "./component/Nav";
import CareerOpportunities from "./component/Nav2";
import SubsidiaryFilter from "./component/Nav3";

import JoinOurTeam from "./component/Nav5";
import FooterSection from "./component/Footer";

export default function Home() {
  return (
   <div>
    
    <Navigation/>
    <CareerOpportunities/>
    <SubsidiaryFilter/>
  
    <JoinOurTeam/>
    <FooterSection/>
   </div>
  );
}
