import React from 'react';
import { FloatingDock } from "@/Components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

const Home = () => {
    const links = [
        {
            title: "Home",
            icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "/home",
        },
        {
            title: "Qualification",
            icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "/qualifications",
        },
        {
            title: "Projects",
            icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "/projects",
        },
        {
            title: "Experience",
            icon: (
                <Image
                    src="https://assets.aceternity.com/logo-dark.png"
                    width={20}
                    height={20}
                    alt="Aceternity Logo"
                />
            ),
            href: "/experience",
        },
        {
            title: "Location",
            icon: <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "/location",
        },
        {
            title: "Skills",
            icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "/skills",
        },
        {
            title: "Journey",
            icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "/journey",
        },
    ];

    return (
        <div className="flex flex-row items-center justify-center h-[35rem] w-full">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links.map(link => ({
                    ...link,
                    ariaLabel: link.title // Add aria-label for accessibility
                }))}
            />
        </div>
    );
};

export default Home;
