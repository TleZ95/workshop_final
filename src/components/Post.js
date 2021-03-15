import React from 'react'
import { BsFillChatDotsFill, BsFillHeartFill } from "react-icons/bs";


function Post({ results }) {
    let photo = [];
    if (results.data) {
        console.log(results.data);
        photo = results.data.results || [];
        console.log(photo);
    }
    return (
        <div className="gallery">

            {photo.map((item) => (
                <section className="photo" key={item.id}  >
                    <a href={"/UserProfile/" + item.user.username} style={{ textDecoration: "none" }}>
                        <header className="photo__header">
                            <div className="photo__header-column">
                                <img className="photo__avatar" src={item.user.profile_image.medium} />
                            </div>
                            <div className="photo__header-column">
                                <span className="photo__username">{item.user.first_name}</span>
                            </div>
                        </header>
                    </a>
                    <div className="photo__file-container">
                        <img className="photo__file" src={item.urls.small} />
                    </div>
                    <div className="photo__info">
                        <div className="photo__icons">
                            <span className="photo__icon">
                                <BsFillHeartFill />
                            </span>
                            <span className="photo__icon">
                                <BsFillChatDotsFill />
                            </span>
                        </div>
                        <span className="photo__likes">{item.user.total_likes} likes</span>
                        <div className="photo__comments">
                            <div className="photo__comment">{item.alt_description}
                            </div>
                        </div>
                    </div>
                </section>

            ))}
        </div>
    )
}

export default Post

