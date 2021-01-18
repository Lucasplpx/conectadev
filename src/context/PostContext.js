import { createContext, useContext, useState } from 'react';

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [markdownText, setMarkdownText] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTagsChange = (event, values) => {
    setTags(values);
  };

  const handleChangeMarkdown = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <PostContext.Provider
      value={{
        image,
        setImage,
        title,
        setTitle: handleTitleChange,
        tags,
        setTags: handleTagsChange,
        markdownText,
        setMarkdownText: handleChangeMarkdown,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const ctx = useContext(PostContext);
  const {
    image,
    setImage,
    title,
    setTitle,
    tags,
    setTags,
    markdownText,
    setMarkdownText,
  } = ctx;

  return {
    image,
    setImage,
    title,
    setTitle,
    tags,
    setTags,
    markdownText,
    setMarkdownText,
  };
}
