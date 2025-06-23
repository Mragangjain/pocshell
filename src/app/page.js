'use client'


export default function Home() {

  useEffect(() => {
    console.log('Hello from Vulcan!');
    // Listener to receive messages from the iframe
    const handleMessage = (event) => {
      const allowedOrigin = 'https://vulcan-uat.dev.intouch.capillarytech.com'; // Update with iframe origin
      if (event.origin !== allowedOrigin) {
        console.warn('Received message from unauthorized origin:', event.origin);
        return;
      }

      // Check if the message contains cookies
      if (event.data?.type === 'cookies') {
        const cookies = event.data.data;
        console.log('Received cookies from iframe:', cookies);

        // Set cookies in the parent application
        cookies.split(';').forEach((cookie) => {
          document.cookie = cookie.trim();
        });
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <iframe
        src="https://vulcan-uat.dev.intouch.capillarytech.com/api-ext-airlines-client-merge/ui/" // Replace with the external domain
        title="External Application"
        style={{ height:'90vh', marginTop:'450px', width: '100%', border: 'none' }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
