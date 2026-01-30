
import React, { useState, useEffect } from 'react';
import { ICONS } from '../constants';
// import { BlogCard } from '../components/BlogCard';
import axios from 'axios';

// Define Interface matching the Backend Data
interface BackendBlog {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  category: string[];
  featured: boolean;
  contentBody?: {
    introduction: string;
    keyTakeaways: string[];
    elaborated: string;
    quote: string;
    conclusion: string;
  };
}

const BlogsView: React.FC = () => {
  const [blogs, setBlogs] = useState<BackendBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    category: '', // Comma separated for input
    introduction: '',
    keyTakeaways: '', // Newline separated
    elaborated: '',
    quote: '',
    conclusion: ''
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Fetch Blogs
  // Fetch Blogs
  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`);
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle Form Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleEdit = (blog: BackendBlog) => {
    setFormData({
      title: blog.title,
      description: blog.description,
      author: blog.author,
      date: blog.date,
      category: blog.category?.join(', ') || '',
      introduction: blog.contentBody?.introduction || '',
      keyTakeaways: blog.contentBody?.keyTakeaways?.join('\n') || '',
      elaborated: blog.contentBody?.elaborated || '',
      quote: blog.contentBody?.quote || '',
      conclusion: blog.contentBody?.conclusion || ''
    });
    setEditingBlogId(blog.id);
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return;
    
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Failed to delete blog post.");
    }
  };

  const resetForm = () => {
    setFormData({
      title: '', description: '', author: '', date: new Date().toISOString().split('T')[0],
      category: '', introduction: '', keyTakeaways: '', elaborated: '', quote: '', conclusion: ''
    });
    setImageFile(null);
    setIsEditing(false);
    setEditingBlogId(null);
    setFormError('');
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    try {
      const data = new FormData();
      
      // Handle ID: Use existing editing ID or generate a new one
      const blogId = isEditing && editingBlogId ? editingBlogId : Math.floor(Math.random() * 1000000);
      
      data.append('id', blogId.toString());
      data.append('title', formData.title);
      data.append('description', formData.description);
      data.append('author', formData.author);
      data.append('date', formData.date);
      
      // Process categories
      const cats = formData.category.split(',').map(c => c.trim()).filter(c => c);
      cats.forEach(c => data.append('category[]', c));

      if (imageFile) {
        data.append('image', imageFile);
      } else {
        // Fallback image or error? Backend requires image string.
        // If we don't upload a file, we might fail validation unless we send a dummy string url.
        // For now, let's assume user uploads file.
        // Or send a placeholder URL if valid.
         data.append('image', 'https://via.placeholder.com/800x400');
      }

      // Structure contentBody
      const contentBody = {
        introduction: formData.introduction,
        keyTakeaways: formData.keyTakeaways.split('\n').filter(k => k.trim()),
        elaborated: formData.elaborated,
        quote: formData.quote,
        conclusion: formData.conclusion
      };
      
      // We need to send contentBody as JSON string or individual fields?
      // Parsing deep objects with FormData/Multer can be tricky. 
      // Easiest is to append 'contentBody' as a JSON string and parse it in backend if supported, 
      // BUT our backend controller expects req.body fields.
      // Standard middleware 'express.urlencoded' handles nested, but Multer handles multipart.
      // With Multer, complex objects are often best sent as a JSON string field.
      // Let's modify backend to parse it if needed, OR send flat fields.
      // Backend: keys are looked up in req.body.
      // req.body.contentBody is expected to be an object. 
      // Helper: Flatten it: contentBody[introduction] ...
      
      data.append('contentBody[introduction]', contentBody.introduction);
      data.append('contentBody[elaborated]', contentBody.elaborated);
      data.append('contentBody[quote]', contentBody.quote);
      data.append('contentBody[conclusion]', contentBody.conclusion);
      contentBody.keyTakeaways.forEach((kt, i) => {
          data.append(`contentBody[keyTakeaways][${i}]`, kt);
      });

      if (isEditing && editingBlogId) {
        await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/${editingBlogId}`, data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`, data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }

      setIsFormOpen(false);
      resetForm();
      fetchBlogs(); // Refresh list

    } catch (err) {
      if (axios.isAxiosError(err)) {
        setFormError(err.response?.data?.message || 'An error occurred. Please try again.');
      } else {
        setFormError('An error occurred. Please try again.');
      }
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-800">Blogs Library</h2>
          <p className="text-slate-500 text-sm font-medium">Manage your blog posts and articles.</p>
        </div>
        <button 
          onClick={() => {
            resetForm();
            setIsFormOpen(true);
          }}
          className="bg-teal-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-700 transition-all shadow-md shadow-teal-500/20 flex items-center gap-2 w-fit"
        >
          <ICONS.Plus size={18} /> Create New Post
        </button>
      </div>

      {/* Blog List Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
        </div>
      ) : blogs.length > 0 ? (
        <div className="flex flex-col gap-4">
          {blogs.map((post) => (
             // Adapting Backend Data to BlogCard props (which expects different keys)
             // We'll just render a Custom Card here to be safe and avoid Type errors with strict TS
             <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all group flex flex-row items-center gap-4 p-4">
                {/* Content */}
                <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6 flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex-shrink-0">Title:</span>
                        <h3 className="text-sm font-bold text-slate-800 group-hover:text-teal-600 transition-colors truncate" title={post.title}>
                            {post.title}
                        </h3>
                    </div>
                    
                    <div className="md:col-span-3 flex items-center gap-2">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex-shrink-0">Author:</span>
                        <p className="text-sm text-slate-600 truncate">{post.author}</p>
                    </div>

                    <div className="md:col-span-3 flex items-center gap-2">
                         <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex-shrink-0">Date:</span>
                        <p className="text-sm text-slate-600">{post.date}</p>
                    </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <button 
                      onClick={() => handleEdit(post)}
                      className="flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      <ICONS.FileText size={14} /> Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(post.id)}
                      className="flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <ICONS.X size={14} /> Delete
                    </button>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
           <p className="text-slate-500">No blog posts found. Create one to get started!</p>
        </div>
      )}

        {/* Modal Form Overlay */}
        {isFormOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 overflow-y-auto">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
                        <h3 className="text-xl font-bold text-slate-800">{isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}</h3>
                        <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors">
                            <ICONS.X size={20} />
                        </button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {formError && (
                            <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                                {formError}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Title</label>
                                <input type="text" name="title" required value={formData.title} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Author</label>
                                <input type="text" name="author" required value={formData.author} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Description (Excerpt)</label>
                            <textarea name="description" required rows={3} value={formData.description} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Date</label>
                                <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Categories (comma separated)</label>
                                <input type="text" name="category" placeholder="e.g. Compliance, FDA, Quality" value={formData.category} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Cover Image</label>
                            <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer relative">
                                <input type="file" accept="image/*" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                <div className="flex flex-col items-center gap-2 text-slate-500">
                                    <ICONS.FileText size={24} />
                                    <span className="text-sm font-medium">{imageFile ? imageFile.name : 'Click to upload image'}</span>
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-100" />
                        <h4 className="font-bold text-slate-800">Article Content</h4>

                         <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Introduction</label>
                            <textarea name="introduction" rows={4} value={formData.introduction} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"></textarea>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Key Takeaways (one per line)</label>
                            <textarea name="keyTakeaways" rows={4} value={formData.keyTakeaways} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"></textarea>
                        </div>

                         <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Main Content (Elaborated)</label>
                            <textarea name="elaborated" rows={8} value={formData.elaborated} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"></textarea>
                        </div>

                         <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Quote</label>
                            <textarea name="quote" rows={2} value={formData.quote} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none italic"></textarea>
                        </div>
                        
                         <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-700">Conclusion</label>
                            <textarea name="conclusion" rows={3} value={formData.conclusion} onChange={handleChange} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none"></textarea>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                            <button type="button" onClick={() => setIsFormOpen(false)} className="px-6 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl transition-all">Cancel</button>
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="px-6 py-2.5 text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition-all shadow-lg shadow-teal-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        {isEditing ? 'Updating...' : 'Saving...'}
                                    </>
                                ) : (isEditing ? 'Update Post' : 'Publish Post')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )}
    </div>
  );
};

export default BlogsView;
