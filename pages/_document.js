import Document,{Head,Main,NextScript} from "next/document";
export default class MyDocument extends Document{
    render(){
        return(
<html>
<Head>
    <meta name="description" content="A meta tag"/>
    <meta charSet="utf-8"/>
    <meta name="robot" content="no index no program"/>
 
</Head>
<body>
<Main/>
<NextScript/>
</body>
</html>
        )
    }

}