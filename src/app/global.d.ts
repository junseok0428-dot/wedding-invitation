// src/app/global.d.ts
export {};

declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: any) => void;
      };
    };

    kakao?: any;
  }
}