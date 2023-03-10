import '@/styles/global.css'
import SideBarContainer from '@/containers/sidebar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex justify-between'>
        <div className='hidden md:block'>
          <SideBarContainer />
        </div>
        <div className='mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}