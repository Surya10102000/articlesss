import { atom } from 'recoil';

export const userState = atom ({
  key : 'userState', 
  default : null
})

// Global error state
export const errorState = atom({
  key: 'errorState',
  default: '', // Empty string means no error initially
});

// Global loading state
export const loadingState = atom({
  key: 'loadingState',
  default: false, // Default is not loading
});

export const userProfileState = atom({
  key : "userProfileState",
  default : null
})
