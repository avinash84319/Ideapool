import '../css/Sidebar.css';


const Sidebar = (prop) => {

    let categories=["science","physics","coding","random"]

    const Catlist=(prop)=>{
        return prop.categories.map((cat)=>{
            return <div className='categori-radio'>
                <input type='checkbox' id={cat} key={cat} value={cat} name={cat}/>
                <label for={cat} className='categori-label'>{cat}</label>
            </div>
        })
    }
    
    return <div className='sidebar-div'>
        <div className='sidebar-heading-div'>
            <h1 className='sidebar-heading'>Filters</h1>
        </div>
        <hr />
        <div className='sidebar-categories'>
            <h1 className='categori-heading'>Categories</h1>
            <input type='text' placeholder='Search' className='categori-search'></input>
            <Catlist categories={categories} />
        </div>
        <hr />
        <div className='sidebar-sliders'>
        <h1 className='sliders-heading'>Parameters</h1>
        
        </div>
    </div>
}

export default Sidebar;