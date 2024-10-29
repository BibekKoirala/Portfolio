import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaCode, FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact, FaRobot } from "react-icons/fa";
import { IoGitNetwork, IoHardwareChip, IoLogoFirebase } from "react-icons/io5";
import { PiGraphDuotone } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { SiFlask, SiJsonwebtokens, SiMongodb, SiMui, SiMysql, SiPytorch, SiRedux, SiScikitlearn, SiSocketdotio, SiTailwindcss } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";

export const badgesComponents = {
    "JavaScript": <FaJs size={20} />,
    "ReactJS": <FaReact size={20} />,
    "NextJS": <RiNextjsFill size={20} />,
    "Node.js": <FaNodeJs size={20} />,
    "Express": <FaCode size={20} />,
    "MongoDB": <SiMongodb size={20} />,
    "Python": <FaPython size={20} />,
    "Machine Learning": <FaRobot size={20} />,
    "Hugging Face": <FaRobot size={20} />,
    "LLMs": <FaRobot size={20} />,
    "AI": <FaRobot size={20} />,
    "CSS": <FaCss3Alt size={20} />,
    "HTML": <FaHtml5 size={20} />,
    "MYSQL": <SiMysql size={20} />,
    "DSA": <PiGraphDuotone size={20} />,
    "NeuralNetwork": <IoGitNetwork size={20} />,
    "C++": <BiLogoCPlusPlus size={20} />,
    "Hardware": <IoHardwareChip size={20} />,
    "Redux": <SiRedux size={20} />,
    "MUI": <SiMui size={20} />,
    "SKLearn": <SiScikitlearn size={20} />,
    "WebSockets": <SiSocketdotio size={20} />,
    'OAuth': <TbBrandOauth size={20} />,
    'Firebase': <IoLogoFirebase size={20} />,
    'Tailwind': <SiTailwindcss size={20} />,
    'JWT': <SiJsonwebtokens size={20} />,
    'Flask': <SiFlask size={20} />,
    'Torch': <SiPytorch size={20} />,
}