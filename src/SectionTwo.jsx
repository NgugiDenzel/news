import RetroPC from './assets/images/image-retro-pcs.jpg'
import laptops from './assets/images/image-top-laptops.jpg'
import game from './assets/images/image-gaming-growth.jpg'

function SectionTwo(){
    


    return(
    
  
        <div className="grid md:grid-cols-3 gap-1">
            <div className="flex">
                <div className='basis-1/3 mr-6'>
                <img src={RetroPC} />
                </div>
                <div className='basis-2/3'>
                <p className='text-4xl font-bold'>01</p>
                <br/>
                <h1 className='text-2xl font-bold'>Reviving Retro PCs</h1>
                <br/>
                <p>What happens when old Pcs are given modern upgrades</p>
                </div>
                

            </div>
            <div className="flex">
                <div className='basis-1/3 mr-6'>
                <img src={laptops} />
                </div>
                <div className='basis-2/3'>
                <p className='text-4xl font-bold'>02</p>
                <br/>
                <h1 className='text-2xl font-bold'>Top 10 Laptops of 2022</h1>

                <p>Our best piecks for various needs and budget</p>
                </div>
                

            </div>
            <div className="flex">
                <div className='basis-1/3 mr-5'>
                <img src={game} />
                </div>
                <div className='basis-2/3'>
                <p className='text-4xl font-bold'>03</p>
                <br/>
                <h1 className='text-2xl font-bold'>The growth of Gaming</h1>
                <br/>
                <p>How the pandemic has sparked fresh opportunities</p>
                </div>
                

            </div>

        </div>
    )
}

export default SectionTwo;