import React, { useState } from 'react'
const Career = () => {
const [work1, setWork1] = useState('Dolor sit amet consectetur adipisicing elit. Ratione, libero consequatur sint labore, atque tempore rem a assumenda dicta reprehenderit architecto eius laborum maxime aspernatur!');
const [more1, setMore1] = useState('Więcej >');
const [work2, setWork2] = useState('Ipsum, dolor sit amet consectetur adipisicing elit. Ratione, libero consequatur sint labore, atque tempore rem a assumenda dicta reprehenderit architecto eius laborum maxime aspernatur!');
const [more2, setMore2] = useState('Więcej >');

const handleWork1More =()=>{
    if (more1 === 'Więcej >'){
        setMore1('< Mniej');
        setWork1('Dolor sit amet consectetur, adipisicing elit. Omnis rem distinctio similique, sequi et, voluptatum laudantium animi nesciunt nostrum nulla suscipit aliquid blanditiis molestiae earum id asperiores velit magnam alias.Amet laudantium blanditiis fugiat, optio et incidunt vero consequatur, voluptate rerum modi, recusandae repellendus reiciendis similique. Ratione assumenda enim non qui ipsa possimus beatae, laborum exercitationem consequatur neque officiis similique!')
    }else{
        setMore1('Więcej >');
        setWork1('Dolor sit amet consectetur, adipisicing elit. Omnis rem distinctio similique, sequi et, voluptatum laudantium animi nesciunt nostrum nulla suscipit aliquid blanditiis molestiae earum id asperiores!')
    }
}
const handleWork2More =()=>{
    if (more2 === 'Więcej >'){
        setMore2('< Mniej');
        setWork2('Placeat consequuntur iure iste libero rem culpa nam earum quos itaque? Nostrum dolore dicta ipsa. Tempore fugit repellat quisquam nihil amet dicta? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis rem distinctio similique, sequi et, voluptatum laudantium animi nesciunt nostrum nulla suscipit aliquid blanditiis molestiae earum id asperiores velit magnam alias.Amet laudantium blanditiis fugiat, optio et incidunt vero consequatur, voluptate rerum modi, recusandae repellendus reiciendis similique. Ratione assumenda enim non qui ipsa possimus beatae, laborum exercitationem consequatur neque officiis similique!')
    }else{
        setMore2('Więcej >');
        setWork2('Placeat consequuntur iure iste libero rem culpa nam earum quos itaque? Nostrum dolore dicta ipsa. Tempore fugit repellat quisquam nihil amet dicta?')
    }}
const workOffers = [
    {name: 'Oferta pracy aspernatur aut odit', more: more1, content: work1, click: handleWork1More,
    },{name: 'Oferta pracy illo inventore veritatis', more: more2, content: work2, click: handleWork2More,}];

const ourWorkOffers = workOffers.map(w=>{
    return(
        <div className="career-works">
        <div className={w.name}></div>
        <div className="work_content">
            <h3>{w.name}</h3>
            <p>{w.content}</p>
            <p onClick={w.click} name={w.name} className="work_more">{w.more} </p>
        </div>
    </div>
    )})

    return (
        <div className="Career pageWrapper">
            <div className="pageContentRight">
                <h2>Kariera</h2>
                <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                     laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi 
                     architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
                      sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
                       voluptatem sequi nesciunt, neque porro quisquam est.</p>
                       {ourWorkOffers}
            </div>
        </div>
    );
}
 
export default Career;