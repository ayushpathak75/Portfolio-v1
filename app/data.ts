import { AirVent } from "lucide-react";
import { BiSolidEnvelope } from "react-icons/bi";

// data.ts
export interface ComponentInfo {
  id: string;
  name: string;
  description: string;
  about?: string;
  builtWith: string[];
  npmPackage: string;
  dependencies?: string[];
  envVariables?: string[];
  codeSnippet: string;
  fullCode: string;
  filename?: string;
  links?: Array<{
    label: string;
    url: string;
  }>;
  props: Array<{
    name: string;
    type: string;
    default?: string;
    description: string;
    required?: boolean;
  }>;
  examples?: Array<{
    title: string;
    code: string;
    description?: string;
    preview?: React.ReactNode;
  }>;
}
export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  type?: string;
  description?: string[];
  skills?: string[];
  isCurrent?: boolean;
};


import {
  SiCsharp,
  SiCss3,
  SiDjango,
  SiDotnet,
  SiGit,
  SiGithub,
  SiGmail,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiNginx,
  SiPython,
  SiWindows,
  SiVisualstudio,
  SiSqlite
} from 'react-icons/si';
import { TbApi } from "react-icons/tb";

export const helpCommand = [
  {
    title: 'bio',
    info: 'Show my bio information',
  },
  {
    title: 'skills',
    info: 'List out all my skills',
  },
  {
    title: 'projects',
    info: 'List out my projects',
  },
  {
    title: 'contact',
    info: 'Show my contact details',
  },
  {
    title: 'exit',
    info: 'Exit the terminal mode',
  },
  {
    title: 'clear',
    info: 'Clear the terminal',
  },
];

export const skillsCommand = [
  { title: 'C#', Icon: SiCsharp, level: 85 },
  { title: '.NET 9', Icon: SiDotnet, level: 85 },
  { title: 'ASP.NET Core', Icon: SiDotnet, level: 85 },
  { title: 'WPF', Icon: SiVisualstudiocode, level: 80 }, // Using VS Code icon as placeholder for WPF if specific icon missing or stick to generic
  { title: 'Java', Icon: SiJavascript, level: 75 }, // Using Java/JS icon family
  { title: 'JavaScript', Icon: SiJavascript, level: 80 },
  { title: 'React', Icon: SiReact, level: 85 },
  { title: 'Spring Boot', Icon: SiReact, level: 70 }, // Placeholder
  { title: 'SQL Server', Icon: SiMicrosoftsqlserver, level: 80 },
  { title: 'SQLite', Icon: SiMysql, level: 75 }, // Placeholder
  { title: 'MySQL', Icon: SiMysql, level: 80 },
  { title: 'Git', Icon: SiGit, level: 80 },
  { title: 'GitHub', Icon: SiGithub, level: 80 },
];

