import { useState } from 'react';
import { Save, ChevronLeft, Download, Clipboard } from 'lucide-react';
import contentData from '../data/content.json';

const Admin = () => {
  const [jsonContent, setJsonContent] = useState(JSON.stringify(contentData, null, 2));
  const [status, setStatus] = useState('');

  const handleSave = () => {
    try {
      JSON.parse(jsonContent);
      setStatus('JSON is valid! Copy and replace src/data/content.json');
    } catch (e) {
      setStatus('Invalid JSON format!');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonContent);
    setStatus('Copied to clipboard!');
  };

  const downloadJson = () => {
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'content.json';
    a.click();
    setStatus('File downloaded. Replace the existing content.json with this one.');
  };

  return (
    <div className="min-h-screen bg-neutral-900 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-white/10 pb-4 gap-4">
          <div>
            <a href="/" className="flex items-center gap-2 text-neutral-400 hover:text-gold mb-1 transition-colors text-xs">
              <ChevronLeft size={14} /> Back to Site
            </a>
            <h1 className="text-xl md:text-3xl font-serif font-bold text-white tracking-tight">Content Manager</h1>
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button 
              onClick={copyToClipboard}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-neutral-800 text-white text-xs rounded hover:bg-neutral-700 transition-colors"
            >
              <Clipboard size={14} /> Copy
            </button>
            <button 
              onClick={downloadJson}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-neutral-800 text-white text-xs rounded hover:bg-neutral-700 transition-colors"
            >
              <Download size={14} /> Download
            </button>
            <button 
              onClick={handleSave}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-gold text-black font-bold text-xs rounded hover:bg-white transition-colors"
            >
              <Save size={14} /> Validate
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col h-[50vh] md:h-[70vh]">
            <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2 font-bold">Edit Content JSON</label>
            <textarea 
              value={jsonContent}
              onChange={(e) => setJsonContent(e.target.value)}
              className="flex-1 w-full bg-black text-green-500 font-mono text-xs p-4 border border-white/5 rounded-sm focus:border-gold outline-none resize-none"
              spellCheck="false"
            />
          </div>

          <div className="bg-neutral-800/50 p-6 rounded-sm border border-white/5 h-auto md:h-[70vh] overflow-y-auto">
            <h2 className="text-lg font-serif font-bold text-white mb-4">Instructions</h2>
            <div className="space-y-4 text-neutral-400 text-xs leading-relaxed">
              <p>
                Static CMS: browser cannot write to project files directly.
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong className="text-white">Modify</strong> JSON on the left.</li>
                <li>Click <strong className="text-gold">"Validate"</strong>.</li>
                <li><strong className="text-white">Copy</strong> or <strong className="text-white">Download</strong>.</li>
                <li>Replace <code className="bg-black px-1 text-gold">src/data/content.json</code> content.</li>
                <li><strong className="text-white">Redeploy</strong>.</li>
              </ol>

              {status && (
                <div className={`mt-4 p-3 rounded border text-[10px] ${status.includes('Invalid') ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-gold/10 border-gold text-gold'}`}>
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
