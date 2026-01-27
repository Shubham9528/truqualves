import type { IPricingPlan } from "../../types";
import { FileCheckIcon, ShieldCheckIcon, BuildingIcon } from "lucide-react";

export const pricing: IPricingPlan[] = [
    {
        icon: FileCheckIcon,
        name: "Starter Package",
        description: "Perfect for small validation projects and initial assessments.",
        price: 5000,
        linkText: "Get Started",
        linkUrl: "#contact",
        features: [
            "Single system validation",
            "Risk assessment (FMEA)",
            "Basic documentation package",
            "Email support",
            "2-week delivery",
        ],
    },
    {
        icon: ShieldCheckIcon,
        name: "Professional",
        type: "popular",
        description: "Comprehensive validation for growing organizations.",
        price: 15000,
        linkText: "Contact Us",
        linkUrl: "#contact",
        features: [
            "Up to 5 system validations",
            "Infrastructure qualification (IQ/OQ/PQ)",
            "Complete validation master plan",
            "SOP development & review",
            "Priority support",
        ],
    },
    {
        icon: BuildingIcon,
        name: "Enterprise",
        type: "enterprise",
        description: "Full-scale validation programs for large organizations.",
        price: 0,
        linkText: "Contact Sales",
        linkUrl: "#contact",
        features: [
            "System validations",
            "Dedicated validation team",
            "Ongoing compliance",
            "Priority support",
            "24/7 dedicated account manager",
        ],
    },
];