export const projectsCommand = [

  {
    title: "ObserveX Service",
    tech: [SiCsharp, SiDotnet, SiSqlite, SiVisualstudio, "WindowsService"],
    link: "https://github.com/ayushpathak75/ObserveX-Service",
    cover: "/projectOb1.png",
    background: "bg-gray-800",
    description:
      "A lightweight Windows service that monitors system usage — tracks running applications, screenshots, and external storage events. Built in C#.",
  },
  {
    title: "SecurityRat",
    tech: [SiCsharp, SiDotnet, SiWindows, SiVisualstudio],
    link: "https://github.com/ayushpathak75/SecurityRat",
    cover: "/projectSr1.png",
    background: "bg-red-700",
    description: "Security-related utility/tool implemented in C#.",
  },

  // {
  //   title: "Career Ai chat ",
  //   tech: [SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql],
  //   link: "https://career-chat-ai-beta.vercel.app/",
  //   cover: "/Career-Ai-Chat.png",
  //   background: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
  //   description:
  //     "Career Chat AI Beta is an AI-powered career assistant that acts like your personal co-pilot — it offers tailored career advice, helps you prepare for interviews, and lets you explore new professional opportunities in a conversational way.",
  // },
  // {
  //   title: "BlackWilbur",
  //   tech: [SiReact, SiDjango, SiMysql],
  //   link: "https://www.blackwilbur.com/",
  //   cover: "/blackwilbur.png",
  //   background: "bg-black",
  //   description:
  //     "A full-stack e-commerce platform supporting 500+ daily users. Features include authentication, Django REST APIs, and deployment via VPS with Nginx.",
  // },
  // {
  //   title: "Axoraa Landing Page",
  //   tech: [SiReact, SiTypescript, SiTailwindcss],
  //   link: "https://axoraa.vercel.app/",
  //   cover: "/Axoraa.png",
  //   background: 'bg-[#4D2C5E]',
  //   description:
  //     "A high-converting and responsive landing page built with React (Vite), TypeScript, Tailwind CSS, and GSAP animations. Features smooth micro-interactions and a custom demo booking form integrated with EmailJS, improving engagement and automating 100+ monthly confirmations.",
  // },

  // {
  //   title: "Auto Responder",
  //   tech: [SiCsharp, SiDotnet, SiMicrosoftsqlserver, SiGmail, TbApi],
  //   link: "",
  //   cover: "/default-image.png",
  //   background: "bg-stone-400",
  //   description:
  //     "Developed a robust background service using .NET Worker Services to automate Gmail email processing. The system efficiently handles 10,000+ emails daily, parses and extracts critical information, and securely stores it in SQL Server to streamline customer support workflows",
  // },
  // {
  // title: 'ClientConnect CRM Suite',
  // tech: [SiCsharp, SiDotnet, SiMicrosoftsqlserver],
  // link: '', 
  // cover: '', 
  // background: 'bg-[#1F2937]',
  // description:
  //   'A secure internal CRM platform built using ASP.NET MVC and Web APIs to streamline CSR call reporting. Features included call playback, downloadable call logs, export to Excel/PDF, and comprehensive customer detail views. Optimized for SQL Server-backed performance with role-based access, advanced filtering, and detailed audit trails.',
  // },
  // {
  //   title: "Coffee Shop Website",
  //   tech: [SiReact, SiSass, SiVercel],
  //   link: "https://coffeeshopwebsite.vercel.app/",
  //   cover: "/project-3.png",
  //   background: "bg-amber-700",
  //   description:
  //     "A visually appealing frontend website for a coffee shop built with React and Sass. Fully responsive and deployed on Vercel.",
  // },
  // {
  //   title: "Password Manager",
  //   tech: [SiHtml5, SiJavascript, SiCss3],
  //   link: "https://yuvraj-singh-lodhi.github.io/Password-Manager/",
  //   cover: "/project-4.png",
  //   background: "bg-stone-500",
  //   description:
  //     "A simple and secure password manager using vanilla JavaScript and browser local storage. Built for practicing DOM manipulation and UI design.",
  // },
  // {
  //   title: "Bubble Game",
  //   tech: [SiHtml5, SiJavascript, SiCss3],
  //   link: "https://yuvraj-singh-lodhi.github.io/Bubble_Game/",
  //   cover: "/project-5.png",
  //   background: "bg-indigo-500",
  //   description:
  //     "A fun, interactive web-based bubble pop game built using HTML, CSS, and JavaScript. Great for demonstrating event handling and game loops.",
  // },
  // {
  //   title: "VS Code Extension: React Snippets Suite",
  //   tech: [SiVisualstudiocode, SiTypescript],
  //   link: "https://marketplace.visualstudio.com/items?itemName=YuvrajSinghLodhi.react-snippets-pack",
  //   cover: "/project-6.png",
  //   background: "bg-stone-400",
  //   description:
  //     "A productivity-enhancing VS Code extension that provides React and TypeScript code snippets to speed up development.",
  // },
];

