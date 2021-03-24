import axios from 'axios'
export const fetchData = (fn)=>{
    axios.get('http://a.jspang.com/jestTestw.json').then((res)=>{
        fn(res);
    })
}