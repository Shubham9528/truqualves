
import React, { useState, useMemo } from 'react';
import { MOCK_BLOGS, ICONS } from '../constants';
import { BlogCard } from '../components/BlogCard';

const BlogsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'CSV', 'QA', 'Compliance', 'Validation'];

  const filteredPosts = useMemo(() => {
    return MOCK_BLOGS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-800">Resource Library</h2>
          <p className="text-slate-500 text-sm font-medium">Compliance insights, industry news, and validation tutorials.</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 flex items-center gap-2 w-fit">
          <ICONS.Plus size={18} /> Create New Post
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-4 mb-8">
        <div className="relative flex-1 w-full">
          <ICONS.Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by title or keywords..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
          <div className="bg-slate-50 p-4 rounded-full mb-4">
            <ICONS.Search size={32} className="text-slate-300" />
          </div>
          <h3 className="text-lg font-bold text-slate-800">No results found</h3>
          <p className="text-slate-500 text-sm">Try adjusting your search terms or category filters.</p>
          <button 
            onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
            className="mt-4 text-blue-600 font-semibold text-sm hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination Placeholder */}
      <div className="mt-12 flex justify-center">
        <div className="flex gap-2">
           <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled>
             <ICONS.Bell size={18} className="rotate-90" />
           </button>
           <button className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-200">1</button>
           <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-600 hover:bg-slate-50">2</button>
           <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">
             <ICONS.Bell size={18} className="-rotate-90" />
           </button>
        </div>
      </div>
      
      <div className="h-16"></div>
    </div>
  );
};

export default BlogsView;
