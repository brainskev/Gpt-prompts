import '@styles/global.css';
import Nav from "./components/Nav";
// import Provider from "./components/Provider";

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
}

 const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <provider>    
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>

                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </body>
        </provider>
    </html>
  )
}

export default Rootlayout;