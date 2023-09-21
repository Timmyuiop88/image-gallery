"use client";
import Image from "next/image";
import {  signOut } from "firebase/auth";
import {
  Box,
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,


  
} from "@chakra-ui/react";
import { BsSearch,BsChevronDoubleDown } from "react-icons/bs";
import { BiFilter,BiUserCircle,BiExit } from "react-icons/bi";
import { auth } from "./firebase";

import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

import Gallery from "react-photo-gallery";

import moveItem from "array-move-item";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "./components/image";
import { useState } from "react";
import "./globals.css";



const imgWithClick = { cursor: "pointer" };

const Photo = ({ index, onClick, photo, margin, direction, top, left}) => {

  const imgStyle = { margin: margin,};
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (

 <Image
  
  className="imgs"

    style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
    {...photo}
    onClick={onClick ? handleClick : null}
    alt="img"
  />

    
   
  );
};



/* popout the browser and maximize to see more rows! -> */
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));

export default function Home() {

  const handleLogout = () => {               
    signOut(auth).then(() => {
    // Sign-out successful.
        router.push("/login");
        console.log("Signed out successfully")
    }).catch((error) => {
    // An error happened.
    });
}


const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState(photos);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(moveItem(items, oldIndex, newIndex));
  };
 

  const router = useRouter();
  const [isUserValid, setIsUserValid] = useState(false);


  useEffect(() => {
    const checkAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setIsUserValid(true);
          console.log("This is the logged in user", user);
        } else {
          console.log("no user found");
          router.push("/login");
        }
      });
    };

    checkAuth();
  }, []);

  if (isUserValid) {

  return (
<>

<Box 
h={'60px'}
w={'100%'}
bg={'#000d15'}

color={'white'}
display={'flex'}
justifyContent={'space-between'}
alignItems={'center'}
px={'20px'}
>

  <Box>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path></g></g>
</svg>
  </Box>
  <Box
  h={'auto'}
  w={'auto'}
  bg={'blue'}
  borderRadius={'10px'}
  >
<Menu

>
  <MenuButton as={Button}  rightIcon={<BsChevronDoubleDown/>} >
  <BiUserCircle/> user
  </MenuButton>
  <MenuList
  color='black'
  >
  
    <MenuItem rightIcon={<BiExit/>} onClick={handleLogout}>Logout</MenuItem>
  </MenuList>
</Menu>
  </Box>




</Box>
<Stack
w={'full'}
h={'auto'}
bg={'#0a1115'}
direction={['column','column','row','row']}
px={'20px'}
pt={'20px'}

>  <Box
w={'full'}
mb={'20px'}
>
  <Box
  w={['100%','100%','50%','50%']}

  h={'auto'}
  alignItems={'center'}
   display={'flex'}
  >
    <Heading
    fontSize={'24px'}
   color={'white'}
   fontWeight={'700'}
    >
      Hi Timilehin
   
    </Heading>
   
     <Image src='/hand.png' height='30' width='30' alt='no img'/>
  </Box>

  <Text
   fontSize={'16px'}
   color={'white'}
   fontWeight={'500'}
  >
      Welcome to the most trending Image Gallery
    </Text>
  </Box>
 
<Box
 alignItems={'center'}
 display={'flex'}
h={'auto'}
maxW={'3xl'}
w={['100%','100%','50%','50%']}
>
<InputGroup>
  <InputLeftElement>
     <BsSearch color="white" />
    </InputLeftElement>
    <Input color={'white'} bg={'#06202f'}  placeholder='Search image'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
     />
  
  </InputGroup>
  <IconButton bg={'none'} ml={'20px'} w={'50px'} aria-label='Filter Search' icon={<BiFilter color="'white" fontSize={'30px'}/>}  />
</Box>

    
    </Stack>
    <Stack
    w={'full'}
    h={'50px'}
pt={'10px'}
spacing={'10'}
    alignItems={'center'}
    direction={'row'}
    justifyContent={'center'}
    >
      <Button
       bg={'none'}
       color={'white'}
       border={'1px solid white'}
       borderRadius={'15px'}
       p={'2px'}
       w={'60px'}
       h={'30px'}
       onClick={(e) => setSearchTerm('bikes')}
      >
        Bikes
      </Button>
      <Button
        bg={'none'}
        color={'white'}
        border={'1px solid white'}
        borderRadius={'15px'}
        p={'2px'}
        w={'60px'}
        h={'30px'}
        onClick={(e) => setSearchTerm('cars')}
      >
        Cars
      </Button>
      <Button
      bg={'none'}
      color={'white'}
      border={'1px solid white'}
      borderRadius={'15px'}
      p={'2px'}
      w={'60px'}
      h={'30px'}
      onClick={(e) => setSearchTerm('nature')}
      >
        Nature
      </Button>

    </Stack>
    <Box
    px={'10%'}
   bg={'#0a1115'}
    pt={'20px'}
    h={'auto'}
    w={'full'}
    pb={'50px'}
    >
  <SortableGallery
  items={items.filter(item => item.tag && item.tag.toLowerCase().includes(searchTerm.toLowerCase()))}
  onSortEnd={onSortEnd}
  axis={"xy"}
/>
    </Box>
</>
  )}
}
