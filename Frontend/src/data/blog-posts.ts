export interface BlogPost {
    id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    image: string;
    category: string[];
    featured?: boolean;
    contentBody?: {
        introduction: string;
        keyTakeaways: string[];
        elaborated: string;
        quote: string;
        conclusion: string;
    };
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Navigating 21 CFR Part 11 Compliance",
        description: "A comprehensive guide to understanding and implementing electronic records and signatures in the pharmaceutical industry to ensure regulatory readiness.",
        author: "Dr. Sarah Mitchell",
        date: "24 Jan 2025",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        category: ["Compliance", "FDA", "Regulation"],
        featured: true,
        contentBody: {
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            keyTakeaways: [
                "Understanding the core principles of the subject matter.",
                "Implementing best practices in your daily workflow.",
                "Analyzing the impact on regulatory compliance.",
                "Preparing for future updates and changes in the industry."
            ],
            elaborated: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            quote: "Quality is not an act, it is a habit. Excellence represents the wise choice of many alternatives - choice, not chance, determines your destiny.",
            conclusion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    },
    {
        id: 2,
        title: "CSV vs. CSA: The Paradigm Shift",
        description: "Exploring the transition from Computer System Validation to Computer Software Assurance and what it means for your business efficiency.",
        author: "James Wilson",
        date: "22 Jan 2025",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        category: ["Validation", "Strategy", "Biotech"],
        featured: true,
        contentBody: {
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            keyTakeaways: [
                "Understanding the core principles of the subject matter.",
                "Implementing best practices in your daily workflow.",
                "Analyzing the impact on regulatory compliance.",
                "Preparing for future updates and changes in the industry."
            ],
            elaborated: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            quote: "Quality is not an act, it is a habit. Excellence represents the wise choice of many alternatives - choice, not chance, determines your destiny.",
            conclusion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    },
    {
        id: 3,
        title: "Mastering Data Integrity (ALCOA+)",
        description: "Essential strategies for maintaining ALCOA+ principles and ensuring data accuracy, consistency, and reliability across your organization.",
        author: "Elena Rodriguez",
        date: "20 Jan 2025",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        category: ["Data", "Quality", "Pharma"],
        featured: true,
        contentBody: {
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            keyTakeaways: [
                "Understanding the core principles of the subject matter.",
                "Implementing best practices in your daily workflow.",
                "Analyzing the impact on regulatory compliance.",
                "Preparing for future updates and changes in the industry."
            ],
            elaborated: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            quote: "Quality is not an act, it is a habit. Excellence represents the wise choice of many alternatives - choice, not chance, determines your destiny.",
            conclusion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    },
    {
        id: 4,
        title: "GAMP 5 2nd Edition: Key Updates",
        description: "Everything you need to know about the latest GAMP 5 guidelines and how they affect your current validation strategy and documentation.",
        author: "Michael Chang",
        date: "18 Jan 2025",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        category: ["GAMP", "Guidelines", "Industry"],
        contentBody: {
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            keyTakeaways: [
                "Understanding the core principles of the subject matter.",
                "Implementing best practices in your daily workflow.",
                "Analyzing the impact on regulatory compliance.",
                "Preparing for future updates and changes in the industry."
            ],
            elaborated: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            quote: "Quality is not an act, it is a habit. Excellence represents the wise choice of many alternatives - choice, not chance, determines your destiny.",
            conclusion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    },
    {
        id: 5,
        title: "Preparing for Regulatory Audits",
        description: "Expert tips on how to prepare your team, documentation, and facilities for successful FDA, EMA, and other regulatory audits.",
        author: "Sarah Jenkins",
        date: "15 Jan 2025",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
        category: ["Audit", "Compliance", "Leadership"],
        contentBody: {
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            keyTakeaways: [
                "Understanding the core principles of the subject matter.",
                "Implementing best practices in your daily workflow.",
                "Analyzing the impact on regulatory compliance.",
                "Preparing for future updates and changes in the industry."
            ],
            elaborated: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            quote: "Quality is not an act, it is a habit. Excellence represents the wise choice of many alternatives - choice, not chance, determines your destiny.",
            conclusion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    },
    {
        id: 6,
        title: "Cloud Validation Best Practices",
        description: "Overcoming the challenges of validating cloud-based systems (SaaS, PaaS, IaaS) in a strictly regulated life sciences environment.",
        author: "David Chen",
        date: "12 Jan 2025",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
        category: ["Cloud", "Technology", "SaaS"],
        contentBody: {
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            keyTakeaways: [
                "Understanding the core principles of the subject matter.",
                "Implementing best practices in your daily workflow.",
                "Analyzing the impact on regulatory compliance.",
                "Preparing for future updates and changes in the industry."
            ],
            elaborated: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            quote: "Quality is not an act, it is a habit. Excellence represents the wise choice of many alternatives - choice, not chance, determines your destiny.",
            conclusion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    },
    {
        id: 7,
        title: "Automation in Validation Processes",
        description: "Leveraging automated testing tools to streamline validation efforts, reduce human error, and accelerate project timelines.",
        author: "Emily Thompson",
        date: "10 Jan 2025",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        category: ["Automation", "Efficiency", "Tools"],
        contentBody: {
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            keyTakeaways: [
                "Understanding the core principles of the subject matter.",
                "Implementing best practices in your daily workflow.",
                "Analyzing the impact on regulatory compliance.",
                "Preparing for future updates and changes in the industry."
            ],
            elaborated: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            quote: "Quality is not an act, it is a habit. Excellence represents the wise choice of many alternatives - choice, not chance, determines your destiny.",
            conclusion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    },
    {
        id: 8,
        title: "The Role of AI in Life Sciences",
        description: "How Artificial Intelligence is transforming drug discovery and manufacturing, and the regulatory validation challenges it presents.",
        author: "Robert Fox",
        date: "08 Jan 2025",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
        category: ["AI", "Innovation", "Research"],
        contentBody: {
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            keyTakeaways: [
                "Understanding the core principles of the subject matter.",
                "Implementing best practices in your daily workflow.",
                "Analyzing the impact on regulatory compliance.",
                "Preparing for future updates and changes in the industry."
            ],
            elaborated: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            quote: "Quality is not an act, it is a habit. Excellence represents the wise choice of many alternatives - choice, not chance, determines your destiny.",
            conclusion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    },
    {
        id: 9,
        title: "Continuous Compliance Strategies",
        description: "Building a culture of quality that ensures compliance is not just a periodic checklist, but an ongoing mindset within the company.",
        author: "Lisa Patel",
        date: "05 Jan 2025",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        category: ["Culture", "Quality", "Strategy"],
        contentBody: {
            introduction: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            keyTakeaways: [
                "Understanding the core principles of the subject matter.",
                "Implementing best practices in your daily workflow.",
                "Analyzing the impact on regulatory compliance.",
                "Preparing for future updates and changes in the industry."
            ],
            elaborated: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            quote: "Quality is not an act, it is a habit. Excellence represents the wise choice of many alternatives - choice, not chance, determines your destiny.",
            conclusion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    }
];
