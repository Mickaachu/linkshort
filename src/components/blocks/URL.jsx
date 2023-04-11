import axios from 'axios';
import copy from 'copy-to-clipboard';
import Image from 'next/image';
import { useRef, useState} from 'react';


const Url = () => {
    const biturl = 'https://api-ssl.bitly.com/v4/shorten';
    const data = useRef(null)
    const [newLink,setNewLink] = useState('');


    function Submitlink(e) {
        e.preventDefault()

        axios.post(biturl, {
            long_url : data.current.value
        }, { headers: {
                'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_APIKEY}`
            }
        }).then((res) => {
            setNewLink(res.data.link)

        }).catch((err) => {
            console.log(err)
        })

    }
    function copyclipboard(e) {
        e.preventDefault();
        copy(newLink)

    }
    console.log(newLink)
    return (
        <div>
            <form >
                <input type="text" ref={data}/>
                <button onClick={Submitlink}>Submit</button>
            </form>
            <div>
                <p >
                    {newLink}
                </p>
                <button onClick={copyclipboard}>
                    <Image src='/copy.png' width={100} height={100}/>
                </button>
            </div>
        </div>
    )
}
export default Url;