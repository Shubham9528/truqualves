import AnimatedContent from "../components/animated-content";
import { ArrowUpRight } from "lucide-react";

import { blogPosts } from "../data/blog-posts";

export default function BlogsPage() {


    const recentPosts = blogPosts.filter(post => post.featured);
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
                            Stories and interviews
                        </h1>
                        <p className="text-lg text-gray-600">
                            Stories, interviews, and updates from the TruQual team.
                        </p>
                    </AnimatedContent>
                </div>
            </section>

            {/* Recent Blog Posts */}
            <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-12 border-b border-gray-200 bg-white">
                <div className="max-w-5xl mx-auto">
                    <AnimatedContent>
                        <h2 className="text-2xl font-bold text-slate-900 mb-8 font-urbanist">
                            Recent blog posts
                        </h2>
                    </AnimatedContent>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Featured Large Post */}
                        {recentPosts[0] && (
                            <AnimatedContent className="lg:row-span-2">
                                <article className="group h-full">
                                    <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                                        <img
                                            src={recentPosts[0].image}
                                            alt={recentPosts[0].title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                                        <span className="font-semibold text-slate-900">{recentPosts[0].author}</span>
                                        <span>•</span>
                                        <span>{recentPosts[0].date}</span>
                                    </div>
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <h3 className="text-xl font-bold text-slate-900 transition-colors">
                                            {recentPosts[0].title}
                                        </h3>
                                        <ArrowUpRight className="w-6 h-6 text-gray-400 transition-colors shrink-0" />
                                    </div>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {recentPosts[0].description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {recentPosts[0].category.map((cat, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                            >
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            </AnimatedContent>
                        )}

                        {/* Two Smaller Posts - Horizontal Layout */}
                        <div className="space-y-8 flex flex-col justify-center">
                            {recentPosts.slice(1, 3).map((post, index) => (
                                <AnimatedContent key={post.id} delay={0.1 * (index + 1)}>
                                    <article className="group grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                        <div className="relative overflow-hidden rounded-2xl aspect-video w-full">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex flex-col h-full justify-center">
                                            <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
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
                                            <p className="text-gray-600 mb-3 text-sm leading-relaxed line-clamp-2">
                                                {post.description}
                                            </p>
                                            {/* <div className="flex flex-wrap gap-2">
                                                {post.category.map((cat, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                                                    >
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div> */}
                                        </div>
                                    </article>
                                </AnimatedContent>
                            ))}
                        </div>
                    </div>
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
