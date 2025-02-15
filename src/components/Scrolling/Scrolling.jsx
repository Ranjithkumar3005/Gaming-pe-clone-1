import { motion } from "framer-motion";
const Scrolling = () => {
    const images = [
        "/assets/paymentmethods2-CH6A_cmo.svg",
        "/assets/download.svg",
        "/assets/paymentmethods3-BG-ta1Ms.svg",
        "/assets/paymentmethods4-DUdOYnni.svg",
        "/assets/paymentmethods5-DHDmbJFk.svg",
    ];
    return (
        <div className='px-30'>
            <div className="w-full overflow-hidden relative">
                <div className="w-full h-[1px] bg-green-400/50 mb-2"></div>
                <div className="flex w-max">
                    {/* Two motion divs for seamless transition */}
                    {[0, 1].map((i) => (
                        <motion.div
                            key={i}
                            className="flex space-x-4"
                            initial={{ x: "0%" }}
                            animate={{ x: "-100%" }}
                            transition={{
                                repeat: Infinity,
                                duration: 20,
                                ease: "linear",
                            }}
                        >
                            {images.map((src, index) => (
                                <img key={index} src={src} alt={`Image ${index + 1}`} className="w-30 h-30 mr-30 rounded-lg shadow-md" />
                            ))}
                        </motion.div>
                    ))}
                </div>
                <div className="w-full h-[1px] bg-green-400/50 mb-2"></div>

            </div>
        </div>
    )
}

export default Scrolling