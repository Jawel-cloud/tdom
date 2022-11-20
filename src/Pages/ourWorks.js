import z1 from '../Assets/works/z1.jpg';
import z2 from '../Assets/works/z2.jpg';
import z3 from '../Assets/works/z3.jpg';
import z4 from '../Assets/works/z4.jpg';
import z5 from '../Assets/works/z5.jpg';
import z6 from '../Assets/works/z6.jpg';
import z7 from '../Assets/works/z7.jpg';
import z8 from '../Assets/works/z8.jpg';
import z9 from '../Assets/works/z9.jpg';
import z10 from '../Assets/works/z10.jpg';
import z11 from '../Assets/works/z11.jpg';
import z12 from '../Assets/works/z12.jpg';
import z13 from '../Assets/works/z13.jpg';
import z14 from '../Assets/works/z14.jpg';
import z15 from '../Assets/works/z15.jpg';
import z16 from '../Assets/works/z16.jpg';
import z17 from '../Assets/works/z17.jpg';
import z18 from '../Assets/works/z18.jpg';
const OurWorks = () => {

        //work elements
        const workElements = [
            {name: 'z1', pict: z1},
            {name: 'z2', pict: z2},
            {name: 'z3', pict: z3},
            {name: 'z4', pict: z4},
            {name: 'z5', pict: z5},
            {name: 'z6', pict: z6},
            {name: 'z7', pict: z7},
            {name: 'z8', pict: z8},
            {name: 'z9', pict: z9},
            {name: 'z10', pict: z10},
            {name: 'z11', pict: z11},
            {name: 'z12', pict: z12},
            {name: 'z13', pict: z13},
            {name: 'z14', pict: z14},
            {name: 'z15', pict: z15},
            {name: 'z16', pict: z16},
            // {name: 'z17', pict: z17},
            // {name: 'z18', pict: z18},
        ]
    
        const ourWorks = workElements.map(e=><div className='ourWorks-workWrapper' key={e.name}
         ><div className= 'ourWorks-workWrapper-work' style={{backgroundImage:`url(${e.pict})`, width:'10vw', height:'10vh'}}></div></div>)


    return (
        <div className="OurWorksPage pageWrapper">
            <div className="pageContentRight">
                <h2>Nasze Realizacje</h2>
                <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
                     laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi 
                     architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
                      sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione
                       voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit,
                        amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,
                         ut labore  </p>
                         <div className='ourWorks'>{ourWorks}</div>
            </div>
        </div>
        );
}
 
export default OurWorks;