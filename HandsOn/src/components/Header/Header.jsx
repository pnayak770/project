import "./index.css"

const Header =(props)=>{
    return (
       
        <div className="container">
          <nav style={{display:"flex",justifyContent:"space-between"}}>
            <section>
                <h2>Geekfood</h2>
            </section>
            <section>
        
                <ul>
                    <li><a href="">Home</a></li>
                    <li>Qoute</li>
                    <li>Home</li>
                </ul>
            </section>
            <section>
                <button>login</button>
            </section>
          </nav>
        </div>
    )
}

export default Header;