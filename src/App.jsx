import React, { useState } from "react";
import Navbar from "./componentss/Navbar";
import Sidebar from "./componentss/Sidebar";
import AffiliatePanel from "./componentss/Affiliate/AffiliatePanel";
import EarningsPage from "./componentss/Earning/EarningsPage";
import AchievementSection from "./componentss/Achievement/AchievementSection";
import Leaderboard from "./componentss/Leaderboard/Leaderboard ";
import PayoutDetails from "./componentss/Payout/PayoutDetails";
import LeadsDetails from "./componentss/Leads/LeadsDetails";
import WebinarPage from "./componentss/Webinar/WebinarPage";
import KycForm from "./componentss/Kyc/KycForm";
import NomineeForm from "./componentss/Nominee/NomineeForm";
import LinkGenerator from "./componentss/LinkGenerator/LinkGenerator";
import Refferal from "./componentss/Refferal/ReferralTable";
import ReferralTable from "./componentss/Refferal/ReferralTable";
// import ReferralTable from "./componentss/Refferal/ReferralTable";

const App = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <AffiliatePanel />;
        case "Earning":
          return <EarningsPage/>;
      case "Achievement":
        return <AchievementSection />;
      case "Leaderboard":
        return <Leaderboard/>;
        case "Payout":
          return <PayoutDetails/>;
          case "Leads":
            return <LeadsDetails/>;
            case "Webinar":
              return <WebinarPage/>;
              case "Kyc":
                return <KycForm/>;
                case "Nominee":
                  return <NomineeForm/>;
                  case "Link":
                    return <LinkGenerator/>;
                    case "Referral":
                      return <ReferralTable/>;

      case "Upgrade":
        return <div>Upgrade Plan Page</div>;
      default:

    }
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar setActivePage={setActivePage} />

      {/* Sidebar and Main Content */}
      <div className="layout">
        <Sidebar setActivePage={setActivePage} />
        <main className="main-content">{renderPage()}</main>
      </div>
    </div>
  );
};

export default App;
