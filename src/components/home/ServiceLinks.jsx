// Libraries
import { useEffect } from 'react';

// Styles
import '../../assets/scss/ServiceLinks.scss';

// Components
import Button from '../utility/Button';

export default function ServiceLinks() {
    // 

    // Hover Function
    const hoverControlHandler = () => {
        const services = document.querySelectorAll('#almagre__services a[data-controls]');

        if (services.length < 1) return;
        
        for (let service of services) {
            service.addEventListener('mouseenter', (e) => {
                const controls = e.target.dataset.controls;
                const slide = document.querySelector(`#almagre__services-slides .almagre__slide[data-slide="${controls}"]`);
                const currentActive = document.querySelector(`#almagre__services-slides .almagre__slide.active`);

                if (slide.classList.contains('active')) return;

                currentActive.classList.remove('active');
                slide.classList.add('active');
            });
        }
    }

    useEffect(() => {
        hoverControlHandler();
    }, []);

    return (
        <section id="almagre__services-container">
            <div id="almagre__services-slides">
            <div className="almagre__slide active" data-slide="TheKindredSuite">
                    <div className="almagre__slide-image">
                        <img src="/images/almagre-colorado-wedding-venue-098.jpg" alt="" />
                    </div>
                    <div className="almagre__slide-image smaller">
                        <img src="/images/almagre-colorado-wedding-venue-099.jpg" alt="" />
                    </div>
                    <div className="almagre__slide-image smallest">
                        <img src="/images/almagre-colorado-wedding-venue-100.jpg" alt="" />
                    </div>
                </div>
                <div className="almagre__slide" data-slide="Reception">
                    <div className="almagre__slide-image">
                        <img src="/images/finished-80.jpg" alt="" />
                    </div>
                    <div className="almagre__slide-image smaller">
                        <img src="/images/finished-89.jpg" alt="" />
                    </div>
                    <div className="almagre__slide-image smallest">
                        <img src="/images/finished-144.jpg" alt="" />
                    </div>
                </div>
                <div className="almagre__slide" data-slide="TheBar">
                    <div className="almagre__slide-image">
                        <img src="/images/almagre-colorado-bar-001.jpg" alt="" />
                    </div>
                    <div className="almagre__slide-image smaller">
                        <img src="/images/almagre-colorado-bar-002.jpg" alt="" />
                    </div>
                    <div className="almagre__slide-image smallest">
                        <img src="/images/almagre-colorado-bar-003.jpg" alt="" />
                    </div>
                </div>
                <div className="almagre__slide" data-slide="KindredRoom">
                    <div className="almagre__slide-image">
                        <img src="/images/finished-108.jpg" alt="" />
                    </div>
                    <div className="almagre__slide-image smaller">
                        <img src="/images/finished-127.jpg" alt="" />
                    </div>
                    <div className="almagre__slide-image smallest">
                        <img src="/images/finished-141.jpg" alt="" />
                    </div>
                </div>
                <div className="almagre__slide" data-slide="Courtyard">
                    <div className="almagre__slide-image">
                        <img src="/images/finished-49.jpg" alt="" />
                    </div>
                    <div className="almagre__slide-image smaller">
                        <img src="/images/finished-63.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div id="almagre__services">
                <h4 className="almagre__heading-accent">The Spaces At Almagre</h4>
                <h2><a href="#" data-controls="TheKindredSuite">The Kindred Suite</a></h2>
                <h2><a href="#" data-controls="Reception">Reception</a></h2>
                <h2><a href="#" data-controls="TheBar">The Bar</a></h2>
                <h2><a href="#" data-controls="KindredRoom">Kindred Room</a></h2>
                <h2><a href="#" data-controls="Courtyard">Courtyard</a></h2>
                <p><em>Have a question about our spaces & services?</em></p>
                <Button type="minimal" href="#">
                    Ask Us Anything
                </Button>
            </div>
        </section>
    )
}