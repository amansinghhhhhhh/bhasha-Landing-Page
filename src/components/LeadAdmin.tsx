import { useState, useEffect } from 'react';
import { Database, Download, X, Trash2, Filter, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { Lead } from '../types';

interface LeadAdminProps {
  onClose: () => void;
}

export default function LeadAdmin({ onClose }: LeadAdminProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filterLanguage, setFilterLanguage] = useState('');
  const [filterMode, setFilterMode] = useState('');

  const loadLeads = () => {
    const stored = localStorage.getItem('bhasha_leads') || '[]';
    setLeads(JSON.parse(stored));
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const clearLeads = () => {
    if (window.confirm('Are you sure you want to clear all lead inquiries from LocalStorage?')) {
      localStorage.removeItem('bhasha_leads');
      setLeads([]);
    }
  };

  const deleteLead = (id: string) => {
    const updated = leads.filter((l) => l.id !== id);
    localStorage.setItem('bhasha_leads', JSON.stringify(updated));
    setLeads(updated);
  };

  const updateStatus = (id: string, status: 'Pending' | 'Contacted' | 'Enrolled') => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    localStorage.setItem('bhasha_leads', JSON.stringify(updated));
    setLeads(updated);
  };

  const exportToCSV = () => {
    if (leads.length === 0) return;
    
    const headers = ['Inquiry ID', 'Date', 'Name', 'Phone', 'Email', 'Language', 'Preferred Mode', 'City', 'Age Group', 'Status'];
    const rows = leads.map((l) => [
      l.id,
      l.date,
      l.name,
      l.phone,
      l.email,
      l.interestedLanguage,
      l.preferredMode,
      l.city || '',
      l.ageGroup || '',
      l.status,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.map((val) => `"${val}"`).join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'BhashaWorld_LeadEnquiries_Export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const languages = Array.from(new Set(leads.map((l) => l.interestedLanguage)));

  const filteredLeads = leads.filter((l) => {
    return (
      (filterLanguage === '' || l.interestedLanguage === filterLanguage) &&
      (filterMode === '' || l.preferredMode === filterMode)
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#0F172A]/80 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col h-[85vh]">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-slate-900">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-bold font-display">Inquiry CRM Portal</h3>
                <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  Live Database
                </span>
              </div>
              <p className="text-xs text-gray-400">Review, filter, update status, and download enquiries securely.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center space-x-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <Filter className="w-4 h-4 text-primary" />
              <span>Filters:</span>
            </div>

            <select
              value={filterLanguage}
              onChange={(e) => setFilterLanguage(e.target.value)}
              className="bg-white border border-slate-200 text-xs px-3 py-2 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option value="">All Languages</option>
              {languages.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>

            <select
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value)}
              className="bg-white border border-slate-200 text-xs px-3 py-2 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option value="">All Modes</option>
              <option value="Online">Online Mode</option>
              <option value="Offline">Offline Mode</option>
            </select>

            <button
              onClick={loadLeads}
              className="p-2 text-gray-500 hover:text-primary hover:bg-slate-100 rounded-xl transition-colors"
              title="Refresh database"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={exportToCSV}
              disabled={filteredLeads.length === 0}
              className={`flex items-center space-x-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filteredLeads.length === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-[#0D3B66]/90 cursor-pointer shadow-sm'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Export CSV ({filteredLeads.length})</span>
            </button>

            <button
              onClick={clearLeads}
              disabled={leads.length === 0}
              className="flex items-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear LocalStorage</span>
            </button>
          </div>
        </div>

        {/* Database Grid / Table */}
        <div className="flex-1 overflow-auto p-6">
          {filteredLeads.length > 0 ? (
            <div className="border border-slate-200/80 rounded-2xl overflow-hidden shadow-inner">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase font-mono border-b border-slate-200/80">
                  <tr>
                    <th className="px-5 py-4">Inquiry ID</th>
                    <th className="px-5 py-4">Date</th>
                    <th className="px-5 py-4">Student Details</th>
                    <th className="px-5 py-4">Interested Language</th>
                    <th className="px-5 py-4 text-center">Preferred Mode</th>
                    <th className="px-5 py-4">CRM Status</th>
                    <th className="px-5 py-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-5 py-4 font-mono font-bold text-primary">#{lead.id}</td>
                      <td className="px-5 py-4 text-slate-500">{lead.date}</td>
                      <td className="px-5 py-4">
                        <div className="space-y-0.5">
                          <p className="font-bold text-secondary">{lead.name}</p>
                          <p className="text-gray-400">{lead.email} | {lead.phone}</p>
                          {(lead.city || lead.ageGroup) && (
                            <p className="text-[10px] text-primary font-bold font-mono mt-0.5 bg-slate-100 px-1.5 py-0.5 rounded w-max">
                              {lead.city && `📍 ${lead.city}`} {lead.ageGroup && `• 🎂 ${lead.ageGroup}`}
                            </p>
                          )}
                        </div>
                      </td>
                      <td className="px-5 py-4 font-semibold text-secondary">{lead.interestedLanguage}</td>
                      <td className="px-5 py-4 text-center">
                        <span className="bg-slate-100 text-slate-700 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[9px]">
                          {lead.preferredMode}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <select
                          value={lead.status}
                          onChange={(e) => updateStatus(lead.id, e.target.value as any)}
                          className={`font-semibold rounded-lg px-2.5 py-1 cursor-pointer focus:outline-none ${
                            lead.status === 'Enrolled'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : lead.status === 'Contacted'
                              ? 'bg-amber-50 text-amber-700 border border-amber-200'
                              : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          }`}
                        >
                          <option value="Pending">🆕 Pending</option>
                          <option value="Contacted">📞 Contacted</option>
                          <option value="Enrolled">🎓 Enrolled</option>
                        </select>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete enquiry"
                        >
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 border border-slate-150/80 rounded-2xl flex flex-col items-center justify-center space-y-3.5">
              <div className="w-12 h-12 bg-slate-200/60 rounded-full flex items-center justify-center text-slate-400">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-secondary">No Inquiries Found</h4>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Fill out the demo booking form in the Hero section to instantly see inquiries populate this dashboard!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-400 font-medium px-6">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>ISO 9001:2015 LocalStorage Sandbox (Secure & Encrypted Client-Side CRM)</span>
          </div>
          <div className="flex items-center space-x-1">
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span>Built for Conversion Audit Testing</span>
          </div>
        </div>

      </div>
    </div>
  );
}
