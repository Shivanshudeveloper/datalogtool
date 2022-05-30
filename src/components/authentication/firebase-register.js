import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from '../../hooks/use-auth';
import { useMounted } from '../../hooks/use-mounted';

import { auth } from "../../Firebase/index";


export const FirebaseRegister = (props) => {
  const isMounted = useMounted();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      policy: true,
      submit: null
    },
    validationSchema: Yup.object({
      fullname: Yup
        .string()
        .max(255)
        .required('Full Name is required'),
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .min(7)
        .max(255)
        .required('Password is required'),
      policy: Yup
        .boolean()
        .oneOf([true], 'This field must be checked')
    }),
    onSubmit: async (values, helpers) => {
      try {
        var result = await auth.createUserWithEmailAndPassword(values.email, values.password);
        var user = result.user;
        user
          .updateProfile({
            photoURL:
              "https://kittyinpink.co.uk/wp-content/uploads/2016/12/facebook-default-photo-male_1-1.jpg",
            displayName: values.fullname,
          })
          .then(() => {
            if (isMounted()) {
              const returnUrl = router.query.returnUrl || '/dashboard';
              router.push(returnUrl);
            }
          })
          .catch((err) => console.log(err));
        
      } catch (err) {
        console.error(err);

        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: err.message });
          helpers.setSubmitting(false);
        }
      }
    }
  });

  return (
    <div {...props}>
      <form
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <TextField
          error={Boolean(formik.touched.fullname && formik.errors.fullname)}
          fullWidth
          helperText={formik.touched.fullname && formik.errors.fullname}
          label="Full Name"
          margin="normal"
          name="fullname"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="text"
          value={formik.values.fullname}
        />
        <TextField
          error={Boolean(formik.touched.email && formik.errors.email)}
          fullWidth
          helperText={formik.touched.email && formik.errors.email}
          label="Email Address"
          margin="normal"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="email"
          value={formik.values.email}
        />
        <TextField
          error={Boolean(formik.touched.password && formik.errors.password)}
          fullWidth
          helperText={formik.touched.password && formik.errors.password}
          label="Password"
          margin="normal"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="password"
          value={formik.values.password}
        />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            ml: -1,
            mt: 2
          }}
        >
          <Checkbox
            checked={formik.values.policy}
            name="policy"
            onChange={formik.handleChange}
          />
          <Typography
            color="textSecondary"
            variant="body2"
          >
            I have read the
            {' '}
            <Link
              component="a"
              href="#"
            >
              Terms and Conditions
            </Link>
          </Typography>
        </Box>
        {Boolean(formik.touched.policy && formik.errors.policy) && (
          <FormHelperText error>
            {formik.errors.policy}
          </FormHelperText>
        )}
        {formik.errors.submit && (
          <Box sx={{ mt: 3 }}>
            <FormHelperText error>
              {formik.errors.submit}
            </FormHelperText>
          </Box>
        )}
        <Box sx={{ mt: 2 }}>
          <Button
            disabled={formik.isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Register
          </Button>
        </Box>
      </form>
    </div>
  );
};
