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
    <div className="min-h-screen bg-neutral-900 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
          <div>
            <a href="/" className="flex items-center gap-2 text-neutral-400 hover:text-gold mb-2 transition-colors">
              <ChevronLeft size={16} /> Back to Site
            </a>
            <h1 className="text-3xl font-serif font-bold text-white">Content Manager (CMS)</h1>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-colors"
            >
              <Clipboard size={18} /> Copy JSON
            </button>
            <button 
              onClick={downloadJson}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-700 transition-colors"
            >
              <Download size={18} /> Download
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-gold text-black font-bold rounded hover:bg-white transition-colors"
            >
              <Save size={18} /> Validate
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col h-[70vh]">
            <label className="text-xs uppercase tracking-widest text-neutral-500 mb-2 font-bold">Edit Content JSON</label>
            <textarea 
              value={jsonContent}
              onChange={(e) => setJsonContent(e.target.value)}
              className="flex-1 w-full bg-black text-green-500 font-mono text-sm p-6 border border-white/5 rounded-sm focus:border-gold outline-none resize-none"
              spellCheck="false"
            />
          </div>

          <div className="bg-neutral-800/50 p-8 rounded-sm border border-white/5 h-[70vh] overflow-y-auto">
            <h2 className="text-xl font-serif font-bold text-white mb-6">Instructions</h2>
            <div className="space-y-6 text-neutral-400 text-sm leading-relaxed">
              <p>
                This is a static CMS. Since the browser cannot directly write to your project files, follow these steps to update your website:
              </p>
              <ol className="list-decimal list-inside space-y-4">
                <li>
                  <strong className="text-white">Modify</strong> the JSON data on the left. You can change texts, image URLs, or video IDs for both English and Indonesian.
                </li>
                <li>
                  Click <strong className="text-gold">"Validate"</strong> to ensure your changes are correctly formatted.
                </li>
                <li>
                  Click <strong className="text-white">"Download"</strong> or <strong className="text-white">"Copy JSON"</strong>.
                </li>
                <li>
                  <strong className="text-white">Replace</strong> the content of <code className="bg-black px-1 text-gold">src/data/content.json</code> in your project with the new data.
                </li>
                <li>
                  <strong className="text-white">Redeploy</strong> your website to see the changes live.
                </li>
              </ol>

              {status && (
                <div className={`mt-8 p-4 rounded border ${status.includes('Invalid') ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-gold/10 border-gold text-gold'}`}>
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
