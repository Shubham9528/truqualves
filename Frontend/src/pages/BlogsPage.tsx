import AnimatedContent from "../components/animated-content";
// import SectionTitle from "../components/section-title";
import { BookOpenIcon, CalendarIcon, ClockIcon, ArrowRightIcon, TagIcon } from "lucide-react";

// Sample blog data - replace with actual data from API or CMS
const blogPosts = [
    {
        id: 1,
        title: "Understanding 21 CFR Part 11 Compliance in 2024",
        excerpt: "A comprehensive guide to FDA's electronic records and signatures regulations and how they impact your validation strategy.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
        category: "Regulatory Compliance",
        date: "January 15, 2024",
        readTime: "8 min read",
        author: "Dr. Sarah Jenkins"
    },
    {
        id: 2,
        title: "GAMP 5 Best Practices for Computer System Validation",
        excerpt: "Learn how to implement GAMP 5 guidelines effectively for robust computer system validation in pharmaceutical manufacturing.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        category: "Best Practices",
        date: "January 10, 2024",
        readTime: "10 min read",
        author: "Michael Chen"
    },
    {
        id: 3,
        title: "Data Integrity: ALCOA+ Principles Explained",
        excerpt: "Deep dive into ALCOA+ principles and their critical role in maintaining data integrity throughout the validation lifecycle.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        category: "Data Integrity",
        date: "January 5, 2024",
        readTime: "6 min read",
        author: "Elena Rodriguez"
    },
    {
        id: 4,
        title: "Streamlining IQ/OQ/PQ Documentation",
        excerpt: "Practical tips for creating efficient and compliant Installation, Operational, and Performance Qualification protocols.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        category: "Validation",
        date: "December 28, 2023",
        readTime: "7 min read",
        author: "David Thompson"
    },
    {
        id: 5,
        title: "EU Annex 11: Key Updates and Implications",
        excerpt: "Stay updated on the latest changes to EU Annex 11 and understand their impact on computerized systems validation.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
        category: "Regulatory Compliance",
        date: "December 20, 2023",
        readTime: "9 min read",
        author: "Priya Sharma"
    },
    {
        id: 6,
        title: "Risk-Based Approach to CSV: A Practical Guide",
        excerpt: "Implement a risk-based validation strategy that optimizes resources while maintaining regulatory compliance.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        category: "Risk Management",
        date: "December 15, 2023",
        readTime: "11 min read",
        author: "Dr. Sarah Jenkins"
    }
];


export default function BlogsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-slate-50 px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 border-b border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <AnimatedContent className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 border border-teal-200 mb-6">
                            <BookOpenIcon className="w-4 h-4 text-teal-600" />
                            <span className="text-sm font-semibold text-teal-700">Insights & Resources</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-urbanist">
                            TruQual Blog
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Expert insights on computer system validation, regulatory compliance, and GxP best practices 
                            for the life sciences industry.
                        </p>
                    </AnimatedContent>
                </div>
            </section>

        

            {/* Blog Grid */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <AnimatedContent 
                                key={post.id} 
                                delay={index * 0.1}
                                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors font-urbanist">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <CalendarIcon className="w-3.5 h-3.5" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <ClockIcon className="w-3.5 h-3.5" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Author & CTA */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-sm font-medium text-gray-700">{post.author}</span>
                                        <div className="flex items-center gap-1 text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                            Read More
                                            <ArrowRightIcon className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedContent>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <AnimatedContent className="text-center mt-16">
                        <button className="px-8 py-3 bg-white border-2 border-teal-500 text-teal-600 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition-all">
                            Load More Articles
                        </button>
                    </AnimatedContent>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 bg-gradient-to-br from-teal-50 to-blue-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <AnimatedContent className="text-center">
                        <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
                            <TagIcon className="w-12 h-12 text-teal-500 mx-auto mb-6" />
                            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-urbanist">
                                Stay Updated with Validation Insights
                            </h2>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Subscribe to our newsletter and receive the latest articles on regulatory compliance, 
                                validation best practices, and industry updates directly in your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-teal-500"
                                />
                                <button className="px-8 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition-colors shadow-lg shadow-teal-500/30">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </AnimatedContent>
                </div>
            </section>
        </div>
    );
}
