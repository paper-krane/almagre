// Libraries
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

// Styles
import '../../assets/scss/HeroBanner.scss';

export default function HeroBanner() {
    const gallerSection = useRef(null);
    const galleryEl = useRef(null);

    useEffect(() => {
        const gallery = gsap.to(galleryEl.current, {
            duration: 100,
            ease: "none",
            x: `-50%`,
            repeat: -1,
        });
    
        ScrollTrigger.create({
            trigger: gallerSection.current,
            start: "top top",
            end: "bottom top",
            onUpdate(self) {
                const velocity = self.getVelocity();
                if (velocity < 0) return;
                const timeScale = 3 + (velocity / 50);
                gsap.timeline()
                    .to(gallery, { duration: 0.25, timeScale })
                    .to(gallery, { duration: .5, timeScale: 1 });
            }
        });
    }, [])

    return (
        <section id="almagre__hero-section" ref={gallerSection}>
            <div id="almagre__hero-content">
                <div className="almagre__container">
                    <div id="almagre__hero-logo">
                        <img src="/src/assets/images/logo.png" alt="Almagre logo" />
                    </div>
                    <h3 className="almagre__heading-accent">Almagre Venue And Bar</h3>
                    <h1>Creating <em>Unforgettable</em> <br />Weddings, Special Events <br /><em>and</em> Memories...</h1>
                </div>
            </div>
            <div id="almagre__gallery" ref={galleryEl}>
                <div className="almagre__gallery-item">
                    <figure>
                        <img src="/src/assets/images/hero-2.jpg" alt="Placeholder 1" />
                    </figure>
                </div>
                <div className="almagre__gallery-item large">
                    <figure>
                        <img src="/src/assets/images/hero-1.jpg" alt="Placeholder 2" />
                    </figure>
                </div>
                <div className="almagre__gallery-item">
                    <figure>
                        <img src="/src/assets/images/hero-3.jpg" alt="Placeholder 3" />
                    </figure>
                </div>
                <div className="almagre__gallery-item">
                    <figure>
                        <img src="/src/assets/images/hero-4.jpg" alt="Placeholder 4" />
                    </figure>
                </div>
                <div className="almagre__gallery-item">
                    <figure>
                        <img src="/src/assets/images/hero-2.jpg" alt="Placeholder 1" />
                    </figure>
                </div>
                <div className="almagre__gallery-item large">
                    <figure>
                        <img src="/src/assets/images/hero-1.jpg" alt="Placeholder 2" />
                    </figure>
                </div>
                <div className="almagre__gallery-item">
                    <figure>
                        <img src="/src/assets/images/hero-3.jpg" alt="Placeholder 3" />
                    </figure>
                </div>
                <div className="almagre__gallery-item">
                    <figure>
                        <img src="/src/assets/images/hero-4.jpg" alt="Placeholder 4" />
                    </figure>
                </div>
            </div>
        </section>
    )
}