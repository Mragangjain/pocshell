import Image from "next/image";

export default function Home() {
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
