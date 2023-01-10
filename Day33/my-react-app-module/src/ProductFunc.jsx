
import { Rating } from 'react-simple-star-rating'
import { useState } from 'react'

export default function ProductFunc(props) {

    const [votes, setVotes] = useState(props.votes)
    const [stars, setStars] = useState(props.stars)

    function handlerUpVote(props) {

        setVotes(votes + 1)        
        // console.log(props.id)
        // const foundProduct = products.filter(product => {
        //     if (product.id == props.id) {
        //         return product
        //     }

        // })

        // console.log(foundProduct[0].votes)
        setStars(stars + 1)

        if(stars>5) {
            setStars = 0
        }

    }


    return (
        <div className='item'>
            <div className="image thumbnail rounded">
                <img src={props.productImageUrl} className="thumbnail rounded" />
            </div>
            <div className="description-container">
                <div className="description">
                    <div className="rank">
                        <a onClick={() => { handlerUpVote(props) }}>
                            <i class="bi bi-caret-up-fill"></i>
                            <p>{votes}</p>
                        </a>
                    </div>
                    <p>{props.title}</p>
                    <p>{props.description}</p>
                    <div className="Submit">
                        <p>Submitted by:</p>
                        <Rating
                          initialValue={stars}
                        />
                        <img src={props.submitterAvatarUrl} alt="" className="profile" />

                    </div>


                </div>

            </div>
        </div>
    )
}

