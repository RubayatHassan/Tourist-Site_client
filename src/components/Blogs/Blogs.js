import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>Difference between authorization and authentication?</h1>
                <br></br>
                <p>So, what is the difference between authentication and authorization? Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.

                    In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
            </div>
            <div>
                <h1>
                    Why are you using firebase? What other options do you have to implement authentication?
                </h1>
                <p>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers such as Google Sign-in and Facebook Login. This tutorial gets you started with Firebase Authentication by showing you how to add email address and password sign-in to your app.
                </p>
            </div>
            <div>
                <h1>
                    What other services does firebase provide other than authentication?
                </h1>
                <p>
                    Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                    Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
                </p>
            </div>
        </div>
    );
};

export default Blogs;