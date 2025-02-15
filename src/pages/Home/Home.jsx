import { useRef, useEffect, useState } from 'react';
import FraudProtection from '../../components/Fraud/FraudProtection';
import Scrolling from '../../components/Scrolling/Scrolling';
import PaymentGateway from '../../components/PaymentGateway/PaymentGateway';
import InsighfulData from '../../components/InsighfulData/InsighfulData';
import SubFeature from '../../components/SubFeature/SubFeature';

function Home() {
    const videoRef = useRef(null);
    const [rotatedCards, setRotatedCards] = useState(new Set());

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll('.fraud-card').forEach((card) => {
                const rect = card.getBoundingClientRect();
                const cardId = card.getAttribute('data-id');

                if (rect.top < window.innerHeight * 0.75 && !rotatedCards.has(cardId)) {
                    setRotatedCards((prev) => new Set([...prev, cardId])); // Ensure state updates correctly
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [rotatedCards]);


    return (
        <div className="bg-[#051622] relative w-full overflow-hidden">
            {/* Background Video */}
            <video ref={videoRef} className="absolute inset-0 w-full object-cover" muted playsInline autoPlay >
                <source src="/videos/homeMap-DIlrE9fC.mp4" type="video/mp4" />
            </video>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-10 py-15">
                {/* Hero Section */}
                <div className="text-white max-w-3xl">
                    <h1 className="text-4xl mb-6">Global<br />Payment Gateway<br />for Developing Markets</h1>
                    <p className="text-xl font-semibold">Unlocking New Horizons For International<br />Growth</p>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-2 gap-8  px-12">
                    <div className="bg-white/5 hover:bg-[#051622]/50 backdrop-blur-lg p-10 rounded-2xl border border-white/20">
                        <br />
                        <div className="text-4xl font-bold text-white mb-4">About</div>
                        <p className="text-gray-200 text-[16px] pr-10">
                            Gamingpe, founded in 2014, specializes in state-of-the-art payment processing and gateway technology. With expertise in payment solutions, risk management, and AI-driven innovations, we empower merchants to streamline operations and safeguard revenue. Our mission is to revolutionize payment experiences and enable global reach for businesses.
                        </p>
                        <br />
                        <button className="border-3 border-[#00A6FB] bg-[#051622] text-white px-10 py-3 rounded-full text-[16px] cursor-pointer hover:bg-[#00A6FB] transition-colors duration-200">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white/5 hover:bg-[#051622]/50 backdrop-blur-lg p-18 rounded-2xl border border-white/20">
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-bold text-white mb-4">50M+</div>
                                <p className="text-gray-200 text-[16px]">Over 50 million transactions processed with the highest success rate.</p>
                            </div>

                            <div className="border-l border-white pl-8">
                                <div className="text-4xl font-bold text-white mb-4">30+</div>
                                <p className="text-gray-200 text-[16px]">Available in over 30 languages to cater to a global audience.</p>
                            </div>
                        </div>
                        <br /><br />
                        <div className="text-[16px]">⭐⭐⭐⭐⭐</div>
                        <p className="text-gray-200 text-[16px]">We are supported with over 30+ languages</p>
                    </div>
                </div>
            </div>
            {/* Fraud Protection Section */}
            <FraudProtection></FraudProtection>
            <Scrolling></Scrolling>
            <PaymentGateway></PaymentGateway>
            <InsighfulData></InsighfulData>
            <SubFeature></SubFeature>

        </div>
    );
}

export default Home;
