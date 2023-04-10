import { ChakraProvider } from '@chakra-ui/react'
const Layout = ({children}) => {
    return (
        <ChakraProvider>
            <main>
                {children}
            </main>
        </ChakraProvider>
    )
}
export default Layout;