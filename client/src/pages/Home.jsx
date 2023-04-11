import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from "../config/motion";

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home" {...slideAnimation("left")}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src="./logo.png"
                            alt="logo"
                            className="w-8 h-8 object-contain border border-white rounded-sm"
                        />
                    </motion.header>

                    <motion.div
                        className="home-content"
                        {...headContainerAnimation}
                    >
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">Point Blanks </h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className="flex flex-col gap-5"
                        >
                            <p className="max-w-md font-normal text-gray-500 text-base uppercase">
                                Create a unique shirt with our 3D customization
                                tool.{" "} Or, learn more about: 
                                <a
                                    className="text-white hover:text-blue-500"
                                    href="https://pointblanks.xyz"
                                    target="_blank"
                                >
                                    {" < "}PointBlanks{" />"}.
                                </a>
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize"
                                handleClick={() => (state.intro = false)}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
};

export default Home;
