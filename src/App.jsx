// Styles
import './assets/scss/App.scss';

// Components
import HeroBanner from './components/home/HeroBanner';
import ProposalBanner from './components/home/ProposalBanner';
import ServiceLinks from './components/home/ServiceLinks';
import VideoSection from './components/home/VideoSection';

function App() {
    return (
        <div className="App">
            <main>
                <HeroBanner />
                <VideoSection />
                <ServiceLinks />
                <ProposalBanner />
            </main>
        </div>
    )
}

export default App
