import React, { useState, useEffect } from 'react'
import { Container, Card, CardBody, Button, Row, Col } from "reactstrap";
import axios from 'axios';
import Photolist from '../components/Photolist';



const UserProfile = ({ id }) => {
    // console.log(id)

    const clientId = "5Y3Spb6jijKahAOYJ3CqubjgBuvnCywtYxzvvQ91O-w";
    const [result, setResult] = useState([]);
    const [userImg, setUserImg] = useState([]);

    const userids = "https://api.unsplash.com/search/users?page=1&query=" + id + "&client_id=" + clientId;
    const imageurl = "https://api.unsplash.com/users/" + id + "/photos?page=1&query=&client_id=" + clientId;
    useEffect(() => {
        axios.get(userids).then((response) => {
            setResult(response.data.results);
        })
        axios.get(imageurl).then((response) => {
            setUserImg(response.data);
        })
    }, [id])

    return (

        <body class="body">
            {result.map(item => (
                <>

                    <div align="center" style={{ background: "#242526", paddingTop: "50px", paddingBottom: "50px", marginBottom: "5px" }}>

                        <div class="profile" align="center">
                            <table style={{ width: "1000px" }}>
                                <tr>
                                    <th align="center">
                                        <div className="outer circle">
                                            <img className="image" src={item.profile_image.large} alt=" " />
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </th>
                                    <th style={{ paddingLeft: "100px", paddingRight: "50px" }}>
                                        <div class="profile-stats" style={{ color: '#FFFFFF' }}>
                                            <span class="profile-stat-count">{item.total_photos}</span><br />
                                            posts
                                        </div>
                                    </th>
                                    <th style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                                        <div class="profile-stats" style={{ color: '#FFFFFF' }}>
                                            <span class="profile-stat-count">{item.total_likes}</span><br />
                                            followers
                                        </div>
                                    </th>
                                    <th style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                                        <div class="profile-stats" style={{ color: '#FFFFFF' }}>
                                            <span class="profile-stat-count">{item.total_photos}</span><br />
                                            following
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="1" align="center">
                                        <h4 class="profile-user-name" style={{ color: '#FFFFFF' }}>{item.username}</h4>
                                    </td>
                                    <td colspan="3" style={{ paddingLeft: "100px" }}>
                                        <div class="profile-bio" style={{ color: "#FFFFFF" }}>
                                            <span class="profile-real-name"><b>{item.first_name}{" "}{item.last_name}</b></span> {item.bio}
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            {/* <div class="profile-user-settings">

                                <button class="btn profile-settings-btn" aria-label="profile settings">
                                    <i class="fas fa-cog" aria-hidden="true">
                                        ทดสอ
                                    </i>
                                </button>

                            </div> */}

                        </div>

                    </div>

                </>
            ))}
            <div className="container">
                <Row>
                    {userImg.map(item => (
                        <Col md="4">
                            <Photolist list={item} />
                        </Col>
                    ))}
                </Row>
            </div>

        </body>

    )
}
export default UserProfile