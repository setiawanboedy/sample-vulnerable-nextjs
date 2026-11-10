export const metadata = {
  title: 'Vulnerable Next.js App',
  description: 'Testbed application for automated security audits',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: '2rem' }}>
        {children}
      </body>
    </html>
  );
}
