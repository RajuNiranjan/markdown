import React, { useState } from "react";
import { marked } from "marked";

const App = () => {
  const [markdown, setMarkdown] = useState(`# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline Code\`
\`\`\`
// Code Block
const message = 'Hello, World!';
console.log(message);
\`\`\`
- List Item 1
- List Item 2
> Blockquote
![Image](https://www.example.com/image.jpg)
**Bold Text**`);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container mx-auto p-4 bg-blue-100 w-full h-screen">
      <h1 className="text-2xl font-bold mb-4">Markdown Previewer</h1>
      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-2">Editor</h2>
          <textarea
            id="editor"
            className="w-full h-64 p-2 border border-gray-300 rounded"
            value={markdown}
            onChange={handleInputChange}></textarea>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-bold mb-2">Preview</h2>
          <div
            id="preview"
            className="w-full h-64 p-2 border border-gray-300 rounded"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
