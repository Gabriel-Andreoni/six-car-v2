export function getApiUrl(path: string) {
    if (process.env.NODE_ENV === 'production') {
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}${path}`;
    }
   
    return `http://localhost:3000${path}`;
  }