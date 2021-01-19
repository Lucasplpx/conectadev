import { Box } from '@material-ui/core';

import { PostProvider } from '../../../context/PostContext';
import BottomBar from './BottomBar';

import Editor from './Editor';
import Preview from './Preview';

function NewPost() {
  return (
    <PostProvider>
      <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
        <Box width="50%" height="100%" padding={2} borderRight="1px solid #ddd">
          <Editor />
        </Box>
        <Box width="50%" height="100%" padding={2}>
          <Preview />
        </Box>
      </Box>
      <BottomBar />
    </PostProvider>
  );
}

export default NewPost;
