import './globals.css';

export const metadata = {
  title: 'Rashedul Alam — Portfolio',
  description:
    'Rashedul Alam — Software Engineer and CSE student at AIUB, Bangladesh. Full-stack, IoT & AI-driven projects.',
  icons: { icon: '/img/Nh.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
