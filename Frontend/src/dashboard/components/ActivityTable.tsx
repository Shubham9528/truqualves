
import React from 'react';
import { RECENT_ACTIVITY, ICONS } from '../constants';

export const ActivityTable: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-lg text-slate-800">Recent Activity</h3>
        <button className="text-teal-600 text-sm font-semibold hover:underline flex items-center gap-1">
          View All <ICONS.ArrowUpRight size={14} />
        </button>
      </div>
      <div className="overflow-x-auto no-scrollbar touch-pan-x">
        <table className="w-full text-left min-w-[600px]">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {RECENT_ACTIVITY.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <span className="text-sm font-semibold text-slate-800">{item.project}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-slate-600">{item.action}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 text-[10px] flex items-center justify-center font-bold shrink-0">
                      {item.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-sm text-slate-600 whitespace-nowrap">{item.user}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs text-slate-400 whitespace-nowrap">{item.date}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 group-hover:text-slate-600 transition-colors">
                    <ICONS.MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-3 bg-slate-50/50 border-t border-slate-100 text-[10px] text-slate-400 font-medium sm:hidden">
        Scroll horizontally to view more details
      </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const styles: Record<string, string> = {
    success: 'bg-emerald-50 text-emerald-600',
    warning: 'bg-amber-50 text-amber-600',
    error: 'bg-rose-50 text-rose-600',
    pending: 'bg-teal-50 text-teal-600'
  };
  
  return (
    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${styles[status] || styles.pending}`}>
      {status}
    </span>
  );
};
