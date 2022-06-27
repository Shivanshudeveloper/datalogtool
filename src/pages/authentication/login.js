import { useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Card, Container, Divider, Link, Typography } from '@mui/material';
import { GuestGuard } from '../../components/authentication/guest-guard';
import { AuthBanner } from '../../components/authentication/auth-banner';
import { AmplifyLogin } from '../../components/authentication/amplify-login';
import { Auth0Login } from '../../components/authentication/auth0-login';
import { FirebaseLogin } from '../../components/authentication/firebase-login';
import { JWTLogin } from '../../components/authentication/jwt-login';
import { Logo } from '../../components/logo';
import { useAuth } from '../../hooks/use-auth';
import { gtm } from '../../lib/gtm';
import axios from 'axios'

const platformIcons = {
  Amplify: '/static/icons/amplify.svg',
  Auth0: '/static/icons/auth0.svg',
  Firebase: '/static/icons/firebase.svg',
  JWT: '/static/icons/jwt.svg'
};

const Login = () => {
  const router = useRouter();
  const { platform } = useAuth();
  const { disableGuard } = router.query;

  useEffect(() => {
    getUserInfo();
    gtm.push({ event: 'page_view' });
  }, []);

  const getUserInfo = async () => {
    
    const res = await axios.get('https://geolocation-db.com/json/')

    var ipsavedata = window.localStorage.getItem("ipaddress");

    if (!ipsavedata) {
      window.localStorage.setItem("ipaddress", res.data.IPv4);

      const resultUser = await axios.get(`https://ipinfo.io/${res.data.IPv4}?token=ced5ed49b1fe42`);
      console.log(resultUser)
      var timedate = new Date(Date.now());

      var data = {
        Country: resultUser.data.country,
        State: resultUser.data.region,
        City: resultUser.data.city,
        IP: resultUser.data.ip,
        Location: resultUser.data.loc,
        Organization: resultUser.data.org,
        Postal: resultUser.data.postal,
        Timezone: resultUser.data.timezone,
        Time: timedate
      }
      axios.post('https://sheet.best/api/sheets/d761b06d-aa48-4bce-a247-82b1b456dade', data).then((res) => {
        console.log(res);
      })
    } else {
      console.log(ipsavedata);
    }
  }

  return (
    <>
      <Head>
        <title>
          Login
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            py: {
              xs: '60px',
              md: '120px'
            }
          }}
        >
          <Card
            elevation={16}
            sx={{ p: 4 }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <NextLink
                href="/"
                passHref
              >
                <a>
                  <Logo
                    sx={{
                      height: 40,
                      width: 40
                    }}
                  />
                </a>
              </NextLink>
              <Typography variant="h4">
                Log in
              </Typography>
              <Typography
                color="textSecondary"
                sx={{ mt: 2 }}
                variant="body2"
              >
                Sign in on the internal platform
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3
              }}
            >
              {/* {platform === 'Amplify' && <AmplifyLogin />}
              {platform === 'Auth0' && <Auth0Login />}
              {platform === 'Firebase' && <FirebaseLogin />}
              {platform === 'JWT' && <JWTLogin />} */}
              <FirebaseLogin />
            </Box>
            <Divider sx={{ my: 3 }} />
            {/* <NextLink
              href={disableGuard
                ? `/authentication/register?disableGuard=${disableGuard}`
                : '/authentication/register'}
              passHref
            >
              <Link
                color="textSecondary"
                variant="body2"
              >
                Create new account
              </Link>
            </NextLink> */}
            {platform === 'Amplify' && (
              <NextLink
                href={disableGuard
                  ? `/authentication/password-recovery?disableGuard=${disableGuard}`
                  : '/authentication/password-recovery'}
                passHref
              >
                <Link
                  color="textSecondary"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  Forgot password
                </Link>
              </NextLink>
            )}
          </Card>
        </Container>
      </Box>
    </>
  );
};

Login.getLayout = (page) => (
  <GuestGuard>
    {page}
  </GuestGuard>
);


export default Login;