export const contactCommand = [
  {
    title: "Github",
    icon: SiGithub,
    username: "@ayushpathak75",
    link: "https://github.com/ayushpathak75",
  },
  // {
  //   title: "LinkedIn",
  //   icon: SiLinkedin,
  //   username: "@yuvrajsinghlodhi",
  //   link: "https://www.linkedin.com/in/yuvrajsinghlodhi/",
  // },
  {
    title: "Email",
    icon: BiSolidEnvelope,
    username: "ayushpathak1975@gmail.com",
    link: "mailto:ayushpathak1975@gmail.com",
  },
];

export const components: ComponentInfo[] = [
  // {
  //   id: "spotify-player",
  //   name: "SpotifyPlayer",
  //   description: "A fully interactive Spotify playlist player with track preview, controls, and theme support.",
  //   about: "The SpotifyPlayer component is built on top of the Spotify Web API. It provides a fully interactive playlist player with track preview, controls, and theme support. Perfect for embedding Spotify playlists in your React applications.",
  //   builtWith: ["React", "TypeScript", "TailwindCSS", "Spotify API"],
  //   npmPackage: "yuvraj-spotify-player",
  //   dependencies: ["react-copy-to-clipboard", "react-icons", "react-feather"],
  //   envVariables: [
  //     "NEXT_PUBLIC_SPOTIFY_CLIENT_ID",
  //     "NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET", 
  //     "NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID"
  //   ],
  //   filename: "components/spotify-player.tsx",
  //   links: [
  //     {
  //       label: "Spotify Web API",
  //       url: "https://developer.spotify.com/documentation/web-api"
  //     }
  //   ],
  //   codeSnippet: \`import SpotifyPlayer from "yuvraj-spotify-player";

  // <SpotifyPlayer
  //   clientId="YOUR_SPOTIFY_CLIENT_ID"
  //   clientSecret="YOUR_SPOTIFY_CLIENT_SECRET"
  //   playlistId="YOUR_PLAYLIST_ID"
  //   theme="dark"
  // />\`,
  //   fullCode: \`"use client";
  // import React, { useEffect, useState } from "react";
  // import { IoChevronDown, IoChevronUp } from "react-icons/io5";
  // import { SkipBack, SkipForward } from "react-feather";

  // interface Artist {
  //   name: string;
  // }

  // interface Album {
  //   images: { url: string }[];
  // }

  // interface Track {
  //   id: string;
  //   name: string;
  //   artists: Artist[];
  //   album: Album;
  // }

  // interface SpotifyPlayerProps {
  //   clientId: string;
  //   clientSecret: string;
  //   playlistId: string;
  //   theme?: 'light' | 'dark';
  //   centeredPreview?: boolean;
  // }

  // const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({
  //   clientId,
  //   clientSecret,
  //   playlistId,
  //   theme = 'dark',
  //   centeredPreview = false,
  // }) => {
  //   const [tracks, setTracks] = useState<Track[]>([]);
  //   const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  //   const [accessToken, setAccessToken] = useState<string>("");
  //   const [collapsed, setCollapsed] = useState<boolean>(false);

  //   const themeStyles = {
  //     container: theme === 'dark'
  //       ? 'bg-neutral-900/95 text-white border-white/10'
  //       : 'bg-white/95 text-gray-900 border-gray-200',
  //     header: theme === 'dark' ? 'border-white/10' : 'border-gray-200',
  //     button: theme === 'dark' ? 'text-white hover:text-green-400' : 'text-gray-700 hover:text-green-600',
  //     loadingText: theme === 'dark' ? 'text-gray-400' : 'text-gray-500',
  //     trackItem: theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-gray-100',
  //     trackItemActive: theme === 'dark' ? 'bg-white/10' : 'bg-gray-100',
  //     artistText: theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
  //     embedContainer: theme === 'dark' ? 'bg-neutral-800 border-white/10' : 'bg-gray-50 border-gray-200',
  //     controls: theme === 'dark' ? 'border-white/10 bg-neutral-900/80' : 'border-gray-200 bg-white/80',
  //     controlButton: theme === 'dark' ? 'bg-white/10 hover:bg-green-500/20 text-white' : 'bg-green-500 hover:bg-green-600 text-white',
  //   };

  //   useEffect(() => {
  //     const fetchAccessToken = async () => {
  //       try {
  //         const authParams = new URLSearchParams();
  //         authParams.append("grant_type", "client_credentials");
  //         authParams.append("client_id", clientId);
  //         authParams.append("client_secret", clientSecret);

  //         const response = await fetch("https://accounts.spotify.com/api/token", {
  //           method: "POST",
  //           headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //           body: authParams.toString(),
  //         });

  //         const data = await response.json();
  //         if (data.access_token) setAccessToken(data.access_token);
  //         else console.error("Failed to fetch access token", data);
  //       } catch (error) {
  //         console.error("Error getting access token:", error);
  //       }
  //     };

  //     if (clientId && clientSecret) fetchAccessToken();
  //   }, [clientId, clientSecret]);

  //   useEffect(() => {
  //     const fetchTracks = async () => {
  //       if (!accessToken || !playlistId) return;

  //       try {
  //         const response = await fetch(
  //           \\\`https://api.spotify.com/v1/playlists/\\\${playlistId}/tracks\\\`,
  //           { headers: { Authorization: \\\`Bearer \\\${accessToken}\\\` } }
  //         );

  //         const data = await response.json();
  //         const fetchedTracks: Track[] = data.items.map((item: { track: Track }) => item.track);
  //         setTracks(fetchedTracks);
  //         setCurrentTrackIndex(0);
  //       } catch (error) {
  //         console.error("Spotify error:", error);
  //       }
  //     };

  //     fetchTracks();
  //   }, [accessToken, playlistId]);

  //   const handlePrev = () => setCurrentTrackIndex(prev => prev === 0 ? tracks.length - 1 : prev - 1);
  //   const handleNext = () => setCurrentTrackIndex(prev => prev === tracks.length - 1 ? 0 : prev + 1);

  //   const currentTrack = tracks[currentTrackIndex];

  //   return (
  //     <div className={\\\`\\\${centeredPreview ? "relative mx-auto my-5 w-full max-w-md" : "fixed bottom-2 left-2 right-2 sm:right-4 sm:left-auto w-full sm:max-w-sm z-50"} \\\${themeStyles.container} rounded-2xl shadow-xl backdrop-blur-md overflow-hidden border\\\`}>
  //       <div className={\\\`flex justify-between items-center px-4 py-3 border-b \\\${themeStyles.header}\\\`}>
  //         <h2 className="text-sm font-semibold tracking-wide">Now Playing</h2>
  //         <button onClick={() => setCollapsed(!collapsed)} className={\\\`p-1 rounded-lg \\\${themeStyles.button} transition-colors duration-200\\\`}>
  //           {collapsed ? <IoChevronUp size={18} /> : <IoChevronDown size={18} />}
  //         </button>
  //       </div>

  //       {!collapsed && (
  //         <div className="px-3 py-2 space-y-2">
  //           {tracks.length === 0 ? (
  //             <p className={\\\`text-xs text-center \\\${themeStyles.loadingText}\\\`}>Loading...</p>
  //           ) : (
  //             <div className="max-h-52 overflow-y-auto pr-1 custom-scrollbar">
  //               {tracks.map((track, index) => (
  //                 <div key={track.id} onClick={() => setCurrentTrackIndex(index)}
  //                   className={\\\`flex justify-between items-center gap-3 px-2 py-2 rounded-lg cursor-pointer \\\${themeStyles.trackItem} transition text-xs \\\${currentTrack?.id === track.id ? themeStyles.trackItemActive : ""}\\\`}>
  //                   <div className="flex-1 min-w-0">
  //                     <p className="font-medium truncate">{track.name}</p>
  //                     <p className={\\\`\\\${themeStyles.artistText} truncate\\\`}>{track.artists[0]?.name}</p>
  //                   </div>
  //                   {track.album.images[2] && <img src={track.album.images[2].url} alt="cover" className="w-10 h-10 rounded-lg object-cover shrink-0" />}
  //                 </div>
  //               ))}
  //             </div>
  //           )}
  //         </div>
  //       )}

  //       {currentTrack && (
  //         <div className={\\\`border-t \\\${themeStyles.header} \\\${themeStyles.embedContainer}\\\`}>
  //           <div className={\\\`rounded-xl overflow-hidden shadow-inner border \\\${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}\\\`}>
  //             <iframe
  //               src={\\\`https://open.spotify.com/embed/track/\\\${currentTrack.id}?utm_source=generator&theme=\\\${theme === 'light' ? '0' : '1'}\\\`}
  //               width="100%" height="80"
  //               allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  //               loading="lazy"
  //               className="rounded-none"
  //             ></iframe>
  //           </div>
  //           <div className={\\\`flex justify-center items-center gap-4 py-3 border-t \\\${themeStyles.controls}\\\`}>
  //             <button onClick={handlePrev} className={\\\`p-2 rounded-lg \\\${themeStyles.button} transition-colors duration-200\\\`}><SkipBack size={16} /></button>
  //             <button onClick={handleNext} className={\\\`p-2 rounded-lg \\\${themeStyles.button} transition-colors duration-200\\\`}><SkipForward size={16} /></button>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  // export default SpotifyPlayer;
  // export type { SpotifyPlayerProps };\`,
  //   props: [
  //     { name: "clientId", type: "string", description: "Your Spotify Client ID", required: true },
  //     { name: "clientSecret", type: "string", description: "Your Spotify Client Secret", required: true },
  //     { name: "playlistId", type: "string", description: "Spotify Playlist ID to display", required: true },
  //     { name: "theme", type: "'light' | 'dark'", default: "'dark'", description: "Theme variant for the player" },
  //     { name: "centeredPreview", type: "boolean", default: "false", description: "Whether to center the player for preview" }
  //   ],
  //   examples: [
  //     { title: "Basic Usage", code: \`<SpotifyPlayer clientId="YOUR_CLIENT_ID" clientSecret="YOUR_CLIENT_SECRET" playlistId="YOUR_PLAYLIST_ID" theme="dark" />\`, description: "Basic implementation with dark theme" },
  //     { title: "Light Theme", code: \`<SpotifyPlayer clientId="YOUR_CLIENT_ID" clientSecret="YOUR_CLIENT_SECRET" playlistId="YOUR_PLAYLIST_ID" theme="light" />\`, description: "Light theme variant" }
  //   ]
  // },
];

export const experiences: ExperienceItem[] = [
  {
    id: "1",
    company: "Sumati.io",
    role: "Junior Software Developer",
    period: "Feb 2025 – Present",
    type: "Full-time",
    description: [
      "Designed and developed enterprise-grade applications using .NET , C#, ASP.NET, WPF, VSTO and Background Services.",
      "Contributed to a security software solution that blocks unauthorized applications, websites, and storage devices (USB/Pendrives) at the OS level.",
      "Built modules integrating OpenCV and VLCSharp in WPF for video processing, and implemented SQLite for local data storage.",
      "Worked on FIX Server and Client implementations for financial systems, ensuring reliable and secure communication.",
      "Built and deployed REST APIs, Websocket and console applications for backend processing and integration tasks.",
      "Collaborated with cross-functional teams to enhance application performance, security, and scalability."
    ],
    skills: [".NET", "C#", "ASP.NET", "WPF", "VSTO", "Worker Services", "SQLite", "FIX Protocol", "REST APIs", "OpenCV"],
    isCurrent: true,
  }
];
