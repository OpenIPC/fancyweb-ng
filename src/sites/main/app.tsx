import Header from '../../components/widgets/header';
import HeaderMenu from '../../components/widgets/header-menu';
import Footer from '../../components/widgets/footer/footer';
import Introduction from './pages/introduction';
import SupportOpenSource from './pages/support-open-source';
import SupportedHardware from './pages/supported-hardware/supported-hardware';
import InstallationGuide from './pages/installation-guide';
import OurTeam from './pages/about/our-team/';
import OurProjects from './pages/about/our-projects';
import OurSoftware from './pages/about/our-software';
import GreenLife from './pages/about/green-life';
import OurGroups from './pages/about/our-groups';
import WebInterface from './pages/about/web-interface';
import MajesticEndpoints from './pages/about/majestic-endpoints';
import OpenWall from './pages/open-wall';
import QRCode from './pages/tools/qr-code';
import HighResolutionTimer from './pages/tools/high-resolution-timer';
import FirmwarePartitionCalculator from './pages/tools/fw-part-calc/Fw-part-calc';
import DonateBanner from '../../components/widgets/donate-banner/donate-banner';
import {LocationProvider, ErrorBoundary, Router, Route} from 'preact-iso';
import { MENU_ITEMS } from '../../components/widgets/header-menu/constants';

export function App () {
  return (
    <>
      <LocationProvider>
        <Header>
          <HeaderMenu menuItems={MENU_ITEMS} />
        </Header>
        <main className="mx-4 flex flex-auto flex-col items-center justify-start">
          <div className="w-full max-w-[1240px]">
            <ErrorBoundary>
              <Router>
                <Route path="/" component={Introduction} />
                <Route path="/introduction" component={Introduction} />
                <Route
                  path="/support-open-source"
                  component={SupportOpenSource}
                />
                <Route
                  path="/supported-hardware"
                  component={SupportedHardware}
                />
                <Route
                  path="/supported-hardware/:vendor/:model"
                  component={InstallationGuide}
                />
                <Route path="/our-team" component={OurTeam} />
                <Route path="/our-projects" component={OurProjects} />
                <Route path="/our-software" component={OurSoftware} />
                <Route path="/green-life" component={GreenLife} />
                <Route path="/our-telegram" component={OurGroups} />
                <Route path="/web-interface" component={WebInterface} />
                <Route
                  path="/majestic-endpoints"
                  component={MajesticEndpoints}
                />
                <Route path="/open-wall" component={OpenWall} />
                <Route path="/tools/qr-code-generator" component={QRCode} />
                <Route
                  path="/tools/high-resolution-timer"
                  component={HighResolutionTimer}
                />
                <Route
                  path="/tools/firmware-partition-calculator"
                  component={FirmwarePartitionCalculator}
                />
              </Router>
            </ErrorBoundary>
        </div>
          <div className="mt-auto w-full max-w-[1240px] pt-12 pb-4">
            <DonateBanner size="big" />
          </div>
        </main>
        <Footer/>
      </LocationProvider>
    </>
      );
      }
