'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function LoadingUI() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-lg">Redirecting to application form...</p>
    </div>
  );
}

export default function Page() {
  const router = useRouter();
  
  useEffect(() => {
    const redirectUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd_7Y8w3KClKbEnNSfRZqJ9QxEyofCAjc8GvstIeNKaqEP7uQ/viewform?usp=sf_link';
    window.location.href = redirectUrl;
  }, []);

  return <LoadingUI />;
}
