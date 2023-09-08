import ContentArea from '@/components/ContentArea.component';
import NavBar from '@/components/NavBar.component.';
import SideBar from '@/components/SideBar.component';
import ThemeRegistry from '@/theme/ThemeRegistry';
import { Stack } from '@mui/material';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/utils/provider';
import { ApiClient } from '@/apis/api-client';
import Slack from '@/apis/slack';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <ThemeRegistry>
          <Providers>
            <main>
              <Stack direction="row">
                <SideBar></SideBar>
                <Stack component="main" flexDirection="column" width="full" sx={{ flexGrow: 1 }}>
                  <Stack>
                    <NavBar></NavBar>
                  </Stack>
                  <Stack>
                    <ContentArea>
                      {/* TODO: include later */}
                      {/* <Suspense fallback={<p style={{ textAlign: 'center' }}>loading... on initial request</p>}> */}
                        {children}
                      {/* </Suspense> */}
                    </ContentArea>
                  </Stack>
                </Stack>
              </Stack>
            </main>
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}

export const apiClient = new ApiClient();
export const slack = new Slack();
