import { useState, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';

interface UploadedFile {
  name: string;
  path: string;
  size: number;
  type: string;
}

interface Props {
  clientId: string;
  section: string;
  supabaseUrl: string;
  supabaseAnonKey: string;
  existingFiles?: UploadedFile[];
  onUpload?: (file: UploadedFile) => void;
  onDelete?: (path: string) => void;
  accept?: string;
  maxSizeMB?: number;
}

export default function FileUploader({
  clientId,
  section,
  supabaseUrl,
  supabaseAnonKey,
  existingFiles = [],
  onUpload,
  onDelete,
  accept = 'image/*',
  maxSizeMB = 10,
}: Props) {
  const [files, setFiles] = useState<UploadedFile[]>(existingFiles);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState('');

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const handleFiles = useCallback(async (fileList: FileList) => {
    setError('');
    setUploading(true);

    for (const file of Array.from(fileList)) {
      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`${file.name} exceeds ${maxSizeMB}MB limit`);
        continue;
      }

      const filePath = `${clientId}/${section}/${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from('client-uploads')
        .upload(filePath, file);

      if (uploadError) {
        setError(`Failed to upload ${file.name}: ${uploadError.message}`);
        continue;
      }

      const uploaded: UploadedFile = {
        name: file.name,
        path: filePath,
        size: file.size,
        type: file.type,
      };

      setFiles(prev => [...prev, uploaded]);
      onUpload?.(uploaded);
    }

    setUploading(false);
  }, [clientId, section, maxSizeMB, onUpload, supabase]);

  const handleDelete = async (path: string) => {
    const { error: deleteError } = await supabase.storage
      .from('client-uploads')
      .remove([path]);

    if (!deleteError) {
      setFiles(prev => prev.filter(f => f.path !== path));
      onDelete?.(path);
    }
  };

  return (
    <div>
      <div
        className={`upload-zone ${dragOver ? 'border-brand-warm/50 bg-brand-sage-light/20' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
        onClick={() => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = accept;
          input.multiple = true;
          input.onchange = () => input.files && handleFiles(input.files);
          input.click();
        }}
      >
        {uploading ? (
          <p className="font-sans text-sm text-mid-gray">Uploading...</p>
        ) : (
          <>
            <svg className="w-8 h-8 text-border-light mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16v-8m0 0l-3 3m3-3l3 3M6.75 19.25h10.5A2.25 2.25 0 0019.5 17V7A2.25 2.25 0 0017.25 4.75H6.75A2.25 2.25 0 004.5 7v10a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <p className="font-sans text-sm text-mid-gray">Drop files here or click to browse</p>
            <p className="font-sans text-xs text-neutral-400 mt-1">Max {maxSizeMB}MB per file</p>
          </>
        )}
      </div>

      {error && (
        <p className="font-sans text-xs text-red-600 mt-2">{error}</p>
      )}

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file) => (
            <div key={file.path} className="flex items-center justify-between bg-white rounded border border-border-light px-3 py-2">
              <div className="flex items-center gap-2 min-w-0">
                <svg className="w-4 h-4 text-mid-gray shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span className="font-sans text-xs text-charcoal truncate">{file.name}</span>
                <span className="font-sans text-xs text-neutral-400 shrink-0">
                  {(file.size / 1024).toFixed(0)}KB
                </span>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); handleDelete(file.path); }}
                className="font-sans text-xs text-mid-gray hover:text-red-600 transition-colors shrink-0 ml-2"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
