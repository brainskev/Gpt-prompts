import '@styles/global.css';
import Nav from "./components/Nav";
import Provider from "./components/Provider";

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}

 const Rootlayout = ({children}) => {
  return (
        <Provider>    
            <html lang='en'>
                    <body>
                        <div className='main'>
                            <div className='gradient'/>
                        </div>

                        <main className='app'>
                            <Nav/>
                            {children}
                        </main>
                    </body>
            </html>
        </Provider>
  )
}

export default Rootlayout;