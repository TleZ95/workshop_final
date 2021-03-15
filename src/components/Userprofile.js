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
            {result.map(user => (
                <>

                    <div align="center" style={{ background: "#242526", paddingTop: "50px", paddingBottom: "50px", marginBottom: "5px" }}>

                        <div class="profile" align="center">
                            <table style={{ width: "1000px" }}>
                                <tr>
                                    <th align="center">
                                        <div class="profile-image">
                                            <img src={user.profile_image.large} alt="" />
                                        </div>
                                    </th>
                                    <th style={{ paddingLeft: "100px", paddingRight: "50px" }}>
                                        <div class="profile-stats" style={{ color: '#FFFFFF' }}>
                                            <span class="profile-stat-count">{user.total_photos}</span><br />
                                            posts
                                        </div>
                                    </th>
                                    <th style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                                        <div class="profile-stats" style={{ color: '#FFFFFF' }}>
                                            <span class="profile-stat-count">{user.total_likes}</span><br />
                                            followers
                                        </div>
                                    </th>
                                    <th style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                                        <div class="profile-stats" style={{ color: '#FFFFFF' }}>
                                            <span class="profile-stat-count">{user.total_photos}</span><br />
                                            following
                                        </div>
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="1" align="center">
                                        <h4 class="profile-user-name" style={{ color: '#FFFFFF' }}>{user.username}</h4>
                                    </td>
                                    <td colspan="3" style={{ paddingLeft: "100px" }}>
                                        <div class="profile-bio" style={{ color: "#FFFFFF" }}>
                                            <span class="profile-real-name"><b>{user.first_name}{" "}{user.last_name}</b></span> {user.bio}
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