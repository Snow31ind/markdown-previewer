'use client';

import { useState } from 'react';
import MarkdownEditor from './components/MarkdownEditor/MarkdownEditor';
import MarkdownPreviewer from './components/MarkdownPreviewer/MarkdownPreviewer';

export default function Home() {
  const [expandedTab, setExpandedTab] = useState<'editor' | 'previewer' | null>(
    null
  );
  const [text, setText] = useState('');

  const handleExpandTab =
    (tab: typeof expandedTab) => (isExpanded: boolean) => {
      if (!isExpanded) {
        setExpandedTab(null);
      } else {
        setExpandedTab(tab);
      }
    };

  return (
    <main className='w-full h-screen bg-pewter-blue'>
      <div className='w-full flex flex-col items-center justify-center gap-10'>
        <div
          className={`min-w-[600px] max-w-[600px] ${
            expandedTab && expandedTab === 'previewer' ? 'hidden' : ''
          }`}>
          <MarkdownEditor
            isExpanded={expandedTab === 'editor'}
            setIsExpanded={handleExpandTab('editor')}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div
          className={`w-[800px] max-w-[800px] ${
            expandedTab && expandedTab === 'editor' ? 'hidden' : ''
          }`}>
          <MarkdownPreviewer
            isExpanded={expandedTab === 'previewer'}
            setIsExpanded={handleExpandTab('previewer')}>
            {text}
          </MarkdownPreviewer>
        </div>
      </div>
    </main>
  );
}
