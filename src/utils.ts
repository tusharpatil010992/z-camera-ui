import axios from 'axios';

export const videoFormatOptions = ["4KP23.98 (Low Noise)","4KP29.97 (Low Noise)","4KP23.98","4KP29.97","4KP59.94","4K 2.4:1P23.98","4K 2.4:1P29.97","4K 	2.4:1P59.94","C4K 2.4:1P23.98","C4K 2.4:1P29.97","C4K 2.4:1P59.94","3696x2772P23.98 (Low Noise)","3696x2772P29.97 (Low Noise)","3696x2772P23.98","3696x2772P29.97","3312x2760P23.98","3312x2760P29.97","1080P23.98","1080P29.97","1080P59.94","S16 23.98","S16 29.97","S16 59.94","S16 16:9 23.98","S16 16:9 29.97","S16 16:9 59.94","4KP25 (Low Noise)","4KP25","4KP50","4K 2.4:1P25","4K 2.4:1P50","C4K 2.4:1P25","C4K 2.4:1P50","3696x2772P25 (Low Noise)","3696x2772P25","3312x2760P25","1080P25","1080P50","S16 25","S16 50","S16 16:9 	25","S16 16:9 50","4KP24 (Low Noise)","4K 2.4:1P24","4KP24","C4K 2.4:1P24","3696x2772P24 (Low Noise)","3696x2772P24","3312x2760P24","1080P24","S16 24","S16 16:9 24"];
export const frameRateOptions = ["Off","1","5","10","15","20","21","22","23","24","25","30","45","48","50","60","72","90","100","120","240"];

export const getEndpoint = (baseUrl: string, uriSegment: string) => {
    const base = `http://${baseUrl}`;

    const endpoint:any = {
        session : "/ctrl/session",
    }

    return base+endpoint[uriSegment]

}

export const apiCall = async (method: "GET" | "POST" , url:string, data?:any) => {
  return await axios({
      method: method,
      url: url,
      data: data || null, 
    });
};

const capitalizeFirst = (str:string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getHeadingName = (rawHeadingName: string) => {
    const arrStr = rawHeadingName.split(/(\d+)/);
    return  `${capitalizeFirst(arrStr[0])} ${arrStr[1]}`
}