
import '@/app/ui/global.css'
import { inter, lusitana } from './ui/fonts';
// import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${lusitana.className} antialiased` } >{children}</body>
     
    </html>
  );
}
