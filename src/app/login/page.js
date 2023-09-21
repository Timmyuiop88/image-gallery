"use client";
import { signIn } from 'next-auth/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { auth } from '../firebase';
import {
  Box,
  Spinner,
  Alert,
  AlertIcon,
  Stack,
  Text,
  Show,
  Center,
  Hide,
  Heading,
  HStack,
  Button,
  ButtonGroup,
  VStack,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Input,
  CheckIcon,
  IconButton,
  Skeleton,
  Divider,
  AbsoluteCenter,
  InputRightElement,
  Link

  
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc"; 
import { useState } from 'react'
export default function Login(){
    const [errorMsg, setErrorMsg] = useState(null);
    const router = useRouter();
    const [loading, setLoading] = useState(false);


    async function login() {
        setErrorMsg(null);
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          router.push('/')
        })
        .catch((error) => {
            setLoading(false);
            setErrorMsg(error.message);
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      
    }


    const initialState = {
        email: "",
        password: "",
      };
      const [form, setForm] = useState(initialState);
    
      const { email, password } = form;
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    return(
        <>
        <Center
        w={'full'}
        h={'100vh'}
        bg={'#000e15'}
        >
              <Box mt={'-50px'} p={[5,5,10,10]} w={["full","410px","410px","410px"]} h={"auto"}>
                <Box w={'full'}
                display={'flex'}
                >
               <Heading
               display={'flex'}
                 fontSize={"30px"}
                 fontWeight={"700"}
                 letterSpacing={"-0.72px"}
                 color={"#4c60fc"}
                 mr={'20px'}
               >
                 Weclome Back 
 
               </Heading>
              
               <Image src='/hand.png' height='30' width='30' alt='no img'/>
               </Box>
               <Text
               color={'white'}
                 fontSize={"16px"}
                 fontWeight={"400"}
                 letterSpacing={"-0.72px"}
               >
                 Enter your email and password to login!
               </Text>
               <Button
           
                 my={"30px"}
                 border={"1px solid #DAD7D6"}
                 h={"50px"}
                 w={"full"}
                 borderRadius={"16px"}
                 color={"#000000"}
                 bg={"#F4F7FE"}
                  leftIcon={<FcGoogle />}
               >
                 Login with Google
               </Button>
 
               <Box position="relative" mb={"30px"}>
                 <Divider />
                 <AbsoluteCenter
                   bg={"#000e15"}
                 
                   fontSize={"14px"}
                   fontWeight={"500"}
                   letterSpacing={"-0.72px"}
                   color={"white"}
                   px="4"
                 >
                   or
                 </AbsoluteCenter>
               </Box>
 
               <VStack spacing={"20px"} justifyContent={"flex-end"}>
               <Box w={"full"} display={"block"}>
                 <Text
                 color={'#ffffff'}
                 fontSize={'14px'}
            
                 lineHeight={'100%'}
                 fontWeight={'600'}
                 letterSpacing={'-0.28px'}
                 mb={'10px'}
                 >
                 Email*
                 </Text>
                 <InputGroup pl={0}>
                   <InputLeftElement
                     pointerEvents="none"
                     color="gray.300"
                     fontSize={"1.2em"}
                   />
                   <Input
                    name="email"
                    value={email}
                onChange={handleChange}
                     type="email"
                     borderRadius={"16px"}
                     h={"50px"}
                     pl={"24px"}
                     placeholder="mail@simmmple.com"
                   />
                   <InputRightElement>
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       width="24"
                       height="24"
                       viewBox="0 0 24 24"
                       fill="none"
                     >
                       <path
                         d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                         stroke="#DAD7D6"
                         strokeWidth="1.5"
                         strokeMiterlimit="10"
                         strokeLinecap="round"
                         stroke-linejoin="round"
                       />
                       <path
                         d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                         stroke="#DAD7D6"
                         strokeWidth="1.5"
                         strokeMiterlimit="10"
                         strokeLinecap="round"
                         stroke-linejoin="round"
                       />
                     </svg>
                   </InputRightElement>
                 </InputGroup>
                 </Box>
                 <Box w={"full"} display={"block"}>
                 <Text
                 color={'#ffffff'}
                 fontSize={'14px'}
            
                 lineHeight={'100%'}
                 fontWeight={'600'}
                 letterSpacing={'-0.28px'}
                 mb={'10px'}
                 >
             Password*
                 </Text>
                   <InputGroup display={"block"} pl={0}>
                     <Input
                     name="password"
                         value={password}
                       onChange={handleChange}
                       type="password"
                       borderRadius={"16px"}
                       h={"50px"}
                       pl={"24px"}
                       placeholder="Min. 8 characters"
                     />
                     <InputRightElement>
                       <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="20"
                         height="20"
                         viewBox="0 0 20 20"
                         fill="none"
                       >
                         <g clipPath="url(#clip0_431_4090)">
                           <path
                             d="M9.99998 5.41667C13.1583 5.41667 15.975 7.19167 17.35 10C15.975 12.8083 13.1666 14.5833 9.99998 14.5833C6.83331 14.5833 4.02498 12.8083 2.64998 10C4.02498 7.19167 6.84165 5.41667 9.99998 5.41667ZM9.99998 3.75C5.83331 3.75 2.27498 6.34167 0.833313 10C2.27498 13.6583 5.83331 16.25 9.99998 16.25C14.1666 16.25 17.725 13.6583 19.1666 10C17.725 6.34167 14.1666 3.75 9.99998 3.75ZM9.99998 7.91667C11.15 7.91667 12.0833 8.85 12.0833 10C12.0833 11.15 11.15 12.0833 9.99998 12.0833C8.84998 12.0833 7.91665 11.15 7.91665 10C7.91665 8.85 8.84998 7.91667 9.99998 7.91667ZM9.99998 6.25C7.93331 6.25 6.24998 7.93333 6.24998 10C6.24998 12.0667 7.93331 13.75 9.99998 13.75C12.0666 13.75 13.75 12.0667 13.75 10C13.75 7.93333 12.0666 6.25 9.99998 6.25Z"
                             fill="#DAD7D6"
                           />
                         </g>
                         <defs>
                           <clipPath id="clip0_431_4090">
                             <rect width="20" height="20" fill="white" />
                           </clipPath>
                         </defs>
                       </svg>
                     </InputRightElement>
                   </InputGroup>
                 </Box>
                 {errorMsg && <Alert status='error'>
 <AlertIcon />
 {errorMsg}
</Alert>}
                 <Button

onClick={() => login()}
disabled={!email || !password}
             _hover={{ bg: "#4c60fc" }}
              fontWeight={'700'}
                 border={"1px solid #DAD7D6"}
                 h={"50px"}
                 w={"full"}
                 borderRadius={"16px"}
                 color={"#fff"}
                 bg={"#4c60fc"}
            
                 fontSize={'14px'}
              
               >
    {loading ? <Spinner /> : 'Login'}
               </Button>
               <Text
               color={'white'}
                 fontSize={"16px"}
                 fontWeight={"400"}
                 letterSpacing={"-0.72px"}
               >
                 Not registered yet? <Link color={'#4c60fc'} href='/signup'>Create an Account</Link>
               </Text>
               </VStack>
             </Box>

        </Center>
        </>
    )
}