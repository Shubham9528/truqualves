import AnimatedContent from "../components/animated-content";
import { ArrowUpRight } from "lucide-react";

import { blogPosts } from "../data/blog-posts";

export default function BlogsPage() {



    const allPosts = blogPosts;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-slate-50 px-4 md:px-16 lg:px-24 xl:px-32 pt-32 pb-16 border-b border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <AnimatedContent>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 mb-4">
                            <span className="text-sm font-semibold text-teal-700">Our blog</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-urbanist">
                            Stories and Interviews
                        </h1>
                        <p className="text-lg text-gray-600">
                            Stories, interviews, and updates from the TruQual team.
                        </p>
                    </AnimatedContent>
                </div>
            </section>
 
            {/* All Blog Posts */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <AnimatedContent>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 font-urbanist">
                            All blog posts
                        </h2>
                    </AnimatedContent>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPosts.map((post, index) => (
                            <AnimatedContent key={post.id} delay={0.05 * index}>
                                <article className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                    <div className="relative overflow-hidden aspect-video">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                                            <span className="font-semibold text-slate-900">{post.author}</span>
                                            <span>•</span>
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex justify-between items-start gap-4 mb-2">
                                            <h3 className="text-xl font-bold text-slate-900 transition-colors">
                                                {post.title}
                                            </h3>
                                            <ArrowUpRight className="w-5 h-5 text-gray-400 transition-colors shrink-0" />
                                        </div>
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                                            {post.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {post.category.map((cat, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                                                >
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            </AnimatedContent>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
