import React, {useEffect, useState} from "react";
import axios from "axios";

function getVersionFromTag(tag: string) {
   return tag.slice(1);
}

 async function getLatestTag(): Promise<string> {
   const res = await axios.get(
       `https://api.github.com/repos/igoogolx/lux/releases/latest`
   );
    return  getVersionFromTag(res.data.tag_name as string)
}

function downloadRelease(os:string,tag:string){
   let url =""

   switch (os){
      case "windows":{
         url=`https://github.com/igoogolx/lux/releases/download/v${tag}/lux-${tag}+${tag}-windows-setup.exe`
         break
      }
   }
   window.open(url,"_self")

}

export default function Download(){
   const [latestTag,setLatestTag] = useState("")
   useEffect(()=>{
      getLatestTag().then(tag=>{
         setLatestTag(tag)
         console.log(tag)
      })
   },[])
   return <button onClick={()=>{
      downloadRelease("windows", latestTag)
   }}>Download</button>
}