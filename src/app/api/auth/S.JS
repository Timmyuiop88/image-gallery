import Providers from `next-auth/providers`
...
providers: [
  Providers.Credentials({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
    
    },
    async authorize(credentials, req) {
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)
      
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.push('/')
        return user
      })
      .catch((error) => {
          setLoading(false);
          setErrorMsg(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        return null
      });


      

      // If no error and we have user data, return it
     
        
      }
      // Return null if user data could not be retrieved
    
    }
  })
]
...