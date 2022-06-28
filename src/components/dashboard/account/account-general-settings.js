import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Switch,
  TextField,
  Typography
} from '@mui/material';
import { UserCircle as UserCircleIcon } from '../../../icons/user-circle';
const initialState = {
  user: null
};
import { useReducer,useEffect } from 'react';
import firebase from '../../../lib/firebase';


const reducer = (state, action) => {
  if (action.type === 'AUTH_STATE_CHANGED') {
    const { isAuthenticated, user } = action.payload;

    return user;
  }

  return state;
};
export const AccountGeneralSettings = () => {
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  const user = {
    avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
    name: 'Anika Visser'
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  

  useEffect(() => firebase.auth().onAuthStateChanged((user) => {
    if (user) {

      sessionStorage.setItem("userId", user.uid);
      sessionStorage.setItem("userEmail", user.email);

      // Here you should extract the complete user profile to make it available in your entire app.
      // The auth state only provides basic information.
      dispatch({
        type: 'AUTH_STATE_CHANGED',
        payload: {
          isAuthenticated: true,
          user: {
            id: user.uid,
            avatar: user.photoURL,
            email: user.email,
            name: user.displayName,
            plan: 'Premium'
          }
        }
      });
    } else {
      dispatch({
        type: 'AUTH_STATE_CHANGED',
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    }
  }), [dispatch]);
  
  console.log(state)
 
  return (
    <Box
      sx={{ mt: 4 }}
      {...state}>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Typography variant="h6">
                Basic details
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Avatar
                  src={state.avatar}
                  sx={{
                    height: 64,
                    mr: 2,
                    width: 64
                  }}
                >
                  <UserCircleIcon fontSize="small" />
                </Avatar>
                <Button>
                  Change
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  mt: 3,
                  alignItems: 'center'
                }}
              >
                <TextField
                  label={state.name}
                  size="small"
                  sx={{
                    flexGrow: 1,
                    mr: 3
                  }}
                />
                <Button>
                  Save
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  mt: 3,
                  alignItems: 'center'
                }}
              >
                <TextField
                  defaultValue={state.email}
                  disabled
                  label={state.email}
                  required
                  size="small"
                  sx={{
                    flexGrow: 1,
                    mr: 3,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderStyle: 'dashed'
                    }
                  }}
                />
                <Button>
                  Edit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Typography variant="h6">
                Public profile
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              sm={12}
              xs={12}
            >
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  mb: 3
                }}
              >
                <div>
                  <Typography variant="subtitle1">
                    Make Contact Info Public
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Means that anyone viewing your profile will be able to see your contacts
                    details.
                  </Typography>
                </div>
                <Switch />
              </Box>
              <Divider />
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                  mt: 3
                }}
              >
                <div>
                  <Typography variant="subtitle1">
                    Available to hire
                  </Typography>
                  <Typography
                    color="textSecondary"
                    sx={{ mt: 1 }}
                    variant="body2"
                  >
                    Toggling this will let your teammates know that you are available for
                    acquiring new projects.
                  </Typography>
                </div>
                <Switch defaultChecked />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <Typography variant="h6">
                Delete Account
              </Typography>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <Typography
                sx={{ mb: 3 }}
                variant="subtitle1"
              >
                Delete your account and all of your source data. This is irreversible.
              </Typography>
              <Button
                color="error"
                variant="outlined"
              >
                Delete account
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
