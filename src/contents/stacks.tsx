import { BsRobot } from 'react-icons/bs';
import {
  SiAngular,
  SiAntdesign,
  SiCss3,
  SiFirebase,
  SiJasmine,
  SiJavascript,
  SiJest,
  SiMqtt,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiPwa,
  SiReact,
  SiSocketdotio,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiVuedotjs,
  SiPython,
  SiRust,
  SiRedux,
  SiJquery,
  SiNuxtdotjs,
  SiGo,
  SiMongodb,
  SiMysql,
  SiElectron,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  // PHP: <SiPhp size={iconSize} className='text-blue-500' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  Angular: <SiAngular size={iconSize} className='text-red-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  'Material UI': <SiMui size={iconSize} className='text-sky-400' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  Python: <SiPython size={iconSize} className='text-emerald-500' />,
  Mongo: <SiMongodb size={iconSize} className='text-yellow-500' />,
  'Artificial Intelligence': (
    <BsRobot size={iconSize} className='text-rose-500' />
  ),
  'Electron': <SiElectron size={iconSize} className='text-rose-500'></SiElectron>,
  'Vue.js': <SiVuedotjs size={iconSize} className='vue' />,
  'Nuxt.js': <SiNuxtdotjs size={iconSize} className='text-green-400' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  'Nest.js': <SiNestjs size={iconSize} className='nest' />,
  'Ant Design': <SiAntdesign size={iconSize} className='ant' />,
  Webpack: <SiWebpack size={iconSize} className='text-blue-500' />,
  Nginx: <SiNginx size={iconSize} className='text-green-500' />,
  Jest: <SiJest size={iconSize} className='text-red-600' />,
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  Go: <SiGo size={iconSize} />,
  Rust: <SiRust size={iconSize} />,
  Redux: <SiRedux size={iconSize} />,
  jQuery: <SiJquery size={iconSize} className='jquery' />,
  Mysql: <SiMysql size={iconSize} className='mysql' />,
};
