import axios from 'axios';
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
                'Authorization' : 'Bearer cdc15d4ecb72ebee341b651c0ddfe77dc7b686f4'
            }
        }).then((res) => {
            setNewLink(res.data?.link)

        }).catch((err) => {
            console.log(err)
        })

    }
    console.log(newLink)
    return (
        <div>
            <form >
                <input type="text" ref={data}/>
                <button onClick={Submitlink}>Submit</button>
            </form>
            {newLink}
        </div>
    )
}
export default Url;