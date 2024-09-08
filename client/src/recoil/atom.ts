import { atom } from 'recoil';

export const blogsState = atom({
  key: 'blogsState',
  default: [],
});

export const isAdminState = atom({
  key : "isAdmin",
  default : true
})

export const editorState = atom({
  key : "editor",
  default : null,
})

export const editorContentState = atom ({
  key: 'editoContentState',
  default : ''
})