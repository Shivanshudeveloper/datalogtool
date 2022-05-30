export const amplifyConfig = {
  aws_project_region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id: process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_WEB_CLIENT_ID
};

export const auth0Config = {
  client_id: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN
};

export const firebaseConfig = {
  apiKey: "AIzaSyCLtrssCDvGvzYSIwzwjpFrXOOJFn4ZLys",
  authDomain: "messianfox-fcd33.firebaseapp.com",
  projectId: "messianfox-fcd33",
  storageBucket: "messianfox-fcd33.appspot.com",
  messagingSenderId: "622566633414",
  appId: "1:622566633414:web:6d6ac15f5530a62c02ccc7",
  measurementId: "G-TKSSTTVKNB"
};

export const gtmConfig = {
  containerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID
};
