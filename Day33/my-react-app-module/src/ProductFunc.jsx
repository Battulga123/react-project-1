

function ProductFunc(props) {

    function handleUpVote (props){
        console.log('upvoted')
        console.log(props.id)
    }

    return (
        <div className='item'>
            <div className="image thumbnail rounded">
                <img src={props.productImageUrl} className="thumbnail rounded" />
            </div>
            <div className="description-container">
                <div className="description">
                    <div className="rank">

                        <a onClick={ ()=>{handleUpVote(props)}}> 
                        <i class="bi bi-caret-up-fill"></i>
                        </a>
                        <p>{props.votes}</p>
                    </div>
                    <p>{props.title}</p>
                    <p>{props.description}</p>
                    <div className="Submit">
                        <p>Submitted by:</p>
                        <img src={props.submitterAvatarUrl} alt="" className="profile" />

                    </div>


                </div>

            </div>
        </div>
    )

}

export default ProductFunc