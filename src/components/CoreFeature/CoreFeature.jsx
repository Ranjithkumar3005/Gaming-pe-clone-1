import { motion } from "framer-motion";

function CoreFeature() {


    return (
        <div className="min-h-screen bg-[#051622] text-white py-16 px-30">
            {/* Title Section */}
            <div className="text-center mb-16">
                <h1 className="text-6xl font-bold mb-6">
                    <span className="text-[#a8e6cf]">CORE</span> FEATURES
                </h1>
                <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                    Experience hassle-free gaming with transparent pricing, swift delivery, and secure
                    transactions, backed by 24/7 support and a money-back guarantee.
                </p>
            </div>

            {/* Features Grid */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-15 relative">
                {/* Left Column Features */}
                <div className="space-y-8">
                    <div className="hover:bg-[#112240] p-4 rounded-xl bg-[#1e3050] border-1 border-sky-200/50 transition-colors">
                        <h3 className="text-xl font-bold mb-3">Zero Hidden Cost</h3>
                        <p className="text-white">
                            Transparent pricing with no unexpected fees, ensuring you know exactly what you're
                            paying for.
                        </p>
                    </div>
                    <div className="hover:bg-[#112240] p-4 rounded-xl bg-[#1e3050] border-1 border-sky-200/50 transition-colors">
                        <h3 className="text-xl font-bold mb-3">24/7 Customer Support</h3>
                        <p className="text-white">
                            Round-the-clock assistance to help resolve any issues or questions promptly and
                            efficiently.
                        </p>
                    </div>
                    <div className="hover:bg-[#112240] p-4 rounded-xl bg-[#1e3050] border-1 border-sky-200/50 transition-colors">
                        <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                        <p className="text-white">
                            Swift processing and delivery of orders, so you can start gaming with zero delay.
                        </p>
                    </div>
                </div>

                {/* Center Phone Mockup */}
                <div className="flex justify-center items-center">
                    <div className="absolute top-[2%] left-[20%] lg:w-140 lg:h-140 bg-gradient-to-b from-sky-500 to-[#051622] rounded-full opacity-20"></div>
                    <div className="relative w-[300px] h-[600px]">
                        <motion.div
                            className="relative flex flex-col items-center"
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            <img
                                src="/assets/coreFeatures-D86QESEV.webp"
                                alt="Phone"
                                className="relative z-10 lg:w-[450px] lg:h-[550px] md:w-[300px] md:h-[300px] drop-shadow-lg"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Right Column Features */}
                <div className="space-y-8">
                    <div className="hover:bg-[#112240] p-4 rounded-xl bg-[#1e3050] border-1 border-sky-200/50 transition-colors">
                        <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                        <p className="text-white">
                            Rigorous quality checks to ensure you receive the best products and service every
                            time.
                        </p>
                    </div>
                    <div className="hover:bg-[#112240] p-4 rounded-xl bg-[#1e3050] border-1 border-sky-200/50 transition-colors">
                        <h3 className="text-xl font-bold mb-3">Money-Back Guarantee</h3>
                        <p className="text-white">
                            Full refund policy if you're not satisfied with your purchase, providing peace of mind.
                        </p>
                    </div>
                    <div className="hover:bg-[#112240] p-5 rounded-xl bg-[#1e3050] border-1 border-sky-200/50 transition-colors">
                        <h3 className="text-xl font-bold mb-3">Secure Payment</h3>
                        <p className="text-white">
                            Advanced encryption to protect your payment information and enable safe transactions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoreFeature;