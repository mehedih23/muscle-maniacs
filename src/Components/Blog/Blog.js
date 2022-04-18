import './Blog.css'
import React from 'react'
import { Accordion } from 'react-bootstrap'

const Blog = () => {
    return (
        <div className='container my-3'>
            <div className='my-3'>
                <h2 style={{ backgroundColor: '#120E43' }} className='text-center text-light py-3 border rounded-top'>Have a great Journey In <span style={{ color: '#E8BD0D' }}>QNA</span></h2>
            </div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        <h3>Authorization :- </h3>
                        <p>Authorization is a dependability structure which is used to control user freedom or access levels. It used in system resources, including computer programs, files, services, data and application features. Authorization tools provide access control through centralized enforcement of access policy to a multi-user computer system.</p>
                        <h3>Authentication :- </h3>
                        <p>Authentication is the act of proving an claim, such as the recognition of a computer system user. In dissimillerity with identification, the act of indicating a person or thing's identity, authentication is the procedure of verifying that identity.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <p>Firebase is a system of the tech-giant company "GOOGLE". Firebase is use in Backend-service. Most of the All platform people use firebase. This is a userFriendly system. With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.</p>
                        <h3>Other Authentication Options : - </h3>
                        <p>
                            1. Cookie Based Authentication <br />
                            2. Token-based Authentication. <br />
                            3. OpenId <br />
                            4. SAML. <br />
                            5. Third party authentication - <br />
                            i.STYTCH <br />
                            ii.Ory <br />
                            iii.Frontegg <br />
                            iv.Authress <br />
                            v.OneLogin <br />
                            iv.Amazon Cognito <br />

                        </p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        <h3>Others Services : </h3>
                        <p>
                            <strong>Firebase Local Emulator</strong><br />
                            <strong>Firebase Realtime Database</strong><br />
                            <strong>Cloud Firestore</strong><br />
                            <strong>Cloud Storage for Firebase</strong><br />
                            <strong>Firebase Machine Learning</strong><br />
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Blog