import { motion } from "framer-motion";
import InsighfulData from '../../components/InsighfulData/InsighfulData';
import SubFeature from '../../components/SubFeature/SubFeature';
import CoreFeature from '../../components/CoreFeature/CoreFeature';
import JoinEvent from '../../components/JoinEvent/JoinEvent';

const Features = () => {
    return (
        <div className='bg-gradient-to-br from-[#153042] to-[#051622] min-h-screen w-full flex flex-col'>

            {/* Title Section */}
            <motion.div
                className="flex mt-10 flex-col items-center"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-sky-300 text-8xl font-bold font-poppins">
                    FEATURES
                </h1>
                <p className="text-white text-lg max-w-xl text-center mt-4">
                    Gamingpe streamlines global payments with a single API, offering secure, scalable solutions to enhance transactions and drive business growth.
                </p>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className='mt-20 px-30 flex justify-center'
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src='/assets/featuresHero_image-DGygAdWy.webp'
                    className='max-w-5xl h-[500px] rounded-2xl'
                    alt="Features Hero"
                />
            </motion.div>

            <div className='h-20'></div>

            {/* Feature Sections */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <InsighfulData />
                <SubFeature />
                <CoreFeature />
                <JoinEvent />
            </motion.div>

            {/* Footer Section */}
            <div className='h-10 bg-[#051622]'></div>
            <div className="h-[1px] bg-black shadow-[0_5px_5px_rgba(0,0,0,0.5)]"></div>
            <div className="flex flex-col bg-[#051622] items-center justify-center text-center">
                <img
                    src="/assets/logo-CI6Py0Md.svg"
                    alt="GamingPE Logo"
                    className="h-20 w-60"
                />
                <p className="text-white mb-10">
                    Copyright © 2025 GamingPE. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

export default Features;
