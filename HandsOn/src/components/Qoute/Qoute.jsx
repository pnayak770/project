import Pintu from "./Pintu"


const Qoute=()=>{

    const qoute=[{
        q:"lorem10ncncniinicnindndni",
        author:"p",
    },
    {
        q:"lorem10ncncniinicnindndni",
        author:"p",
    },
    {
        q:"lorem10ncncniinicnindndni",
        author:"p",
    }
];

    return(
        <div>
            {

            qoute.map((item)=>{
                return <Pintu qoute={item.q} author={item.author}/>
            })
            
            }
        </div>
        )
}

export default Qoute