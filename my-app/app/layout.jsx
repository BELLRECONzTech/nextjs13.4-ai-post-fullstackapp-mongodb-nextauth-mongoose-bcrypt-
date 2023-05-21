import '@styles/global.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadeta = {
    title : "Promptopia is Awesome",
    description : "Discover & Share AI prompts",
}

const RootLayout = ({ children }) => {
  return (
    <html lang = "en"> 
        <body>
            <Provider>
            <div className='main'>
                <div  className = 'gradient'/>
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout