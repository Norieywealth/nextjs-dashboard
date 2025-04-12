import '@/app/ui/global.css';
import {inter, poppins} from '@/app/ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antiliased`}>{children}</body>
    </html>
  );
}
