import InsighfulData from '../../components/InsighfulData/InsighfulData';
import SubFeature from '../../components/SubFeature/SubFeature';
import CoreFeature from '../../components/CoreFeature/CoreFeature';
import JoinEvent from '../../components/JoinEvent/JoinEvent';

const Features = () => {
    return (
        <div className='bg-gradient-to-tr from-[#153042] to-[#051622] min-h-screen w-full flex flex-col '>
            <div className="flex mt-10 flex-col items-center">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-sky-300 text-8xl font-bold font-poppins">
                    FEATURES
                </h1>
                <p className="text-white text-lg max-w-xl text-center mt-4">
                    Gamingpe streamlines global payments with a single API, offering secure, scalable solutions to enhance transactions and drive business growth.
                </p>
            </div>

            {/* Image Section */}
            <div className=' mt-20 px-30 flex justify-center'>
                <img
                    src='src/assets/featuresHero_image-DGygAdWy.webp'
                    className='max-w-full h-[500px] rounded-2xl'
                    alt="Features Hero"
                />
            </div>
            <div className='h-20'></div>
            <InsighfulData></InsighfulData>
            <SubFeature></SubFeature>
            <CoreFeature></CoreFeature>

            <JoinEvent ></JoinEvent>
            <div className='h-10 bg-[#051622]'></div>
            <div className="h-[1px] bg-black shadow-[0_5px_5px_rgba(0,0,0,0.5)]"></div>
            <div className="flex flex-col bg-[#051622] items-center justify-center text-center">
                <img
                    src="src\\assets\\logo-CI6Py0Md.svg"
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
