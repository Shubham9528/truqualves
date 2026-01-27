import { ShieldCheckIcon, FileCheckIcon, ServerIcon, BookOpenIcon, DatabaseIcon, ActivityIcon } from "lucide-react";
import type { IFeature } from "../../types";

export const features: IFeature[] = [
    {
        title: "Computer System Validation",
        description:
            "End-to-end validation for GxP computerized systems with GAMP 5 compliance, validation plans, and traceability matrices.",
        icon: ShieldCheckIcon,
        cardBg: "bg-teal-100",
        iconBg: "bg-teal-500"
    },
    {
        title: "Infrastructure Qualification",
        description:
            "Complete IQ/OQ/PQ qualification for IT infrastructure including servers, networks, and cloud environments (AWS, Azure).",
        icon: ServerIcon,
        cardBg: "bg-blue-100",
        iconBg: "bg-blue-500"
    },
    {
        title: "Risk Assessment & Management",
        description:
            "Comprehensive FMEA and GxP risk assessments to identify and mitigate compliance risks early in the lifecycle.",
        icon: FileCheckIcon,
        cardBg: "bg-purple-100",
        iconBg: "bg-purple-500"
    },
    {
        title: "SOP Development",
        description:
            "Expert drafting and optimization of Standard Operating Procedures ensuring clarity, compliance, and operational efficiency.",
        icon: BookOpenIcon,

        cardBg: "bg-orange-100",
        iconBg: "bg-orange-500"
    },
    {
        title: "Data Integrity Audits",
        description:
            "Thorough audits of data governance frameworks ensuring ALCOA+ principles are met across all digital systems.",
        icon: DatabaseIcon,
        cardBg: "bg-green-100",
        iconBg: "bg-green-500"
    },
    {
        title: "Periodic Review & Maintenance",
        description:
            "Scheduled reviews of validated systems with lifecycle management, change control, and maintenance support.",
        icon: ActivityIcon,
        cardBg: "bg-pink-100",
        iconBg: "bg-pink-500",
    },
]